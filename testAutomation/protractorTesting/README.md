# Proctractor Automatic Unit Testing

## Install dependencies for protractor
### must have the[ Java Development Kit ][26a1cd06]
#### For Linux
you can either run ./install.sh

or enter the code the manually below to install protractor manually

##### nodejs on linux
 To install the most recent version of nodejs, you must manually update nodejs package since it's not up to date. Run these two lines of code for 14.04 LTS. After much searching answer found here [here][75824458]
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -


sudo apt-get install -y nodejs
```

```terminal
udo apt-get update

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install npm

sudo npm install -g jasmine

sudo jasmine init

sudo npm install -g protractor

sudo webdriver-manager update

echo "to start webdriver enter 'sudo webdriver-manager start' "



```














[75824458]: http://stackoverflow.com/questions/34974535/install-latest-nodejs-version-in-ubuntu-14-04/35844722 "Stack Overflow"


  [26a1cd06]: http://www.oracle.com/technetwork/java/javase/downloads/index.html "Download from this link for your operating system"
