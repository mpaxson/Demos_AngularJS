(function(){
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    //constructor
    function WaitListController(){
        //view model
        var vm = this;
        
        //place holder property
        vm.parties = [1, 2, 3, 4];
    }
    
})();