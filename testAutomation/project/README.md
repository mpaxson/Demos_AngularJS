# guide to create the unit testing

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

##### But in the top folder include this

```
app/
assets/
test/
karma.conf.js
index.html

```
Here, in test and karma.conf.js will include what we need. So in test when ever you a serice, controller or anything else, make a duplicate test .js file in tests
```

#### copyright
### Code and information to make this project was found using Ben Drucker's guide on angular js and karma found [here][e18bf266]

  [e18bf266]: https://www.airpair.com/angularjs/posts/testing-angular-with-karma "Testing AngularJS Apps Using Karma"
