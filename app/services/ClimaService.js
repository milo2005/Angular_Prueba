app.factory("climaService", function($http){
  var serviceObject={
    temperatura:"",
    humedad:"",
    presion:"",
    descripcion:""};

  var getClima = function(){
      $http({
        method:'GET',
        url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22popayan%2C%20co%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
      }).then(
        function successCallback(response){
            var data = response.data;
            var atmosfera = data.query.results.channel.atmosphere;
            var condition = data.query.results.channel.item.condition;
            serviceObject.humedad = data.query.results.channel.atmosphere.humidity;
            serviceObject.presion = atmosfera.pressure;
            serviceObject.temperatura = condition.temp;
            serviceObject.descripcion = condition.text;

        }, function errorCallback(response){

        }
      );
  };

  getClima();

  return serviceObject;

});
