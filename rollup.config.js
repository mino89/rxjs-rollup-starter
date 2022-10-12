import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'iife',
      name: "kostegator"
    },
    plugins: [
      typescript(),
      nodeResolve(),
      commonjs(),
      serve({
        port:3000
      }),
      livereload()
    ],
  }
];