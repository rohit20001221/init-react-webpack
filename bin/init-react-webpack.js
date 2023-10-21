#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

console.log("[*] init create react app with webpack");
console.log("[*] reading react webpack template");

const packageJson = fs.readFileSync(
  path.join(__dirname, "templates", "react-webpack", "package.json")
);

console.log(packageJson.toString());
