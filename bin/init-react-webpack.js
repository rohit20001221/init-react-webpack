#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

console.log("[*] init create react app with webpack");
console.log("[*] reading react webpack template");

const templateDir = path.join(__dirname, "templates", "react-webpack");
fs.cpSync(templateDir, "react-app", { recursive: true });
