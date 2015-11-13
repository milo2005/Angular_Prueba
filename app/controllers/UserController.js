app.controller("UserController",function($scope){


  $scope.usuario = {nombre:"Dario", cedula:123, edad:25};
  $scope.subirEdad = function(){
    $scope.usuario.edad = 30;
  };


});
