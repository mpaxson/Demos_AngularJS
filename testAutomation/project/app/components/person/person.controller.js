'use strict';

angular.module( 'app' )
    .controller( 'PersonController', function ( $scope, Person ) {
        this.person = $scope.person = new Person( 'Ben' );
    } );
