import { defineConfig } from 'tsup';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';

export default defineConfig({
  entry: ['src/**/*', '!src/**/*.test.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  esbuildPlugins: [
    esbuildPluginFilePathExtensions({
      esmExtension: 'mjs',
      cjsExtension: 'js',
    }),
  ],
});
