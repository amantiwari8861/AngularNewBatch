# Angular Introduction

## Angular 1(AngularJS) is a JavaScript framework from Google which was used for the development of web applications. 

###  Following are the reasons to migrate from Angular 1 to the latest version of Angular:

### 1. Cross-Browser Compliant

**Internet has evolved significantly from the time Angular 1.x was designed. Creating a web application that is cross-browser compliant was difficult with Angular 1.x framework. Developers had to come up with various workarounds to overcome the issues. Angular helps to create cross-browser compliant applications easily.**

 

### 2. Typescript Support

**Angular is written in Typescript and allows the user to build applications using Typescript. Typescript is a superset of JavaScript and more powerful language. The use of Typescript in application development improves productivity significantly.**


### 3. Web Components Support

**Component-based development is pretty much the future of web development. Angular is focused on component-based development. The use of components helps in creating loosely coupled units of application that can be developed, maintained, and tested easily.**

 

### 4.Better support for Mobile App Development

**Desktop and mobile applications have separate concerns and addressing these concerns using a single framework becomes a challenge. Angular 1 had to address the concerns of a mobile application using additional plugins. However, the Angular framework, addresses the concerns of both mobile as well as desktop applications.**

 

### 5. Better performance

**The Angular framework is better in its performance in terms of browser rendering, animation, and accessibility across all the components. This is due to the modern approach of handling issues compared to earlier Angular version 1.x.**

 
## Let us now understand what is Angular and what kind of applications can be built using Angular:

* Angular is an open-source JavaScript framework for building both mobile and desktop web applications.

* Angular is exclusively used to build Single Page Applications (SPA).

* Angular is completely rewritten and is not an upgrade to Angular 1.

* Developers prefer TypeScript to write Angular code. But other than TypeScript, you can also write code using JavaScript (ES5 or ECMAScript 5).

 

## Why most developers prefer TypeScript for Angular?

* TypeScript is Microsoft’s extension for JavaScript which supports object-oriented features and has a strong typing system that enhances productivity.

* TypeScript supports many features like annotations, decorators, generics, etc. A very good number of IDE’s like Sublime Text, Visual Studio Code, Nodeclipse, etc., are available with TypeScript support.

* TypeScript code is compiled to JavaScript code using build tools like npm, bower, gulp, webpack, etc., to make the browser understand the code.

Angular places itself on the client-side in the complete application stack and provides a completely client-side solution for quick application development. Angular has absolutely no dependencies and also jells perfectly with any possible server-side technology like Java, NodeJS, PHP, etc., and any database like MongoDB, MySql. 

<img src="https://github.com/amantiwari8861/AngularNewBatch/blob/master/introWebApp.png" alt="This is WebApplication Intro image.">


To develop an application using Angular on a local system, you need to set up a development environment that includes the installation of:

    Node.js (^12.20.2 || ^14.15.5 || ^16.10.0) and npm (min version required 6.13.4)

    Angular CLI

    Visual Studio Code

Install Node.js and Visual Studio Code from their respective official websites. 

 

Steps to install Angular CLI

Angular CLI can be installed using Node package manager using the command shown below

    D:\> npm install -g @angular/cli

Test successful installation of Angular CLI using the following command

Note: Sometimes additional dependencies might throw an error during CLI installation but still check whether CLI is installed or not using the following command. If the version gets displayed, you can ignore the errors.

    D:\> ng v

 

Angular CLI is a command-line interface tool to build Angular applications. It makes application development faster and easier to maintain.

Using CLI, you can create projects, add files to them, and perform development tasks such as testing, bundling, and deployment of applications.

Command
	

Purpose

npm install -g @angular/cli
	

Installs Angular CLI globally

ng new <project name>
	

Creates a new Angular application

ng serve --open
	

Builds and runs the application on lite-server and launches a browser

ng generate <name>
	

Creates class, component, directive, interface, module, pipe, and service

ng build
	

Builds the application
ng update @angular/cli @angular/core
	
 Updates Angular to a newer version

 Note: If the above command gives errors while installing dependencies, navigate to the project folder in the Node command prompt and run "npm install" to install the dependencies manually.

File / Folder
	

Purpose

node_modules/
	

Node.js creates this folder and puts all npm modules installed as listed in package.json

src/
	

All application-related files will be stored inside it

angular.json
	

Configuration file for Angular CLI where we set several defaults and also configure what files to be included during project build

package.json
	

This is a node configuration file that contains all dependencies required for Angular

tsconfig.json
	

This is the Typescript configuration file where we can configure compiler options

.angular
	

From Angular version 13.0.0, .angular folder is generated in the root. This folder caches the builds and is ignored by git.