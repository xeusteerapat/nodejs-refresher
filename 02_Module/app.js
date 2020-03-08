const fs = require('fs');
fs.writeFileSync('note.txt', 'This file was created by Node.js!');
fs.appendFileSync('note.txt', ' Another line by Node.js!');
