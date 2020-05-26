<div align="center">

<img width="300px" style="text-align:center" src="https://raw.githubusercontent.com/andrelmlins/create-react-dependency/master/packages/create-react-dependency/template/src/dev/logo.png">

<h1 style="margin-top:0px"><b>Create React Dependency</b></h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/create-react-dependency/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/create-react-dependency.svg?branch=master)](https://travis-ci.com/andrelmlins/create-react-dependency) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/create-react-dependency.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/create-react-dependency/context:javascript) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/59b78677-2d70-446b-b438-6336e37127f6/deploy-status)](https://app.netlify.com/sites/create-react-dependency/deploys)

<br />

[Contributing](CONTRIBUTING.md) | [Code of Conduct](CODE_OF_CONDUCT.md)

<br />

</div>

Project similar to the [Create React App](https://github.com/facebook/create-react-app) for libraries and dependencies.

It creates a ready to publish project which you can upload to npm, yarn and/or your favorite package manager. For more information [click here](https://create-react-dependency.netlify.com/).

<br />

## Basic Use

```
npx create-react-dependency new my-dependency
cd my-dependency
npm start
```

## Creating an dependency or library?

Requires version equal to or later than Node 10, choose from the following options to create a dependency or library:

### Yarn

```
yarn create create-react-dependency my-dependency
```

### NPX

```
npx create-react-dependency my-dependency
```

### NPM

```
npm init create-react-dependency my-dependency
```

## File Structure

File structure generated from the create-react-dependency project

```
my-dependency
├── README.md
├── node_modules
├── package.json
├── .gitignore
└── src
    ├── dev
    │   ├── App.js
    │   ├── index.css
    │   ├── index.html
    │   ├── index.js
    │   └── logo.png
    └── lib
        ├── index.cs
        ├── index.js
        └── Lib.js
```

## Projects

| Package                                                                                                                                    | Version                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| [Create React Dependency](https://github.com/andrelmlins/create-react-dependency/blob/master/packages/create-react-dependency/README.md)   | [![npm version](https://badge.fury.io/js/create-react-dependency.svg)](https://www.npmjs.com/package/create-react-dependency)   |
| [React Dependency Scripts](https://github.com/andrelmlins/create-react-dependency/blob/master/packages/react-dependency-scripts/README.md) | [![npm version](https://badge.fury.io/js/react-dependency-scripts.svg)](https://www.npmjs.com/package/react-dependency-scripts) |

## Contribution guidelines

If you want to contribute to **Create React Dependency**, be sure to review the
[contribution guidelines](CONTRIBUTING.md). This project adheres to
[code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code.

## License

Create React Dependency is open source software [licensed as MIT](https://github.com/andrelmlins/create-react-dependency/blob/master/LICENSE).
