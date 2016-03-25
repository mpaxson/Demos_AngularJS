# Demo on Karma's Automated Unit Testing

## The Hierarchy for the app structure

```
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery,etc..
index.html
```

##### But in the top folder include, the structure will look something like this

```
app/
assets/
test/
karma.conf.js
index.html
```

Here, in test and karma.conf.js will include what we need. So in test when ever you a create a service, controller or anything else, make a duplicate *****.js file in the test folder following the same format as app. This can create different test cases for you to run whenever changes have been made to the site

----

After including everything necessary all you need to do is run 'karma start' in the terminal and a similar output will be displayed as below:
```
kettle@OfKetchup:~/git_repos/Demos_AngularJS/testAutomation/project$ karma start
25 03 2016 15:54:11.986:WARN [watcher]: Pattern "/home/kettle/git_repos/Demos_AngularJS/testAutomation/karmaTesting/*.html" does not match any file.
25 03 2016 15:54:12.009:WARN [karma]: No captured browser, open http://localhost:9876/
25 03 2016 15:54:12.013:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
25 03 2016 15:54:12.022:INFO [launcher]: Starting browser Chrome
25 03 2016 15:54:14.022:INFO [Chrome 49.0.2623 (Linux 0.0.0)]: Connected on socket /#rV_cwvnxTvv6-1wcAAAA with id 36907151
Chrome 49.0.2623 (Linux 0.0.0): Executed 8 of 8 SUCCESS (0.008 secs / 0.009 secs)

```

---

### Shout Outs
##### Alot of code and information to make this project was found using Ben Drucker's guide on angular js and karma found [here][e18bf266]

  [e18bf266]: https://www.airpair.com/angularjs/posts/testing-angular-with-karma "Testing AngularJS Apps Using Karma"
