
angular.module('scopeInheritance', [])
        .controller('MainController', function($scope) {
            $scope.name = 'Nikki';
            $scope.timeOfDay = 'morning';
        })
        .controller('ChildController', function($scope) {
            $scope.name = 'Mattie';
        })
        .controller('GrandChildController', function($scope) {
            $scope.name = 'Gingerbread Baby';
            $scope.timeOfDay = 'evening';
        });
