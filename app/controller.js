app.controller('mainCtrl',function($scope,$http,$interval){
    $scope.showIndex =0;

    $scope.getPassage = function getPassage(){
      function successCallback(response){
          $scope.passage=response.data.passage;
          $scope.blogs=response.data.blogs;
      }

      function errorCallback(response){
          console.log(response);
      }

      $http.get('/ai4581532.github.io/content/passage.json').then(successCallback, errorCallback);
    }

    $scope.getPassage();

    $scope.inter = $interval(function(){
      if($scope.showIndex<4){
          $scope.showIndex++;
      }else{
          $scope.showIndex=0;
      }

    },5000);

    $scope.getBlogs = function getBlogs(){
      function successCallback(response){
          $scope.blogs=response.data;
      }

      function errorCallback(response){
          console.log(response);
      }

      $http.get('').then(successCallback, errorCallback);
    }

});
