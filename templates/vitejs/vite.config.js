import { version } from './package.json'
import { execSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const CWD = process.cwd()
  const port = 3000

  return {
    server: {
      host: '0.0.0.0',
      port
    },

    preview: {
      port
    },

    base: '',
    envDir: CWD,
    root: CWD + '/src',
    publicDir: CWD + '/public',
    resolve: {
      alias: {
        assets: CWD + '/src/assets',
        components: CWD + '/src/components',
        containers: CWD + '/src/containers',
        services: CWD + '/src/services',
        theme: CWD + '/src/theme',
        utils: CWD + '/src/utils'
      }
    },

    build: {
      outDir: '../out',
      assetsDir: 'assets',
      emptyOutDir: true
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer
        ]
      }
    },

    plugins: [
      react(),
      {
        name: 'html',
        transformIndexHtml (html) {
          let gitHash = ''
          try {
            gitHash = execSync('git rev-parse --short HEAD 2> /dev/null').toString().trim()
          } catch (e) { }

          return html.replaceAll('%VERSION%', `version=${version}, env=${mode}, release-date=${new Date()}, git-hash=${gitHash}`)
        }
      },
      {
        name: 'svg',
        async transform (src, id) {
          let code = id.split('?')[0]
          const type = id.split('?')[1]

          if (type === 'raw') {
            code = await readFile(code, 'utf8')
            code = code
              .replace(/\s{2,}/g, ' ') // multiple spaces to single space
              .replace(/\n/g, '') // remove newlines
              .replace(/\t/g, '') // remove tabs
              .replace(/>\s+</g, '><') // remove space between tags
              .trim()
            return `export default ${JSON.stringify(code)};`
          }
        }
      }
    ],

    test: {
      root: './',
      watch: false,
      environment: 'jsdom',
      include: ['test/**/*.js', 'test/**/*.jsx'],
      coverage: {
        all: true,
        reportsDirectory: '.coverage',
        include: ['src/**/*.js', 'src/**/*.jsx'],
        exclude: [
          'src/index.jsx',
          'src/assets/i18n'
        ]
      }
    }

  }
})
