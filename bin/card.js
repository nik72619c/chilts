#!/usr/bin/env node
// Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
let data = {
  'name': chalk.white('Andrew Chilton'),
  'email': chalk.white('andychilton@gmail.com'),
  'company': chalk.white('https://chilts.org'),
  'work': chalk.white('Programmer, Consultant, Starter Upper.'),
  'workEmail': chalk.white('chilts@appsattic.com'),
  'twitter': chalk.cyan('https://twitter.com/andychilton'),
  'github': chalk.cyan('https://github.com/chilts'),
  'gitlab': chalk.cyan('https://gitlab.com/chilts'),
  'web': chalk.cyan('https://chilts.org'),
  'npx': chalk.white('npx chilts'),
  'labelWork': chalk.white.bold('      Work'),
  'labelTwitter': chalk.white.bold('   Twitter'),
  'labelGitHub': chalk.white.bold('    GitHub'),
  'labelGitLab': chalk.white.bold('    GitLab'),
  'labelWeb': chalk.white.bold('       Web'),
  'labelCard': chalk.white.bold('      Card')
}

// Actual strings we're going to output
var heading = `${data.name}`
var working = `${data.labelWork}:  ${data.work}`

var twittering = `${data.labelTwitter}:  ${data.twitter}`
var githubing = `${data.labelGitHub}:  ${data.github}`
var gitlabing = `${data.labelGitLab}:  ${data.gitlab}`
var webing = `${data.labelWeb}:  ${data.web}`
var carding = `${data.labelCard}:  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = [
  heading,
  '',
  chalk.white.bold('     Email') + ': ' + chalk.white(' andychilton@gmail.com'),
  twittering,
  githubing,
  gitlabing,
  webing,
  '',
  chalk.white('AppsAttic <chilts@appsattic.com> (https://appsattic.com)'),
  '',
  working,
  '',
  carding,
].join('\n')

console.log(chalk.green(boxen(output, options)))
