var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
myApp.config(function($routeProvider) {
    $routeProvider.when('/books', {
        templateUrl: '/partials/book-list.html',
        controller: 'BookListCtrl'
    }).when('/kart', {
        templateUrl: '/partials/kart-list.html',
        controller: 'KartListCtrl'
    }).otherwise({
        redirectTo: '/books'
    });
});

myApp.factory('kartService', function(bookService) {
    var kart = [];
    return {
        getKart: function() {
            return kart;
        },
        addToKart: function(book) {
            kart.push(book);
        },
        buy: function(book) {
            alert('Thanks for buy: ' + book.name);
        }
    }
});

myApp.factory('bookService', function() {
    var books = [
        {
            imgUrl: '//lorempixel.com/150/180/sports/',
            name: 'Libero',
            price: 205,
            rating: 4,
            binding: 'urna ipsum finibus massa',
            publisher: 'Cras hendrerit',
            releaseDate: '12-05-2014',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit turpis sed erat lacinia, vel volutpat mi vestibulum. Aenean accumsan aliquet odio vel rutrum.'
        },
        {
            imgUrl: '//lorempixel.com/g/150/180/',
            name: 'Vehicula',
            price: 165,
            rating: 3,
            binding: 'nascetur ridiculus mus',
            publisher: 'Festibulum tempus',
            releaseDate: '11-03-2014',
            details: 'Vestibulum in interdum justo, non cursus ante. Nunc nec turpis a velit feugiat tincidunt. Maecenas est odio, egestas ut consectetur vel, suscipit vitae nunc.'
        },
        {
            imgUrl: '//lorempixel.com/g/150/180/sports/1/',
            name: 'Convallis',
            price: 323,
            rating: 2,
            binding: 'Quisque nibh magna',
            publisher: 'Aenean tincidunt',
            releaseDate: '10-06-2013',
            details: 'Cras mollis placerat diam, id sollicitudin enim rutrum a. Ut bibendum eleifend nulla at commodo. Suspendisse urna augue, malesuada eget volutpat sit amet, elementum id odio.'
        }
    ];
    return {
        getBooks: function() {
            return books;
        }
    };
});

myApp.controller('KartListCtrl', function($scope, kartService) {
    $scope.kart = kartService.getKart();
    $scope.buy = function(book) {
        kartService.buy(book);
    }
});

myApp.controller('HeaderCtrl', function($scope, $location) {
    $scope.nav = {
        isActive: function(path) {
            if (path == $location.path()) {
                return true;
            }
            return false;
        }
    };
    $scope.appDetails = {
        title: 'BooKart',
        tagline: 'We have 10 millon books for you'
    };
});

myApp.controller('BookListCtrl', function($scope, bookService, kartService) {
    $scope.books = bookService.getBooks();

    $scope.addToKart = function(book) {
        kartService.addToKart(book);
    };
});
