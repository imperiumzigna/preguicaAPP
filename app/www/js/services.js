angular.module('starter.services',[])

/*.factory('dropbox',function(){

    $cordovaOauth.dropbox("ixv5vjw1j57ovoo");


  })*/

  .factory("Auth", ["$firebaseAuth", "$rootScope",
    function ($firebaseAuth, $rootScope) {
      var ref = new Firebase(firebaseUrl);
      return $firebaseAuth(ref);
    }]);
