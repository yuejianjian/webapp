
starter.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ionicConfigProvider, CONFIG) {
    $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.views.forwardCache(true);
    $ocLazyLoadProvider.config({
        debug: true
    });
    starter.controller = $controllerProvider.register;
    starter.directive = $compileProvider.directive;
    starter.filter = $filterProvider.register;
    starter.factory = $provide.factory;
    starter.service = $provide.service;
    starter.constant = $provide.constant;

      $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('standard');

      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('left');

      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html",
        })
        //首页
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'templates/home/home.html',
                    controller: 'homeCtrl',
                    cache: true,
                    resolve: {
                        desp: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                    files: ["js/controllers/home/homeCtrl.js",
                                        "lib/jquery-2.1.4.min.js",
                                    
                                    ],
                                    cache: true //指定是否启用缓存
                                },
                                "js/controllers/home/homeCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                                
                            ])
                        }]
                    }
                }
            }
        })
        //搜索页面
        .state("search", {
            url: "/search",
            templateUrl: 'templates/home/search.html',
            controller: 'searchCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/searchCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                              
                            ],
                            cache: false //指定是否启用缓存
                        },
                        "js/controllers/home/searchCtrl.js",
                        "lib/jquery-2.1.4.min.js",
                        
                    ])
                }]
            }
        })
        //体验店
        .state("showrooms", {
            url: "/showrooms",
            templateUrl: 'templates/home/showrooms.html',
            controller: 'showroomsCtrl',
            cache: true,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/showroomsCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                               
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/home/showroomsCtrl.js",
                        "lib/jquery-2.1.4.min.js",
                       
                    ])
                }]
            }
        })
        //体验店详情
        .state("showroomDetail", {
            url: "/showroomDetail?experienceId",
            templateUrl: 'templates/home/showroomDetail.html',
            controller: 'showroomDetailCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/showroomDetailCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                               
                            ],
                            cache: false //指定是否启用缓存
                        },
                       "js/controllers/home/showroomDetailCtrl.js",
                       "lib/jquery-2.1.4.min.js",
                        
                    ])
                }]
            }
        })
         //装修指南
        .state("guide", {
            url: "/guide",
            templateUrl: 'templates/home/guide.html',
            controller: 'guideCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/guideCtrl.js",
                               "lib/jquery-2.1.4.min.js",
                            
                            ],
                            cache: false //指定是否启用缓存
                        },
                        "js/controllers/home/guideCtrl.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
         //文章
        .state("article", {
            url: "/article?aid",
            templateUrl: 'templates/home/article.html',
            controller: 'articleCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/articleCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/home/articleCtrl.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        //我的家
        .state("myhouse", {
            url: "/myhouse",
            templateUrl: 'templates/home/myhouse.html',
            controller: 'myhouseCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/myhouseCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: false //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/home/myhouseCtrl.js"
                    ])
                }]
            }
        })
        //我的家----没有预约
        .state("myhouse1", {
            url: "/myhouse1",
            templateUrl: 'templates/home/myhouse1.html',
            controller: 'myhouseCtrl1',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/myhouseCtrl1.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/home/myhouseCtrl1.js"
                    ])
                }]
            }
        })
        //预约报名
        .state("yuyue1", {
            url: "/yuyue1",
            templateUrl: 'templates/home/yuyue1.html',
            controller: 'yuyue1Ctrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/yuyue1Ctrl.js",
                               "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        'js/controllers/home/yuyue1Ctrl.js',
                    ])
                }]
            }
        })
        //预约报名--详细资料
        .state("yuyue2", {
            url: "/yuyue2?name&mobile",
            templateUrl: 'templates/home/yuyue2.html',
            controller: 'yuyue2Ctrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/yuyue2Ctrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        'js/controllers/home/yuyue2Ctrl.js',
                    ])
                }]
            }
        })
         //家装升级包
        .state("updatePack", {
            url: "/updatePack",
            templateUrl: 'templates/package/updatePack.html',
            controller: 'updatePackCtrl',
            cache: true,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/package/updatePackCtrl.js",
                               "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/package/updatePackCtrl.js"
                    ])
                }]
            }
        })
         //家装升级包详情
        .state("updatePackDetail", {
            url: "/updatePackDetail?homeupId",
            templateUrl: 'templates/package/updatePackDetail.html',
            controller: 'updatePackDetailCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/package/updatePackDetailCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/package/updatePackDetailCtrl.js",
                    ])
                }]
            }
        })
        //套餐列表
        .state("package", {
            url: "/package",
            params: {"suit_id":null},
            templateUrl: 'templates/package/package.html',
            controller: 'packageCtrl',
            cache: true,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/package/packageCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/package/packageCtrl.js"
                    ])
                }]
            }
        })
        //套餐详情
        .state("packageDetail", {
            url: "/packageDetail?suit_id",
            templateUrl: 'templates/package/packageDetail.html',
            controller: 'packageDetailCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/package/packageDetailCtrl.js",
                               "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/package/packageDetailCtrl.js"
                    ])
                }]
            }
        })
        //套餐详情--样板间
        .state("modellist", {
            url: "/modellist?suit_id",
            templateUrl: 'templates/package/modellist.html',
            controller: 'modellistCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/package/modellistCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/package/modellistCtrl.js"
                    ])
                }]
            }
        })
        //专题页
        .state("special", {
            url: "/special",
            templateUrl: 'templates/home/special.html',
            controller: 'specialCtrl',
            cache: true,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/home/specialCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/home/specialCtrl.js"
                    ])
                }]
            }
        })
        
        //密码登录
        .state("login", {
            url: "/login",
            templateUrl: 'templates/sign/login.html',
            controller: 'loginCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/loginCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/sign/loginCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        //手机登录
        .state("mobileLogin", {
            url: "/mobileLogin",
            templateUrl: 'templates/sign/mobileLogin.html',
            controller: 'mobileLoginCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/mobileLoginCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                       "js/controllers/sign/mobileLoginCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        //找回密码
        .state("forgetPwd", {
            url: "/forgetPwd",
            templateUrl: 'templates/sign/forgetPwd.html',
            controller: 'forgetPwdCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/forgetPwdCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/sign/forgetPwdCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        //修改密码
        .state("modifyLoginPwd", {
            url: "/modifyLoginPwd",
            templateUrl: 'templates/sign/modifyLoginPwd.html',
            controller: 'modifyLoginPwdCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/modifyLoginPwdCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                       "js/controllers/sign/modifyLoginPwdCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        
         //绑定手机
        .state("bindMobile", {
            url: "/bindMobile",
            templateUrl: 'templates/sign/bindMobile.html',
            controller: 'bindMobileCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/bindMobileCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/sign/bindMobileCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })
        //账号注册
        .state("register", {
            url: "/register",
            templateUrl: 'templates/sign/register.html',
            controller: 'registerCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/sign/registerCtrl.js",
                                "js/util.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "js/controllers/sign/registerCtrl.js",
                        "js/util.js",
                        "lib/jquery-2.1.4.min.js",
                    ])
                }]
            }
        })

        //来我家
        .state('tab.houseshow', {
            url: '/houseshow',
            views: {
                'tab-houseshow': {
                    templateUrl: 'templates/houseshow/houseshow.html',
                    controller: 'houseshowCtrl',
                    resolve: {
                        desp: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                    files: ["js/controllers/houseshow/houseshowCtrl.js",
                                        "lib/jquery-2.1.4.min.js",
                                    ],
                                    cache: true //指定是否启用缓存
                                },
                                "lib/jquery-2.1.4.min.js",
                                "js/controllers/houseshow/houseshowCtrl.js"
                            ])
                        }]
                    }
                }
            }
        })
        // 样板间介绍
        .state("modelroom", {
            url: "/modelroom?prototypeId",
            templateUrl: 'templates/houseshow/modelroom.html',
            controller: 'modelroomCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/houseshow/modelroomCtrl.js",
                            
                                "lib/jquery-2.1.4.min.js"
                            ],
                            cache: false //指定是否启用缓存
                        },
                        "js/controllers/houseshow/modelroomCtrl.js",
                        "lib/jquery-2.1.4.min.js"
                    ])
                }]
            }
        })
        //来我家--地图
        .state("map", {
            url: "/map",
            templateUrl: 'templates/houseshow/map.html',
            controller: 'mapCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/houseshow/mapCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/houseshow/mapCtrl.js"
                    ])
                }]
            }
        })
        //商城
        .state('tab.mall', {
            url: '/mall',
            views: {
                'tab-mall': {
                    templateUrl: 'templates/mall/mall.html',
                    controller: 'mallCtrl',
                    resolve: {
                        desp: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                    files: ["js/controllers/mall/mallCtrl.js"
                                    ],
                                    cache: true //指定是否启用缓存
                                },
                                
                            ])
                        }]
                    }
                }
            }
        })

        //我的
        .state('tab.my', {
            url: '/my',
            views: {
                'tab-my': {
                    templateUrl: 'templates/my/my.html',
                    controller: 'myCtrl',
                    cache: false,
                    resolve: {
                        desp: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                    files: ["js/controllers/my/myCtrl.js",
                                        "lib/jquery-2.1.4.min.js",
                                    ],
                                    cache: false //指定是否启用缓存
                                },
                                "lib/jquery-2.1.4.min.js",
                                "js/controllers/my/myCtrl.js"
                            ])
                        }]
                    }
                }
            }
        })
        //个人中心
        .state("personCenter", {
            url: "/personCenter",
            templateUrl: 'templates/my/personCenter.html',
        })
        //我的预约
        .state("myYuyue", {
            url: "/myYuyue",
            templateUrl: 'templates/my/myYuyue.html',
            controller: 'myYuyueCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/my/myYuyueCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/my/myYuyueCtrl.js",
                    ])
                }]
            }
        })
        //我的收藏
        .state("myCollection", {
            url: "/myCollection",
            templateUrl: 'templates/my/myCollection.html',
            controller: 'myCollectionCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/my/myCollectionCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                        "js/controllers/my/myCollectionCtrl.js"
                    ])
                }]
            }
        })
        //我的合同
        .state("myContract", {
            url: "/myContract",
            templateUrl: 'templates/my/myContract.html',
            controller: 'myContractCtrl',
            cache: false,
            resolve: {
                desp: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                            files: ["js/controllers/my/myContractCtrl.js",
                                "lib/jquery-2.1.4.min.js",
                            ],
                            cache: true //指定是否启用缓存
                        },
                        "lib/jquery-2.1.4.min.js",
                       "js/controllers/my/myContractCtrl.js"
                    ])
                }]
            }
        })
        

    $urlRouterProvider.otherwise('tab/home');
});