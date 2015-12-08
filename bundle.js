/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	var TestAppController2 = angular.module('TestAppController2', []);
	
	TestAppController2.controller('TestAppController1', ['$scope', '$http',
	  function($scope, $http) {
	    $http.get('/phones.json').success(function(data) {
	      $scope.phones = data;
	    });
	
	    $scope.orderProp = 'age';
	  }]);
	
	TestAppController2.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	  function($scope, $routeParams) {
	    $scope.phoneId = $routeParams.phoneId;
	  }]);


/***/ },
/* 2 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(1);
		__webpack_require__(1);
		module.exports = __webpack_require__(2);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		
		var TestAppController2 = angular.module('TestAppController2', []);
		
		TestAppController2.controller('TestAppController1', ['$scope', '$http',
		  function($scope, $http) {
		    $http.get('phones/phones.json').success(function(data) {
		      $scope.phones = data;
		    });
		
		    $scope.orderProp = 'age';
		  }]);
		
		TestAppController2.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
		  function($scope, $routeParams) {
		    $scope.phoneId = $routeParams.phoneId;
		  }]);
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
			__webpack_require__(1);
			(function webpackMissingModule() { throw new Error("Cannot find module \"./controler.js\""); }());
			module.exports = __webpack_require__(2);
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			
			var TestAppController2 = angular.module('TestAppController2', []);
			
			TestAppController2.controller('TestAppController1', ['$scope', '$http',
			  function($scope, $http) {
			    $http.get('phones/phones.json').success(function(data) {
			      $scope.phones = data;
			    });
			
			    $scope.orderProp = 'age';
			  }]);
			
			TestAppController2.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
			  function($scope, $routeParams) {
			    $scope.phoneId = $routeParams.phoneId;
			  }]);
		
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			/******/ (function(modules) { // webpackBootstrap
			/******/ 	// The module cache
			/******/ 	var installedModules = {};
			/******/
			/******/ 	// The require function
			/******/ 	function __webpack_require__(moduleId) {
			/******/
			/******/ 		// Check if module is in cache
			/******/ 		if(installedModules[moduleId])
			/******/ 			return installedModules[moduleId].exports;
			/******/
			/******/ 		// Create a new module (and put it into the cache)
			/******/ 		var module = installedModules[moduleId] = {
			/******/ 			exports: {},
			/******/ 			id: moduleId,
			/******/ 			loaded: false
			/******/ 		};
			/******/
			/******/ 		// Execute the module function
			/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ 		// Flag the module as loaded
			/******/ 		module.loaded = true;
			/******/
			/******/ 		// Return the exports of the module
			/******/ 		return module.exports;
			/******/ 	}
			/******/
			/******/
			/******/ 	// expose the modules object (__webpack_modules__)
			/******/ 	__webpack_require__.m = modules;
			/******/
			/******/ 	// expose the module cache
			/******/ 	__webpack_require__.c = installedModules;
			/******/
			/******/ 	// __webpack_public_path__
			/******/ 	__webpack_require__.p = "";
			/******/
			/******/ 	// Load entry module and return exports
			/******/ 	return __webpack_require__(0);
			/******/ })
			/************************************************************************/
			/******/ ([
			/* 0 */
			/***/ function(module, exports, __webpack_require__) {
			
				__webpack_require__(1);
				(function webpackMissingModule() { throw new Error("Cannot find module \"./controler.js\""); }());
				module.exports = __webpack_require__(2);
			
			
			/***/ },
			/* 1 */
			/***/ function(module, exports) {
			
				var TestApp = angular.module("TestApp",
				      [
				        "ngRoute", "TestAppController2"
				
				      ]);
				
				TestApp.config(["$routeProvider", function($routeProvider)
				                       {
				                         $routeProvider.
				                             when("/phones", {
				                               templateUrl: "partials/phone-list.html",
				                               controller: "TestAppController1"
				                             }).
				                             when("/phones/:phoneId", {
				                                templateUrl: "partials/phone-detail.html",
				                                controller: "TestAppController1"
				                             }).
				                             otherwise({
				                               redirectTo: "/phones"
				                             });
				
				                       }]);
			
			
			/***/ },
			/* 2 */
			/***/ function(module, exports) {
			
				/******/ (function(modules) { // webpackBootstrap
				/******/ 	// The module cache
				/******/ 	var installedModules = {};
				
				/******/ 	// The require function
				/******/ 	function __webpack_require__(moduleId) {
				
				/******/ 		// Check if module is in cache
				/******/ 		if(installedModules[moduleId])
				/******/ 			return installedModules[moduleId].exports;
				
				/******/ 		// Create a new module (and put it into the cache)
				/******/ 		var module = installedModules[moduleId] = {
				/******/ 			exports: {},
				/******/ 			id: moduleId,
				/******/ 			loaded: false
				/******/ 		};
				
				/******/ 		// Execute the module function
				/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				
				/******/ 		// Flag the module as loaded
				/******/ 		module.loaded = true;
				
				/******/ 		// Return the exports of the module
				/******/ 		return module.exports;
				/******/ 	}
				
				
				/******/ 	// expose the modules object (__webpack_modules__)
				/******/ 	__webpack_require__.m = modules;
				
				/******/ 	// expose the module cache
				/******/ 	__webpack_require__.c = installedModules;
				
				/******/ 	// __webpack_public_path__
				/******/ 	__webpack_require__.p = "";
				
				/******/ 	// Load entry module and return exports
				/******/ 	return __webpack_require__(0);
				/******/ })
				/************************************************************************/
				/******/ ([
				/* 0 */
				/***/ function(module, exports) {
				
					var TestApp = angular.module("TestApp", []);
				
					TestApp.controller("TestAppController1", function ($scope, $http){
					  $http.get("phones.json").success(function(data)  {
					     $scope.phones = data;
					  });
				
					          $scope.orderProp = "age";
				
					});
				
				
				/***/ }
				/******/ ]);
			
			/***/ }
			/******/ ]);
			//# sourceMappingURL=bundle.js.map
		
		/***/ }
		/******/ ]);
		//# sourceMappingURL=bundle.js.map
	
	/***/ }
	/******/ ]);
	//# sourceMappingURL=bundle.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map