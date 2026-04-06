import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import path from "path";

export default defineConfig({
  plugins: [
    svgLoader({
      defaultImport: "url",
    }),
  ],
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "mt-block-editor-block",
  },
  build: {
    outDir: "docs/dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MTBlockEditorBlockFormElement",
      formats: ["iife"],
      fileName: () => "mt-block-editor-block-form-element.js",
    },
    rollupOptions: {
      external: ["tinymce"],
      output: {
        globals: {
          tinymce: "tinymce",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "mt-block-editor-block-form-element.css";
          }
          return assetInfo.name || "";
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    open: "docs/index.html",
  },
});
