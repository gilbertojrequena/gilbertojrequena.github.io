'use strict';

angular.module('resumeApp')
	.directive('dynamic', function ($compile, $translate) {
		return {
			restrict: 'A',
			replace: true,
			link: function (scope, ele, attrs) {
				scope.$watch(attrs.dynamic, function (html) {
					$translate(html).then(function(translatedHtml) {
						ele.html(translatedHtml);
						$compile(ele.contents())(scope);
					});
				});
			}
		};
	});
