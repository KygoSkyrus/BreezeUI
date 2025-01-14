import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts', // Entry file
  output: [
    {
      file: './dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json', // Ensure you have a tsconfig.json file
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    terser(), // Minify the output
  ],
  external: ['react', 'react-dom'], // Peer dependencies
};
