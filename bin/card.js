#!/usr/bin/env node
// ----------------------------------------------------------------------------

// npm
var chalk = require('chalk')
var boxen = require('boxen')

// ----------------------------------------------------------------------------
// setup

const sections = [
  {
    title: 'Andrew Chilton (Personal)',
    details: [
      [ 'Email', 'andychilton@gmail.com' ],
      [ 'Web', 'https://chilts.org' ],
      [ 'Twitter', 'https://twitter.com/andychilton' ],
      [ 'GitHub', 'https://github.com/chilts' ],
      [ 'GitLab', 'https://gitlab.org/chilts' ],
    ],
  },
  {
    title: 'Apps Attic Ltd (My Company)',
    details: [
      [ 'Email', 'chilts@appsattic.com' ],
      [ 'Web', 'https://appsattic.com' ],
      [ 'Twitter', 'https://twitter.com/AppsAttic' ],
      [ 'GitLab', 'https://gitlab.com/appsattic' ],
    ],
  },
  {
    title: 'Node.js / npm',
    details: [
      [ 'Profile', 'https://www.npmjs.com/~chilts' ],
      [ 'Card', '$ npx chilts' ],
    ],
  },
]

// start the output
const lines = []

// output the sections
sections.forEach(section => {
  lines.push(section.title)
  lines.push(chalk.green(''.padStart(section.title.length, '-')))
  lines.push('')
  section.details.forEach(detail => {
    if (!detail) {
      lines.push('')
      return
    }
    const line = [
      chalk.white.bold(detail[0].padStart(12, ' ')),
      chalk.green(' : '),
      detail[1].substr(0, 8) === 'https://'
        ? chalk.cyan(detail[1])
        : chalk.white(detail[1])
    ].join('')

    lines.push(line)
  })
  lines.push('')
})

lines.pop()

// ----------------------------------------------------------------------------
// output

const content = lines.join('\n')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderColor: 'green',
  borderStyle: 'double-single',
}

const output = boxen(content, options)
console.log(output)

// ----------------------------------------------------------------------------
