
/**公共请求服务**/
starter.
factory("httpSvc", ["$rootScope","$q", "$http", "CONFIG", "$filter", function($rootScope,$q, $http, CONFIG, $filter) {
    var httpObj = {
        //请求报文处理
        initParams: function(params) {
            var deferred = $q.defer();

            var defaultParams = angular.extend({}, params);

            deferred.resolve(angular.copy(defaultParams));

            return deferred.promise;
        },
        getHttpPromise: function(method, url, params, timeout) {
            var deferred = $q.defer();
            var config = angular.extend({}, {
                "method": method,
                "url": CONFIG.HTTP_URL + url,
                "headers": {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json;charset=utf-8"
                },
                "timeout": timeout || 10000,
                "responseType": "json"
            });


            if (angular.uppercase(method) === "GET") {
                config = angular.extend(config, {
                    "params": params
                });
            } else if (angular.uppercase(method) === "POST") {
                config = angular.extend(config, {
                    "data": params
                });
            }

            $http(config).success(function(data) {
                deferred.resolve(data);
                console.info("请求成功:", data);
            }).error(function(data) {
                deferred.reject(data);
                console.info("请求失败:", data);
            });
            return deferred.promise;
        }
    };
    var factory = {
        post: function(url, params, timeout) {
            var deferred = $q.defer();
            // params = httpObj.initParams(params);
            httpObj.initParams(params).then(function(initParams) {
                httpObj.getHttpPromise("POST", url, initParams, timeout).then(function(data) {
                    deferred.resolve(data);
                    console.log(url, data);
                }, function(data) {
                    deferred.reject(data);
                });
            });
            return deferred.promise;
        },
        getToken: function() {
            //发送获取token的请求;
            var deferred = $q.defer();
            var errCount = 0;

            (function getToken(deferred) {
                factory.post("/api/token/index", {
                    // head_tran_code: "P00001"
                }).then(function(data) {
                    // console.info(data);
                    // deferred.resolve(data.response.sign);
                    if (data.code == "1") {
                        console.info(data);
                        deferred.resolve(data.response.sign);
                    } else {
                        if (errCount++ < 2) {
                            getToken(deferred);
                        } else {
                            console.info("获取token失败");
                            deferred.reject();
                        }
                    }
                }, function() {
                    console.info("获取token失败");
                    deferred.reject();
                    if (errCount++ < 2) {
                        getToken(deferred);
                    } else {
                        console.info("获取token失败");
                        deferred.reject();
                    }
                })
            })(deferred);

            return deferred.promise;
        }
    };
    return factory;
}])
/** 拦截器-处理交互效果 **/
.factory("httpInterceptor", ["$injector", "$q", function($injector, $q) {
    return {
        "request": function(config) {
            if (config.method == "POST") {
                var popupSvc = $injector.get("popupSvc");
                popupSvc.loading();
            }
            return config;
        },
        "requestError": function(rejection) {
            if (rejection.config.method == "POST") {
                var popupSvc = $injector.get("popupSvc");
                popupSvc.loadingHide();
            }
            return $q.reject(rejection);
        },
        "response": function(response) {
            if (response.config.method == "POST") {
                var popupSvc = $injector.get("popupSvc");
                popupSvc.loadingHide();
                
            }
            return response;
        },
        "responseError": function(rejection) {
            console.log(rejection);
            if (rejection.status == 401) {

                var $state = $injector.get("$state");
            
            }
            if (rejection.status == 500) {
                var popupSvc = $injector.get("popupSvc");
                    popupSvc.loadingHide();
            }
            if (rejection.config.method == "POST") {
                var popupSvc = $injector.get("popupSvc");
           
                popupSvc.loadingHide();
                if (rejection.status == -1) {
                   
                }
            }
            return $q.reject(rejection);
        }
    }
}])
//注册拦截器
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}])


//弹框服务
.factory('popupSvc', ['$ionicLoading', '$ionicPopup', '$rootScope', function($ionicLoading, $ionicPopup, $rootScope) {
    return {
        loading: function(message, duration) {
            if (message) {
                $ionicLoading.show({
                    template: message,
                    duration: duration ? duration : 3000
                });
            } else {
                $ionicLoading.show({
                    template: "<ion-spinner icon='spiral'></ion-spinner>"
                });
            }
        },
        alert: function(message, okText) {
            return $ionicPopup.alert({
                cssClass: "popup-alert alert-has-btn",
                okType: "button-secondary",
                template: '<div class="message-content">' + message + '</div>',
                okText: okText
            });
        },
        message: function(message) {
            return $ionicPopup.alert({
                cssClass: "popup-alert btn-none",
                template: '<div class="message-content">' + message + '</div>',
            });
        },
        confirm: function(message, okText, cancelText, closeBtn) {
            var scope = $rootScope.$new();
            var _config = {
                cssClass: "popup-confirm",
                template: '<div class="message-content"><div class="close-btn"><i ng-if="closeBtn" ng-click="close()" class="ion-close-round close-btn"></i></div>' + message + '</div>', // String (可选)。放在弹窗body内的html模板。
                cancelText: okText || "确定", // String (默认: 'Cancel')。一个取消按钮的文字。
                cancelType: 'confirm-btn', // String (默认: 'button-default')。取消按钮的类型。
                okText: cancelText || "取消", // String (默认: 'OK')。OK按钮的文字。
                okType: 'cancel-btn', // String (默认: 'button-positive')。OK按钮的类型。
                scope: scope
            };
            var confirm = $ionicPopup.confirm(_config);
            scope.closeBtn = typeof closeBtn == 'boolean' ? closeBtn : true;
            scope.close = function() {
                confirm.close();
            };
            return confirm;
        },
        show: function(message, buttons) {
            var scope = $rootScope.$new();
            var _config = {
                cssClass: "popup-confirm has-close",
                template: '<div class="message-content"><div class="close-btn"><i ng-click="close()" class="ion-close-round close-btn"></i></div>' + message + '</div>', // String (可选)。放在弹窗body内的html模板。
                buttons: angular.extend([{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                    text: 'Cancel',
                    type: 'button-default'
                }, {
                    text: 'OK',
                    type: 'button-default'
                }], buttons),
                scope: scope
            };
            var show = $ionicPopup.confirm(_config);
            scope.close = function() {
                show.close();
            };
            return show;
        },
        loadingShow: function() {
            this.loading();
        },
        loadingHide: function() {
            $ionicLoading.hide();
        }
    };
}])
.factory('base64', function() {
    function Base64() {
         // private property
         _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
         // public method for encoding
         this.encode = function (input) {
          var output = "";
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          var i = 0;
          input = _utf8_encode(input);
          while (i < input.length) {
           chr1 = input.charCodeAt(i++);
           chr2 = input.charCodeAt(i++);
           chr3 = input.charCodeAt(i++);
           enc1 = chr1 >> 2;
           enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
           enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
           enc4 = chr3 & 63;
           if (isNaN(chr2)) {
            enc3 = enc4 = 64;
           } else if (isNaN(chr3)) {
            enc4 = 64;
           }
           output = output +
           _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
           _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
          }
          return output;
         }
         // public method for decoding
         this.decode = function (input) {
          var output = "";
          var chr1, chr2, chr3;
          var enc1, enc2, enc3, enc4;
          var i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          while (i < input.length) {
           enc1 = _keyStr.indexOf(input.charAt(i++));
           enc2 = _keyStr.indexOf(input.charAt(i++));
           enc3 = _keyStr.indexOf(input.charAt(i++));
           enc4 = _keyStr.indexOf(input.charAt(i++));
           chr1 = (enc1 << 2) | (enc2 >> 4);
           chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
           chr3 = ((enc3 & 3) << 6) | enc4;
           output = output + String.fromCharCode(chr1);
           if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
           }
           if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
           }
          }
          output = _utf8_decode(output);
          return output;
         }
         // private method for UTF-8 encoding
         _utf8_encode = function (string) {
          string = string.replace(/\r\n/g,"\n");
          var utftext = "";
          for (var n = 0; n < string.length; n++) {
           var c = string.charCodeAt(n);
           if (c < 128) {
            utftext += String.fromCharCode(c);
           } else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
           } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
           }
          }
          return utftext;
         }
         // private method for UTF-8 decoding
         _utf8_decode = function (utftext) {
          var string = "";
          var i = 0;
          var c = c1 = c2 = 0;
          while ( i < utftext.length ) {
           c = utftext.charCodeAt(i);
           if (c < 128) {
            string += String.fromCharCode(c);
            i++;
           } else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
           } else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
           }
          }
          return string;
         }
    };
    var BASE_64=new Base64();
    return {
        encode: function(str) {
            return BASE_64.encode(str)
        },
        decode: function(str) {
            return BASE_64.decode(str)
        },
        
    };
})
.factory('checkSvc', function($rootScope,$state) {    
    return {
        checkLogin: function(){
           if($rootScope.token&&$rootScope.token.length==40){
              console.log('已登录');
           }else{
              $state.go('login');
           }
        }
    };
})
    
    