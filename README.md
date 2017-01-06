## Weather Widget
Pretty simple weather widget created with React.JS library.

![demo](https://pp.vk.me/c638928/v638928854/b98c/g9P-1QhNuow.jpg)

## Installation
You need to have [node.js and npm](https://nodejs.org) of [yarn](https://yarnpkg.com/) (if you wanna be as fast as Flash) installed on your machine.<br>
Next clone the project and get inside:
```
$ git clone https://github.com/sbiliaiev/sphere-test
$ cd sphere-test
```
Now you can do some magic.

## Development
If you want to fix some misses, you can type:
```
$ npm start
```
It will launch development server with autoreload (will auto-open in browser).

## Building
If you wanna convert all application for production purpose, type:
```
 $ npm build
```
It will compile application to static files placed in **build** directory.<br>
To watch the result, simply go to the directory and run any server from it:
```
 $ cd build
 $ http-server -p 8080
```
The Applicaiton will be launched on [http://localhost:8080](http://localhost:8080) address.

## [Demo](http://sphere-test.esy.es)
- At the beginning there are 2 locations (Kharkiv and New York).
- After page close/reload list and last picked location still will be able.
- You can add as many locations, as you want. 
- You can delete all locations.
- You can even delete current locations and see what will happen.
- You can open application on differend devices and screen resolutions and (hopefully) it will has nice look.
- It sounds like you can even use it instead of Gismeteo, but no.
