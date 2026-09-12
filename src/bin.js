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
import { stdin as input, stdout as output } from 'node:process'
import readline from 'node:readline/promises'
import { fileURLToPath } from 'node:url'
import pkg from '../package.json' with { type: 'json' }

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

async function typeProject() {
  const rl = readline.createInterface({ input, output })
  const options = ['vitejs', 'bunjs']

  console.log(options.map((op, i) => `  ${i + 1}. ${op}`).join('\n'))

  try {
    let reponse = await rl.question('Option: ')
    const index = Number(reponse.trim())

    if (Number.isInteger(index) && index >= 1 && index <= options.length)
      reponse = options[index - 1]
    else reponse = null

    return reponse
  } catch (err) {
    if (err.code === 'ABORT_ERR') {
      process.exit(0)
    }
    throw err
  } finally {
    rl.close()
  }
}

async function createProject(name) {
  // Type project
  const type = await typeProject()
  if (!type) return

  // Check project

  const projectPath = `${process.cwd()}/${name}/`
  try {
    await access(projectPath)
    console.error(`The "${name}" already exists.`)
    return
  } catch {}

  const template = `${dirname(fileURLToPath(import.meta.url))}/../templates/${type}`

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
      mv('env.development'),
      mv('gitignore'),
      replaceToken('README.md', 'TEMPLATE', name),
      replaceToken('package.json', 'TEMPLATE', name),
      replaceToken('package.json', 'latest', await getNextiaVersion())
    ])
  } catch (err) {
    console.error(err)
  }

  console.info('Done!')
}

/**
 * main
 */
const command = process.argv[2]
const name = process.argv[3]

switch (command) {
  case 'page':
    if (name) await createPage(name)
    else console.warn('npm create nextia page <page-name>')
    break

  case 'component':
    if (name) await createComponent(name)
    else console.warn('npm create nextia component <ComponentName>')
    break

  default:
    if (command) await createProject(command)
    else
      console.info(`
          nextia v${pkg.version}

          npm create nextia <ProjectName>
          npm create nextia page <page-name>
          npm create nextia component <ComponentName>
        `)
    break
}
