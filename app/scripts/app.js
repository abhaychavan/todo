'use strict';

/**
 * @ngdoc overview
 * @name toDoAppApp
 * @description
 * # toDoAppApp
 *
 * Main module of the application.
 */
angular
  .module('toDoAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/task.html',
        controller: 'TaskController'
       
      })
      .otherwise({
        redirectTo: '/'
      });
  });
