# Logram - log tranporter
Logram will transport your server logs to browser.

Most of the time developer might need acess to server logs to debug live issues. And if the server access is denied for dev's they 
have to relay on the logs sent by admin. Well, logram can help us in that situation. Any log file can be streamed realtime to browser.

## Getting Started

Logram have two part, one is the server module and the other is client module. The entire stack is written on JavaScript.

### Prerequisites

NodeJS is to be installed on your system to get started with the logram.


### Installing

Logram you can add as a module to your project or it can be a standalone application. If you are adding to your existing project its fairly straight forward implementation. On the other hand if you need to run as stand-alone application it is reccomended to run with some process managers.
We will discuss both the cases here.

### Stand-alone implementation
We will be using [PM2](http://pm2.keymetrics.io/) process manager to run our project.

```
npm install pm2 -g 
```

Then install logram in a desired directory
```
mkdir logram-root
cd logram-root

npm install logram
```
Inorder to run logram, we need a configuration file. Then contents of the configuration file determines the log which logram needs to print. A sample configuration file is given below.

```js
{
  "logFile" : "/home/user/.pm2/logs/socket-out-0.log",
  "errorFile" : "/home/user/.pm2/logs/socket-error-0.log",
  "port" : 9887
}

```
* logFile : The file we need to transported.
* errorFile[optional] : If there is a seperate error log, that is to be transported
* port : The port at which the server should run.

This file can be stored in the root folder and passed as an argument to the `logram`. Or it can be 
added as a json object directly. Here we will add it directly.

A sample code of index.js file would look like this.

```js
const logram = require('logram');

const config = {
  "logFile" : "/home/user/.pm2/logs/socket-out-0.log",
  "errorFile" : "/home/user/.pm2/logs/socket-error-0.log",
  "port" : 9887
}

logram.run(config);

```

Then on the command line run
```
pm2 start index.js --name logram

```

Now if you go to http://your-ip:9887 you could see the logram braodcasting the logs.

### Implementation in an existing project

The main intention of logram was make it flexible to use it in an ongoing nodejs projects. Below documentation will help in enabling logram in an existing project.

All we have to do is add the below code to your `index.js` file.

```js
const logram = require('logram');

const config = {
  "logFile" : "/home/user/.pm2/logs/socket-out-0.log",
  "errorFile" : "/home/user/.pm2/logs/socket-error-0.log",
  "port" : 9887
}

logram.run(config);

```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [NodeJS](https://nodejs.org/) - The framework used

## Contributing

Feel free to send pull request, We will review and accept the request.


## Authors

* **Vineesh N P** - [github](https://github.com/vineeshnp)


## License

This project is licensed under the MIT License.

## Acknowledgments

* Thanks to socket.io and tail modules which run under the project.
* Made with ❤ [Vim](http://www.vim.org/). 
