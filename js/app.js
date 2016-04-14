'use strict';
angular.module('flickrApp', [])
.config(function($httpProvider){
  $httpProvider.defaults.useXDomain = true;
})

.controller('flickrController', function($scope, $http){
  $scope.getPhotos = function(){
    var url = "https://api.flickr.com/services/rest";
    var params = {
      method: "flickr.photos.search",
      api_key: "03f566bb6d192c19c91ade74612807c4",
      tags: $scope.search_tag,
      format: "json",
      nojsoncallback: 1
    };
    $http({
      method: "GET",
      url: url,
      params: params
    })
    .then(function(response){
      $scope.results = response.data.photos.photo,

      // var object = new Array(100);
      // for(var i=0; i<object.length; i++){
      //   object[i] = i + 1;
      // };

      $scope.image = "https://farm" + $scope.results[0].farm + ".staticflickr.com/" + $scope.results[0].server + "/" + $scope.results[0].id + "_" + $scope.results[0].secret + ".jpg",
      console.log($scope.image);
      console.log($scope.results[0].title);
    },
    function(response){
      alert('error');
    });
  };
});
