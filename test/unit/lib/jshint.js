//imports
const path = require("path");
const jshint = require("../../../dist/es5/nodejs/justo-plugin-jshint/lib/jshint");

//suite
describe("#jshint()", function() {
  const DATA_DIR = "test/unit/data";

  it("jshint(string)", function() {
    jshint([path.join(DATA_DIR, "valid.js")]).must.be.eq(0);
  });

  it("jshint(...string)", function() {
    jshint([path.join(DATA_DIR, "valid.js"), path.join(DATA_DIR, "valid2.js")]);
  });

  it("jshint({files}) - invalid", function() {
    jshint([{files: [path.join(DATA_DIR, "invalid.js")]}]).must.not.be.eq(0);
  });

  it("jshint({files, output}) - invalid", function() {
    jshint([{files: [path.join(DATA_DIR, "invalid.js")], output: false}]).must.not.be.eq(0);
  });

  it("jshint({files}) - valid", function() {
    jshint([{files: [path.join(DATA_DIR, "valid.js")]}]).must.be.eq(0);
  });

  it("jshint({files}) - unknown file", function() {
    jshint([{files: [path.join(DATA_DIR, "unknown.js")]}]).must.be.eq(0);
  });
});
