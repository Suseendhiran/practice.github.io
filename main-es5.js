function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n  <router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"background\"></div>\n<div class=\"container h-100\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col\">\n\n    </div>\n    <div class=\"col-sm-12 col-md-8 col-lg-4\">\n    <div class=\"card  \" >\n        <div class=\"login-card\">\n        <img class=\"card-img-top rounded-circle   profile\" src=\"https://www.templatebeats.com/files/images/profile_user.jpg\" alt=\"Card image\">\n        <h4 class=\"text-center\">Login</h4>\n        <p class=\"text-center\">Sign in to your account</p>\n        <div class=\"card-body\">\n           <form  [formGroup]=\"loginForm\" class=\" \" (ngSubmit)=\"login()\"> \n            <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"your email\" formControlName=\"username\" required />\n                 <p *ngIf=\"name.touched &&name.invalid && name.errors.required\">UserEmail is required</p>\n                 <p *ngIf=\"name.touched &&name.invalid && name.errors.email\">Give a proper email address</p>\n              </div>\n              \n              <div class=\"form-group\">\n                 <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"password\" formControlName=\"upassword\" required  />\n                 <p *ngIf=\"upwd.touched &&upwd.invalid && upwd.errors.required\">Password is required</p>\n                 <p *ngIf=\"upwd.touched &&upwd.invalid && upwd.errors.pattern\">Give a valid password</p>\n              </div>\n              <div>\n                <span style=\"width:48%; text-align:left;  display: inline-block;\">\n                    <label>\n                        <input  type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                    </span>\n                <span style=\"width:50%; text-align:right;  display: inline-block;\">\n                    <input type=\"submit\" class=\"btn btn-success btn-block\" value=\"Sign In\" [disabled]=\"!loginForm.valid\"  ></span>\n            </div> \n           \n        </form>\n        </div> \n    </div>\n        <div id=\"formFooter\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-12 \">\n                    <a class=\"underlineHover\" href=\"#\">Connect with</a>\n\n                </div>\n                <div class=\"col-md-2\">\n                    <i class=\"fab fa-twitter\"></i>    \n                    \n                 </div>\n                <div class=\"col-md-2\">\n                    <i class=\"fab fa-facebook\"></i>\n                </div>\n            </div>\n             \n    </div>\n      </div>\n      \n  </div>  \n  <div class=\"col\">\n        \n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"home-section\">\n    <section class=\"side-container\">\n        <ul>\n            <li><img src=\"../../assets/images/menu.png\"/></li>\n            <li><img src=\"../../assets/images/gmail.png\"/></li>\n            <li class=\"active\"><img src=\"../../assets/images/skype.png\"/></li>\n            <li><img src=\"../../assets/images/fbook.png\"/></li>\n            <li><img src=\"../../assets/images/whatsapp.png\"/></li>\n            <li><img src=\"../../assets/images/plus3.png\"/></li>\n            \n        </ul>\n    </section>\n    <section class=\"inbox-container\">\n        <ul>\n            <li class=\"inbox-title\"> <h6>Inbox</h6><img src=\"../../assets/images/admin.png\"/></li>\n            <li><span>All</span> <span>89</span></li>\n            \n            <li class=\"list-active\"><span>Messages</span> <span>11</span></li>\n            <li><span class=\"active\">Unread</span> <span>4</span></li>\n\n            \n            <li><span>Important</span> <span>1</span></li>\n            <li><span>Teams</span> <span>2</span></li>\n            <li><span>Groups</span> <span>4</span></li>\n            <li><span>Channels</span> <span>2</span></li>\n            <li><span>Locations</span> <span></span></li>\n            <li><span>Media</span> <span>88</span></li>\n            <li><span>Help</span> <span></span></li>\n            <li><span>Settings</span> <span></span></li>\n            \n        </ul>\n    </section>\n<div class = \"combine\">\n    <section class=\"contact-container\">\n        <div class=\"contact-header\">\n            <div class=\"form-group has-search\">\n                <span class=\"fa fa-search form-control-feedback\"></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n              </div>\n        </div>\n        <div class=\"contact-list\">\n            <ul class=\"list-inline\">\n                <li [class]=\"this.user.img == 6 ? 'contact-list-sep active':'contact-list-sep'\"   (click)=\"getUser(0)\">\n                    <div class=\"conatct-profile\">\n                        \n                        <img class=\"rounded-circle\" src=\"../../assets/images/6.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Tony</h5>\n                        <p>Lorem ipsum</p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n                <li [class]=\"this.user.img == 1 ? 'contact-list-sep active':'contact-list-sep'\"   (click)=\"getUser(1)\">\n                    <div class=\"conatct-profile\">\n                        <img class=\"rounded-circle \" src=\"../../assets/images/1.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Peter</h5>\n                        <p>Lorem ipsum </p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n                <li [class]=\"this.user.img == 2 ? 'contact-list-sep active':'contact-list-sep'\"   (click)=\"getUser(2)\">\n                    <div class=\"conatct-profile\">\n                        <img class=\"rounded-circle\" src=\"../../assets/images/2.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Bruce</h5>\n                        <p>Lorem ipsum</p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n                <li [class]=\"this.user.img == 3 ? 'contact-list-sep active':'contact-list-sep'\"   (click)=\"getUser(3)\">\n                    <div class=\"conatct-profile\">\n                        <img class=\"rounded-circle\" src=\"../../assets/images/3.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Loki</h5>\n                        <p>Lorem ipsum</p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n                <li [class]=\"this.user.img == 4 ? 'contact-list-sep active':'contact-list-sep'\" (click)=\"getUser(4)\">\n                    <div class=\"conatct-profile\">\n                        <img class=\"rounded-circle\" src=\"../../assets/images/4.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Steve</h5>\n                        <p>Lorem ipsum</p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n                <li [class]=\"this.user.img == 5 ? 'contact-list-sep active':'contact-list-sep'\" (click)=\"getUser(5)\">\n                    <div class=\"conatct-profile\">\n                        <img class=\"rounded-circle\" src=\"../../assets/images/5.jpg\"/>\n                    </div>\n                    <div class=\"contact-description\">\n                        <h5>Tchala</h5>\n                        <p>Lorem ipsum</p>\n                    </div>\n                    <div class=\"conatct-action\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                        <p>1 Min</p>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </section>\n\n    <section class=\"message-container\">\n        <div class=\"main-contact\">\n            <div>\n                <h2>{{this.user.name}} <span>is typing...</span></h2>\n            </div>\n            <div class=\"image-flex\">\n                <div>\n                    <img src=\"../../assets/images/star3.png\"/>\n                </div>\n                <div>\n                    <img src=\"../../assets/images/phone3.png\"/>\n                </div>\n                <div>\n                    <img src=\"../../assets/images/video2.png\"/>\n                 </div>\n            </div>\n        </div>\n\n        <div class=\"d-flex message-wrapper\">\n            <div class=\"content-wrapper p-3 w-100\">\n\n                <div class=\"profile-icon\">\n                    <img class=\"rounded-circle \" src=\"../../assets/images/{{this.user.img}}.jpg\"/>\n                    <span class=\"message-time\">9:30</span>\n                </div>\n                <div class=\"main-message-content p-2\">\n                    <p class=\"m-0\">Hey man, what are you doing, how is your life going? </p>\n                </div>\n            </div>\n            <div class=\"content-wrapper p-3 w-100\">\n\n                <div class=\"profile-icon\">\n                    <img src=\"../../assets/images/man1.png\"/>\n                    <span class=\"message-time\">9:32</span>\n                </div>\n                <div class=\"main-message-content p-2\">\n                    <p class=\"m-0\">Heloo thertsds ds </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"d-flex message-wrapper\">\n            <div class=\"content-wrapper p-3 w-100\">\n\n                <div class=\"profile-icon\">\n                    <img class=\"rounded-circle \" src=\"../../assets/images/{{this.user.img}}.jpg\"/>\n                    <span class=\"message-time\">9:34</span>\n                </div>\n                <div class=\"main-message-content p-2\">\n                    <p class=\"m-0\">Hey man, what are you doing? </p>\n                </div>\n            </div>\n            <div class=\"content-wrapper p-3 w-100\">\n\n                <div class=\"profile-icon\">\n                    <img src=\"../../assets/images/man1.png\"/>\n                    <span class=\"message-time\">9:36</span>\n                </div>\n                <div class=\"main-message-content p-2\">\n                    <div class=\"image-message\">\n                        \n                        \n                        <div class=\"movie\">\n                            <div class=\"spidey-image\">\n                            <img src=\"../../assets/images/sp4.jpg\"/>\n                        </div>\n                            <div>\n                                <p><b>Homecoming</b> / Action</p>\n                            </div>  \n                            <div class=\"rating\">\n                                <img src=\"../../assets/images/rating.png\"/>\n                                <img src=\"../../assets/images/rating.png\"/>\n                                <img src=\"../../assets/images/rating.png\"/>\n                                <img src=\"../../assets/images/rating.png\"/>\n                                <img src=\"../../assets/images/rating.png\"/>\n                            </div>\n                        </div>\n                        <p>Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man</p>\n                        <button type=\"button\" class=\"btn btn-secondary \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <p>View</p>\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n            \n        </div>\n\n        \n        <div class=\"message-typebox\">\n            <div class=\"entericon\">\n                <img src=\"../../assets/images/link.png\"/>\n            </div>\n            <div class=\"typebox\">\n                <input type=\"text\" placeholder=\"Type your message\">\n            </div>\n            <div class=\"emoji\">\n                <button type=\"button\" class=\"btn btn-secondary \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img src=\"../../assets/images/emoji1.png\"/>\n                </button>\n\n            </div>\n            <div class=\"entericon\">\n                <button type=\"button\" class=\"btn btn-secondary \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img src=\"../../assets/images/enter.png\"/>\n                </button>\n                \n\n            </div>\n        </div>\n       \n        \n        \n        <!-- <div class=\"message-info\">\n            <div class=\"sent-message\">\n                <h2>How are you?dgfdsgfdgfdgdfgsdfgfsghgffhghdfghdf\n                    \n                </h2>\n            </div>\n            <div>\n                <h2>Matt thompson <span>is typing...</span></h2>\n            </div>\n            <div>\n                <h2>Matt thompson <span>is typing...</span></h2>\n            </div>\n\n        </div> -->\n    </section>\n</div>\n    <section class = \"right-container\">\n        \n        <div class=\"profile-wrapper\">\n            <div class=\"notification\">\n                <img src=\"../../assets/images/star3.png\"/>\n            </div>\n            <div>\n                <div class=\"btn-group btn-small\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Johan small\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                      <button class=\"dropdown-item\" type=\"button\">Action</button>\n                      <button class=\"dropdown-item\" type=\"button\">Another action</button>\n                      <button class=\"dropdown-item\" type=\"button\">Something else here</button>\n                    </div>\n                  </div>\n            </div>\n\n        </div>\n        <div class=\"mail-line\">\n            <div>\n                <img src=\"../../assets/images/gmail.png\"/>\n            </div>\n            <div>\n                <img src=\"../../assets/images/dots.png\"/>\n            </div>\n        </div>\n        <div class=\"person-description\">\n            <div>\n                <img src=\"../../assets/images/{{this.user.img}}.jpg\"/>\n            </div>\n            <div>\n                <p>{{this.user.name}}</p>\n            </div>\n            <div class=\"location\">\n                <p>{{this.user.location}}</p>\n            </div>\n        </div>\n        <div class = desc>\n            <div class=\"name-row-flex\">\n                <p>Nickname:</p>\n                <p><b>{{this.user.nickname}}</b></p>\n            </div>\n            <div class=\"name-row-flex\">\n                <p>Tel:</p>\n                <p><b>{{this.user.tel}}</b>\n            </div>\n            <div class=\"name-row-flex\">\n                <p>Date of birth</p>\n                <p><b>{{this.user.dob}}</b>\n            </div>\n            <div class=\"name-row-flex\">\n                <p>Gender</p>\n                <p><b>{{this.user.gender}}</b>\n            </div>\n            <div class=\"name-row-flex\">\n                <p>Language</p>\n                <p><b>{{this.user.language}}</b>\n\n            </div>\n        \n    </div>\n    </section>\n    \n\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html, body {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEludGVybnNoaXBcXHByYWN0aWNlc1xcc3VzZWVuZGhpcmFuX2RoYXZhYmFsYW4vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0iLCJodG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'InterTask';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile {\n  width: 100px;\n  margin: auto;\n  display: block;\n}\n\n.login-card {\n  padding: 1em;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n.fab {\n  font-size: 2em;\n}\n\n#background {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50%;\n  background-color: #28a745;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxcSW50ZXJuc2hpcFxccHJhY3RpY2VzXFxzdXNlZW5kaGlyYW5fZGhhdmFiYWxhbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7QUNHSjs7QURBRztFQUFPLGNBQUE7QUNJVjs7QURIRztFQUNDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sb2dpbi1jYXJke1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiNmb3JtRm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICB9XHJcblxyXG4gICAuZmFiIHsgZm9udC1zaXplOiAyZW07IH1cclxuICAgI2JhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgXHJcbn1cclxuIiwiLnByb2ZpbGUge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1jYXJkIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuLmZhYiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.showError = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          upassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          console.log(this.loginForm.valid);

          if (this.loginForm.valid) {
            this.router.navigate(['/home']);
          } else {
            return null;
          } // if(!this.username || !this.upassword){
          //  // alert("Provide username and password");
          //   return null;
          //  }
          // this.router.navigate(['/home']);
          // if(this.loginForm.controls.username === 'test@gm.com' && this.loginForm.controls.upassword === 'Abc@123'){
          // }else{
          //   //alert("Invalid username or password");
          // }

        }
      }, {
        key: "name",
        get: function get() {
          return this.loginForm.get('username');
        }
      }, {
        key: "upwd",
        get: function get() {
          return this.loginForm.get('upassword');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home-section {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0px;\n  padding: 0px;\n}\n\n.side-container {\n  height: 100%;\n  width: 80px;\n  background: #262323;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.side-container .active {\n  background: #2c2727;\n}\n\n.side-container ul {\n  list-style: none;\n  padding-left: 1px;\n  width: 80px;\n}\n\n.side-container ul li {\n  text-align: center;\n  padding: 20px 20px;\n}\n\n.side-container ul li img {\n  width: 25px;\n  height: 25px;\n}\n\n.side-container ul li:first-child {\n  height: 80px;\n  padding: 36px 0px;\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.inbox-container {\n  height: 100%;\n  width: 250px;\n  background: #2c2727;\n  color: #fff;\n  font-size: 5px;\n}\n\n.inbox-container .inbox-container .inbox-title {\n  font-size: 20px;\n}\n\n.inbox-container ul {\n  list-style: none;\n  padding: 0px;\n}\n\n.inbox-container ul li:first-child {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 80px;\n  padding: 0px 15px;\n  margin-bottom: 15px;\n  margin: 0px;\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.inbox-container ul li:first-child span {\n  color: #ffffff !important;\n}\n\n.inbox-container ul li:first-child img {\n  width: 15px;\n  height: 15px;\n}\n\n.inbox-container ul li:nth-child(5) {\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.inbox-container ul li:nth-child(10) {\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.inbox-container ul li {\n  display: -webkit-box;\n  display: flex;\n  margin: 0px 10px;\n  padding: 5px 5px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n\n.inbox-container ul li li:last-child {\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.inbox-container ul li span:first-child {\n  color: #b4b4b4;\n}\n\n.inbox-container ul li span:last-child {\n  color: #fff;\n}\n\n.inbox-container ul li .active {\n  color: #fff !important;\n}\n\n.inbox-container ul .list-active {\n  background: #433c3c;\n  border-radius: 5px;\n}\n\n.combine {\n  display: -webkit-box;\n  display: flex;\n}\n\n.contact-container {\n  height: 100%;\n  width: 400px;\n  background: #363030;\n  color: #fff;\n}\n\n.contact-container .has-search .form-control {\n  padding-left: 2.375rem;\n  background: #262323;\n  border: 1px solid #262323;\n}\n\n.contact-container .has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n  background: #262323;\n  border-radius: 5px;\n}\n\n.contact-container .form-group {\n  margin-bottom: 0px;\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.contact-container .contact-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 80px;\n  border-bottom: 1px solid #5a5a5a;\n  margin-bottom: 15px;\n}\n\n.contact-container .active {\n  background: #433c3c;\n}\n\n.contact-container .contact-list-sep {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 10px 20px;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.contact-container .contact-list-sep .conatct-profile img {\n  width: 35px;\n  height: 35px;\n}\n\n.contact-container .contact-list-sep .cont {\n  width: 200px;\n  height: 200px;\n  border: 1px solid #aaa;\n  /*To show the boundaries of the element*/\n}\n\n.contact-container .contact-list-sep .cont:before {\n  position: absolute;\n  content: \"\";\n  background-color: #FF0000;\n  border-radius: 50%;\n  opacity: 0.5;\n  width: 200px;\n  height: 200px;\n  pointer-events: none;\n}\n\n.contact-container .contact-list-sep .contact-description {\n  padding: 0px 10px;\n  width: 100%;\n}\n\n.contact-container .contact-list-sep .contact-description h5 {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 0px;\n}\n\n.contact-container .contact-list-sep .contact-description p {\n  margin-bottom: 0px;\n  font-size: 10px;\n  color: #fff;\n}\n\n.contact-container .contact-list-sep .conatct-action {\n  width: 50px;\n  text-align: right;\n}\n\n.contact-container .contact-list-sep .conatct-action i {\n  color: #fff;\n}\n\n.contact-container .contact-list-sep .conatct-action p {\n  color: #606860;\n  font-size: 10px;\n  margin-bottom: 0px;\n}\n\n.contact-container .contact-list ul {\n  padding-left: 0px;\n}\n\n.message-container {\n  height: 100%;\n  width: 450px;\n  background: #efeeee;\n  color: black;\n  margin-bottom: 0px;\n}\n\n.main-contact {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 80px;\n  border-bottom: 1px solid #5a5a5a;\n}\n\n.main-contact h2 {\n  margin-top: 0px;\n  padding: 39px 0px 0px 23px;\n  font-size: 0.9em;\n}\n\n.main-contact span {\n  font-weight: 100;\n}\n\n.image-flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 35px 2px 10px 10px;\n}\n\n.image-flex img {\n  height: 25px;\n  width: 25px;\n  margin-right: 16px;\n}\n\n.message-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.sent-message {\n  width: 350px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.sent-message img {\n  height: 25px;\n  width: 25px;\n  margin: 20px 0px 0px 20px;\n}\n\n.sent-message h2 {\n  display: -webkit-box;\n  display: flex;\n  margin: 20px 5px 0px 20px;\n  font-size: 1em;\n  background: #ffffff;\n  border-radius: 2px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n\n.message-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.message-wrapper .content-wrapper {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  display: -webkit-box;\n  display: flex;\n}\n\n.message-wrapper .content-wrapper.Typebar-images {\n  height: 20px;\n  width: 20px;\n}\n\n.message-wrapper .content-wrapper p {\n  color: #000000;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) {\n  margin-top: 0px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .profile-icon {\n  padding-right: 0px;\n  padding-left: 15px;\n  margin-top: 0px;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content {\n  background: #28a745;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content:before {\n  border-color: transparent #28a745 transparent transparent;\n  right: -6px;\n  left: unset;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message p {\n  font-size: 12px;\n  margin-bottom: 6px;\n  color: #ededed;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message .btn-secondary {\n  background: grey;\n  padding-left: 110px;\n  padding-right: 110px;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message .movie {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message .movie img {\n  height: 112px;\n  width: 270px;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message .rating {\n  margin-top: 5px;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.message-wrapper .content-wrapper:nth-child(even) .main-message-content .image-message .rating img {\n  height: 10px;\n  width: 10px;\n}\n\n.message-wrapper .content-wrapper .profile-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-right: 15px;\n}\n\n.message-wrapper .content-wrapper .profile-icon.link {\n  padding-right: 5px;\n}\n\n.message-wrapper .content-wrapper .profile-icon img {\n  height: 20px;\n  width: 20px;\n}\n\n.message-wrapper .content-wrapper .profile-icon .message-time {\n  font-size: 10px;\n  line-height: 1;\n  margin-top: 3px;\n}\n\n.message-wrapper .content-wrapper .main-message-content {\n  position: relative;\n  background: #fff;\n  border-radius: 5px;\n  width: 70%;\n}\n\n.message-wrapper .content-wrapper .main-message-content p {\n  font-size: 12px;\n  word-break: break-word;\n}\n\n.message-wrapper .content-wrapper .main-message-content .form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.message-wrapper .content-wrapper .main-message-content:before {\n  content: \"\\a\";\n  border-style: solid;\n  border-width: 5px 8px 6px 0;\n  border-color: transparent #ffffff transparent transparent;\n  position: absolute;\n  left: -6px;\n  top: 7px;\n}\n\n.profile-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 80px;\n  border-bottom: 1px solid #5a5a5a;\n  margin-bottom: 0px;\n  background: #ffffff;\n  width: 350px;\n}\n\n.notification {\n  padding-left: 30px;\n}\n\n.notification img {\n  height: 25px;\n  width: 25px;\n}\n\n.right-container {\n  display: block;\n}\n\n.btn-group {\n  padding-right: 25px;\n}\n\n.dropdown-menu {\n  padding: 0px;\n}\n\n.btn-secondary {\n  font-size: 0.9em;\n  background-color: #ffffff;\n  color: #6c757d;\n}\n\n.mail-line {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 15px 15px 15px;\n}\n\n.mail-line img {\n  height: 25px;\n  width: 25px;\n}\n\n.person-description {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.person-description img {\n  height: 100px;\n  width: 100px;\n}\n\n.person-description name {\n  height: 80px;\n}\n\n.person-description p {\n  margin: 0px;\n  font-size: 20px;\n}\n\n.person-description .location p {\n  font-size: 10px;\n  margin-bottom: 30px;\n}\n\n.desc {\n  padding-top: 30px;\n  width: 310px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #dddddd;\n  font-size: 12px;\n}\n\n.name-row-flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.message-typebox {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  background: #ffffff;\n  height: 75px;\n  padding: 20px;\n  margin-top: 100px;\n  float: bottom;\n}\n\n.message-typebox img {\n  padding: 10px;\n  height: 45px;\n  width: 45px;\n}\n\n.message-typebox .typebox {\n  padding-top: 9px;\n}\n\n.entericon .btn {\n  border: 0;\n}\n\n.entericon .btn img {\n  height: 40px;\n  width: 40px;\n  padding: 0px;\n  margin-top: 0px;\n}\n\n.emoji .btn {\n  border: 0;\n}\n\n.emoji .btn img {\n  height: 30px;\n  width: 30px;\n  padding: 0px;\n  margin-top: 0px;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-container {\n    width: 90px;\n  }\n  .side-container ul li {\n    text-align: center;\n    padding-left: 2px;\n    padding-right: 2px;\n    padding-top: 8px;\n  }\n  .side-container ul li img {\n    width: 15px;\n    height: 15px;\n  }\n\n  .inbox-container {\n    display: none;\n  }\n\n  .right-container {\n    display: none;\n  }\n\n  .contact-container {\n    width: 250px;\n  }\n  .contact-container .contact-list-sep {\n    padding: 0px 5px;\n  }\n  .contact-container .contact-list-sep .contact-description {\n    padding: 5px 5px;\n  }\n  .contact-container .contact-list-sep .contact-description h5 {\n    font-size: 10px;\n  }\n  .contact-container .contact-list-sep .contact-description p {\n    display: none;\n  }\n\n  .message-container {\n    width: 320px;\n  }\n  .message-container h2 {\n    font-size: 0.8em;\n  }\n  .message-container .movie .spidey-image img {\n    height: 112px;\n    width: 197px !important;\n  }\n  .message-container .image-message .btn-secondary {\n    padding-left: 70px !important;\n    padding-right: 70px !important;\n  }\n  .message-container .message-typebox {\n    margin-top: 90px;\n  }\n  .message-container .message-typebox img {\n    padding: 5px;\n    height: 40px;\n    width: 40px;\n  }\n  .message-container .message-typebox .emoji {\n    display: none;\n  }\n  .message-container .message-wrapper .content-wrapper {\n    padding: 0.5em !important;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .combine {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n\n  .contact-container {\n    width: 28%;\n  }\n  .contact-container .contact-header {\n    height: 66px;\n  }\n  .contact-container .form-group {\n    padding-left: 3px;\n    padding-right: 2px;\n  }\n  .contact-container .conatct-action {\n    display: none !important;\n  }\n\n  .message-container {\n    width: 69%;\n  }\n  .message-container .main-contact {\n    height: 66px;\n  }\n  .message-container .main-contact h2 {\n    padding: 25px 0px 0px 23px;\n  }\n  .message-container .main-contact .image-flex {\n    padding: 22px 2px 10px 10px;\n  }\n  .message-container .profile-icon {\n    display: none !important;\n  }\n  .message-container .main-message-content:before {\n    content: \"\\a\";\n    border-style: solid;\n    border-width: 10px 8px 2px 0px !important;\n    border-color: transparent #ffffff transparent transparent;\n    position: absolute;\n    left: -6px;\n    top: 1px !important;\n  }\n  .message-container .movie .spidey-image img {\n    height: 112px;\n    width: 172px !important;\n  }\n\n  .home-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .home-section img {\n    float: right;\n  }\n  .home-section .side-container {\n    width: 100%;\n    margin-bottom: 0px;\n  }\n  .home-section .side-container ul {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    margin-bottom: 0px;\n  }\n  .home-section .side-container ul li:first-child {\n    display: none;\n  }\n  .home-section .side-container ul li {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 16px;\n    text-decoration: none;\n  }\n}\n\n@media only screen and (max-width: 411px) {\n  .combine {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n\n  .contact-container {\n    width: 28%;\n  }\n  .contact-container .contact-header {\n    height: 66px;\n  }\n  .contact-container .form-group {\n    padding-left: 3px;\n    padding-right: 2px;\n  }\n  .contact-container .conatct-action {\n    display: none !important;\n  }\n\n  .message-container {\n    width: 72%;\n  }\n  .message-container .message-typebox {\n    margin-top: 74px !important;\n    padding: 11px;\n    height: 73px;\n  }\n  .message-container .main-contact {\n    height: 66px;\n  }\n  .message-container .main-contact h2 {\n    padding: 25px 0px 0px 23px;\n  }\n  .message-container .main-contact .image-flex {\n    padding: 22px 2px 10px 10px;\n  }\n  .message-container .profile-icon {\n    display: none !important;\n  }\n  .message-container .main-message-content:before {\n    content: \"\\a\";\n    border-style: solid;\n    border-width: 10px 8px 2px 0px !important;\n    border-color: transparent #ffffff transparent transparent;\n    position: absolute;\n    left: -6px;\n    top: 1px !important;\n  }\n  .message-container .movie .spidey-image img {\n    height: 112px;\n    width: 172px !important;\n  }\n\n  .home-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .home-section img {\n    float: right;\n  }\n  .home-section .side-container {\n    width: 100%;\n    margin-bottom: 0px;\n  }\n  .home-section .side-container ul {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    margin-bottom: 0px;\n  }\n  .home-section .side-container ul li:first-child {\n    display: none;\n  }\n  .home-section .side-container ul li {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 16px;\n    text-decoration: none;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .home-section {\n    width: 100%;\n  }\n  .home-section .message-container .btn-secondary {\n    padding-left: 53px !important;\n    padding-right: 53px !important;\n  }\n  .home-section .message-container .message-typebox {\n    margin-top: 0px !important;\n  }\n  .home-section .message-container .message-typebox img {\n    height: 40px;\n    width: 40px;\n  }\n  .home-section .message-container .message-typebox .typebox input {\n    padding-top: 5px;\n    padding-left: 5px;\n    width: 90%;\n  }\n  .home-section .message-container .message-typebox .entericon .btn-secondary {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .home-section .message-container .movie .spidey-image img {\n    height: 72px !important;\n    width: 135px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcSW50ZXJuc2hpcFxccHJhY3RpY2VzXFxzdXNlZW5kaGlyYW5fZGhhdmFiYWxhbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQUk7RUFFSSxtQkFBQTtBQ0NSOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDUjs7QURDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDWjs7QURDWTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDQWhCOztBRElRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNGWjs7QURRRTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ05KOztBRE9JO0VBRUksZUFBQTtBQ05SOztBRFNNO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDUFY7O0FEV1E7RUFFSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDWFo7O0FEYVk7RUFFSSx5QkFBQTtBQ1poQjs7QURjWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWmhCOztBRGVTO0VBQ0csZ0NBQUE7QUNi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O0VBRUE7SUFDSSxXQUFBO0VDbEtGO0VEc0tFO0lBRUksNkJBQUE7SUFDSSw4QkFBQTtFQ3JLVjtFRHVLRTtJQUNJLDBCQUFBO0VDcktOO0VEc0tNO0lBRUosWUFBQTtJQUNBLFdBQUE7RUNyS0Y7RUR1S007SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQ3JLVjtFRHdLVTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7RUN0S1Y7RUQ4S1U7SUFFQSx1QkFBQTtJQUNBLHVCQUFBO0VDN0tWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1zZWN0aW9uIFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuLnNpZGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyMzIzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAuYWN0aXZlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMmMyNzI3O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIwcHggMjBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgcGFkZGluZzozNnB4IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YTVhNWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluYm94LWNvbnRhaW5lclxyXG4gIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJjMjcyNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAuaW5ib3gtY29udGFpbmVyIC5pbmJveC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAgIHVse1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICBsaTpmaXJzdC1jaGlsZFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWE1YTVhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YTVhNWE7IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxpOm50aC1jaGlsZCgxMCkge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGlcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgbWFyZ2luOjBweCAxMHB4O1xyXG4gICAgICAgICAgICAgcGFkZGluZzo1cHggNXB4O1xyXG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGk6bGFzdC1jaGlsZFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojYjRiNGI0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWN0aXZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0LWFjdGl2ZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MzNjM2M7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbi8vICAgQ29udGFjdCBMaXN0XHJcbi5jb21iaW5le1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdC1jb250YWluZXJcclxue1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzMDMwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2MjMyMztcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMyNjIzMjM7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyLjM3NXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuMzc1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2MjMyMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ncm91cFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWhlYWRlclxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0MzNjM2M7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1saXN0LXNlcFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgIFxyXG4gICAgICAgIC5jb25hdGN0LXByb2ZpbGUgaW1nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6MzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTsgLypUbyBzaG93IHRoZSBib3VuZGFyaWVzIG9mIHRoZSBlbGVtZW50Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnQ6YmVmb3JlXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkYwMDAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LWRlc2NyaXB0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaDVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25hdGN0LWFjdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNjA2ODYwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtbGlzdCB1bHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG4ubWVzc2FnZS1jb250YWluZXJcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWVlZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tYWluLWNvbnRhY3Rcclxue1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICBoMlxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAzOXB4IDBweCAwcHggMjNweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcclxufVxyXG4uaW1hZ2UtZmxleFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzVweCAycHggMTBweCAxMHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuLm1lc3NhZ2UtaW5mb1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2VudC1tZXNzYWdlXHJcbntcclxuICAgIHdpZHRoOjM1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBcclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDIwcHggNXB4IDBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlclxyXG57ICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbi5jb250ZW50LXdyYXBwZXJcclxue1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICYuVHlwZWJhci1pbWFnZXNcclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG5cclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZChldmVuKVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgLnByb2ZpbGUtaWNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tbWVzc2FnZS1jb250ZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICAmOmJlZm9yZVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjhhNzQ1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWFnZS1tZXNzYWdlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWRlZGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bi1zZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubW92aWVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJhdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5wcm9maWxlLWljb25cclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICYubGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lc3NhZ2UtdGltZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1haW4tbWVzc2FnZS1jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcYVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHggOHB4IDZweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG59XHJcbi5wcm9maWxlLXdyYXBwZXJcclxue1xyXG4gICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogMzUwcHg7ICAgIFxyXG59XHJcbi5ub3RpZmljYXRpb25cclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIH0gICAgICAgIFxyXG59XHJcbi5yaWdodC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuLWdyb3VwXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuLm1haWwtbGluZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzoxMHB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuLnBlcnNvbi1kZXNjcmlwdGlvblxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIG5hbWV7XHJcbiAgICAgICAgaGVpZ2h0OjgwcHhcclxuICAgIH1cclxuICAgIHBcclxuICAgIHsgXHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvY2F0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZGVzY3tcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubmFtZS1yb3ctZmxleFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tZXNzYWdlLXR5cGVib3hcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsb2F0OiBib3R0b207XHJcbiAgICBpbWdcclxuICAgIHsgXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAudHlwZWJveHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4uZW50ZXJpY29uIC5idG5cclxue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuLmVtb2ppIC5idG5cclxue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcclxue1xyXG4gICAgXHJcblxyXG4gICAgLnNpZGUtY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluYm94LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAuY29udGFjdC1saXN0LXNlcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFjdC1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb3ZpZXtcclxuICAgICAgICAgICAgLnNwaWRleS1pbWFnZXtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgd2lkdGg6IDE5N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLW1lc3NhZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi1zZWNvbmRhcnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZS10eXBlYm94e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1vamlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZS13cmFwcGVye1xyXG4gICAgICAgICAgICAuY29udGVudC13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogIDAuNWVtICFpbXBvcnRhbnQ7O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweClcclxue1xyXG4gICAgLmNvbWJpbmV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgLmNvbnRhY3QtaGVhZGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29uYXRjdC1hY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDY5JTtcclxuICAgICAgICAubWFpbi1jb250YWN0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdlLWZsZXh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMnB4IDJweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUtaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWFpbi1tZXNzYWdlLWNvbnRlbnR7XHJcbiAgICAgICAgJjpiZWZvcmUgIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGFcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweCA4cHggMnB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgdG9wOiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubW92aWV7XHJcbiAgICAgICAgICAgIC5zcGlkZXktaW1hZ2V7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICB3aWR0aDogMTcycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ob21lLXNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIC5zaWRlLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdWxcclxuICAgICAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuIGNvbG9yOiB3aGl0ZTtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIHBhZGRpbmc6IDE2cHg7XHJcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweClcclxue1xyXG4gICAgLmNvbWJpbmV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgLmNvbnRhY3QtaGVhZGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29uYXRjdC1hY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICAubWVzc2FnZS10eXBlYm94XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3M3B4O1xyXG4gICAgfVxyXG4gICAgICAgIC5tYWluLWNvbnRhY3R7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2UtZmxleHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIycHggMnB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZS1pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYWluLW1lc3NhZ2UtY29udGVudHtcclxuICAgICAgICAmOmJlZm9yZSAge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcYVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDhweCAycHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb3ZpZXtcclxuICAgICAgICAgICAgLnNwaWRleS1pbWFnZXtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTJweDtcclxuICAgIHdpZHRoOiAxNzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvbWUtc2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgLnNpZGUtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB1bFxyXG4gICAgICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxpOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gcGFkZGluZzogMTZweDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpXHJcbntcclxuLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBcclxuLm1lc3NhZ2UtY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAuYnRuLXNlY29uZGFyeVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS10eXBlYm94e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnR5cGVib3ggaW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDo5MCVcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVudGVyaWNvbntcclxuICAgICAgICAgICAgLmJ0bi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICAgIC5tb3ZpZVxyXG4gICAge1xyXG4gICAgICAgIC5zcGlkZXktaW1hZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuIiwiLmhvbWUtc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNpZGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODBweDtcbiAgYmFja2dyb3VuZDogIzI2MjMyMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5zaWRlLWNvbnRhaW5lciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzJjMjcyNztcbn1cbi5zaWRlLWNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICB3aWR0aDogODBweDtcbn1cbi5zaWRlLWNvbnRhaW5lciB1bCBsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuLnNpZGUtY29udGFpbmVyIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uc2lkZS1jb250YWluZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDM2cHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcbn1cblxuLmluYm94LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmMyNzI3O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA1cHg7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC1jb250YWluZXIgLmluYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmluYm94LWNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5pbmJveC1jb250YWluZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcbn1cbi5pbmJveC1jb250YWluZXIgdWwgbGk6Zmlyc3QtY2hpbGQgc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uaW5ib3gtY29udGFpbmVyIHVsIGxpOmZpcnN0LWNoaWxkIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uaW5ib3gtY29udGFpbmVyIHVsIGxpOm50aC1jaGlsZCg1KSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWE1YTVhO1xufVxuLmluYm94LWNvbnRhaW5lciB1bCBsaTpudGgtY2hpbGQoMTApIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YTVhNWE7XG59XG4uaW5ib3gtY29udGFpbmVyIHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uaW5ib3gtY29udGFpbmVyIHVsIGxpIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcbn1cbi5pbmJveC1jb250YWluZXIgdWwgbGkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjYjRiNGI0O1xufVxuLmluYm94LWNvbnRhaW5lciB1bCBsaSBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5pbmJveC1jb250YWluZXIgdWwgbGkgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uaW5ib3gtY29udGFpbmVyIHVsIC5saXN0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM0MzNjM2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbWJpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZDogIzM2MzAzMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGFjdC1jb250YWluZXIgLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XG4gIGJhY2tncm91bmQ6ICMyNjIzMjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjIzMjM7XG59XG4uY29udGFjdC1jb250YWluZXIgLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjM3NXJlbTtcbiAgaGVpZ2h0OiAyLjM3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMzc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogI2FhYTtcbiAgYmFja2dyb3VuZDogIzI2MjMyMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWE1YTVhO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNDMzYzNjO1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWxpc3Qtc2VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbmF0Y3QtcHJvZmlsZSBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWxpc3Qtc2VwIC5jb250IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAvKlRvIHNob3cgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGVsZW1lbnQqL1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWxpc3Qtc2VwIC5jb250OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbnRhY3QtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbnRhY3QtZGVzY3JpcHRpb24gaDUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbnRhY3QtZGVzY3JpcHRpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1saXN0LXNlcCAuY29uYXRjdC1hY3Rpb24ge1xuICB3aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbmF0Y3QtYWN0aW9uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1saXN0LXNlcCAuY29uYXRjdC1hY3Rpb24gcCB7XG4gIGNvbG9yOiAjNjA2ODYwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1saXN0IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWZlZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW4tY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcbn1cbi5tYWluLWNvbnRhY3QgaDIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDM5cHggMHB4IDBweCAyM3B4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLm1haW4tY29udGFjdCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmltYWdlLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDM1cHggMnB4IDEwcHggMTBweDtcbn1cbi5pbWFnZS1mbGV4IGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLm1lc3NhZ2UtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZW50LW1lc3NhZ2Uge1xuICB3aWR0aDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uc2VudC1tZXNzYWdlIGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDIwcHg7XG59XG4uc2VudC1tZXNzYWdlIGgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDVweCAwcHggMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cblxuLm1lc3NhZ2Utd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyLlR5cGViYXItaW1hZ2VzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIC5wcm9maWxlLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyOm50aC1jaGlsZChldmVuKSAubWFpbi1tZXNzYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyOm50aC1jaGlsZChldmVuKSAubWFpbi1tZXNzYWdlLWNvbnRlbnQ6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjhhNzQ1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICByaWdodDogLTZweDtcbiAgbGVmdDogdW5zZXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIC5tYWluLW1lc3NhZ2UtY29udGVudCAuaW1hZ2UtbWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjZWRlZGVkO1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyOm50aC1jaGlsZChldmVuKSAubWFpbi1tZXNzYWdlLWNvbnRlbnQgLmltYWdlLW1lc3NhZ2UgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcbn1cbi5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlcjpudGgtY2hpbGQoZXZlbikgLm1haW4tbWVzc2FnZS1jb250ZW50IC5pbWFnZS1tZXNzYWdlIC5tb3ZpZSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlcjpudGgtY2hpbGQoZXZlbikgLm1haW4tbWVzc2FnZS1jb250ZW50IC5pbWFnZS1tZXNzYWdlIC5tb3ZpZSBpbWcge1xuICBoZWlnaHQ6IDExMnB4O1xuICB3aWR0aDogMjcwcHg7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIC5tYWluLW1lc3NhZ2UtY29udGVudCAuaW1hZ2UtbWVzc2FnZSAucmF0aW5nIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIC5tYWluLW1lc3NhZ2UtY29udGVudCAuaW1hZ2UtbWVzc2FnZSAucmF0aW5nIGltZyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWljb24ubGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1pY29uIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubWVzc2FnZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtaWNvbiAubWVzc2FnZS10aW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tYWluLW1lc3NhZ2UtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNzAlO1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tYWluLW1lc3NhZ2UtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLm1lc3NhZ2Utd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tYWluLW1lc3NhZ2UtY29udGVudCAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAubWFpbi1tZXNzYWdlLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGFcIjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggOHB4IDZweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiA3cHg7XG59XG5cbi5wcm9maWxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YTVhNWE7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLm5vdGlmaWNhdGlvbiBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLm1haWwtbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAxNXB4IDE1cHggMTVweDtcbn1cbi5tYWlsLWxpbmUgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLnBlcnNvbi1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGVyc29uLWRlc2NyaXB0aW9uIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5wZXJzb24tZGVzY3JpcHRpb24gbmFtZSB7XG4gIGhlaWdodDogODBweDtcbn1cbi5wZXJzb24tZGVzY3JpcHRpb24gcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucGVyc29uLWRlc2NyaXB0aW9uIC5sb2NhdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGVzYyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogMzEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmFtZS1yb3ctZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lc3NhZ2UtdHlwZWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBmbG9hdDogYm90dG9tO1xufVxuLm1lc3NhZ2UtdHlwZWJveCBpbWcge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xufVxuLm1lc3NhZ2UtdHlwZWJveCAudHlwZWJveCB7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5cbi5lbnRlcmljb24gLmJ0biB7XG4gIGJvcmRlcjogMDtcbn1cbi5lbnRlcmljb24gLmJ0biBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmVtb2ppIC5idG4ge1xuICBib3JkZXI6IDA7XG59XG4uZW1vamkgLmJ0biBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2lkZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG4gIC5zaWRlLWNvbnRhaW5lciB1bCBsaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9XG4gIC5zaWRlLWNvbnRhaW5lciB1bCBsaSBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgfVxuXG4gIC5pbmJveC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmlnaHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWxpc3Qtc2VwIHtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICB9XG4gIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1saXN0LXNlcCAuY29udGFjdC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbnRhY3QtZGVzY3JpcHRpb24gaDUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtbGlzdC1zZXAgLmNvbnRhY3QtZGVzY3JpcHRpb24gcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLm1vdmllIC5zcGlkZXktaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDExMnB4O1xuICAgIHdpZHRoOiAxOTdweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAuaW1hZ2UtbWVzc2FnZSAuYnRuLXNlY29uZGFyeSB7XG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IGltZyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtdHlwZWJveCAuZW1vamkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuY29tYmluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjglO1xuICB9XG4gIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1oZWFkZXIge1xuICAgIGhlaWdodDogNjZweDtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmZvcm0tZ3JvdXAge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbmF0Y3QtYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA2OSU7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tYWluLWNvbnRhY3Qge1xuICAgIGhlaWdodDogNjZweDtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLm1haW4tY29udGFjdCBoMiB7XG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIzcHg7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tYWluLWNvbnRhY3QgLmltYWdlLWZsZXgge1xuICAgIHBhZGRpbmc6IDIycHggMnB4IDEwcHggMTBweDtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLnByb2ZpbGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAubWFpbi1tZXNzYWdlLWNvbnRlbnQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcYVwiO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDhweCAycHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tb3ZpZSAuc3BpZGV5LWltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiAxMTJweDtcbiAgICB3aWR0aDogMTcycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaG9tZS1zZWN0aW9uIGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5ob21lLXNlY3Rpb24gLnNpZGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgLmNvbWJpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI4JTtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDY2cHg7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5mb3JtLWdyb3VwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5jb25hdGN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzIlO1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IHtcbiAgICBtYXJnaW4tdG9wOiA3NHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBoZWlnaHQ6IDczcHg7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tYWluLWNvbnRhY3Qge1xuICAgIGhlaWdodDogNjZweDtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLm1haW4tY29udGFjdCBoMiB7XG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDIzcHg7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tYWluLWNvbnRhY3QgLmltYWdlLWZsZXgge1xuICAgIHBhZGRpbmc6IDIycHggMnB4IDEwcHggMTBweDtcbiAgfVxuICAubWVzc2FnZS1jb250YWluZXIgLnByb2ZpbGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZXNzYWdlLWNvbnRhaW5lciAubWFpbi1tZXNzYWdlLWNvbnRlbnQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcYVwiO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDhweCAycHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tb3ZpZSAuc3BpZGV5LWltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiAxMTJweDtcbiAgICB3aWR0aDogMTcycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaG9tZS1zZWN0aW9uIGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5ob21lLXNlY3Rpb24gLnNpZGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAuc2lkZS1jb250YWluZXIgdWwgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhvbWUtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAubWVzc2FnZS1jb250YWluZXIgLmJ0bi1zZWNvbmRhcnkge1xuICAgIHBhZGRpbmctbGVmdDogNTNweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUzcHggIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1zZWN0aW9uIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1zZWN0aW9uIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IGltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5ob21lLXNlY3Rpb24gLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLXR5cGVib3ggLnR5cGVib3ggaW5wdXQge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuaG9tZS1zZWN0aW9uIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10eXBlYm94IC5lbnRlcmljb24gLmJ0bi1zZWNvbmRhcnkge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtc2VjdGlvbiAubWVzc2FnZS1jb250YWluZXIgLm1vdmllIC5zcGlkZXktaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDcycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.userinfo = [{
          "name": "Tony stark",
          "img": 6,
          "nickname": "Tony",
          "tel": "+62-96215478512",
          "dob": "02 Sep 1996",
          "gender": "Male",
          "language": "English",
          "location": 'New york,USA'
        }, {
          "name": "Peter parker",
          "img": 1,
          "nickname": "Peter",
          "tel": "+62-9621789512",
          "dob": "03 Jan 1996",
          "gender": "Male",
          "language": "English",
          "location": 'Brooklyn,USA'
        }, {
          "name": "Bruce",
          "img": 2,
          "nickname": "Hulk",
          "tel": "+62-96217895452",
          "dob": "08 Jun 1996",
          "gender": "Male",
          "language": "English",
          "location": 'Brooklyn,USA'
        }, {
          "name": "Loki",
          "img": 3,
          "nickname": "Brother",
          "tel": "+62-9621254512",
          "dob": "03 May 1996",
          "gender": "Male",
          "language": "English",
          "location": 'California, USA'
        }, {
          "name": "Steve rogers",
          "img": 4,
          "nickname": "Captain",
          "tel": "+62-96212459512",
          "dob": "03 Jan 1852",
          "gender": "Male",
          "language": "English",
          "location": 'Newyork, USA'
        }, {
          "name": "Tchala",
          "img": 5,
          "nickname": "Black panther",
          "tel": "+62-9621754212",
          "dob": "08 May 1996",
          "gender": "Male",
          "language": "English",
          "location": 'Wakanda, Africa'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser(0);
        }
      }, {
        key: "getUser",
        value: function getUser(user) {
          this.user = this.userinfo[user];
          console.log(this.user);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Internship\practices\suseendhiran_dhavabalan\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map