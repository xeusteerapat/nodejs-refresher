# Node.js Module System

Let's get started with explore node.js module system. The module system lets us load external libraries into our application that we can take advantage of built-in modules or third party npm modules to create web servers, connecting to the database and much more.

## Importing modules

Node.js comes with many built-in modules. These built-in modules, sometimes
referred to as core modules, give you access to tools for working with the file system,
making http requests, creating web servers, and more. Let's see example [file system modules.](https://nodejs.org/dist/latest-v13.x/docs/api/fs.html)

before we use file system modules, we need to load it and define in our script by using `require` syntax

```javascript
const fs = require('fs');
fs.writeFileSync('note.txt', 'This file was created by Node.js!');
```

then run `node app.js` and see what we get.

![file system](file_system.png)

we get note.txt file with contents that we've written and if we want to append another text to the exiting contents, we have to use another method `appendFileSync`

```javascript
const fs = require('fs');
fs.writeFileSync('note.txt', 'This file was created by Node.js!');
fs.appendFileSync('note.txt', ' Another line by Node.js!');
```

![file append](file_append.png)

## Importing your own files

You can break your Node.js application into multiple scripts that can work together.

You've already know how to use `require` to load Node.js built-in modules. `require` can also used to load in Javascript files that you've created.

let's say, I have `utils.js` file

```javascript
// utils.js
const check = function() {
  console.log('This is from utils');
};
```

and I want to import the code from `utils.js`

```javascript
// app.js
require('./utils.js');
check();
```

```javascript
ReferenceError: check is not defined
```

We get an error...Why?

So this is one very important aspect of the node module system. All of your files which you can refer to as modules have their own scope. So `app.js` has it's own scope with its own variables and `utils.js` has its own scope with its own variables `app.js` can not access the variables from `utils.js` even though it was loaded in the require.
So if I can't access name right now how exactly do I get that done.

So, we need to `exports` all of this stuff in `utils.js`

```javascript
// utils.js
const check = function() {
  console.log('This is from utils');
};

module.exports = check;
```

and in `app.js` I need to:

```javascript
const check = require('./utils');
console.log(check()); // This is from utils
```

also we can exports object with bunch of methods

```javascript
// utils.js
const mathOps = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
  pow(a, b) {
    return a ** b;
  }
};

module.exports = mathOps;
```

in `app.js` we can use `mathOps` that we created in `utils.js` by using `require` module

```javascript
const mathOps = require('./utils');

mathOps.add(4, 5); // 9
mathOps.sub(4, 5); // -1
mathOps.mul(4, 5); // 20
mathOps.div(4, 5); // 0.8
mathOps.pow(4, 5); // 1024
```
