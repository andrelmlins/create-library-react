'use strict';

const babelConfigs = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        exclude: ['proposal-dynamic-import']
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/transform-runtime',
    [
      'module-resolver',
      {
        root: ['./src/lib']
      }
    ]
  ]
};

module.exports = babelConfigs;
