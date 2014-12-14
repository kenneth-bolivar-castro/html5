
angular.module('myApp', [])
        .controller('MyController', ['$scope', 'notify', function($scope, notify) {
                $scope.randomName = function() {
                    return Math.random().toString(36).slice(2);
                }
                $scope.callNotify = function(msg) {
                    notify(msg);
                    $scope.message = this.randomName();
                };
            }])
        .factory('notify', ['$window', '$log', function($window, $log) {
                var msgs = [];
                return function(msg) {
                    msgs.push(msg);
                    if (msgs.length == 3) {
                        var msgs_alert = msgs.join('\n');
                        $log.log(msgs_alert);
                        $window.alert(msgs_alert);
                        msgs = [];
                    }
                };
            }]);
