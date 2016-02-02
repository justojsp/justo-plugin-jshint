//imports
import {simple} from "justo";

//api
module.exports = simple({ns: "org.justojs.plugin", name: "jshint"}, require("./lib/op").default);
