let myApp = angular.module("myNinjaApp", ["ngRoute", "ngAnimate"]);

//The function passed in can be fired when before our app runs/loads, etc.
//i.e. routing
myApp.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "NinjaController"
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "ContactController"
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "NinjaController"
      })
      .when("/thankyou", {
        templateUrl: "views/thankyou.html",
        controller: "ContactController"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

//The function passed in can be fired when our app runs/loads, etc.
// myApp.run(function() {});

myApp.directive("randomNinjaImage", [
  function() {
    //This should return an object
    return {
      //E means we can only use the directive as an Element
      restrict: "E",
      scope: {
        //These were passed in from the custom directive
        ninjas: "=",
        title: "="
      },
      templateUrl: "./views/randomNinjaImage.html",
      transclude: true,
      //replaces <random-ninja-image> with <section>
      //i.e. the parent tag in the randomNinjaImage.html
      replace: true,
      controller: function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    };
  }
]);

myApp.controller("NinjaController", [
  "$scope",
  "$http",
  function($scope) {
    $scope.message = "Hello everyone! Welcome to my Ninja App";

    //Removing a ninja
    $scope.removeItem = function(item) {
      var index = $scope.ninjas.indexOf(item);
      $scope.ninjas.splice(index, 1);
    };

    //Removing all ninjas
    $scope.removeAll = function() {
      $scope.ninjas = [];
    };

    //Adding a new ninja
    $scope.addNinja = function() {
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: $scope.newNinja.rate,
        available: true
      });
      //Clear the form after adding
      $scope.newNinja.name = "";
      $scope.newNinja.belt = "";
      $scope.newNinja.rate = "";
    };

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "orange",
        rate: 50,
        available: true,
        imageSource: "images/image1.jpg"
      },
      {
        name: "Crystal",
        belt: "green",
        rate: 100,
        available: true,
        imageSource: "images/image2.jpg"
      },
      {
        name: "Kenji",
        belt: "brown",
        rate: 150,
        available: false,
        imageSource: "images/image3.jpg"
      },
      {
        name: "Shaun",
        belt: "blue",
        rate: 200,
        available: true,
        imageSource: "images/image4.jpg"
      }
    ];

    //Converts a object to json
    // console.log(angular.toJson($scope.ninjas));

    // $http.get("data/ninja-list.json").success(function(data) {
    //   $scope.ninjas = data;
    // });
  }
]);

myApp.controller("ContactController", [
  "$scope",
  "$location",
  function($scope, $location) {
    $scope.thankyouMessage = function() {
      $location.path("/thankyou");
    };
  }
]);
