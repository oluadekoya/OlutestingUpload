var TestApp = angular.module("TestApp",
      [
        "ngRoute", "TestAppController2"

      ]);

TestApp.config(["$routeProvider", function($routeProvider)
                       {
                         $routeProvider.
                             when("/phones", {
                               templateUrl: "/phone-list.html",
                               controller: "TestAppController1"
                             }).
                             when("/phones/:phoneId", {
                                templateUrl: "/phone-detail.html",
                                controller: "TestAppController1"
                             }).
                             otherwise({
                               redirectTo: "/phones"
                             });

                       }]);
