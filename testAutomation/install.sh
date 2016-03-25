#!/bin/bash

sudo apt-get update && sudo apt-get install git

git clone --depth=14 https://github.com/angular/angular-phonecat.git

cd angular-phonecat

sudo apt-get install nodejs-legacy npm

npm install
