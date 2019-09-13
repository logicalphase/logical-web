import minifyHTML from 'rollup-plugin-minify-html-literals';
import modulepreload from 'rollup-plugin-modulepreload';
import { terser } from 'rollup-plugin-terser';

//const production = !process.env.ROLLUP_WATCH;

export default [{
  input: './src/components/ts-app.js',
  output: [
    {
      dir: 'public/dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    modulepreload({
      prefix: 'dist',
      index: 'index.html',
    }),
    minifyHTML({
      failOnError: true,
    }),
    terser()
  ]
}];