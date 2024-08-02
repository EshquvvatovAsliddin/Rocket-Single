import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const configure = () => {
  return {
    name: 'my-plugin',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        console.log('Happy Hacking, 👋💻☕💸 🌍🛩️ ❓✨🫠  \n Github https://github.com/EshquvvatovAsliddin');
      });
    },
  };
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), configure()],
  server:{
    port: 2008,
    open: true,
  }
})
