//imports
const register = require("justo").register;
const simple = require("justo").simple;
const fs = require("justo-fs");
const babel = require("justo-plugin-babel");
const clean = require("justo-plugin-clean");
const copy = require("justo-plugin-copy");

//works
register({name: "build", desc: "Build the package."}, function() {
  clean("Clean build directory", {
    dirs: ["build/es5"]
  });

  simple("Best practices", function() {
    var jshint;

    if (fs.exists("./dist/es5/nodejs/justo-plugin-jshint")) jshint = require("./dist/es5/nodejs/justo-plugin-jshint/lib/jshint");
    else jshint = require("./build/es5/lib/jshint");

    jshint([{
      output: true,
      files: [
        "lib/jshint.js",
        "lib/index.js"
      ]
    }]);
  })();

  babel("Transpile", {
    comments: false,
    retainLines: true,
    files: {
      "build/es5/lib/index.js": "lib/index.js",
      "build/es5/lib/jshint.js": "lib/jshint.js"
    }
  });

  clean("Clean dist directory", {
    dirs: ["dist/es5"]
  });

  copy(
    "Create package",
    {
      src: "build/es5/lib/",
      dst: "dist/es5/nodejs/justo-plugin-jshint/lib"
    },
    {
      src: ["package.json", "README.md"],
      dst: "dist/es5/nodejs/justo-plugin-jshint"
    }
  );
});

register({name: "test", desc: "Unit test."}, {
  require: "justo-assert",
  src: [
    "test/unit/lib/jshint.js"
  ]
});

register("default", ["build", "test"]);
