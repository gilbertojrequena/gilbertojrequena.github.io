'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', ['$scope', '$translate', 'ResumeService', function ($scope, $translate, ResumeService) {
    var self = this;
    self.language = 'en';
    self.icons = {
      'Programming': 'ti-desktop',
      'Music': 'ti-music-alt',
      'Gamming': 'ti-game',
      'Programación': 'ti-desktop',
      'Música': 'ti-music-alt',
      'Videojuegos': 'ti-game',
      'LinkedIn': 'fa fa-linkedin',
      'backend': 'ti-server',
      'web-applications': 'ti-layers-alt',
      'solutions': 'ti-wand',
      'communication': 'ti-comments-smiley'
    };
    var graduation = 'Mar, 20, 2012';

    var graduationDate = new Date(graduation);
    var currentDate = new Date();

    self.experienceYears = currentDate.getFullYear() - graduationDate.getFullYear();
    self.linesOfCode = self.experienceYears * 273 * 200 + (currentDate.getDay() * 200);

    self.resume = ResumeService.getResume('en');
    self.getIcon = function (key) {
      return self.icons[key];
    };

    self.toggleLanguage = function () {
      if (self.language === 'en') {
        $translate.use('es');
        self.language = 'es';
        self.resume = ResumeService.getResume('es')
      } else {
        $translate.use('en');
        self.language = 'en';
        self.resume = ResumeService.getResume('en')
      }
      Mi.reloadAnimations();
      Mi.loadMap();
    };

    Mi.reloadAnimations();
    Mi.loadMap();
    setTimeout(function () {
      Mi.loadMap();
    }, 500);
  }]);
