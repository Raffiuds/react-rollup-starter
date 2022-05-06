import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import { plugins } from './rollup.config';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    ...plugins,
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.build.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser(),
  ],
};
