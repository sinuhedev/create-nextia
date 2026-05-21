import { execSync } from 'node:child_process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { version } from './package.json'

export default defineConfig(({ mode }) => {
  const CWD = process.cwd()

  return {
    server: {
      host: '0.0.0.0',
      port: 3000
    },

    root: `src`,
    envDir: CWD,
    envPrefix: 'PUBLIC_',
    publicDir: `${CWD}/public`,

    resolve: {
      alias: {
        assets: `${CWD}/src/assets`,
        components: `${CWD}/src/components`,
        services: `${CWD}/src/services`,
        utils: `${CWD}/src/utils`
      }
    },

    build: {
      outDir: '../out',
      emptyOutDir: true
    },

    plugins: [
      react(),
      {
        name: 'html',
        transformIndexHtml(html) {
          let gitHash = 'unknown'
          try {
            gitHash = execSync('git rev-parse --short HEAD').toString().trim()
          } catch {}

          return html.replaceAll(
            '%VERSION%',
            `version=${version}, env=${mode}, date=${new Date().toISOString()}, commit=${gitHash}`
          )
        }
      }
    ]
  }
})
