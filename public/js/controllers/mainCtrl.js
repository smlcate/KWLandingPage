app.controller('mainCtrl', ['$scope', '$http', '$window', '$compile', function($scope, $http, $window, $compile) {
  $scope.test = 'hello';

  function toEmailSignUp() {

    $('#emailListSignUp').css('display','flex');


  }

  $scope.cancelEmailListSignUp = function() {
    $('#emailListSignUp').css('display','none');
  }

  $scope.toEmailSignUp = function() {
    console.log('hit');
    toEmailSignUp();
  }


  console.log('hello');
}]);
