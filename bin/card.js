#!/usr/bin/env node
// ----------------------------------------------------------------------------

// npm
var npxcard = require('npxcard')

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

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections)
console.log(output)

// ----------------------------------------------------------------------------
