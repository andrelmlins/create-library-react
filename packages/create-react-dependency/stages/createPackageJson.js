'use strict';

const fs = require('fs');
const path = require('path');

const createPackageJson = (root, name) => {
  const basePackageJson = {
    name: name,
    version: '0.0.1',
    main: 'dist/index.js',
    module: 'dist/index.js',
    license: 'MIT',
    files: ['dist'],
    scripts: {
      start: 'react-dependency-scripts start',
      build: 'react-dependency-scripts build',
      'build:app': 'react-dependency-scripts build-app',
      test: 'react-dependency-scripts test',
    },
    devDependencies: {
      react: '^16.13.0',
      'react-dom': '^16.13.0',
      'react-dependency-scripts': '^1.0.6',
    },
    browserslist: {
      production: ['>0.2%', 'not dead', 'not op_mini all'],
      development: [
        'last 1 chrome version',
        'last 1 firefox version',
        'last 1 safari version',
      ],
    },
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(basePackageJson, null, 2)
  );
};

module.exports = createPackageJson;
