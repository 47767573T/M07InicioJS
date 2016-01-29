/**
 * Created by 47767573t on 29/01/16.
 */
app.controller('myController', function($scope) {
    $scope.cel = 0;
    $scope.far = 32;

    $scope.aFarenheit = function() {
        return ($scope.cel*1.8)+32;
    };

    $scope.aCelcius = function() {
        return ($scope.far-32)/1.8;
    };
});