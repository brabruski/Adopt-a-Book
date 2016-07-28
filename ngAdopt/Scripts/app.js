angular.module('adoptApp', ["ngMaterial"])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
    });
