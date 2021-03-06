/*global demandmvc */
'use strict';

/**
 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
 */
demandmvc.directive('demandFocus', function demandFocus($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.demandFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
});
