var appContainer = angular.module('appContainer', ['ngRoute']);

appContainer.config(function($routeProvider) {
    $routeProvider
        .when('/app1', {
            template: '<div ng-app="app1"><h1>App 1</h1></div>'
        })
        .when('/app2', {
            template: '<div ng-app="app2"><h1>App 2</h1></div>'
        })
        .when('/app3', {
            template: '<div ng-app="app3"><h1>App 3</h1></div>'
        })
        .otherwise({ redirectTo: '/app1' });
});
