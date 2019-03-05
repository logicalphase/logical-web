import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default [{
  input: './src/components/ts-app.js',
  output: [
    {
      dir: 'public/dist',
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      // use "jsnext:main" if possible
      // legacy field pointing to ES6 module in third-party libraries,
      // deprecated in favor of "pkg.module":
      // - see: https://github.com/rollup/rollup/wiki/pkg.module
      jsnext: true,  // Default: false
    }),
    minifyHTML(),

  ]
},
{
  input: './src/components/ts-app.js',
  output: [
    {
      dir: 'public/dist_nomodule',
      format: 'system'
    }
  ],
  plugins: [
    resolve({
      // use "jsnext:main" if possible
      // legacy field pointing to ES6 module in third-party libraries,
      // deprecated in favor of "pkg.module":
      // - see: https://github.com/rollup/rollup/wiki/pkg.module
      jsnext: true,  // Default: false
    }),
    babel({
      "presets": [
        ["@babel/preset-env", {"targets": {"ie": "11"}}]
      ],
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
    })
  ]
}];