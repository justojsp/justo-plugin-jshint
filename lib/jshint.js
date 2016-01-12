//imports
import os from "os";
import child_process from "child_process";

/**
 * Runs jshint CLI.
 */
export default function jshint(params) {
  var cmd, args = [], opts = {}, res, stdout;

  //(1) arguments
  if (params.length === 0) {
    params = {files: "."};
  } if (params.length == 1) {
    if (typeof(params[0]) == "string") params = {files: params};
    else params = params[0];
  } else if (params.length > 1) {
    params = {files: params};
  }

  if (params.src) {
    if (typeof(params.src) == "string") params.files = [params.src];
    else params.files = params.src;
  }

  if (!params.hasOwnProperty("output")) params.output = true;

  for (let f of params.files) args.push(f);

  //(2) get command
  if (/^win/.test(os.platform())) cmd = "jshint.cmd";
  else cmd = "jshint";

  //(3) run
  res = child_process.spawnSync(cmd, args);

  if (res.status && !!params.output) console.log(res.stdout.toString());
  if (res.error) throw res.error;

  //(4) return result
  return res.status;
}
