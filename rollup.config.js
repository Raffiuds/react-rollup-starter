import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

export const plugins = [
  image(),
  postcss({
    extensions: ['.css'],
  }),
  commonjs(),
  nodeResolve({
    extensions: ['.js'],
  }),
  copy({
    targets: [{ src: 'public/*', dest: 'dist/' }],
  }),
];

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    ...plugins,
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
  ],
};
