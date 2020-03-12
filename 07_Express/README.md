# Express JS

Based on [Expressjs offiecial](https://expressjs.com/) Express is:

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express helps us to easily create web servers whether you want to serve up something like a static website or complex HTTP json based API to server as the backend for mobile or web applications.

## Installation

assume you already have Node.js installed.

1. Create project directory

   `$ mkdir my-express-app`  
   `$ cd my-express-app`

2. Initialize `package.json` with

   `$ npm init`

3. Your entry point will be `index.js`

4. Install `express` via `npm`

   `$ npm install --save express`

5. OK, you are good to go.

## Basic routing

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

start the server by typing in your terminal

`$ node index.js`

and you should see `Example app listening on port 3000!`

then open the browser and visit the following url `http://localhost:3000/`

and you should see

![express hello world](express.png)

Compare to last time we've created server with [http](https://github.com/xeusteerapat/nodejs-refresher/tree/master/05_HTTP_Servers#create-nodejs-server) core module of Node.js, it's lots easier. Let's break down the process and learn what is going on behind the scenes.

1. Import express libraries and create Express application named `app`
2. Create PORT number variable. (Actually, you don't need to do this, you can just pass the port number to the listen `method` directly.)
3. Use `get` method which receives 2 arguments, first is path `'/'` and second is callback function.
4. Callback function takes 2 arguments `req` and `res` which are short for:
   - request: it's an object that represents the incoming request from the browser into our web server.
   - response: it's represents the outgoing response from our web server back over to the browser.
5. Whenever someone makes a request to the root `'/'` we will run the callback function and send the response with `Hello World!`
6. `app.listen` will listen for incoming requests on particular port on our machine which is PORT no `3000` with a message `Example app listening on port 3000!` after we run the app.
