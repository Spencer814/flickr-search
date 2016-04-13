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
      $scope.results = response.data.photos.photo;
      console.log($scope.results);
    },
    function(response){
      alert('error');
    });
  };
});
