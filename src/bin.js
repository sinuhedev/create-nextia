#!/usr/bin/env node

/**
 * Copyright (c) 2026 Sinuhe Maceda https://sinuhe.dev
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/sinuhedev/nextia/create-nextia
 */

import {
  access,
  cp,
  mkdir,
  readFile,
  rename,
  writeFile
} from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import packageJson from '../package.json' with { type: 'json' }

const { version } = packageJson

const toPascalCase = (str) =>
  str
    .split(/[/_ -]+/)
    .filter(Boolean)
    .map(([first, ...rest]) => first.toUpperCase() + rest.join(''))
    .join('')

const getNextiaVersion = async () => {
  const res = await fetch(`https://registry.npmjs.org/nextia`)
  const data = await res.json()

  return data['dist-tags'].latest
}

async function createPage(name) {
  const dirName = `./src/pages/${name}`
  const pageName = `${toPascalCase(name)}Page`

  try {
    await mkdir(dirName)

    // index.jsx
    writeFile(
      `${dirName}/index.jsx`,
      `import { useFx } from 'nextia'
import functions from './functions'

export default function ${pageName}() {
    const { state, fx } = useFx(functions)

  return (
    <section>
      ${pageName}
    </section>
  )
}
`
    )

    // function.js
    writeFile(
      `${dirName}/functions.js`,
      `const initialState = {}

export default {
  initialState
}
`
    )
    console.info(`✔ Page "${pageName}" created at ${dirName}`)
  } catch (err) {
    console.error(`Failed to create page: ${err.message}`)
  }
}

async function createComponent(name) {
  const dirName = `./src/components/${name}`
  const componentName = toPascalCase(name)

  try {
    await mkdir(dirName)

    // index.jsx
    writeFile(
      `${dirName}/index.jsx`,
      `import { css } from 'nextia'
import './style.css'

export default function ${componentName}({ className, style }) {
  return (
    <article className={css('${componentName}', className)} style={style}>
      ${componentName}
    </article>
  )
}
`
    )

    // style.css
    writeFile(
      `${dirName}/style.css`,
      `.${componentName}  {
}
`
    )
    console.info(`✔ Component "${name}" created at ${dirName}`)
  } catch (err) {
    console.error(`Failed to create component: ${err.message}`)
  }
}

async function createProject(name) {
  const projectPath = `${process.cwd()}/${name}/`

  // Check project

  try {
    await access(projectPath)
    console.error(`The "${name}" already exists.`)
    return
  } catch {}

  const template = `${dirname(fileURLToPath(import.meta.url))}/../templates/vitejs`

  const mv = (fileName) =>
    rename(`${projectPath}_${fileName}`, `${projectPath}.${fileName}`)

  const replaceToken = async (filename, token, value) => {
    const content = await readFile(projectPath + filename, 'utf8')
    const updated = content.replaceAll(token, value)
    await writeFile(projectPath + filename, updated, 'utf8')
  }

  // Create new project

  try {
    await cp(template, projectPath, { recursive: true })

    await Promise.all([
      mv('env.dev'),
      mv('gitignore'),
      replaceToken('README.md', 'TEMPLATE', name),
      replaceToken('package.json', 'TEMPLATE', name),
      replaceToken('package.json', 'latest', await getNextiaVersion())
    ])
  } catch (err) {
    console.error(err)
  }
}

/**
 * main
 */

async function main() {
  const ARG1 = process.argv[2]
  const ARG2 = process.argv[3]

  switch (ARG1) {
    case 'page':
      if (ARG2) await createPage(ARG2)
      else console.warn('npm create nextia page <page-name>')
      break

    case 'component':
      if (ARG2) await createComponent(ARG2)
      else console.warn('npm create nextia component <ComponentName>')
      break

    default:
      if (ARG1) await createProject(ARG1)
      else {
        console.info(`nextia v${version}`)
        console.warn('npm create nextia <ProjectName>')
      }
      break
  }
}

main().catch((e) => {
  console.error(e)
})
