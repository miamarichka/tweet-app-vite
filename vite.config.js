import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  base: '/tweet-app/',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
})
