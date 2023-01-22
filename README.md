# Flaviar frontend task

A boilerplate for building web projects with [Gulp 4](https://gulpjs.com/).

**Features**

-   Concatenate, minify, and lint JavaScript.
-   Compile, minify, autoprefix, and lint Sass.
-   Optimize SVGs.
-   Render twig templates with JSON data
-   Copy static assets files and folders into your `dist` directory.
-   Automatically add headers and project details to JS and CSS files.
-   Create polyfilled and non-polyfilled versions of JS files.
-   Watch for file changes, and automatically recompile build and reload webpages.

**Turn features on and off**, so you can reuse it for all of your projects without having to delete or modify tasks.

## Getting Started

### Dependencies

_**Note:** if you've previously installed Gulp globally, run `npm rm --global gulp` to remove it. [Details here.](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)_

Make sure these are installed first.

-   [Node.js](http://nodejs.org)
-   [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
    - `gulp` manually compiles files.
    - `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.

**Try it out.** After installing, run `gulp` to compile some test files into the `dist` directory. Or, run `gulp watch` and make some changes to see them recompile automatically.

## License

The code is available under the [MIT License](LICENSE.md).
