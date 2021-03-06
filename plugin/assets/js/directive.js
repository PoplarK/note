angular.module("noteApp")
    .directive('focusMe', function($timeout) {
        return {
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focusMe, function(value) {
                    if(value) {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    });