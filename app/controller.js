app.controller('mainCtrl',function($scope,$http){
    function successCallback(response){
        //console.log(response);
        $scope.passage=response.data.passage;
    }

    function errorCallback(response){
        console.log(response);
    }

    $http.get('/content/passage.json').then(successCallback, errorCallback);

});
