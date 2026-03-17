import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'porto-gnc'
const githubPagesBase = `/${repositoryName}/`

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase : '/',
})
