webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
var Step = (function () {
    function Step() {
        this.title = "";
        this.content = "";
        this.target = "";
        this.placement = "";
        this.journeyId = "";
    }
    return Step;
}());

//# sourceMappingURL=step.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.parseURI = function (url) {
        var _url = new URL(url);
        var unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_");
        }
        if (_url.pathname) {
            var pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagingService = (function () {
    function MessagingService(_downloadSVC) {
        this._downloadSVC = _downloadSVC;
    }
    MessagingService.prototype.initilize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.port = chrome.runtime.connect({ name: "onboard" });
                _this.receiveMessage();
                resolve(_this.port);
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        try {
            this.port.onMessage.addListener(function (msg) {
                console.log("receied msg for downloading", msg);
                if (msg.type === 'DOWNLOAD_JOURNEY') {
                    _this._downloadSVC.downloadJSON(msg.data);
                }
            });
        }
        catch (ex) {
        }
    };
    MessagingService.prototype.sendMessage = function (name, data) {
        var _this = this;
        return this.initilize().then(function () {
            return new Promise(function (resolve, reject) {
                try {
                    _this.port.postMessage({ type: name, data: data });
                    resolve(true);
                }
                catch (ex) {
                    reject(false);
                }
            });
        });
    };
    return MessagingService;
}());
MessagingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__download_service__["a" /* DownloadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__download_service__["a" /* DownloadService */]) === "function" && _a || Object])
], MessagingService);

var _a;
//# sourceMappingURL=messaging.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_journey__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchDBService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PouchDBService = (function () {
    function PouchDBService() {
        if (!this.isInstantiated) {
            this.database = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__("onboard");
            console.log(this.database);
            this.isInstantiated = true;
        }
    }
    PouchDBService.prototype.fetch = function () {
        return this.database.allDocs({ include_docs: true });
    };
    PouchDBService.prototype.get = function (id) {
        return this.database.get(id);
    };
    PouchDBService.prototype.put = function (id, document) {
        var _this = this;
        return this.get(id).then(function (result) {
            console.log(result);
            _this.journey = new __WEBPACK_IMPORTED_MODULE_1__models_journey__["a" /* Journey */]();
            _this.journey._rev = result._rev;
            _this.journey._id = result._id;
            (_a = _this.journey.steps).push.apply(_a, result.steps.concat([document]));
            return _this.database.put(_this.journey);
            var _a;
        }, function (error) {
            if (error.status === 404) {
                _this.journey = new __WEBPACK_IMPORTED_MODULE_1__models_journey__["a" /* Journey */]();
                _this.journey.steps.push(document);
                return _this.database.put(_this.journey);
            }
            else {
                return new Promise(function (resolve, reject) { return reject(error); });
            }
        });
    };
    return PouchDBService;
}());
PouchDBService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PouchDBService);

//# sourceMappingURL=pouch-db.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuerySelectorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var QuerySelectorService = (function () {
    function QuerySelectorService(document) {
        this.document = document;
    }
    QuerySelectorService.prototype.generateSelector = function (el) {
        var selector = "";
        var tree = __WEBPACK_IMPORTED_MODULE_1_jquery__(el).parentsUntil(document);
        // generate full selector by traversing DOM from bottom-up
        console.clear();
        for (var i = -1; i < tree.length; i++) {
            var e = i < 0 ? el : tree[i];
            var eCSS = this.querifyElement(e);
            console.log("selectors from selected element", eCSS);
            var query = eCSS.query + (selector.length ? ' > ' : '') + selector;
            var matches = __WEBPACK_IMPORTED_MODULE_1_jquery__(query);
            console.log("QUERY: " + query);
            if (matches.length === 1 && matches[0] === el) {
                console.log('   single match (result)');
                return query;
            }
            else if (matches.length > 1 && i + 1 < tree.length) {
                console.log('   many matches');
                var parentQuery = this.generateSelector(tree[i + 1]);
                var parentMatches = __WEBPACK_IMPORTED_MODULE_1_jquery__(parentQuery).children(eCSS.tag);
                var nthQuery = eCSS.tag + ':nth-of-type(' + (parentMatches.index(el) + 1) + ')' + (selector.length ? ' > ' : '') + selector;
                var parentNthQuery = parentQuery + ' > ' + nthQuery;
                var nthMatches = __WEBPACK_IMPORTED_MODULE_1_jquery__(parentNthQuery);
                console.log("PARENT_QUERY: " + parentQuery);
                console.log("__ELEMENT__");
                console.log(e);
                console.log("__PARENT__");
                console.log(__WEBPACK_IMPORTED_MODULE_1_jquery__(parentQuery)[0]);
                console.log("__PARENT_MATCHES__");
                console.log(parentMatches);
                console.log("PARENT_NTH_QUERY: " + parentNthQuery);
                if (nthMatches.length === 1 && nthMatches[0] === el) {
                    console.log('   single match with nth-of-type (result)');
                    return parentNthQuery;
                }
                else {
                    // console.log('   many matches with nth-of-type (continue)');
                    // selector = nthQuery;
                    return 'ERROR';
                }
            }
            else {
                if (matches.length === 1)
                    console.log("Matched incorrect element. (matches.length = " + matches.length + ")");
                else if (matches.length > 1)
                    console.log("Multiple matches, but traversed entire tree (algorithm not being specific enough).");
                else
                    console.log("Could not find match for tag/id/class selector. (matches.length = " + matches.length + ")");
                return 'ERROR';
            }
        }
        return selector;
    };
    // returns object with element information in query format
    QuerySelectorService.prototype.querifyElement = function (e) {
        if (!e)
            return null;
        var tag = e.tagName.toLowerCase();
        var ids = e.id ? '#' + e.id.trim().split(' ').join('#') : "";
        var classes = e.className ? '.' + this.constructClassQuery(e.className) : "";
        var query = tag + ids + classes;
        return {
            element: e,
            tag: tag,
            ids: ids,
            classes: classes,
            query: query
        };
    };
    QuerySelectorService.prototype.constructClassQuery = function (classCollection) {
        var classes = classCollection.trim().split(" ").filter(function (item) {
            if (item.trim() !== '')
                return item.trim();
        });
        return classes.join(".");
    };
    return QuerySelectorService;
}());
QuerySelectorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], QuerySelectorService);

//# sourceMappingURL=query-selector.service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".static-fab-right {\n  position: fixed;\n  right: 20px;\n  bottom: 10px; }\n\n.static-fab-left {\n  position: fixed;\n  left: 20px;\n  bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".form {\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.radio-button-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.radio-button {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<button md-fab (click)=\"downloadJourney()\" class=\"static-fab-left\">Save</button>\r\n<button md-fab (click)=\"openDialog()\" class=\"static-fab-right\">Add</button>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" #journeyDialog=\"ngForm\">\r\n  <md-input-container class=\"full-width\">\r\n    <label for=\"journey-id\">Journey Id\r\n    <input id=\"journey-id\" mdInput disabled [value]=\"data.journeyId\">\r\n    </label>\r\n  </md-input-container>\r\n  <p>\r\n    <md-input-container class=\"full-width\">\r\n      <input mdInput placeholder=\"Title\" [(ngModel)]=\"data.title\" name=\"data.title\">\r\n    </md-input-container>\r\n  </p>\r\n\r\n  <p>\r\n    <md-input-container class=\"full-width\">\r\n      <textarea mdInput placeholder=\"Content\" required [(ngModel)]=\"data.content\" name=\"data.content\"></textarea>\r\n    </md-input-container>\r\n  </p>\r\n\r\n  <p>\r\n    <md-input-container class=\"full-width\">\r\n      <label for=\"journey-target\">Target\r\n      <input id=\"journey-target\" mdInput [value]=\"data.target\" name=\"data.target\" disabled>\r\n      </label>\r\n    </md-input-container>\r\n  </p>\r\n\r\n  <p>\r\n    <label for=\"\">Placement</label>\r\n    <md-radio-group class=\"radio-button-group\" [(ngModel)]=\"data.placement\" name=\"data.placement\">\r\n      <md-radio-button class=\"radio-button\" *ngFor=\"let placement of placements\" [value]=\"placement\">\r\n        {{placement}}\r\n      </md-radio-button>\r\n    </md-radio-group>\r\n  </p>\r\n</form>\r\n\r\n<p>\r\n  <button md-raised-button (click)=\"dialogRef.close('cancel')\">Cancel</button>\r\n  <button md-raised-button (click)=\"dialogRef.close(data)\">Save</button>\r\n</p>"

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DownloadService = (function () {
    function DownloadService(document) {
        this.document = document;
    }
    DownloadService.prototype.downloadJSON = function (data, fileName) {
        var _data = "";
        if (!data) {
            console.error('Console.save: No data');
            return;
        }
        if (!fileName)
            fileName = 'journey.json';
        if (typeof data === "object") {
            _data = JSON.stringify(data, undefined, 4);
        }
        var blob = new Blob([_data], { type: 'text/json' }), e = this.document.createEvent('MouseEvents'), a = this.document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
        console.log("downlod initilized", _data);
        return true;
    };
    return DownloadService;
}());
DownloadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], DownloadService);

//# sourceMappingURL=download.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var JourneyDialogComponent = (function () {
    function JourneyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    JourneyDialogComponent.prototype.ngOnInit = function () {
        this.placements = new Array();
        this.placements.push("right");
        this.placements.push("left");
        this.placements.push("top");
        this.placements.push("bottom");
    };
    return JourneyDialogComponent;
}());
JourneyDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-journey-dialog',
        template: __webpack_require__(172),
        styles: [__webpack_require__(165)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, Object])
], JourneyDialogComponent);

var _a;
//# sourceMappingURL=journey-dialog.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_download_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pouch_db_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_query_selector_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_step__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_journey_dialog_journey_dialog_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var AppComponent = (function () {
    function AppComponent(document, _window, _dialog, _pouchDbService, _downloadService, _commonService, _docQuerySVC, _msgSVC) {
        this.document = document;
        this._window = _window;
        this._dialog = _dialog;
        this._pouchDbService = _pouchDbService;
        this._downloadService = _downloadService;
        this._commonService = _commonService;
        this._docQuerySVC = _docQuerySVC;
        this._msgSVC = _msgSVC;
        this.journeyIdentifier = "";
        this.journeyIdentifier = "JOURNEY_IDENTIFIER";
    }
    AppComponent.prototype.ngOnInit = function () {
        var msg = this._msgSVC.receiveMessage();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var selection = this._window.getSelection();
        this.journeyStep = new __WEBPACK_IMPORTED_MODULE_7__models_step__["a" /* Step */]();
        this.journeyStep.title = selection.toString();
        var range = selection.getRangeAt(0);
        this.journeyStep.target = this._docQuerySVC.generateSelector(range.commonAncestorContainer.parentElement);
        this.journeyStep.journeyId = this._commonService.parseURI(this._window.location.href);
        this.config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogConfig */]();
        this.config.data = this.journeyStep;
        this.config.disableClose = true;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_journey_dialog_journey_dialog_component__["a" /* JourneyDialogComponent */], this.config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== null && result !== "cancel") {
                if (!_this._window.sessionStorage.getItem(_this.journeyIdentifier)) {
                    _this._window.sessionStorage.setItem(_this.journeyIdentifier, _this.journeyStep.journeyId);
                }
                else {
                    _this.journeyStep.journeyId = _this._window.sessionStorage.getItem(_this.journeyIdentifier);
                }
                var response = _this._msgSVC.sendMessage("NEW_JOURNEY", _this.journeyStep);
                response.then(function (result) {
                    console.log("response received from background as save to db ", result);
                });
            }
            else {
                console.warn("step not added");
            }
        });
    };
    AppComponent.prototype.downloadJourney = function () {
        var _this = this;
        // let journey = this._pouchDbService.get(this._commonService.parseURI(window.location.href));
        var journey = this._msgSVC.sendMessage("GET_JOURNEY", this._window.sessionStorage.getItem(this.journeyIdentifier));
        journey.then(function (result) {
            _this._window.sessionStorage.removeItem(_this.journeyIdentifier);
            console.log("download soon", result);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'onBoard-root',
        template: __webpack_require__(171),
        styles: [__webpack_require__(164)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_5__services_pouch_db_service__["a" /* PouchDBService */], __WEBPACK_IMPORTED_MODULE_4__services_download_service__["a" /* DownloadService */], __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_query_selector_service__["a" /* QuerySelectorService */], { provide: Window, useValue: window }, __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__["a" /* MessagingService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(Window)),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_pouch_db_service__["a" /* PouchDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_pouch_db_service__["a" /* PouchDBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_download_service__["a" /* DownloadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_download_service__["a" /* DownloadService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_service__["a" /* CommonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_query_selector_service__["a" /* QuerySelectorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_query_selector_service__["a" /* QuerySelectorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__["a" /* MessagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__["a" /* MessagingService */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_journey_dialog_journey_dialog_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_download_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
        var rootDiv = document.createElement('onBoard-root');
        rootDiv.textContent = ".....Loading!!!";
        document.body.appendChild(rootDiv);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_journey_dialog_journey_dialog_component__["a" /* JourneyDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__components_journey_dialog_journey_dialog_component__["a" /* JourneyDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_download_service__["a" /* DownloadService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Journey; });
var Journey = (function () {
    function Journey() {
        this.id = this.parseURI(window.location.href);
        this._id = this.id;
        this.steps = new Array();
    }
    Journey.prototype.parseURI = function (url) {
        var _url = new URL(url);
        var unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_");
        }
        if (_url.pathname) {
            var pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    };
    return Journey;
}());

//# sourceMappingURL=journey.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map