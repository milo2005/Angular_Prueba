app.controller("ClimaController",function($scope,climaService){

  $scope.getTemp = function(){
    return climaService.temperatura;
  };

  $scope.getHum = function(){
    return climaService.humedad;
  };

  $scope.getPres = function(){
    return climaService.presion;
  };

  $scope.getDes = function(){
    return climaService.descripcion;
  };

});
