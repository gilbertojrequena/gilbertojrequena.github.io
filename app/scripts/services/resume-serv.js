'use strict';

angular.module('resumeApp')
  .service('ResumeService', ['$http', 'configuration', '$q', function ($http, configuration, $q) {

    var self = this;

    self.resumes = {};

    function getReferencesInColumns(resume) {
      var columns = [];
      var column = [];
      var testimonialsByColumn = Math.round(resume.references.length / 3);
      var count = 0;
      for (var i = 0; i < resume.references.length; i++) {
        column.push(resume.references[i]);
        count++;
        if (count === testimonialsByColumn || i === resume.references.length - 1) {
          columns.push(column);
          column = [];
          count = 0;
        }
      }
      return columns;
    }


    function getResumeForLang(language) {
      return $http({url: configuration[language], method: 'GET'}).then(function (response) {
        self.resumes[language] = response.data;
        self.resumes[language].referencesInColumns = getReferencesInColumns(self.resumes[language]);
        var summaryParts = self.resumes[language].basics.summary.split('\n');
        self.resumes[language].basics.primarySummary = summaryParts[0];
        self.resumes[language].basics.secondarySummary = summaryParts[1];
        return $q.when();
      }, function (error) {
        return $q.reject(error);
      });
    }

    self.init = function () {
      var promises = [];
      for (var language in configuration) {
        promises.push(getResumeForLang(language))
      }
      return $q.all(promises);
    };

    self.getResume = function (lang) {
      return self.resumes[lang];
    }
  }]);
