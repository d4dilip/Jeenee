
function MotivationController($scope, $element, $attrs) {

    $scope.imageURL = $attrs.image;
    console.log($attrs.image);
    $scope.author = $attrs.author;
    $scope.thought = $attrs.thought;

}