#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

console.log("[*] init create react app with webpack");
console.log("[*] reading react webpack template");

const templateDir = fs.readdirSync(
  path.join(__dirname, "templates", "react-webpack")
);

templateDir.forEach((folder) => console.log(folder));
