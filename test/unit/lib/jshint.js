//imports
const path = require("path");
const suite = require("justo").suite;
const test = require("justo").test;
const jshint = require("../../../dist/es5/nodejs/justo-plugin-jshint/lib/jshint");

//suite
suite("#jshint()", function() {
  const DATA_DIR = "test/unit/data";

  test("jshint(string)", function() {
    jshint([path.join(DATA_DIR, "valid.js")]).must.be.eq(0);
  });

  test("jshint(...string)", function() {
    jshint([path.join(DATA_DIR, "valid.js"), path.join(DATA_DIR, "valid2.js")]);
  });

  test("jshint({files}) - invalid", function() {
    jshint([{files: [path.join(DATA_DIR, "invalid.js")]}]).must.not.be.eq(0);
  });

  test("jshint({files, output}) - invalid", function() {
    jshint([{files: [path.join(DATA_DIR, "invalid.js")], output: false}]).must.not.be.eq(0);
  });

  test("jshint({files}) - valid", function() {
    jshint([{files: [path.join(DATA_DIR, "valid.js")]}]).must.be.eq(0);
  });

  test("jshint({files}) - unknown file", function() {
    jshint([{files: [path.join(DATA_DIR, "unknown.js")]}]).must.be.eq(0);
  });

  test("jshint({src : string})", function() {
    jshint([{src: path.join(DATA_DIR, "valid.js")}]).must.be.eq(0);
  });

  test("jshint({src : string[]})", function() {
    jshint([{src: [path.join(DATA_DIR, "valid.js"), path.join(DATA_DIR, "valid2.js")]}]).must.be.eq(0);
  });
})();
