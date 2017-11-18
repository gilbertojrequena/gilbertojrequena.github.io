'use strict';

angular
  .module('resumeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'countTo',
    'LocalStorageModule'
  ])
  .config(['$httpProvider', '$routeProvider', '$locationProvider',
    function ($httpProvider, $routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          resolve: {
            initResumes: function (ResumeService) {
              return ResumeService.init().then(function (resumes) {
                return resumes;
              });
            }
          }
        })
        .when('/projects/:id', {
          templateUrl: 'views/project.html',
          controller: 'ProjectCtrl',
          controllerAs: 'projectCtrl'
        }).otherwise({
        redirectTo: '/'
      });
      $locationProvider
        .html5Mode(true);
      $locationProvider.hashPrefix('');
    }]);


(function () {
  var initInjector = angular.injector(['ng']);
  var $http = initInjector.get('$http');

  $http.get('app/conf.json').then(function (confResponse) {
    angular.module('resumeApp').constant('configuration', confResponse.data);
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['resumeApp']);
    });
  });
})();
