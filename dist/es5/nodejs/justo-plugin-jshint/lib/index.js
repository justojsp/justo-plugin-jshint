//imports
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _justo = require("justo");

//api
exports["default"] = (0, _justo.simple)({ ns: "org.justojs", name: "jshint" }, require("./jshint"));
module.exports = exports["default"];
