/* eslint-disable import/no-extraneous-dependencies */

import fs from 'fs';
import del from 'del';
import { rollup } from 'rollup';
import { eslint } from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';
import pkg from '../package.json';

// Clean up the output directory
let promise = del(['dist/*']);

// Compile source code into a distributable format with Babel
['es', 'cjs', 'umd'].forEach((format) => {
  promise = promise.then(() =>
    rollup({
      input: 'src/index.js',
      external: Object.keys(pkg.dependencies),
      plugins: [
        resolve({
          module: true,
          jsnext: true,
          main: true,
          browser: true,
        }),
        commonjs(),
        eslint({
          exclude: ['src/styles/**'],
        }),
        babel(
          Object.assign(pkg.babel, {
            exclude: 'node_modules/**',
            runtimeHelpers: true,
          })
        ),
        replace({
          ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        // (process.env.NODE_ENV === 'production' && uglify()),
      ],
    }).then((bundle) =>
      bundle.write({
        file: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
        format,
        name: format === 'umd' ? pkg.name : undefined,
        sourcemap: true,
        globals: {
          axios: 'axios',
        },
      })
    )
  );
});

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  fs.writeFileSync('dist/LICENSE.txt', fs.readFileSync('LICENSE.txt', 'utf-8'), 'utf-8');
});

promise.catch((err) => console.error(err.stack)); // eslint-disable-line no-console
