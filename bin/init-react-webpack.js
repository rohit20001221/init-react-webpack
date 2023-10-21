#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const { chdir, exit } = require("process");
const { execSync } = require("child_process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("what is the name of your app?: ", async (appName) => {
  console.log("[*] init create react app with webpack");
  console.log("[*] reading react webpack template");

  const templateDir = path.join(__dirname, "templates", "react-webpack");
  fs.cpSync(templateDir, appName, { recursive: true });

  chdir(appName);

  fs.writeFileSync(".gitignore", "node_modules/\ndist/");

  const packageJson = JSON.parse(fs.readFileSync("package.json").toString());
  packageJson.name = appName;

  fs.writeFileSync("package.json", JSON.stringify(packageJson, undefined, 1));

  execSync("git init");
  execSync("npm install");

  execSync("git add .");
  execSync('git commit -m "initialize react webpack app"');

  exit();
});
