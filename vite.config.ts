import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import pxtorem from "postcss-pxtorem";

const getBaseURL = () => {
    return "/";
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [">0.2%", "not dead", "not op_mini all"],
    }),
  ],
  base: getBaseURL(),
  server: {
    port: 3000,
    cors: true,
    fs: {
      allow: ["../../"],
    },
  },
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 4096,
    rollupOptions: {
      onwarn: ({ message }) => {
        if (/Use of `eval` .* is strongly discouraged/.test(message)) {
          return;
        }
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
          unitPrecision: 5,
          propList: ["*"],
        }),
      ],
    },
  },
});
