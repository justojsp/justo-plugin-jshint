[![Build Status](https://travis-ci.org/justojsp/justo-plugin-jshint.svg)](https://travis-ci.org/justojsp/justo-plugin-jshint)

Simple task to run the `jshint` command.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-jshint
```

Dependencies:

```
npm install -g jshint
```

## Use

```
const jshint = require("justo-plugin-jshint");
```

To run `jshint`, the task must be called as follows:

```
jshint(opts, ...files) : number
jshint(opts, {files, output}) : number
```

The options are:

- `files` (string[]). The files to check. Default: ["."].
- `output` (boolean). Show the standard output: `true`, yep; `false`, nope. Default: `true`.

The task returns the exit code.

Example:

```
jshint("JSHint", "lib/index.js", "lib/module.js");
jshint("JSHint", {
  files: [
    "lib/index.js",
    "lib/modules.js"
  ],
  output: false
});
```
