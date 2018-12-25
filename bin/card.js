#!/usr/bin/env node
// ----------------------------------------------------------------------------

// npm
var npxcard = require('npxcard');

// ----------------------------------------------------------------------------
// setup

const sections = [
  {
    title: 'Nikhil Sharma (Personal)',
    details: [
      [ 'Email', 'nikhilsharmarockstar21@gmail.com' ],
      
      [ 'Twitter', 'https://twitter.com/niksharma1997' ],
      [ 'GitHub', 'https://github.com/nik72619c' ],
      
    ],
  },

  {
    
    title: 'About me',
      details :[

        [
        
          'Introduction', 'Full stack Javascript Developer Building reactive Apps using Angular, React and Nodejs '
        ],
        ['','Worked with Infinity Shark and made an Angular-php app for aiding in kerela calamity']
      ] ,
  },
  {
    title: 'My Works !',
    details: [
      [ 'Angular', 'CRUD Application, full stack ecommerce application' ],
      [ 'React', 'CRUD app, shopping cart model, loan application, Basic Registration form' ],
      [ 'Vanilla Javascript', 'Online Examination system, Basic Crud Application, TicTacToe' ],
      [ 'React-Native', 'News Flash App' ],
    ],
  },
  {
    title: 'Node.js / npm',
    details: [
      [ 'Profile', 'https://drive.google.com/open?id=17EjT0dtgGGZ86I4YZWl5g5CbMEPa8gOE' ],
      [ 'Card', '$ npx nik72619c' ],
    ],
  },
]

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections);
console.log(output)

// ----------------------------------------------------------------------------
