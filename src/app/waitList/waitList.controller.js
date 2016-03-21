(function(){
    'use strict';
    
    WaitListController.$inject = ['$firebaseArray'];
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    
    WaitListController.$inject = ['$firebaseArray'];
    
    function WaitListController($firebaseArray){
        var vm = this;
        
        var fireParties = new Firebase("https://demosangularjs.firebaseio.com/");
        
        function Party(){
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }
        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        
        vm.addParty = addParty;
        
        function addParty(){
            vm.parties.$add(vm.newParty);
            //clears form     
            vm.newParty = new Party(); 
        }     
    }
    
})();