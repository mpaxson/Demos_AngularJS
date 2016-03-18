//used to setup routing

(function() {
    'use strict';
    
    angular
        .module('app.landing') //get the app landing module
        .config(configFunction)
    
    //need access to the route provider
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction(){
        $routeProvider.when('/', {
            templateUrl: 'app/landing/landing.html'//path to a file 
        });
        
    }
})();