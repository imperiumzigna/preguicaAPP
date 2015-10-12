angular.module('starter.controllers',[])

.controller('CadastrarCtrl',function($scope){


  })
// falta ajeitar
//.controller('DropboxCtrl',function($scope,$cordovaOauth, dropbox){
//$scope.dropbox();
//  })

.controller('EntrarCtrl',function($scope){

  })

  .controller('LoginCtrl', function ($scope, $ionicModal, $state) {

    $ionicModal.fromTemplateUrl('templates/cadastrar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.createUser = function (user) {

    }
    $scope.signIn = function () {
      $state.go('');
    } })

