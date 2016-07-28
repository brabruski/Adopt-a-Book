(function () {
    "use strict";
    angular.module("adoptApp")
    .controller("AdoptHomeController", function ($scope, $http) {
        $http.get('data/book_data.json').then(function (bookData) {
            $scope.books = bookData.data;
        });

    });
})();