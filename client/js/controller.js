/**
 * Created by Agrawal Deepankar on 16/11/2016.
 */

jeenee.controller('appController',function ($scope,$http) {

    $scope.author = '';
    $scope.imageURL = '';
    $scope.text = '';
    $scope.getOutput = function () {

        console.log($scope.query);
        if($scope.query && $scope.query.length>5){

            $http.get('http://localhost:9000/api/ask?q='+ encodeURIComponent($scope.query)).then(function (data) {
                $scope.author = data.data.searchResult.author;
                $scope.imageURL = data.data.searchResult.imageURL;
                $scope.thought = data.data.searchResult.text;
                console.log($scope.author);
            })
        }

    }

});