"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 






op;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var cmd, args = [], opts = {}, res, stdout;


  if (params.length === 0) {
    params = { files: "." };}
  if (params.length == 1) {
    if (typeof params[0] == "string") params = { files: params };else 
    params = params[0];} else 
  if (params.length > 1) {
    params = { files: params };}


  if (params.src) {
    if (typeof params.src == "string") params.files = [params.src];else 
    params.files = params.src;}


  if (!params.hasOwnProperty("output")) params.output = true;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

    for (var _iterator = params.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var f = _step.value;args.push(f);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}


  if (/^win/.test(_os2.default.platform())) cmd = "jshint.cmd";else 
  cmd = "jshint";


  res = _child_process2.default.spawnSync(cmd, args);

  if (res.status && !!params.output) console.log(res.stdout.toString());
  if (res.error) throw res.error;


  return res.status;}