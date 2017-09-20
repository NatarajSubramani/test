
'use strict';
var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl :'template/tabList.html'

})
.when('/page',{
    templateUrl :'template/detailpage.html'

})

})

myApp.directive("myfonds", function(){
    return {
        restrick:"A",
        templateUrl : 'template/myfunds.html'
    }

})

myApp.directive("priceoverview", function(){
    return {
        restrick:"A",
        controller: 'fetchData',
        templateUrl : 'template/PriceOverview.html'
       
        
    }

});
myApp.directive("mostpopular", function(){
    return {
        restrick:"A",
        templateUrl : 'template/mostpopular.html'
       
        
}
});

myApp.directive("performing", function(){
    return {
        restrick:"A",
        templateUrl : 'template/performing.html'
       
        
}
});


myApp.directive("detailpage", function(){
    return {
        restrick:"A",
        controller:"redirect",
        templateUrl : 'template/detailpage.html'
       
        
}
});



myApp.directive("fundinformation", function(){
    return {
        restrick:"A",
        controller: 'fetchData',
        templateUrl : 'template/fundInpermation.html'
       
        
    }

});

myApp.controller("redirect", function($scope,$location){
    $scope.goto = function(page) {
        $location.path(page);
    };
})


myApp.controller("fetchData",function($scope, getData){

    getData.fetchUserdata().then(function(response){
    $scope.userdetail = response.data.fundOverview;
    $scope.information = response.data.discretePerformance;
     console.log($scope.userdetail)
       
     })

})


myApp.factory("getData",['$http',function($http){
    var odj ={}

    odj.fetchUserdata = function() {
        return $http.get('fundtable.json')
    }
  return odj
}])


