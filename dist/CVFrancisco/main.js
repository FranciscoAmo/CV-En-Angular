(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-image-pages\">\r\n    <app-sidebar></app-sidebar>\r\n    <span>\r\n        <app-navbar></app-navbar>\r\n        <router-outlet ></router-outlet>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data-service.service */ "./src/app/services/data-service.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(datoService) {
        this.datoService = datoService;
        this.title = 'CVFrancisco';
        this.datoService.getData().subscribe(function (datos) {
            console.log(datos);
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _paginas_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginas/presentacion/presentacion.component */ "./src/app/paginas/presentacion/presentacion.component.ts");
/* harmony import */ var _paginas_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginas/datos-personales/datos-personales.component */ "./src/app/paginas/datos-personales/datos-personales.component.ts");
/* harmony import */ var _paginas_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginas/experiencia/experiencia.component */ "./src/app/paginas/experiencia/experiencia.component.ts");
/* harmony import */ var _paginas_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paginas/estudios/estudios.component */ "./src/app/paginas/estudios/estudios.component.ts");
/* harmony import */ var _paginas_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./paginas/habilidades/habilidades.component */ "./src/app/paginas/habilidades/habilidades.component.ts");
/* harmony import */ var _paginas_aptitudes_aptitudes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paginas/aptitudes/aptitudes.component */ "./src/app/paginas/aptitudes/aptitudes.component.ts");
/* harmony import */ var _paginas_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./paginas/contacto/contacto.component */ "./src/app/paginas/contacto/contacto.component.ts");
/* harmony import */ var _paginas_seleccion_seleccion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paginas/seleccion/seleccion.component */ "./src/app/paginas/seleccion/seleccion.component.ts");
/* harmony import */ var _paginas_idiomas_yotros_idiomas_yotros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./paginas/idiomas-yotros/idiomas-yotros.component */ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//servicios


//componentes












// enrutadores


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _paginas_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_8__["PresentacionComponent"],
                _paginas_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_9__["DatosPersonalesComponent"],
                _paginas_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__["ExperienciaComponent"],
                _paginas_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_11__["EstudiosComponent"],
                _paginas_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_12__["HabilidadesComponent"],
                _paginas_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_14__["ContactoComponent"],
                _paginas_aptitudes_aptitudes_component__WEBPACK_IMPORTED_MODULE_13__["AptitudesComponent"],
                _paginas_seleccion_seleccion_component__WEBPACK_IMPORTED_MODULE_15__["SeleccionComponent"],
                _paginas_idiomas_yotros_idiomas_yotros_component__WEBPACK_IMPORTED_MODULE_16__["IdiomasYotrosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_17__["APP_ROUTING"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [
                _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"],
                _services_email_service__WEBPACK_IMPORTED_MODULE_4__["EmailService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paginas_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginas/presentacion/presentacion.component */ "./src/app/paginas/presentacion/presentacion.component.ts");
/* harmony import */ var _paginas_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginas/datos-personales/datos-personales.component */ "./src/app/paginas/datos-personales/datos-personales.component.ts");
/* harmony import */ var _paginas_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginas/experiencia/experiencia.component */ "./src/app/paginas/experiencia/experiencia.component.ts");
/* harmony import */ var _paginas_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginas/habilidades/habilidades.component */ "./src/app/paginas/habilidades/habilidades.component.ts");
/* harmony import */ var _paginas_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginas/estudios/estudios.component */ "./src/app/paginas/estudios/estudios.component.ts");
/* harmony import */ var _paginas_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginas/contacto/contacto.component */ "./src/app/paginas/contacto/contacto.component.ts");
/* harmony import */ var _paginas_aptitudes_aptitudes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginas/aptitudes/aptitudes.component */ "./src/app/paginas/aptitudes/aptitudes.component.ts");
/* harmony import */ var _paginas_seleccion_seleccion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginas/seleccion/seleccion.component */ "./src/app/paginas/seleccion/seleccion.component.ts");
/* harmony import */ var _paginas_idiomas_yotros_idiomas_yotros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginas/idiomas-yotros/idiomas-yotros.component */ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.ts");










var APP_ROUTES = [
    { path: '', redirectTo: 'Presentacion', pathMatch: 'full' },
    { path: 'Presentacion', component: _paginas_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_1__["PresentacionComponent"] },
    { path: 'datos-personales', component: _paginas_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_2__["DatosPersonalesComponent"] },
    { path: 'experiencia', component: _paginas_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_3__["ExperienciaComponent"] },
    { path: 'estudios', component: _paginas_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_5__["EstudiosComponent"] },
    { path: 'contacto', component: _paginas_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__["ContactoComponent"] },
    { path: 'aptitudes', component: _paginas_aptitudes_aptitudes_component__WEBPACK_IMPORTED_MODULE_7__["AptitudesComponent"] },
    { path: 'habilidades', component: _paginas_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_4__["HabilidadesComponent"] },
    { path: 'seleccion', component: _paginas_seleccion_seleccion_component__WEBPACK_IMPORTED_MODULE_8__["SeleccionComponent"],
        children: [
            { path: '', redirectTo: 'habilidades', pathMatch: 'full' },
            { path: 'habilidades', component: _paginas_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_4__["HabilidadesComponent"] },
            { path: 'idiomasyOtros', component: _paginas_idiomas_yotros_idiomas_yotros_component__WEBPACK_IMPORTED_MODULE_9__["IdiomasYotrosComponent"] },
        ] },
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\r\n    background-color: rgb(128, 118, 118);\r\n    padding-left: 25%;\r\n    margin-right: -20px;\r\n}\r\n\r\n.enlaces {\r\n    color: black;\r\n}\r\n\r\n.tamañoTexto {\r\n    font-size: 0.9em;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDExOCwgMTE4KTtcclxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG5cclxuLmVubGFjZXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGFtYcOxb1RleHRvIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse menu enlaces\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header \">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\" RouterLinkActive=\"active\">\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('Presentacion')\"><span class=\"saludo\"></span>Presentacion</a></li>\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('datos-personales')\"><span class=\"glyphicon glyphicon-home\"></span>Datos Personales</a></li>\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('estudios')\"><span class=\"glyphicon glyphicon-education\"></span>Estudios</a></li>\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('experiencia')\"><span class=\"glyphicon glyphicon-briefcase\"></span>Experiencia</a></li>\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('seleccion')\"><span class=\"glyphicon glyphicon-education\"></span>Conocimientos</a></li>\r\n                <li><a class=\"tamañoTexto\" [routerLink]=\"('aptitudes')\"><span class=\"glyphicon glyphicon-flag\"></span>Aptitudes</a></li>\r\n\r\n                <li><a [routerLink]=\"('contacto')\"><span class=\"glyphicon glyphicon-user\"></span> Contacto</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/paginas/aptitudes/aptitudes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/paginas/aptitudes/aptitudes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        margin-right: 20%;\r\n        padding-right: 15%;\r\n    }\r\n    .tamaño {\r\n        font-size: 40px;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n    .tamaño {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n.scroll {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.progress {\r\n    width: 150px;\r\n    height: 150px;\r\n    line-height: 150px;\r\n    background: none;\r\n    margin: 0 auto;\r\n    box-shadow: none;\r\n    position: relative;\r\n}\r\n\r\n.progress:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 12px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.progress>span {\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.progress .progress-left {\r\n    left: 0;\r\n}\r\n\r\n.progress .progress-bar {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: none;\r\n    border-width: 12px;\r\n    border-style: solid;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n.progress .progress-left .progress-bar {\r\n    left: 100%;\r\n    border-top-right-radius: 80px;\r\n    border-bottom-right-radius: 80px;\r\n    border-left: 0;\r\n    -webkit-transform-origin: center left;\r\n    transform-origin: center left;\r\n}\r\n\r\n.progress .progress-right {\r\n    right: 0;\r\n}\r\n\r\n.progress .progress-right .progress-bar {\r\n    left: -100%;\r\n    border-top-left-radius: 80px;\r\n    border-bottom-left-radius: 80px;\r\n    border-right: 0;\r\n    -webkit-transform-origin: center right;\r\n    transform-origin: center right;\r\n    -webkit-animation: loading-1 1.8s linear forwards;\r\n            animation: loading-1 1.8s linear forwards;\r\n}\r\n\r\n.progress .progress-value {\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    background: #44484b;\r\n    font-size: 24px;\r\n    color: #fff;\r\n    line-height: 135px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n}\r\n\r\n.progress.blue .progress-bar {\r\n    border-color: #049dff;\r\n}\r\n\r\n.progress.blue .progress-left .progress-bar {\r\n    -webkit-animation: loading-2 1.5s linear forwards 1.8s;\r\n            animation: loading-2 1.5s linear forwards 1.8s;\r\n}\r\n\r\n.progress.yellow .progress-bar {\r\n    border-color: #fdba04;\r\n}\r\n\r\n.progress.yellow .progress-left .progress-bar {\r\n    -webkit-animation: loading-3 1s linear forwards 1.8s;\r\n            animation: loading-3 1s linear forwards 1.8s;\r\n}\r\n\r\n.progress.pink .progress-bar {\r\n    border-color: #ed687c;\r\n}\r\n\r\n.progress.pink .progress-left .progress-bar {\r\n    -webkit-animation: loading-4 0.4s linear forwards 1.8s;\r\n            animation: loading-4 0.4s linear forwards 1.8s;\r\n}\r\n\r\n.progress.green .progress-bar {\r\n    border-color: #1abc9c;\r\n}\r\n\r\n.progress.green .progress-left .progress-bar {\r\n    -webkit-animation: loading-5 1.2s linear forwards 1.8s;\r\n            animation: loading-5 1.2s linear forwards 1.8s;\r\n}\r\n\r\n@-webkit-keyframes loading-1 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-1 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-2 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(144deg);\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-2 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(144deg);\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(90deg);\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(90deg);\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-4 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(36deg);\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-4 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(36deg);\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-5 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(126deg);\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-5 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(126deg);\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n    .progress {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hcHRpdHVkZXMvYXB0aXR1ZGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzREFBOEM7WUFBOUMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0RBQTRDO1lBQTVDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNEQUE4QztZQUE5Qyw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzREFBOEM7WUFBOUMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMseUJBQXlCO0lBQzdCO0FBQ0o7O0FBVEE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLHlCQUF5QjtJQUM3QjtBQUNKOztBQVRBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7SUFDNUI7QUFDSjs7QUFUQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBVEE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLHlCQUF5QjtJQUM3QjtBQUNKOztBQVRBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hcHRpdHVkZXMvYXB0aXR1ZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWluLXdpZHRoOjc2MHB4KSB7XHJcbiAgICAuY29sb2NhY2lvbl9wcmluY2lwYWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgfVxyXG4gICAgLnRhbWHDsW8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjBweCkge1xyXG4gICAgLmNvbG9jYWNpb25fcHJpbmNpcGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxuICAgIC50YW1hw7FvIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDEycHggc29saWQgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcz5zcGFuIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMTJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogODBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhciB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctMSAxLjhzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG5cclxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0ODRiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogNSU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy5ibHVlIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDQ5ZGZmO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy0yIDEuNXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWJhciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZGJhMDQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctMyAxcyBsaW5lYXIgZm9yd2FyZHMgMS44cztcclxufVxyXG5cclxuLnByb2dyZXNzLnBpbmsgLnByb2dyZXNzLWJhciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZDY4N2M7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy5waW5rIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXIge1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLTQgMC40cyBsaW5lYXIgZm9yd2FyZHMgMS44cztcclxufVxyXG5cclxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWFiYzljO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctNSAxLjJzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nLTQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy01IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/aptitudes/aptitudes.component.html":
/*!************************************************************!*\
  !*** ./src/app/paginas/aptitudes/aptitudes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\">\r\n    <div class=\"container colocacion_principal\">\r\n        <div class=\"row\" *ngFor=\"let barra of aptitudes\">\r\n            <div class=\"col-md-3 col-sm-6 col-md-12\">\r\n                <div class=\"progress\" [ngClass]=\"(barra.color)\">\r\n                    <span class=\"progress-left\">\r\n                    <span class=\"progress-bar\" ></span>\r\n                    </span>\r\n                    <span class=\"progress-right\">\r\n                    <span class=\"progress-bar\"></span>\r\n                    </span>\r\n                    <div class=\"progress-value\">{{barra.valor}}% </div>\r\n                </div>\r\n            </div>\r\n            <span class=\"label label-info tamaño\">{{barra.nombre}}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/paginas/aptitudes/aptitudes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/paginas/aptitudes/aptitudes.component.ts ***!
  \**********************************************************/
/*! exports provided: AptitudesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptitudesComponent", function() { return AptitudesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var AptitudesComponent = /** @class */ (function () {
    function AptitudesComponent(dataService) {
        this.dataService = dataService;
        this.aptitudes = [];
    }
    AptitudesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
        this.dataService.getData().subscribe(function (datos) {
            _this.aptitudes = (datos['Aptitudes']);
            //para poner el color segun el valor
            for (var _i = 0, _a = _this.aptitudes; _i < _a.length; _i++) {
                var barra = _a[_i];
                var valor_skill = parseInt(barra['valor']);
                barra.color = _this.coloresBarras(valor_skill);
                console.log(barra.color);
            }
        });
    };
    //metodo par colorear segun el porcentaje de barra
    AptitudesComponent.prototype.coloresBarras = function (valor) {
        var color_class;
        if (valor >= 70) {
            color_class = "green";
        }
        else if (valor < 70) {
            color_class = "yellow";
        }
        return color_class;
    };
    AptitudesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aptitudes',
            template: __webpack_require__(/*! ./aptitudes.component.html */ "./src/app/paginas/aptitudes/aptitudes.component.html"),
            styles: [__webpack_require__(/*! ./aptitudes.component.css */ "./src/app/paginas/aptitudes/aptitudes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], AptitudesComponent);
    return AptitudesComponent;
}());



/***/ }),

/***/ "./src/app/paginas/contacto/contacto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/contacto/contacto.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        padding-right: 20%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/contacto/contacto.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/contacto/contacto.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container colocacion_principal\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"well well-sm\">\r\n                <!--He realizado el mandar el correo a traves de formspree.io por no tener servicio http de servidor-->\r\n                <form class=\"form-horizontal\" method=\"post\" action=\"http://formspree.io/famoredondo@hotmail.com\">\r\n                    <fieldset>\r\n                        <legend class=\"text-center header\">Contactame por correo</legend>\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-user bigicon\"></i></span>\r\n                            <div class=\"col-md-8\">\r\n                                <input id=\"fname\" name=\"name\" type=\"text\" placeholder=\"Nombre\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-envelope-o bigicon\"></i></span>\r\n                            <div class=\"col-md-8\">\r\n                                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"direccion de email\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-pencil-square-o bigicon\"></i></span>\r\n                            <div class=\"col-md-8\">\r\n                                <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"deje su mensaje\" rows=\"7\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12 text-center\">\r\n                                <button href=\"mailto:famoredondo@hotmail.com\" type=\"submit\" class=\"btn btn-primary btn-lg\">Enviar</button>\r\n                                <p><small>Se enviara a traves del servicio formspree.io sin coste alguno</small></p>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/paginas/contacto/contacto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/contacto/contacto.component.ts ***!
  \********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/paginas/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/paginas/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/datos-personales/datos-personales.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/datos-personales/datos-personales.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZGF0b3MtcGVyc29uYWxlcy9kYXRvcy1wZXJzb25hbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/datos-personales/datos-personales.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/datos-personales/datos-personales.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped colocacion_principal\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">DATOS PERSONALES</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let datospersonales of personal_data\">\r\n            <th scope=\"row\">1</th>\r\n            <td>{{datospersonales.column_display}}</td>\r\n            <td>{{datospersonales.column_value}}</td>\r\n\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/paginas/datos-personales/datos-personales.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/paginas/datos-personales/datos-personales.component.ts ***!
  \************************************************************************/
/*! exports provided: DatosPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPersonalesComponent", function() { return DatosPersonalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var DatosPersonalesComponent = /** @class */ (function () {
    function DatosPersonalesComponent(dataService) {
        this.dataService = dataService;
    }
    DatosPersonalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
        this.dataService.getData().subscribe(function (datos) {
            return _this.personal_data = (datos['datos_personales']);
        });
    };
    DatosPersonalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datos-personales',
            template: __webpack_require__(/*! ./datos-personales.component.html */ "./src/app/paginas/datos-personales/datos-personales.component.html"),
            styles: [__webpack_require__(/*! ./datos-personales.component.css */ "./src/app/paginas/datos-personales/datos-personales.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], DatosPersonalesComponent);
    return DatosPersonalesComponent;
}());



/***/ }),

/***/ "./src/app/paginas/estudios/estudios.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/estudios/estudios.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        padding-right: 20%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n}\r\n\r\nimg.pequeña {\r\n    width: auto;\r\n    height: 150px;\r\n}\r\n\r\n.card-fixed-height {\r\n    /* Establece una altura fija que sea suficiente para el contenido más grande */\r\n    height: 450px; \r\n    \r\n}\r\n\r\n.card-style{\r\n    background-color: rgb(202, 218, 228);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9lc3R1ZGlvcy9lc3R1ZGlvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9lc3R1ZGlvcy9lc3R1ZGlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo3NjBweCkge1xyXG4gICAgLmNvbG9jYWNpb25fcHJpbmNpcGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjBweCkge1xyXG4gICAgLmNvbG9jYWNpb25fcHJpbmNpcGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuaW1nLnBlcXVlw7FhIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNhcmQtZml4ZWQtaGVpZ2h0IHtcclxuICAgIC8qIEVzdGFibGVjZSB1bmEgYWx0dXJhIGZpamEgcXVlIHNlYSBzdWZpY2llbnRlIHBhcmEgZWwgY29udGVuaWRvIG3DoXMgZ3JhbmRlICovXHJcbiAgICBoZWlnaHQ6IDQ1MHB4OyBcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIxOCwgMjI4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/estudios/estudios.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/estudios/estudios.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row colocacion_principal  \">\r\n    <div class=\"col-sm-4\" *ngFor=\"let datosestudio of estudios\">\r\n        <div class=\"card card-fixed-height card-block card-style mb-3\">\r\n            <img class=\"card-img-top pequeña center  img-fluid img-thumbnail\" src=\"{{datosestudio.imagen}}\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title lead\">{{datosestudio.titulo}}</h4>\r\n                <p class=\"card-text lead\">{{datosestudio.lugar}}</p>\r\n                <p class=\"card-text\">Años:{{datosestudio.rango}}</p>\r\n                <p class=\"card-text\">Nota:<strong>{{datosestudio.nota}}</strong></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/paginas/estudios/estudios.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/estudios/estudios.component.ts ***!
  \********************************************************/
/*! exports provided: EstudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosComponent", function() { return EstudiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var EstudiosComponent = /** @class */ (function () {
    function EstudiosComponent(dataService) {
        this.dataService = dataService;
    }
    EstudiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
        this.dataService.getData().subscribe(function (datos) {
            return _this.estudios = (datos['estudios']);
        });
    };
    EstudiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estudios',
            template: __webpack_require__(/*! ./estudios.component.html */ "./src/app/paginas/estudios/estudios.component.html"),
            styles: [__webpack_require__(/*! ./estudios.component.css */ "./src/app/paginas/estudios/estudios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], EstudiosComponent);
    return EstudiosComponent;
}());



/***/ }),

/***/ "./src/app/paginas/experiencia/experiencia.component.css":
/*!***************************************************************!*\
  !*** ./src/app/paginas/experiencia/experiencia.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        padding-right: 20%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n}\r\n\r\n.scroll {\r\n    overflow-x: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9leHBlcmllbmNpYS9leHBlcmllbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZXhwZXJpZW5jaWEvZXhwZXJpZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/paginas/experiencia/experiencia.component.html":
/*!****************************************************************!*\
  !*** ./src/app/paginas/experiencia/experiencia.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\">\r\n    <div class=\"container colocacion_principal\" style=\"padding-top: 1em;\" *ngFor=\"let datosExperiencia of Experiencia\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\"> {{datosExperiencia.posicion}}</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"lead\">{{datosExperiencia.compania}}</p>\r\n                <p>{{datosExperiencia.rango}}</p>\r\n                <p>{{datosExperiencia.descripcion}}</p>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/paginas/experiencia/experiencia.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/experiencia/experiencia.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var ExperienciaComponent = /** @class */ (function () {
    function ExperienciaComponent(dataService) {
        this.dataService = dataService;
    }
    ExperienciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //aqui usamos el suscribe para obtener los datos personales solos y meterlos en el personal_data
        this.dataService.getData().subscribe(function (datos) {
            return _this.Experiencia = (datos['experiencias']);
        });
    };
    ExperienciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiencia',
            template: __webpack_require__(/*! ./experiencia.component.html */ "./src/app/paginas/experiencia/experiencia.component.html"),
            styles: [__webpack_require__(/*! ./experiencia.component.css */ "./src/app/paginas/experiencia/experiencia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], ExperienciaComponent);
    return ExperienciaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/habilidades/habilidades.component.css":
/*!***************************************************************!*\
  !*** ./src/app/paginas/habilidades/habilidades.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        padding-right: 35%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n}\r\n\r\n.scroll {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.label {\r\n    border-radius: 0px;\r\n    text-shadow: none;\r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    padding: 5px 7px 5px;\r\n    background-color: black!important;\r\n    z-index: 1;\r\n}\r\n\r\n.label[class*=\"span\"][class*=\"arrow\"] {\r\n    min-height: 0px;\r\n}\r\n\r\n.label.arrowed-right,\r\n.label.arrowed-in-right {\r\n    position: relative;\r\n    margin-right: 0px\r\n}\r\n\r\n.label-large {\r\n    font-size: 13px;\r\n    padding: 4px 12px 4px\r\n}\r\n\r\n.label-large.arrowed:before,\r\n.label-large.arrowed-in:before {\r\n    left: -16px;\r\n    border-width: 11px 8px\r\n}\r\n\r\n.label-large.arrowed-right,\r\n.label-large.arrowed-in-right {\r\n    margin-right: 11px\r\n}\r\n\r\n.progress {\r\n    position: relative;\r\n    height: 30px;\r\n    z-index: 1;\r\n}\r\n\r\n.progress>.progress-type {\r\n    position: absolute;\r\n    left: -15px;\r\n    font-weight: 1000;\r\n    padding: 3px 30px 2px 10px;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(25, 25, 25, 0.2);\r\n}\r\n\r\n.progress>.progress-completed {\r\n    position: absolute;\r\n    right: 0px;\r\n    font-weight: 800;\r\n    padding: 0px 10px 2px;\r\n}\r\n\r\n.progress-content {\r\n    position: relative;\r\n    margin: 20px auto;\r\n    font-size: 40px;\r\n    margin: 0;\r\n}\r\n\r\n.text-circle-center {\r\n    -webkit-transform: translateY(280%) translateX(38%);\r\n            transform: translateY(280%) translateX(38%);\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    text-decoration: underline;\r\n}\r\n\r\n.progress {\r\n    height: 26px;\r\n    background: rgba(0, 0, 0, 0.1);\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    margin-bottom: 40px;\r\n    overflow: visible;\r\n    position: relative;\r\n}\r\n\r\n.progress .progress-bar {\r\n    box-shadow: none;\r\n    border-radius: 0;\r\n    position: relative;\r\n    -webkit-animation: 2s linear 0s normal none infinite running progress-bar-stripes, animate-positive 1s;\r\n    animation: 2s linear 0s normal none infinite running progress-bar-stripes, animate-positive 1s;\r\n}\r\n\r\n.progress-bar .progress-value {\r\n    width: 150px;\r\n    height: 100%;\r\n    background: #000;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    position: absolute;\r\n    line-height: 27px;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.progress:after,\r\n.progress .progress-bar:after,\r\n.progress .progress-value:after {\r\n    content: \"\";\r\n    border-left: 13px solid rgba(0, 0, 0, 0.1);\r\n    border-top: 13px solid transparent;\r\n    border-bottom: 13px solid transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -13px;\r\n}\r\n\r\n.progress.red .progress-bar:after {\r\n    border-left-color: #dc3545;\r\n}\r\n\r\n.progress .progress-value:after {\r\n    border-left: 13px solid #000;\r\n}\r\n\r\n.progress.blue .progress-bar:after {\r\n    border-left-color: #17a2b8;\r\n}\r\n\r\n.progress.yellow .progress-bar:after {\r\n    border-left-color: #ffc107;\r\n}\r\n\r\n.progress.green .progress-bar:after {\r\n    border-left-color: #28a745;\r\n}\r\n\r\n@-webkit-keyframes animate-positive {\r\n    0% {\r\n        width: 0;\r\n    }\r\n}\r\n\r\n@keyframes animate-positive {\r\n    0% {\r\n        width: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .progress-bar .progress-value {\r\n        width: 80px;\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media (min-width: 577px) and (max-width: 768px) {\r\n    .progress-bar[_ngcontent-c3] .progress-value[_ngcontent-c3] {\r\n        width: 115px;\r\n        font-size: 13px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9oYWJpbGlkYWRlcy9oYWJpbGlkYWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1EQUEyQztZQUEzQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0dBQXNHO0lBQ3RHLDhGQUE4RjtBQUNsRzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87QUFDWDs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9oYWJpbGlkYWRlcy9oYWJpbGlkYWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo3NjBweCkge1xyXG4gICAgLmNvbG9jYWNpb25fcHJpbmNpcGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjBweCkge1xyXG4gICAgLmNvbG9jYWNpb25fcHJpbmNpcGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiA1cHggN3B4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sYWJlbFtjbGFzcyo9XCJzcGFuXCJdW2NsYXNzKj1cImFycm93XCJdIHtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLmxhYmVsLmFycm93ZWQtcmlnaHQsXHJcbi5sYWJlbC5hcnJvd2VkLWluLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4XHJcbn1cclxuXHJcbi5sYWJlbC1sYXJnZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweCA0cHhcclxufVxyXG5cclxuLmxhYmVsLWxhcmdlLmFycm93ZWQ6YmVmb3JlLFxyXG4ubGFiZWwtbGFyZ2UuYXJyb3dlZC1pbjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTE2cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDExcHggOHB4XHJcbn1cclxuXHJcbi5sYWJlbC1sYXJnZS5hcnJvd2VkLXJpZ2h0LFxyXG4ubGFiZWwtbGFyZ2UuYXJyb3dlZC1pbi1yaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHhcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzcz4ucHJvZ3Jlc3MtdHlwZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgcGFkZGluZzogM3B4IDMwcHggMnB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjIpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3M+LnByb2dyZXNzLWNvbXBsZXRlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDJweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXh0LWNpcmNsZS1jZW50ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI4MCUpIHRyYW5zbGF0ZVgoMzglKTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMsIGFuaW1hdGUtcG9zaXRpdmUgMXM7XHJcbiAgICBhbmltYXRpb246IDJzIGxpbmVhciAwcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIHByb2dyZXNzLWJhci1zdHJpcGVzLCBhbmltYXRlLXBvc2l0aXZlIDFzO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIC5wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3M6YWZ0ZXIsXHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyOmFmdGVyLFxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXZhbHVlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItdG9wOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAtMTNweDtcclxufVxyXG5cclxuLnByb2dyZXNzLnJlZCAucHJvZ3Jlc3MtYmFyOmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXZhbHVlOmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy5ibHVlIC5wcm9ncmVzcy1iYXI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWJhcjphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmYzEwNztcclxufVxyXG5cclxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1iYXI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXBvc2l0aXZlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlLXBvc2l0aXZlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAucHJvZ3Jlc3MtYmFyIC5wcm9ncmVzcy12YWx1ZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2dyZXNzLWJhcltfbmdjb250ZW50LWMzXSAucHJvZ3Jlc3MtdmFsdWVbX25nY29udGVudC1jM10ge1xyXG4gICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/habilidades/habilidades.component.html":
/*!****************************************************************!*\
  !*** ./src/app/paginas/habilidades/habilidades.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\">\r\n    <div class=\"container colocacion_principal\">\r\n        <div class=\"row\" *ngFor=\"let barra of skills\">\r\n\r\n            <div class=\"progress\">\r\n                <span class=\"progress-type\">\t\r\n                <span class=\"label label-large label-black arrowed-right\">{{barra.nombre}}\r\n                </span>\r\n                </span>\r\n                <div class=\"progress-bar  progress-bar-striped  active\" [ngClass]=\"(barra.color)\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"(barra.valor)+'%'\">\r\n                </div>\r\n                <span class=\"progress-completed\">{{barra.valor}}%\r\n            </span>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/paginas/habilidades/habilidades.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/habilidades/habilidades.component.ts ***!
  \**************************************************************/
/*! exports provided: HabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesComponent", function() { return HabilidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var HabilidadesComponent = /** @class */ (function () {
    function HabilidadesComponent(dataService) {
        this.dataService = dataService;
    }
    HabilidadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (datos) {
            _this.skills = (datos['habilidades']);
            //para poner el color segun el valor
            for (var _i = 0, _a = _this.skills; _i < _a.length; _i++) {
                var barra = _a[_i];
                var valor_skill = parseInt(barra['valor']);
                barra.color = _this.coloresBarras(barra['valor']);
                // como ya tenemos creada la variable que devuelve la clase que queremos
                // ponemos un NgClass en el html y [ngClass]="(barra.color)"
            }
        });
    };
    //metodo par colorear segun el porcentaje de barra
    HabilidadesComponent.prototype.coloresBarras = function (valor) {
        var color_class;
        if (valor >= 60) {
            color_class = "progress-bar-success";
        }
        else if (valor < 60 && valor > 20) {
            color_class = "progress-bar-warning";
        }
        else {
            color_class = "progress-bar-danger";
        }
        return color_class;
    };
    HabilidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-habilidades',
            template: __webpack_require__(/*! ./habilidades.component.html */ "./src/app/paginas/habilidades/habilidades.component.html"),
            styles: [__webpack_require__(/*! ./habilidades.component.css */ "./src/app/paginas/habilidades/habilidades.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], HabilidadesComponent);
    return HabilidadesComponent;
}());



/***/ }),

/***/ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/idiomas-yotros/idiomas-yotros.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        padding-right: 35%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n    }\r\n}\r\n\r\n.fijar {\r\n    width: 8rem;\r\n    /* Ancho fijo de la primera columna */\r\n}\r\n\r\n.scroll {\r\n    overflow-x: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9pZGlvbWFzLXlvdHJvcy9pZGlvbWFzLXlvdHJvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2lkaW9tYXMteW90cm9zL2lkaW9tYXMteW90cm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWluLXdpZHRoOjc2MHB4KSB7XHJcbiAgICAuY29sb2NhY2lvbl9wcmluY2lwYWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2MHB4KSB7XHJcbiAgICAuY29sb2NhY2lvbl9wcmluY2lwYWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlqYXIge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICAvKiBBbmNobyBmaWpvIGRlIGxhIHByaW1lcmEgY29sdW1uYSAqL1xyXG59XHJcblxyXG4uc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/paginas/idiomas-yotros/idiomas-yotros.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\">\r\n    <div class=\"container colocacion_principal\">\r\n        <h3>IDIOMAS</h3>\r\n        <table class=\"table table-responsive table-striped\" *ngFor=\"let lenguas of idiomas\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th>{{lenguas.nombre}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>{{lenguas.valor}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <h3>Cursos y tutoriales</h3>\r\n        <table class=\"table table-responsive table-striped\" *ngFor=\"let cursados of cursos\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Lugar</th>\r\n                    <th>Horas</th>\r\n                    <th>Profesor</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"fijar\">{{cursados.nombre}}</td>\r\n                    <td class=\"fijar\">{{cursados.lugar}}</td>\r\n                    <td class=\"fijar\">{{cursados.horas}}</td>\r\n                    <td class=\"fijar\">{{cursados.profesor}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/paginas/idiomas-yotros/idiomas-yotros.component.ts ***!
  \********************************************************************/
/*! exports provided: IdiomasYotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomasYotrosComponent", function() { return IdiomasYotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var IdiomasYotrosComponent = /** @class */ (function () {
    function IdiomasYotrosComponent(dataService) {
        this.dataService = dataService;
    }
    IdiomasYotrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (datos) {
            _this.cursos = datos['cursos'];
            _this.idiomas = datos['idiomas'];
        });
    };
    IdiomasYotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-idiomas-yotros',
            template: __webpack_require__(/*! ./idiomas-yotros.component.html */ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.html"),
            styles: [__webpack_require__(/*! ./idiomas-yotros.component.css */ "./src/app/paginas/idiomas-yotros/idiomas-yotros.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], IdiomasYotrosComponent);
    return IdiomasYotrosComponent;
}());



/***/ }),

/***/ "./src/app/paginas/presentacion/presentacion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/presentacion/presentacion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        margin-right: 20%;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 10%;\r\n        margin-right: 10%;\r\n    }\r\n}\r\n\r\n.color_fondo {\r\n    background-color: azure\r\n}\r\n\r\n.color_fondo h2 {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wcmVzZW50YWNpb24vcHJlc2VudGFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9wcmVzZW50YWNpb24vcHJlc2VudGFjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWluLXdpZHRoOjc2MHB4KSB7XHJcbiAgICAuY29sb2NhY2lvbl9wcmluY2lwYWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9yX2ZvbmRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlXHJcbn1cclxuXHJcbi5jb2xvcl9mb25kbyBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/presentacion/presentacion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paginas/presentacion/presentacion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"colocacion_principal color_fondo\">\r\n    <h2>Un poco sobre mi</h2>\r\n    <h4>Trabajador, constante y con inventiva para encontrar soluciones ante los problemas. Asi es como me describo y creo que la gente que ha trabajado conmigo puede decir lo mismo\r\n    </h4>\r\n    <h4>\r\n        Tengo varios titulos muy diversos: El primero que estudie fue el de ingeniero tecnico de Obras publicas, especialidad construcciones civiles. Este terminé compaginando un trabajo de 8 horas en una empresa para costearmelos y no ser una carga familiar.\r\n    </h4>\r\n    <h4>Sin dejar de trabajar, continue con el ciclo formativo presencia de Sistemas de Telecomunicacion e Informaticos y alli encontre el gusto a la informatica y a la configuracion de equipos(Windows,Linux, routers,cableado.</h4>\r\n    <h4>Al ver que en el futuro la programacion sera uno de los temas indispensables para la mayoria de la gente aprendi por mi cuenta conceptos de Java, Html y Javascript. a lo que decidi que tendria que asentar estos conceptos de una forma mas seria por eso decidi\r\n        comenzar el curso de Desarrollo de aplicaciones Multiplataforma de forma Online</h4>\r\n    <h3>Espero que os guste la aplicación</h3>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/paginas/presentacion/presentacion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paginas/presentacion/presentacion.component.ts ***!
  \****************************************************************/
/*! exports provided: PresentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function() { return PresentacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresentacionComponent = /** @class */ (function () {
    function PresentacionComponent() {
    }
    PresentacionComponent.prototype.ngOnInit = function () {
    };
    PresentacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentacion',
            template: __webpack_require__(/*! ./presentacion.component.html */ "./src/app/paginas/presentacion/presentacion.component.html"),
            styles: [__webpack_require__(/*! ./presentacion.component.css */ "./src/app/paginas/presentacion/presentacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresentacionComponent);
    return PresentacionComponent;
}());



/***/ }),

/***/ "./src/app/paginas/seleccion/seleccion.component.css":
/*!***********************************************************!*\
  !*** ./src/app/paginas/seleccion/seleccion.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 28%;\r\n        margin-right: 20%;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\n@media(max-width:760px) {\r\n    .colocacion_principal {\r\n        margin-left: 10%;\r\n        margin-right: 10%;\r\n    }\r\n}\r\n\r\n/* Cuando el link <a> tiene la clase \"activo\", cambiamos el estilo del botón que hay dentro */\r\n\r\n.activo button {\r\n    background-color: #0d6efd !important; /* Azul tipo Bootstrap Primary */\r\n    border-color: #0d6efd !important;\r\n    color: white;\r\n    font-weight: bold;\r\n    /* Opcional: una sombra para que destaque más */\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9zZWxlY2Npb24vc2VsZWNjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQSw2RkFBNkY7O0FBQzdGO0lBQ0ksb0NBQW9DLEVBQUUsZ0NBQWdDO0lBQ3RFLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtDQUErQztJQUMvQyxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3NlbGVjY2lvbi9zZWxlY2Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6NzYwcHgpIHtcclxuICAgIC5jb2xvY2FjaW9uX3ByaW5jaXBhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2MHB4KSB7XHJcbiAgICAuY29sb2NhY2lvbl9wcmluY2lwYWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEN1YW5kbyBlbCBsaW5rIDxhPiB0aWVuZSBsYSBjbGFzZSBcImFjdGl2b1wiLCBjYW1iaWFtb3MgZWwgZXN0aWxvIGRlbCBib3TDs24gcXVlIGhheSBkZW50cm8gKi9cclxuLmFjdGl2byBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZCAhaW1wb3J0YW50OyAvKiBBenVsIHRpcG8gQm9vdHN0cmFwIFByaW1hcnkgKi9cclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiBPcGNpb25hbDogdW5hIHNvbWJyYSBwYXJhIHF1ZSBkZXN0YXF1ZSBtw6FzICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/seleccion/seleccion.component.html":
/*!************************************************************!*\
  !*** ./src/app/paginas/seleccion/seleccion.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"colocacion_principal\">\r\n    <a class=\"tamañoTexto\" [routerLink]=\"('habilidades')\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">PROGRAMAS Y LENGUAJES</button>\r\n    </a>\r\n    <a class=\"tamañoTexto\" [routerLink]=\"('idiomasyOtros')\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">IDIOMAS Y OTROS</button>\r\n    </a>\r\n</div>\r\n\r\n<router-outlet class=\"colocacion_principal\"></router-outlet>"

/***/ }),

/***/ "./src/app/paginas/seleccion/seleccion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/paginas/seleccion/seleccion.component.ts ***!
  \**********************************************************/
/*! exports provided: SeleccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionComponent", function() { return SeleccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeleccionComponent = /** @class */ (function () {
    function SeleccionComponent() {
    }
    SeleccionComponent.prototype.ngOnInit = function () {
    };
    SeleccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seleccion',
            template: __webpack_require__(/*! ./seleccion.component.html */ "./src/app/paginas/seleccion/seleccion.component.html"),
            styles: [__webpack_require__(/*! ./seleccion.component.css */ "./src/app/paginas/seleccion/seleccion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeleccionComponent);
    return SeleccionComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        //creamos la ruta para la carpeta assets donde estara el json
        this.ruta_datos = './assets/datos.json';
    }
    //metodo para obtener los datos de la direccion
    DataServiceService.prototype.getData = function () {
        return this.http.get(this.ruta_datos);
        //el suscribe lo realizaremos en cada constructor de la paggina ya que el json estan todos los datos juntos
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; Charset=UTF-8');
        var body = 'data=' + JSON.stringify(data);
        this.http.post("", body, { headers: headers });
    };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width:768px) {\r\n    .circle_image {\r\n        width: 140px;\r\n        height: auto;\r\n    }\r\n    .sidebar {\r\n        height: 100%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        background-image: url(\"https://imgs.search.brave.com/KbR-nnbqc_z_QPzUhjFlENfUQi2egM-359qQPUihQSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZWNs/YWRvLWRlLW9yZGVu/YWRvci0yMDE0MDI5/LmpwZw\");\r\n    }\r\n}\r\n\r\n@media(max-width:768px) {\r\n    .circle_image {\r\n        width: 100px;\r\n        height: auto;\r\n        margin-left: 40%;\r\n    }\r\n    .sidebar{background-image: url(\"https://imgs.search.brave.com/KbR-nnbqc_z_QPzUhjFlENfUQi2egM-359qQPUihQSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZWNs/YWRvLWRlLW9yZGVu/YWRvci0yMDE0MDI5/LmpwZw\");}\r\n    .sidebar h3,\r\n    .sidebar h4 {\r\n        font-size: 0.9rem;\r\n    }\r\n    .redes {\r\n        font-size: 0.9rem;\r\n    }\r\n}\r\n\r\n.sidebar h3,\r\n.sidebar h4 {\r\n    padding-left: 15px;\r\n}\r\n\r\n.sidebar {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.circle_image {\r\n    border-radius: 20%;\r\n    padding-left: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.btn-social {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    height: 40px;\r\n}\r\n\r\n.btn-social>:first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social.btn-lg {\r\n    padding-left: 61px\r\n}\r\n\r\n.btn-social.btn-lg>:first-child {\r\n    line-height: 45px;\r\n    width: 45px;\r\n    font-size: 1.8em\r\n}\r\n\r\n.btn-social.btn-sm {\r\n    padding-left: 38px\r\n}\r\n\r\n.btn-social.btn-sm>:first-child {\r\n    line-height: 28px;\r\n    width: 28px;\r\n    font-size: 1.4em\r\n}\r\n\r\n.btn-social.btn-xs {\r\n    padding-left: 30px\r\n}\r\n\r\n.btn-social.btn-xs>:first-child {\r\n    line-height: 20px;\r\n    width: 20px;\r\n    font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    height: 34px;\r\n    width: 34px;\r\n    padding: 0\r\n}\r\n\r\n.btn-social-icon>:first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n    padding-left: 61px\r\n}\r\n\r\n.btn-social-icon.btn-lg>:first-child {\r\n    line-height: 45px;\r\n    width: 45px;\r\n    font-size: 1.8em\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n    padding-left: 38px\r\n}\r\n\r\n.btn-social-icon.btn-sm>:first-child {\r\n    line-height: 28px;\r\n    width: 28px;\r\n    font-size: 1.4em\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n    padding-left: 30px\r\n}\r\n\r\n.btn-social-icon.btn-xs>:first-child {\r\n    line-height: 20px;\r\n    width: 20px;\r\n    font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon>:first-child {\r\n    border: none;\r\n    text-align: center;\r\n    width: 100% !important\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n    height: 45px;\r\n    width: 45px;\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n    height: 30px;\r\n    width: 30px;\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n    height: 22px;\r\n    width: 22px;\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\n.btn-adn {\r\n    color: #fff;\r\n    background-color: #d87a68;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:focus,\r\n.btn-adn.focus {\r\n    color: #fff;\r\n    background-color: #ce563f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:hover {\r\n    color: #fff;\r\n    background-color: #ce563f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active,\r\n.btn-adn.active,\r\n.open>.dropdown-toggle.btn-adn {\r\n    color: #fff;\r\n    background-color: #ce563f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active:hover,\r\n.btn-adn.active:hover,\r\n.open>.dropdown-toggle.btn-adn:hover,\r\n.btn-adn:active:focus,\r\n.btn-adn.active:focus,\r\n.open>.dropdown-toggle.btn-adn:focus,\r\n.btn-adn:active.focus,\r\n.btn-adn.active.focus,\r\n.open>.dropdown-toggle.btn-adn.focus {\r\n    color: #fff;\r\n    background-color: #b94630;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active,\r\n.btn-adn.active,\r\n.open>.dropdown-toggle.btn-adn {\r\n    background-image: none\r\n}\r\n\r\n.btn-adn.disabled:hover,\r\n.btn-adn[disabled]:hover,\r\nfieldset[disabled] .btn-adn:hover,\r\n.btn-adn.disabled:focus,\r\n.btn-adn[disabled]:focus,\r\nfieldset[disabled] .btn-adn:focus,\r\n.btn-adn.disabled.focus,\r\n.btn-adn[disabled].focus,\r\nfieldset[disabled] .btn-adn.focus {\r\n    background-color: #d87a68;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn .badge {\r\n    color: #d87a68;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-bitbucket {\r\n    color: #fff;\r\n    background-color: #205081;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:focus,\r\n.btn-bitbucket.focus {\r\n    color: #fff;\r\n    background-color: #163758;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:hover {\r\n    color: #fff;\r\n    background-color: #163758;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active,\r\n.btn-bitbucket.active,\r\n.open>.dropdown-toggle.btn-bitbucket {\r\n    color: #fff;\r\n    background-color: #163758;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active:hover,\r\n.btn-bitbucket.active:hover,\r\n.open>.dropdown-toggle.btn-bitbucket:hover,\r\n.btn-bitbucket:active:focus,\r\n.btn-bitbucket.active:focus,\r\n.open>.dropdown-toggle.btn-bitbucket:focus,\r\n.btn-bitbucket:active.focus,\r\n.btn-bitbucket.active.focus,\r\n.open>.dropdown-toggle.btn-bitbucket.focus {\r\n    color: #fff;\r\n    background-color: #0f253c;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active,\r\n.btn-bitbucket.active,\r\n.open>.dropdown-toggle.btn-bitbucket {\r\n    background-image: none\r\n}\r\n\r\n.btn-bitbucket.disabled:hover,\r\n.btn-bitbucket[disabled]:hover,\r\nfieldset[disabled] .btn-bitbucket:hover,\r\n.btn-bitbucket.disabled:focus,\r\n.btn-bitbucket[disabled]:focus,\r\nfieldset[disabled] .btn-bitbucket:focus,\r\n.btn-bitbucket.disabled.focus,\r\n.btn-bitbucket[disabled].focus,\r\nfieldset[disabled] .btn-bitbucket.focus {\r\n    background-color: #205081;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket .badge {\r\n    color: #205081;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-dropbox {\r\n    color: #fff;\r\n    background-color: #1087dd;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:focus,\r\n.btn-dropbox.focus {\r\n    color: #fff;\r\n    background-color: #0d6aad;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:hover {\r\n    color: #fff;\r\n    background-color: #0d6aad;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active,\r\n.btn-dropbox.active,\r\n.open>.dropdown-toggle.btn-dropbox {\r\n    color: #fff;\r\n    background-color: #0d6aad;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active:hover,\r\n.btn-dropbox.active:hover,\r\n.open>.dropdown-toggle.btn-dropbox:hover,\r\n.btn-dropbox:active:focus,\r\n.btn-dropbox.active:focus,\r\n.open>.dropdown-toggle.btn-dropbox:focus,\r\n.btn-dropbox:active.focus,\r\n.btn-dropbox.active.focus,\r\n.open>.dropdown-toggle.btn-dropbox.focus {\r\n    color: #fff;\r\n    background-color: #0a568c;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active,\r\n.btn-dropbox.active,\r\n.open>.dropdown-toggle.btn-dropbox {\r\n    background-image: none\r\n}\r\n\r\n.btn-dropbox.disabled:hover,\r\n.btn-dropbox[disabled]:hover,\r\nfieldset[disabled] .btn-dropbox:hover,\r\n.btn-dropbox.disabled:focus,\r\n.btn-dropbox[disabled]:focus,\r\nfieldset[disabled] .btn-dropbox:focus,\r\n.btn-dropbox.disabled.focus,\r\n.btn-dropbox[disabled].focus,\r\nfieldset[disabled] .btn-dropbox.focus {\r\n    background-color: #1087dd;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox .badge {\r\n    color: #1087dd;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-facebook {\r\n    color: #fff;\r\n    background-color: #3b5998;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:focus,\r\n.btn-facebook.focus {\r\n    color: #fff;\r\n    background-color: #2d4373;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:hover {\r\n    color: #fff;\r\n    background-color: #2d4373;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active,\r\n.btn-facebook.active,\r\n.open>.dropdown-toggle.btn-facebook {\r\n    color: #fff;\r\n    background-color: #2d4373;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active:hover,\r\n.btn-facebook.active:hover,\r\n.open>.dropdown-toggle.btn-facebook:hover,\r\n.btn-facebook:active:focus,\r\n.btn-facebook.active:focus,\r\n.open>.dropdown-toggle.btn-facebook:focus,\r\n.btn-facebook:active.focus,\r\n.btn-facebook.active.focus,\r\n.open>.dropdown-toggle.btn-facebook.focus {\r\n    color: #fff;\r\n    background-color: #23345a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active,\r\n.btn-facebook.active,\r\n.open>.dropdown-toggle.btn-facebook {\r\n    background-image: none\r\n}\r\n\r\n.btn-facebook.disabled:hover,\r\n.btn-facebook[disabled]:hover,\r\nfieldset[disabled] .btn-facebook:hover,\r\n.btn-facebook.disabled:focus,\r\n.btn-facebook[disabled]:focus,\r\nfieldset[disabled] .btn-facebook:focus,\r\n.btn-facebook.disabled.focus,\r\n.btn-facebook[disabled].focus,\r\nfieldset[disabled] .btn-facebook.focus {\r\n    background-color: #3b5998;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook .badge {\r\n    color: #3b5998;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-flickr {\r\n    color: #fff;\r\n    background-color: #ff0084;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:focus,\r\n.btn-flickr.focus {\r\n    color: #fff;\r\n    background-color: #cc006a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:hover {\r\n    color: #fff;\r\n    background-color: #cc006a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active,\r\n.btn-flickr.active,\r\n.open>.dropdown-toggle.btn-flickr {\r\n    color: #fff;\r\n    background-color: #cc006a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active:hover,\r\n.btn-flickr.active:hover,\r\n.open>.dropdown-toggle.btn-flickr:hover,\r\n.btn-flickr:active:focus,\r\n.btn-flickr.active:focus,\r\n.open>.dropdown-toggle.btn-flickr:focus,\r\n.btn-flickr:active.focus,\r\n.btn-flickr.active.focus,\r\n.open>.dropdown-toggle.btn-flickr.focus {\r\n    color: #fff;\r\n    background-color: #a80057;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active,\r\n.btn-flickr.active,\r\n.open>.dropdown-toggle.btn-flickr {\r\n    background-image: none\r\n}\r\n\r\n.btn-flickr.disabled:hover,\r\n.btn-flickr[disabled]:hover,\r\nfieldset[disabled] .btn-flickr:hover,\r\n.btn-flickr.disabled:focus,\r\n.btn-flickr[disabled]:focus,\r\nfieldset[disabled] .btn-flickr:focus,\r\n.btn-flickr.disabled.focus,\r\n.btn-flickr[disabled].focus,\r\nfieldset[disabled] .btn-flickr.focus {\r\n    background-color: #ff0084;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr .badge {\r\n    color: #ff0084;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-foursquare {\r\n    color: #fff;\r\n    background-color: #f94877;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:focus,\r\n.btn-foursquare.focus {\r\n    color: #fff;\r\n    background-color: #f71752;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:hover {\r\n    color: #fff;\r\n    background-color: #f71752;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active,\r\n.btn-foursquare.active,\r\n.open>.dropdown-toggle.btn-foursquare {\r\n    color: #fff;\r\n    background-color: #f71752;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active:hover,\r\n.btn-foursquare.active:hover,\r\n.open>.dropdown-toggle.btn-foursquare:hover,\r\n.btn-foursquare:active:focus,\r\n.btn-foursquare.active:focus,\r\n.open>.dropdown-toggle.btn-foursquare:focus,\r\n.btn-foursquare:active.focus,\r\n.btn-foursquare.active.focus,\r\n.open>.dropdown-toggle.btn-foursquare.focus {\r\n    color: #fff;\r\n    background-color: #e30742;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active,\r\n.btn-foursquare.active,\r\n.open>.dropdown-toggle.btn-foursquare {\r\n    background-image: none\r\n}\r\n\r\n.btn-foursquare.disabled:hover,\r\n.btn-foursquare[disabled]:hover,\r\nfieldset[disabled] .btn-foursquare:hover,\r\n.btn-foursquare.disabled:focus,\r\n.btn-foursquare[disabled]:focus,\r\nfieldset[disabled] .btn-foursquare:focus,\r\n.btn-foursquare.disabled.focus,\r\n.btn-foursquare[disabled].focus,\r\nfieldset[disabled] .btn-foursquare.focus {\r\n    background-color: #f94877;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare .badge {\r\n    color: #f94877;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-github {\r\n    color: #fff;\r\n    background-color: #444;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:focus,\r\n.btn-github.focus {\r\n    color: #fff;\r\n    background-color: #2b2b2b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:hover {\r\n    color: #fff;\r\n    background-color: #2b2b2b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active,\r\n.btn-github.active,\r\n.open>.dropdown-toggle.btn-github {\r\n    color: #fff;\r\n    background-color: #2b2b2b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active:hover,\r\n.btn-github.active:hover,\r\n.open>.dropdown-toggle.btn-github:hover,\r\n.btn-github:active:focus,\r\n.btn-github.active:focus,\r\n.open>.dropdown-toggle.btn-github:focus,\r\n.btn-github:active.focus,\r\n.btn-github.active.focus,\r\n.open>.dropdown-toggle.btn-github.focus {\r\n    color: #fff;\r\n    background-color: #191919;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active,\r\n.btn-github.active,\r\n.open>.dropdown-toggle.btn-github {\r\n    background-image: none\r\n}\r\n\r\n.btn-github.disabled:hover,\r\n.btn-github[disabled]:hover,\r\nfieldset[disabled] .btn-github:hover,\r\n.btn-github.disabled:focus,\r\n.btn-github[disabled]:focus,\r\nfieldset[disabled] .btn-github:focus,\r\n.btn-github.disabled.focus,\r\n.btn-github[disabled].focus,\r\nfieldset[disabled] .btn-github.focus {\r\n    background-color: #444;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github .badge {\r\n    color: #444;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-google {\r\n    color: #fff;\r\n    background-color: #dd4b39;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:focus,\r\n.btn-google.focus {\r\n    color: #fff;\r\n    background-color: #c23321;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:hover {\r\n    color: #fff;\r\n    background-color: #c23321;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active,\r\n.btn-google.active,\r\n.open>.dropdown-toggle.btn-google {\r\n    color: #fff;\r\n    background-color: #c23321;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active:hover,\r\n.btn-google.active:hover,\r\n.open>.dropdown-toggle.btn-google:hover,\r\n.btn-google:active:focus,\r\n.btn-google.active:focus,\r\n.open>.dropdown-toggle.btn-google:focus,\r\n.btn-google:active.focus,\r\n.btn-google.active.focus,\r\n.open>.dropdown-toggle.btn-google.focus {\r\n    color: #fff;\r\n    background-color: #a32b1c;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active,\r\n.btn-google.active,\r\n.open>.dropdown-toggle.btn-google {\r\n    background-image: none\r\n}\r\n\r\n.btn-google.disabled:hover,\r\n.btn-google[disabled]:hover,\r\nfieldset[disabled] .btn-google:hover,\r\n.btn-google.disabled:focus,\r\n.btn-google[disabled]:focus,\r\nfieldset[disabled] .btn-google:focus,\r\n.btn-google.disabled.focus,\r\n.btn-google[disabled].focus,\r\nfieldset[disabled] .btn-google.focus {\r\n    background-color: #dd4b39;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google .badge {\r\n    color: #dd4b39;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-instagram {\r\n    color: #fff;\r\n    background-color: #3f729b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:focus,\r\n.btn-instagram.focus {\r\n    color: #fff;\r\n    background-color: #305777;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:hover {\r\n    color: #fff;\r\n    background-color: #305777;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active,\r\n.btn-instagram.active,\r\n.open>.dropdown-toggle.btn-instagram {\r\n    color: #fff;\r\n    background-color: #305777;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active:hover,\r\n.btn-instagram.active:hover,\r\n.open>.dropdown-toggle.btn-instagram:hover,\r\n.btn-instagram:active:focus,\r\n.btn-instagram.active:focus,\r\n.open>.dropdown-toggle.btn-instagram:focus,\r\n.btn-instagram:active.focus,\r\n.btn-instagram.active.focus,\r\n.open>.dropdown-toggle.btn-instagram.focus {\r\n    color: #fff;\r\n    background-color: #26455d;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active,\r\n.btn-instagram.active,\r\n.open>.dropdown-toggle.btn-instagram {\r\n    background-image: none\r\n}\r\n\r\n.btn-instagram.disabled:hover,\r\n.btn-instagram[disabled]:hover,\r\nfieldset[disabled] .btn-instagram:hover,\r\n.btn-instagram.disabled:focus,\r\n.btn-instagram[disabled]:focus,\r\nfieldset[disabled] .btn-instagram:focus,\r\n.btn-instagram.disabled.focus,\r\n.btn-instagram[disabled].focus,\r\nfieldset[disabled] .btn-instagram.focus {\r\n    background-color: #3f729b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram .badge {\r\n    color: #3f729b;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-linkedin {\r\n    color: #fff;\r\n    background-color: #007bb6;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:focus,\r\n.btn-linkedin.focus {\r\n    color: #fff;\r\n    background-color: #005983;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:hover {\r\n    color: #fff;\r\n    background-color: #005983;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active,\r\n.btn-linkedin.active,\r\n.open>.dropdown-toggle.btn-linkedin {\r\n    color: #fff;\r\n    background-color: #005983;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active:hover,\r\n.btn-linkedin.active:hover,\r\n.open>.dropdown-toggle.btn-linkedin:hover,\r\n.btn-linkedin:active:focus,\r\n.btn-linkedin.active:focus,\r\n.open>.dropdown-toggle.btn-linkedin:focus,\r\n.btn-linkedin:active.focus,\r\n.btn-linkedin.active.focus,\r\n.open>.dropdown-toggle.btn-linkedin.focus {\r\n    color: #fff;\r\n    background-color: #00405f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active,\r\n.btn-linkedin.active,\r\n.open>.dropdown-toggle.btn-linkedin {\r\n    background-image: none\r\n}\r\n\r\n.btn-linkedin.disabled:hover,\r\n.btn-linkedin[disabled]:hover,\r\nfieldset[disabled] .btn-linkedin:hover,\r\n.btn-linkedin.disabled:focus,\r\n.btn-linkedin[disabled]:focus,\r\nfieldset[disabled] .btn-linkedin:focus,\r\n.btn-linkedin.disabled.focus,\r\n.btn-linkedin[disabled].focus,\r\nfieldset[disabled] .btn-linkedin.focus {\r\n    background-color: #007bb6;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin .badge {\r\n    color: #007bb6;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-microsoft {\r\n    color: #fff;\r\n    background-color: #2672ec;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:focus,\r\n.btn-microsoft.focus {\r\n    color: #fff;\r\n    background-color: #125acd;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:hover {\r\n    color: #fff;\r\n    background-color: #125acd;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active,\r\n.btn-microsoft.active,\r\n.open>.dropdown-toggle.btn-microsoft {\r\n    color: #fff;\r\n    background-color: #125acd;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active:hover,\r\n.btn-microsoft.active:hover,\r\n.open>.dropdown-toggle.btn-microsoft:hover,\r\n.btn-microsoft:active:focus,\r\n.btn-microsoft.active:focus,\r\n.open>.dropdown-toggle.btn-microsoft:focus,\r\n.btn-microsoft:active.focus,\r\n.btn-microsoft.active.focus,\r\n.open>.dropdown-toggle.btn-microsoft.focus {\r\n    color: #fff;\r\n    background-color: #0f4bac;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active,\r\n.btn-microsoft.active,\r\n.open>.dropdown-toggle.btn-microsoft {\r\n    background-image: none\r\n}\r\n\r\n.btn-microsoft.disabled:hover,\r\n.btn-microsoft[disabled]:hover,\r\nfieldset[disabled] .btn-microsoft:hover,\r\n.btn-microsoft.disabled:focus,\r\n.btn-microsoft[disabled]:focus,\r\nfieldset[disabled] .btn-microsoft:focus,\r\n.btn-microsoft.disabled.focus,\r\n.btn-microsoft[disabled].focus,\r\nfieldset[disabled] .btn-microsoft.focus {\r\n    background-color: #2672ec;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft .badge {\r\n    color: #2672ec;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-odnoklassniki {\r\n    color: #fff;\r\n    background-color: #f4731c;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:focus,\r\n.btn-odnoklassniki.focus {\r\n    color: #fff;\r\n    background-color: #d35b0a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:hover {\r\n    color: #fff;\r\n    background-color: #d35b0a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active,\r\n.btn-odnoklassniki.active,\r\n.open>.dropdown-toggle.btn-odnoklassniki {\r\n    color: #fff;\r\n    background-color: #d35b0a;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active:hover,\r\n.btn-odnoklassniki.active:hover,\r\n.open>.dropdown-toggle.btn-odnoklassniki:hover,\r\n.btn-odnoklassniki:active:focus,\r\n.btn-odnoklassniki.active:focus,\r\n.open>.dropdown-toggle.btn-odnoklassniki:focus,\r\n.btn-odnoklassniki:active.focus,\r\n.btn-odnoklassniki.active.focus,\r\n.open>.dropdown-toggle.btn-odnoklassniki.focus {\r\n    color: #fff;\r\n    background-color: #b14c09;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active,\r\n.btn-odnoklassniki.active,\r\n.open>.dropdown-toggle.btn-odnoklassniki {\r\n    background-image: none\r\n}\r\n\r\n.btn-odnoklassniki.disabled:hover,\r\n.btn-odnoklassniki[disabled]:hover,\r\nfieldset[disabled] .btn-odnoklassniki:hover,\r\n.btn-odnoklassniki.disabled:focus,\r\n.btn-odnoklassniki[disabled]:focus,\r\nfieldset[disabled] .btn-odnoklassniki:focus,\r\n.btn-odnoklassniki.disabled.focus,\r\n.btn-odnoklassniki[disabled].focus,\r\nfieldset[disabled] .btn-odnoklassniki.focus {\r\n    background-color: #f4731c;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki .badge {\r\n    color: #f4731c;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-openid {\r\n    color: #fff;\r\n    background-color: #f7931e;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:focus,\r\n.btn-openid.focus {\r\n    color: #fff;\r\n    background-color: #da7908;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:hover {\r\n    color: #fff;\r\n    background-color: #da7908;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active,\r\n.btn-openid.active,\r\n.open>.dropdown-toggle.btn-openid {\r\n    color: #fff;\r\n    background-color: #da7908;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active:hover,\r\n.btn-openid.active:hover,\r\n.open>.dropdown-toggle.btn-openid:hover,\r\n.btn-openid:active:focus,\r\n.btn-openid.active:focus,\r\n.open>.dropdown-toggle.btn-openid:focus,\r\n.btn-openid:active.focus,\r\n.btn-openid.active.focus,\r\n.open>.dropdown-toggle.btn-openid.focus {\r\n    color: #fff;\r\n    background-color: #b86607;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active,\r\n.btn-openid.active,\r\n.open>.dropdown-toggle.btn-openid {\r\n    background-image: none\r\n}\r\n\r\n.btn-openid.disabled:hover,\r\n.btn-openid[disabled]:hover,\r\nfieldset[disabled] .btn-openid:hover,\r\n.btn-openid.disabled:focus,\r\n.btn-openid[disabled]:focus,\r\nfieldset[disabled] .btn-openid:focus,\r\n.btn-openid.disabled.focus,\r\n.btn-openid[disabled].focus,\r\nfieldset[disabled] .btn-openid.focus {\r\n    background-color: #f7931e;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid .badge {\r\n    color: #f7931e;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-pinterest {\r\n    color: #fff;\r\n    background-color: #cb2027;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:focus,\r\n.btn-pinterest.focus {\r\n    color: #fff;\r\n    background-color: #9f191f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:hover {\r\n    color: #fff;\r\n    background-color: #9f191f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active,\r\n.btn-pinterest.active,\r\n.open>.dropdown-toggle.btn-pinterest {\r\n    color: #fff;\r\n    background-color: #9f191f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active:hover,\r\n.btn-pinterest.active:hover,\r\n.open>.dropdown-toggle.btn-pinterest:hover,\r\n.btn-pinterest:active:focus,\r\n.btn-pinterest.active:focus,\r\n.open>.dropdown-toggle.btn-pinterest:focus,\r\n.btn-pinterest:active.focus,\r\n.btn-pinterest.active.focus,\r\n.open>.dropdown-toggle.btn-pinterest.focus {\r\n    color: #fff;\r\n    background-color: #801419;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active,\r\n.btn-pinterest.active,\r\n.open>.dropdown-toggle.btn-pinterest {\r\n    background-image: none\r\n}\r\n\r\n.btn-pinterest.disabled:hover,\r\n.btn-pinterest[disabled]:hover,\r\nfieldset[disabled] .btn-pinterest:hover,\r\n.btn-pinterest.disabled:focus,\r\n.btn-pinterest[disabled]:focus,\r\nfieldset[disabled] .btn-pinterest:focus,\r\n.btn-pinterest.disabled.focus,\r\n.btn-pinterest[disabled].focus,\r\nfieldset[disabled] .btn-pinterest.focus {\r\n    background-color: #cb2027;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest .badge {\r\n    color: #cb2027;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-reddit {\r\n    color: #000;\r\n    background-color: #eff7ff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:focus,\r\n.btn-reddit.focus {\r\n    color: #000;\r\n    background-color: #bcddff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:hover {\r\n    color: #000;\r\n    background-color: #bcddff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active,\r\n.btn-reddit.active,\r\n.open>.dropdown-toggle.btn-reddit {\r\n    color: #000;\r\n    background-color: #bcddff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active:hover,\r\n.btn-reddit.active:hover,\r\n.open>.dropdown-toggle.btn-reddit:hover,\r\n.btn-reddit:active:focus,\r\n.btn-reddit.active:focus,\r\n.open>.dropdown-toggle.btn-reddit:focus,\r\n.btn-reddit:active.focus,\r\n.btn-reddit.active.focus,\r\n.open>.dropdown-toggle.btn-reddit.focus {\r\n    color: #000;\r\n    background-color: #98ccff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active,\r\n.btn-reddit.active,\r\n.open>.dropdown-toggle.btn-reddit {\r\n    background-image: none\r\n}\r\n\r\n.btn-reddit.disabled:hover,\r\n.btn-reddit[disabled]:hover,\r\nfieldset[disabled] .btn-reddit:hover,\r\n.btn-reddit.disabled:focus,\r\n.btn-reddit[disabled]:focus,\r\nfieldset[disabled] .btn-reddit:focus,\r\n.btn-reddit.disabled.focus,\r\n.btn-reddit[disabled].focus,\r\nfieldset[disabled] .btn-reddit.focus {\r\n    background-color: #eff7ff;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit .badge {\r\n    color: #eff7ff;\r\n    background-color: #000\r\n}\r\n\r\n.btn-soundcloud {\r\n    color: #fff;\r\n    background-color: #f50;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:focus,\r\n.btn-soundcloud.focus {\r\n    color: #fff;\r\n    background-color: #c40;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:hover {\r\n    color: #fff;\r\n    background-color: #c40;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active,\r\n.btn-soundcloud.active,\r\n.open>.dropdown-toggle.btn-soundcloud {\r\n    color: #fff;\r\n    background-color: #c40;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active:hover,\r\n.btn-soundcloud.active:hover,\r\n.open>.dropdown-toggle.btn-soundcloud:hover,\r\n.btn-soundcloud:active:focus,\r\n.btn-soundcloud.active:focus,\r\n.open>.dropdown-toggle.btn-soundcloud:focus,\r\n.btn-soundcloud:active.focus,\r\n.btn-soundcloud.active.focus,\r\n.open>.dropdown-toggle.btn-soundcloud.focus {\r\n    color: #fff;\r\n    background-color: #a83800;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active,\r\n.btn-soundcloud.active,\r\n.open>.dropdown-toggle.btn-soundcloud {\r\n    background-image: none\r\n}\r\n\r\n.btn-soundcloud.disabled:hover,\r\n.btn-soundcloud[disabled]:hover,\r\nfieldset[disabled] .btn-soundcloud:hover,\r\n.btn-soundcloud.disabled:focus,\r\n.btn-soundcloud[disabled]:focus,\r\nfieldset[disabled] .btn-soundcloud:focus,\r\n.btn-soundcloud.disabled.focus,\r\n.btn-soundcloud[disabled].focus,\r\nfieldset[disabled] .btn-soundcloud.focus {\r\n    background-color: #f50;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud .badge {\r\n    color: #f50;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-tumblr {\r\n    color: #fff;\r\n    background-color: #2c4762;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:focus,\r\n.btn-tumblr.focus {\r\n    color: #fff;\r\n    background-color: #1c2d3f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:hover {\r\n    color: #fff;\r\n    background-color: #1c2d3f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active,\r\n.btn-tumblr.active,\r\n.open>.dropdown-toggle.btn-tumblr {\r\n    color: #fff;\r\n    background-color: #1c2d3f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active:hover,\r\n.btn-tumblr.active:hover,\r\n.open>.dropdown-toggle.btn-tumblr:hover,\r\n.btn-tumblr:active:focus,\r\n.btn-tumblr.active:focus,\r\n.open>.dropdown-toggle.btn-tumblr:focus,\r\n.btn-tumblr:active.focus,\r\n.btn-tumblr.active.focus,\r\n.open>.dropdown-toggle.btn-tumblr.focus {\r\n    color: #fff;\r\n    background-color: #111c26;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active,\r\n.btn-tumblr.active,\r\n.open>.dropdown-toggle.btn-tumblr {\r\n    background-image: none\r\n}\r\n\r\n.btn-tumblr.disabled:hover,\r\n.btn-tumblr[disabled]:hover,\r\nfieldset[disabled] .btn-tumblr:hover,\r\n.btn-tumblr.disabled:focus,\r\n.btn-tumblr[disabled]:focus,\r\nfieldset[disabled] .btn-tumblr:focus,\r\n.btn-tumblr.disabled.focus,\r\n.btn-tumblr[disabled].focus,\r\nfieldset[disabled] .btn-tumblr.focus {\r\n    background-color: #2c4762;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr .badge {\r\n    color: #2c4762;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-twitter {\r\n    color: #fff;\r\n    background-color: #55acee;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:focus,\r\n.btn-twitter.focus {\r\n    color: #fff;\r\n    background-color: #2795e9;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:hover {\r\n    color: #fff;\r\n    background-color: #2795e9;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active,\r\n.btn-twitter.active,\r\n.open>.dropdown-toggle.btn-twitter {\r\n    color: #fff;\r\n    background-color: #2795e9;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active:hover,\r\n.btn-twitter.active:hover,\r\n.open>.dropdown-toggle.btn-twitter:hover,\r\n.btn-twitter:active:focus,\r\n.btn-twitter.active:focus,\r\n.open>.dropdown-toggle.btn-twitter:focus,\r\n.btn-twitter:active.focus,\r\n.btn-twitter.active.focus,\r\n.open>.dropdown-toggle.btn-twitter.focus {\r\n    color: #fff;\r\n    background-color: #1583d7;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active,\r\n.btn-twitter.active,\r\n.open>.dropdown-toggle.btn-twitter {\r\n    background-image: none\r\n}\r\n\r\n.btn-twitter.disabled:hover,\r\n.btn-twitter[disabled]:hover,\r\nfieldset[disabled] .btn-twitter:hover,\r\n.btn-twitter.disabled:focus,\r\n.btn-twitter[disabled]:focus,\r\nfieldset[disabled] .btn-twitter:focus,\r\n.btn-twitter.disabled.focus,\r\n.btn-twitter[disabled].focus,\r\nfieldset[disabled] .btn-twitter.focus {\r\n    background-color: #55acee;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter .badge {\r\n    color: #55acee;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-vimeo {\r\n    color: #fff;\r\n    background-color: #1ab7ea;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:focus,\r\n.btn-vimeo.focus {\r\n    color: #fff;\r\n    background-color: #1295bf;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:hover {\r\n    color: #fff;\r\n    background-color: #1295bf;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active,\r\n.btn-vimeo.active,\r\n.open>.dropdown-toggle.btn-vimeo {\r\n    color: #fff;\r\n    background-color: #1295bf;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active:hover,\r\n.btn-vimeo.active:hover,\r\n.open>.dropdown-toggle.btn-vimeo:hover,\r\n.btn-vimeo:active:focus,\r\n.btn-vimeo.active:focus,\r\n.open>.dropdown-toggle.btn-vimeo:focus,\r\n.btn-vimeo:active.focus,\r\n.btn-vimeo.active.focus,\r\n.open>.dropdown-toggle.btn-vimeo.focus {\r\n    color: #fff;\r\n    background-color: #0f7b9f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active,\r\n.btn-vimeo.active,\r\n.open>.dropdown-toggle.btn-vimeo {\r\n    background-image: none\r\n}\r\n\r\n.btn-vimeo.disabled:hover,\r\n.btn-vimeo[disabled]:hover,\r\nfieldset[disabled] .btn-vimeo:hover,\r\n.btn-vimeo.disabled:focus,\r\n.btn-vimeo[disabled]:focus,\r\nfieldset[disabled] .btn-vimeo:focus,\r\n.btn-vimeo.disabled.focus,\r\n.btn-vimeo[disabled].focus,\r\nfieldset[disabled] .btn-vimeo.focus {\r\n    background-color: #1ab7ea;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo .badge {\r\n    color: #1ab7ea;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-vk {\r\n    color: #fff;\r\n    background-color: #587ea3;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:focus,\r\n.btn-vk.focus {\r\n    color: #fff;\r\n    background-color: #466482;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:hover {\r\n    color: #fff;\r\n    background-color: #466482;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active,\r\n.btn-vk.active,\r\n.open>.dropdown-toggle.btn-vk {\r\n    color: #fff;\r\n    background-color: #466482;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active:hover,\r\n.btn-vk.active:hover,\r\n.open>.dropdown-toggle.btn-vk:hover,\r\n.btn-vk:active:focus,\r\n.btn-vk.active:focus,\r\n.open>.dropdown-toggle.btn-vk:focus,\r\n.btn-vk:active.focus,\r\n.btn-vk.active.focus,\r\n.open>.dropdown-toggle.btn-vk.focus {\r\n    color: #fff;\r\n    background-color: #3a526b;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active,\r\n.btn-vk.active,\r\n.open>.dropdown-toggle.btn-vk {\r\n    background-image: none\r\n}\r\n\r\n.btn-vk.disabled:hover,\r\n.btn-vk[disabled]:hover,\r\nfieldset[disabled] .btn-vk:hover,\r\n.btn-vk.disabled:focus,\r\n.btn-vk[disabled]:focus,\r\nfieldset[disabled] .btn-vk:focus,\r\n.btn-vk.disabled.focus,\r\n.btn-vk[disabled].focus,\r\nfieldset[disabled] .btn-vk.focus {\r\n    background-color: #587ea3;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk .badge {\r\n    color: #587ea3;\r\n    background-color: #fff\r\n}\r\n\r\n.btn-yahoo {\r\n    color: #fff;\r\n    background-color: #720e9e;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:focus,\r\n.btn-yahoo.focus {\r\n    color: #fff;\r\n    background-color: #500a6f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:hover {\r\n    color: #fff;\r\n    background-color: #500a6f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active,\r\n.btn-yahoo.active,\r\n.open>.dropdown-toggle.btn-yahoo {\r\n    color: #fff;\r\n    background-color: #500a6f;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active:hover,\r\n.btn-yahoo.active:hover,\r\n.open>.dropdown-toggle.btn-yahoo:hover,\r\n.btn-yahoo:active:focus,\r\n.btn-yahoo.active:focus,\r\n.open>.dropdown-toggle.btn-yahoo:focus,\r\n.btn-yahoo:active.focus,\r\n.btn-yahoo.active.focus,\r\n.open>.dropdown-toggle.btn-yahoo.focus {\r\n    color: #fff;\r\n    background-color: #39074e;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active,\r\n.btn-yahoo.active,\r\n.open>.dropdown-toggle.btn-yahoo {\r\n    background-image: none\r\n}\r\n\r\n.btn-yahoo.disabled:hover,\r\n.btn-yahoo[disabled]:hover,\r\nfieldset[disabled] .btn-yahoo:hover,\r\n.btn-yahoo.disabled:focus,\r\n.btn-yahoo[disabled]:focus,\r\nfieldset[disabled] .btn-yahoo:focus,\r\n.btn-yahoo.disabled.focus,\r\n.btn-yahoo[disabled].focus,\r\nfieldset[disabled] .btn-yahoo.focus {\r\n    background-color: #720e9e;\r\n    border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo .badge {\r\n    color: #720e9e;\r\n    background-color: #fff\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7UUFDVixvTkFBb047SUFDeE47QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7SUFDQSxTQUFTLG9OQUFvTixDQUFDO0lBQzlOOztRQUVJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYO0FB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SUFDekI7QUFDSjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBOzs7Ozs7Ozs7SUFTSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7Ozs7Ozs7OztJQVNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5jaXJjbGVfaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1ncy5zZWFyY2guYnJhdmUuY29tL0tiUi1ubmJxY196X1FQelVoakZsRU5mVVFpMmVnTS0zNTlxUVBVaWhRU2MvcnM6Zml0Ojg2MDowOjA6MC9nOmNlL2FIUjBjSE02THk5MGFIVnQvWW5NdVpISmxZVzF6ZEdsdC9aUzVqYjIwdllpOTBaV05zL1lXUnZMV1JsTFc5eVpHVnUvWVdSdmNpMHlNREUwTURJNS9MbXB3WndcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jaXJjbGVfaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIH1cclxuICAgIC5zaWRlYmFye2JhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1ncy5zZWFyY2guYnJhdmUuY29tL0tiUi1ubmJxY196X1FQelVoakZsRU5mVVFpMmVnTS0zNTlxUVBVaWhRU2MvcnM6Zml0Ojg2MDowOjA6MC9nOmNlL2FIUjBjSE02THk5MGFIVnQvWW5NdVpISmxZVzF6ZEdsdC9aUzVqYjIwdllpOTBaV05zL1lXUnZMV1JsTFc5eVpHVnUvWVdSdmNpMHlNREUwTURJNS9MbXB3WndcIik7fVxyXG4gICAgLnNpZGViYXIgaDMsXHJcbiAgICAuc2lkZWJhciBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAucmVkZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhciBoMyxcclxuLnNpZGViYXIgaDQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNpcmNsZV9pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsPjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwuYnRuLWxnIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjFweFxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC5idG4tbGc+OmZpcnN0LWNoaWxkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDEuOGVtXHJcbn1cclxuXHJcbi5idG4tc29jaWFsLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHhcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwuYnRuLXNtPjpmaXJzdC1jaGlsZCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRlbVxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC5idG4teHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLmJ0bi14cz46Zmlyc3QtY2hpbGQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1pY29uPjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtaWNvbi5idG4tbGcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MXB4XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWljb24uYnRuLWxnPjpmaXJzdC1jaGlsZCB7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjhlbVxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1pY29uLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHhcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtaWNvbi5idG4tc20+OmZpcnN0LWNoaWxkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEuNGVtXHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWljb24uYnRuLXhzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweFxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1pY29uLmJ0bi14cz46Zmlyc3QtY2hpbGQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtaWNvbj46Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1pY29uLmJ0bi1sZyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtaWNvbi5idG4tc20ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwXHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWljb24uYnRuLXhzIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMFxyXG59XHJcblxyXG4uYnRuLWFkbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODdhNjg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWFkbjpmb2N1cyxcclxuLmJ0bi1hZG4uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U1NjNmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1hZG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U1NjNmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1hZG46YWN0aXZlLFxyXG4uYnRuLWFkbi5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWFkbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZTU2M2Y7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWFkbjphY3RpdmU6aG92ZXIsXHJcbi5idG4tYWRuLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tYWRuOmhvdmVyLFxyXG4uYnRuLWFkbjphY3RpdmU6Zm9jdXMsXHJcbi5idG4tYWRuLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tYWRuOmZvY3VzLFxyXG4uYnRuLWFkbjphY3RpdmUuZm9jdXMsXHJcbi5idG4tYWRuLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tYWRuLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5NDYzMDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tYWRuOmFjdGl2ZSxcclxuLmJ0bi1hZG4uYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1hZG4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLWFkbi5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1hZG5bZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1hZG46aG92ZXIsXHJcbi5idG4tYWRuLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWFkbltkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWFkbjpmb2N1cyxcclxuLmJ0bi1hZG4uZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tYWRuW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tYWRuLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODdhNjg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWFkbiAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNkODdhNjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tYml0YnVja2V0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNTA4MTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tYml0YnVja2V0OmZvY3VzLFxyXG4uYnRuLWJpdGJ1Y2tldC5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM3NTg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWJpdGJ1Y2tldDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM3NTg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWJpdGJ1Y2tldDphY3RpdmUsXHJcbi5idG4tYml0YnVja2V0LmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tYml0YnVja2V0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2Mzc1ODtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tYml0YnVja2V0OmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1iaXRidWNrZXQuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1iaXRidWNrZXQ6aG92ZXIsXHJcbi5idG4tYml0YnVja2V0OmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1iaXRidWNrZXQuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1iaXRidWNrZXQ6Zm9jdXMsXHJcbi5idG4tYml0YnVja2V0OmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1iaXRidWNrZXQuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1iaXRidWNrZXQuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyNTNjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1iaXRidWNrZXQ6YWN0aXZlLFxyXG4uYnRuLWJpdGJ1Y2tldC5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWJpdGJ1Y2tldCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tYml0YnVja2V0LmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLWJpdGJ1Y2tldFtkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWJpdGJ1Y2tldDpob3ZlcixcclxuLmJ0bi1iaXRidWNrZXQuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tYml0YnVja2V0W2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tYml0YnVja2V0OmZvY3VzLFxyXG4uYnRuLWJpdGJ1Y2tldC5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1iaXRidWNrZXRbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1iaXRidWNrZXQuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNTA4MTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tYml0YnVja2V0IC5iYWRnZSB7XHJcbiAgICBjb2xvcjogIzIwNTA4MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1kcm9wYm94IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwODdkZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZHJvcGJveDpmb2N1cyxcclxuLmJ0bi1kcm9wYm94LmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmFhZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZHJvcGJveDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZhYWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWRyb3Bib3g6YWN0aXZlLFxyXG4uYnRuLWRyb3Bib3guYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kcm9wYm94IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmFhZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZHJvcGJveDphY3RpdmU6aG92ZXIsXHJcbi5idG4tZHJvcGJveC5hY3RpdmU6aG92ZXIsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRyb3Bib3g6aG92ZXIsXHJcbi5idG4tZHJvcGJveDphY3RpdmU6Zm9jdXMsXHJcbi5idG4tZHJvcGJveC5hY3RpdmU6Zm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRyb3Bib3g6Zm9jdXMsXHJcbi5idG4tZHJvcGJveDphY3RpdmUuZm9jdXMsXHJcbi5idG4tZHJvcGJveC5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRyb3Bib3guZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1NjhjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1kcm9wYm94OmFjdGl2ZSxcclxuLmJ0bi1kcm9wYm94LmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZHJvcGJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tZHJvcGJveC5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1kcm9wYm94W2Rpc2FibGVkXTpob3ZlcixcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZHJvcGJveDpob3ZlcixcclxuLmJ0bi1kcm9wYm94LmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWRyb3Bib3hbZGlzYWJsZWRdOmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kcm9wYm94OmZvY3VzLFxyXG4uYnRuLWRyb3Bib3guZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tZHJvcGJveFtkaXNhYmxlZF0uZm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRyb3Bib3guZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwODdkZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZHJvcGJveCAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMxMDg3ZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vazpmb2N1cyxcclxuLmJ0bi1mYWNlYm9vay5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNzM7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3MztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2s6YWN0aXZlLFxyXG4uYnRuLWZhY2Vib29rLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZmFjZWJvb2sge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vazphY3RpdmU6aG92ZXIsXHJcbi5idG4tZmFjZWJvb2suYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mYWNlYm9vazpob3ZlcixcclxuLmJ0bi1mYWNlYm9vazphY3RpdmU6Zm9jdXMsXHJcbi5idG4tZmFjZWJvb2suYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mYWNlYm9vazpmb2N1cyxcclxuLmJ0bi1mYWNlYm9vazphY3RpdmUuZm9jdXMsXHJcbi5idG4tZmFjZWJvb2suYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mYWNlYm9vay5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM0NWE7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rOmFjdGl2ZSxcclxuLmJ0bi1mYWNlYm9vay5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vay5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1mYWNlYm9va1tkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWZhY2Vib29rOmhvdmVyLFxyXG4uYnRuLWZhY2Vib29rLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWZhY2Vib29rW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZmFjZWJvb2s6Zm9jdXMsXHJcbi5idG4tZmFjZWJvb2suZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tZmFjZWJvb2tbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1mYWNlYm9vay5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tZmxpY2tyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4NDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZmxpY2tyOmZvY3VzLFxyXG4uYnRuLWZsaWNrci5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzAwNmE7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWZsaWNrcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzAwNmE7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWZsaWNrcjphY3RpdmUsXHJcbi5idG4tZmxpY2tyLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZmxpY2tyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDA2YTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZmxpY2tyOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1mbGlja3IuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mbGlja3I6aG92ZXIsXHJcbi5idG4tZmxpY2tyOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1mbGlja3IuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mbGlja3I6Zm9jdXMsXHJcbi5idG4tZmxpY2tyOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1mbGlja3IuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mbGlja3IuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgwMDU3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1mbGlja3I6YWN0aXZlLFxyXG4uYnRuLWZsaWNrci5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWZsaWNrciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tZmxpY2tyLmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLWZsaWNrcltkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWZsaWNrcjpob3ZlcixcclxuLmJ0bi1mbGlja3IuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tZmxpY2tyW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZmxpY2tyOmZvY3VzLFxyXG4uYnRuLWZsaWNrci5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1mbGlja3JbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1mbGlja3IuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4NDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZmxpY2tyIC5iYWRnZSB7XHJcbiAgICBjb2xvcjogI2ZmMDA4NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1mb3Vyc3F1YXJlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NDg3NztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZm91cnNxdWFyZTpmb2N1cyxcclxuLmJ0bi1mb3Vyc3F1YXJlLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MTc1MjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZm91cnNxdWFyZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzE3NTI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWZvdXJzcXVhcmU6YWN0aXZlLFxyXG4uYnRuLWZvdXJzcXVhcmUuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1mb3Vyc3F1YXJlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MTc1MjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZm91cnNxdWFyZTphY3RpdmU6aG92ZXIsXHJcbi5idG4tZm91cnNxdWFyZS5hY3RpdmU6aG92ZXIsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWZvdXJzcXVhcmU6aG92ZXIsXHJcbi5idG4tZm91cnNxdWFyZTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tZm91cnNxdWFyZS5hY3RpdmU6Zm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWZvdXJzcXVhcmU6Zm9jdXMsXHJcbi5idG4tZm91cnNxdWFyZTphY3RpdmUuZm9jdXMsXHJcbi5idG4tZm91cnNxdWFyZS5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWZvdXJzcXVhcmUuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMwNzQyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1mb3Vyc3F1YXJlOmFjdGl2ZSxcclxuLmJ0bi1mb3Vyc3F1YXJlLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZm91cnNxdWFyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tZm91cnNxdWFyZS5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1mb3Vyc3F1YXJlW2Rpc2FibGVkXTpob3ZlcixcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZm91cnNxdWFyZTpob3ZlcixcclxuLmJ0bi1mb3Vyc3F1YXJlLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWZvdXJzcXVhcmVbZGlzYWJsZWRdOmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1mb3Vyc3F1YXJlOmZvY3VzLFxyXG4uYnRuLWZvdXJzcXVhcmUuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tZm91cnNxdWFyZVtkaXNhYmxlZF0uZm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWZvdXJzcXVhcmUuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NDg3NztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZm91cnNxdWFyZSAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmOTQ4Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tZ2l0aHViIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZ2l0aHViOmZvY3VzLFxyXG4uYnRuLWdpdGh1Yi5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWdpdGh1Yjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWdpdGh1YjphY3RpdmUsXHJcbi5idG4tZ2l0aHViLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZ2l0aHViIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZ2l0aHViOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1naXRodWIuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1naXRodWI6aG92ZXIsXHJcbi5idG4tZ2l0aHViOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1naXRodWIuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1naXRodWI6Zm9jdXMsXHJcbi5idG4tZ2l0aHViOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1naXRodWIuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1naXRodWIuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1naXRodWI6YWN0aXZlLFxyXG4uYnRuLWdpdGh1Yi5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWdpdGh1YiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tZ2l0aHViLmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLWdpdGh1YltkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWdpdGh1Yjpob3ZlcixcclxuLmJ0bi1naXRodWIuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tZ2l0aHViW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZ2l0aHViOmZvY3VzLFxyXG4uYnRuLWdpdGh1Yi5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1naXRodWJbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1naXRodWIuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZ2l0aHViIC5iYWRnZSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1nb29nbGU6Zm9jdXMsXHJcbi5idG4tZ29vZ2xlLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzMyMTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzMyMTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlOmFjdGl2ZSxcclxuLmJ0bi1nb29nbGUuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIzMzIxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1nb29nbGU6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLWdvb2dsZS5hY3RpdmU6aG92ZXIsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWdvb2dsZTpob3ZlcixcclxuLmJ0bi1nb29nbGU6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLWdvb2dsZS5hY3RpdmU6Zm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWdvb2dsZTpmb2N1cyxcclxuLmJ0bi1nb29nbGU6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLWdvb2dsZS5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWdvb2dsZS5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzJiMWM7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWdvb2dsZTphY3RpdmUsXHJcbi5idG4tZ29vZ2xlLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1nb29nbGUuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tZ29vZ2xlW2Rpc2FibGVkXTpob3ZlcixcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZ29vZ2xlOmhvdmVyLFxyXG4uYnRuLWdvb2dsZS5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1nb29nbGVbZGlzYWJsZWRdOmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1nb29nbGU6Zm9jdXMsXHJcbi5idG4tZ29vZ2xlLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLWdvb2dsZVtkaXNhYmxlZF0uZm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWdvb2dsZS5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1nb29nbGUgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjZGQ0YjM5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbTpmb2N1cyxcclxuLmJ0bi1pbnN0YWdyYW0uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1Nzc3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1pbnN0YWdyYW06aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1Nzc3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1pbnN0YWdyYW06YWN0aXZlLFxyXG4uYnRuLWluc3RhZ3JhbS5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWluc3RhZ3JhbSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDU3Nzc7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbTphY3RpdmU6aG92ZXIsXHJcbi5idG4taW5zdGFncmFtLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5zdGFncmFtOmhvdmVyLFxyXG4uYnRuLWluc3RhZ3JhbTphY3RpdmU6Zm9jdXMsXHJcbi5idG4taW5zdGFncmFtLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5zdGFncmFtOmZvY3VzLFxyXG4uYnRuLWluc3RhZ3JhbTphY3RpdmUuZm9jdXMsXHJcbi5idG4taW5zdGFncmFtLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5zdGFncmFtLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDU1ZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4taW5zdGFncmFtOmFjdGl2ZSxcclxuLmJ0bi1pbnN0YWdyYW0uYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbnN0YWdyYW0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbS5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1pbnN0YWdyYW1bZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbnN0YWdyYW06aG92ZXIsXHJcbi5idG4taW5zdGFncmFtLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWluc3RhZ3JhbVtkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluc3RhZ3JhbTpmb2N1cyxcclxuLmJ0bi1pbnN0YWdyYW0uZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4taW5zdGFncmFtW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5zdGFncmFtLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbSAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMzZjcyOWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tbGlua2VkaW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1saW5rZWRpbjpmb2N1cyxcclxuLmJ0bi1saW5rZWRpbi5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU5ODM7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWxpbmtlZGluOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTk4MztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tbGlua2VkaW46YWN0aXZlLFxyXG4uYnRuLWxpbmtlZGluLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tbGlua2VkaW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OTgzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1saW5rZWRpbjphY3RpdmU6aG92ZXIsXHJcbi5idG4tbGlua2VkaW4uYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5rZWRpbjpob3ZlcixcclxuLmJ0bi1saW5rZWRpbjphY3RpdmU6Zm9jdXMsXHJcbi5idG4tbGlua2VkaW4uYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5rZWRpbjpmb2N1cyxcclxuLmJ0bi1saW5rZWRpbjphY3RpdmUuZm9jdXMsXHJcbi5idG4tbGlua2VkaW4uYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5rZWRpbi5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQwNWY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLWxpbmtlZGluOmFjdGl2ZSxcclxuLmJ0bi1saW5rZWRpbi5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1saW5rZWRpbi5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1saW5rZWRpbltkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbmtlZGluOmhvdmVyLFxyXG4uYnRuLWxpbmtlZGluLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLWxpbmtlZGluW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGlua2VkaW46Zm9jdXMsXHJcbi5idG4tbGlua2VkaW4uZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tbGlua2VkaW5bZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rZWRpbi5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1saW5rZWRpbiAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMwMDdiYjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tbWljcm9zb2Z0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzJlYztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tbWljcm9zb2Z0OmZvY3VzLFxyXG4uYnRuLW1pY3Jvc29mdC5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjVhY2Q7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLW1pY3Jvc29mdDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjVhY2Q7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLW1pY3Jvc29mdDphY3RpdmUsXHJcbi5idG4tbWljcm9zb2Z0LmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tbWljcm9zb2Z0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyNWFjZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tbWljcm9zb2Z0OmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1taWNyb3NvZnQuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1taWNyb3NvZnQ6aG92ZXIsXHJcbi5idG4tbWljcm9zb2Z0OmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1taWNyb3NvZnQuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1taWNyb3NvZnQ6Zm9jdXMsXHJcbi5idG4tbWljcm9zb2Z0OmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1taWNyb3NvZnQuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1taWNyb3NvZnQuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YmFjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1taWNyb3NvZnQ6YWN0aXZlLFxyXG4uYnRuLW1pY3Jvc29mdC5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLW1pY3Jvc29mdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tbWljcm9zb2Z0LmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLW1pY3Jvc29mdFtkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLW1pY3Jvc29mdDpob3ZlcixcclxuLmJ0bi1taWNyb3NvZnQuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tbWljcm9zb2Z0W2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbWljcm9zb2Z0OmZvY3VzLFxyXG4uYnRuLW1pY3Jvc29mdC5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1taWNyb3NvZnRbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1taWNyb3NvZnQuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzJlYztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tbWljcm9zb2Z0IC5iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI2NzJlYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1vZG5va2xhc3NuaWtpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NzMxYztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb2Rub2tsYXNzbmlraTpmb2N1cyxcclxuLmJ0bi1vZG5va2xhc3NuaWtpLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNWIwYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb2Rub2tsYXNzbmlraTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzViMGE7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLW9kbm9rbGFzc25pa2k6YWN0aXZlLFxyXG4uYnRuLW9kbm9rbGFzc25pa2kuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1vZG5va2xhc3NuaWtpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNWIwYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb2Rub2tsYXNzbmlraTphY3RpdmU6aG92ZXIsXHJcbi5idG4tb2Rub2tsYXNzbmlraS5hY3RpdmU6aG92ZXIsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLW9kbm9rbGFzc25pa2k6aG92ZXIsXHJcbi5idG4tb2Rub2tsYXNzbmlraTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tb2Rub2tsYXNzbmlraS5hY3RpdmU6Zm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLW9kbm9rbGFzc25pa2k6Zm9jdXMsXHJcbi5idG4tb2Rub2tsYXNzbmlraTphY3RpdmUuZm9jdXMsXHJcbi5idG4tb2Rub2tsYXNzbmlraS5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLW9kbm9rbGFzc25pa2kuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjE0YzA5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1vZG5va2xhc3NuaWtpOmFjdGl2ZSxcclxuLmJ0bi1vZG5va2xhc3NuaWtpLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tb2Rub2tsYXNzbmlraSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tb2Rub2tsYXNzbmlraS5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1vZG5va2xhc3NuaWtpW2Rpc2FibGVkXTpob3ZlcixcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb2Rub2tsYXNzbmlraTpob3ZlcixcclxuLmJ0bi1vZG5va2xhc3NuaWtpLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLW9kbm9rbGFzc25pa2lbZGlzYWJsZWRdOmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1vZG5va2xhc3NuaWtpOmZvY3VzLFxyXG4uYnRuLW9kbm9rbGFzc25pa2kuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tb2Rub2tsYXNzbmlraVtkaXNhYmxlZF0uZm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLW9kbm9rbGFzc25pa2kuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NzMxYztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb2Rub2tsYXNzbmlraSAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmNDczMWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tb3BlbmlkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTMxZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb3BlbmlkOmZvY3VzLFxyXG4uYnRuLW9wZW5pZC5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTc5MDg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLW9wZW5pZDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTc5MDg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLW9wZW5pZDphY3RpdmUsXHJcbi5idG4tb3BlbmlkLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tb3BlbmlkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzkwODtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb3BlbmlkOmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1vcGVuaWQuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1vcGVuaWQ6aG92ZXIsXHJcbi5idG4tb3BlbmlkOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vcGVuaWQuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1vcGVuaWQ6Zm9jdXMsXHJcbi5idG4tb3BlbmlkOmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1vcGVuaWQuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1vcGVuaWQuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg2NjA3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1vcGVuaWQ6YWN0aXZlLFxyXG4uYnRuLW9wZW5pZC5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLW9wZW5pZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tb3BlbmlkLmRpc2FibGVkOmhvdmVyLFxyXG4uYnRuLW9wZW5pZFtkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLW9wZW5pZDpob3ZlcixcclxuLmJ0bi1vcGVuaWQuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3BlbmlkW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3BlbmlkOmZvY3VzLFxyXG4uYnRuLW9wZW5pZC5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1vcGVuaWRbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1vcGVuaWQuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTMxZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tb3BlbmlkIC5iYWRnZSB7XHJcbiAgICBjb2xvcjogI2Y3OTMxZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1waW50ZXJlc3Qge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IyMDI3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1waW50ZXJlc3Q6Zm9jdXMsXHJcbi5idG4tcGludGVyZXN0LmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmMTkxZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tcGludGVyZXN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmMTkxZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tcGludGVyZXN0OmFjdGl2ZSxcclxuLmJ0bi1waW50ZXJlc3QuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1waW50ZXJlc3Qge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWYxOTFmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1waW50ZXJlc3Q6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXBpbnRlcmVzdC5hY3RpdmU6aG92ZXIsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXBpbnRlcmVzdDpob3ZlcixcclxuLmJ0bi1waW50ZXJlc3Q6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXBpbnRlcmVzdC5hY3RpdmU6Zm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXBpbnRlcmVzdDpmb2N1cyxcclxuLmJ0bi1waW50ZXJlc3Q6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXBpbnRlcmVzdC5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXBpbnRlcmVzdC5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDE0MTk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXBpbnRlcmVzdDphY3RpdmUsXHJcbi5idG4tcGludGVyZXN0LmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcGludGVyZXN0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1waW50ZXJlc3QuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tcGludGVyZXN0W2Rpc2FibGVkXTpob3ZlcixcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcGludGVyZXN0OmhvdmVyLFxyXG4uYnRuLXBpbnRlcmVzdC5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1waW50ZXJlc3RbZGlzYWJsZWRdOmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1waW50ZXJlc3Q6Zm9jdXMsXHJcbi5idG4tcGludGVyZXN0LmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXBpbnRlcmVzdFtkaXNhYmxlZF0uZm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXBpbnRlcmVzdC5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IyMDI3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1waW50ZXJlc3QgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjY2IyMDI3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXJlZGRpdCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY3ZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXJlZGRpdDpmb2N1cyxcclxuLmJ0bi1yZWRkaXQuZm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkZGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1yZWRkaXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkZGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1yZWRkaXQ6YWN0aXZlLFxyXG4uYnRuLXJlZGRpdC5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXJlZGRpdCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiY2RkZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXJlZGRpdDphY3RpdmU6aG92ZXIsXHJcbi5idG4tcmVkZGl0LmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcmVkZGl0OmhvdmVyLFxyXG4uYnRuLXJlZGRpdDphY3RpdmU6Zm9jdXMsXHJcbi5idG4tcmVkZGl0LmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcmVkZGl0OmZvY3VzLFxyXG4uYnRuLXJlZGRpdDphY3RpdmUuZm9jdXMsXHJcbi5idG4tcmVkZGl0LmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcmVkZGl0LmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4Y2NmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tcmVkZGl0OmFjdGl2ZSxcclxuLmJ0bi1yZWRkaXQuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1yZWRkaXQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLXJlZGRpdC5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi1yZWRkaXRbZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1yZWRkaXQ6aG92ZXIsXHJcbi5idG4tcmVkZGl0LmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLXJlZGRpdFtkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXJlZGRpdDpmb2N1cyxcclxuLmJ0bi1yZWRkaXQuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tcmVkZGl0W2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcmVkZGl0LmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY3ZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXJlZGRpdCAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNlZmY3ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXHJcbn1cclxuXHJcbi5idG4tc291bmRjbG91ZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTA7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXNvdW5kY2xvdWQ6Zm9jdXMsXHJcbi5idG4tc291bmRjbG91ZC5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDA7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXNvdW5kY2xvdWQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi1zb3VuZGNsb3VkOmFjdGl2ZSxcclxuLmJ0bi1zb3VuZGNsb3VkLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tc291bmRjbG91ZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDA7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXNvdW5kY2xvdWQ6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXNvdW5kY2xvdWQuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1zb3VuZGNsb3VkOmhvdmVyLFxyXG4uYnRuLXNvdW5kY2xvdWQ6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXNvdW5kY2xvdWQuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1zb3VuZGNsb3VkOmZvY3VzLFxyXG4uYnRuLXNvdW5kY2xvdWQ6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXNvdW5kY2xvdWQuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1zb3VuZGNsb3VkLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4MzgwMDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tc291bmRjbG91ZDphY3RpdmUsXHJcbi5idG4tc291bmRjbG91ZC5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXNvdW5kY2xvdWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLXNvdW5kY2xvdWQuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tc291bmRjbG91ZFtkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXNvdW5kY2xvdWQ6aG92ZXIsXHJcbi5idG4tc291bmRjbG91ZC5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi1zb3VuZGNsb3VkW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc291bmRjbG91ZDpmb2N1cyxcclxuLmJ0bi1zb3VuZGNsb3VkLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXNvdW5kY2xvdWRbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zb3VuZGNsb3VkLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTA7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXNvdW5kY2xvdWQgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjZjUwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXR1bWJsciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzQ3NjI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR1bWJscjpmb2N1cyxcclxuLmJ0bi10dW1ibHIuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyZDNmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi10dW1ibHI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyZDNmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi10dW1ibHI6YWN0aXZlLFxyXG4uYnRuLXR1bWJsci5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXR1bWJsciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzJkM2Y7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR1bWJscjphY3RpdmU6aG92ZXIsXHJcbi5idG4tdHVtYmxyLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdHVtYmxyOmhvdmVyLFxyXG4uYnRuLXR1bWJscjphY3RpdmU6Zm9jdXMsXHJcbi5idG4tdHVtYmxyLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdHVtYmxyOmZvY3VzLFxyXG4uYnRuLXR1bWJscjphY3RpdmUuZm9jdXMsXHJcbi5idG4tdHVtYmxyLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdHVtYmxyLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMWMyNjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdHVtYmxyOmFjdGl2ZSxcclxuLmJ0bi10dW1ibHIuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi10dW1ibHIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLXR1bWJsci5kaXNhYmxlZDpob3ZlcixcclxuLmJ0bi10dW1ibHJbZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi10dW1ibHI6aG92ZXIsXHJcbi5idG4tdHVtYmxyLmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLXR1bWJscltkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXR1bWJscjpmb2N1cyxcclxuLmJ0bi10dW1ibHIuZGlzYWJsZWQuZm9jdXMsXHJcbi5idG4tdHVtYmxyW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdHVtYmxyLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzQ3NjI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR1bWJsciAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyYzQ3NjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG4tdHdpdHRlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXI6Zm9jdXMsXHJcbi5idG4tdHdpdHRlci5mb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi10d2l0dGVyOmFjdGl2ZSxcclxuLmJ0bi10d2l0dGVyLmFjdGl2ZSxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdHdpdHRlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXI6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXR3aXR0ZXIuYWN0aXZlOmhvdmVyLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi10d2l0dGVyOmhvdmVyLFxyXG4uYnRuLXR3aXR0ZXI6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXR3aXR0ZXIuYWN0aXZlOmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi10d2l0dGVyOmZvY3VzLFxyXG4uYnRuLXR3aXR0ZXI6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXR3aXR0ZXIuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi10d2l0dGVyLmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1ODNkNztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdHdpdHRlcjphY3RpdmUsXHJcbi5idG4tdHdpdHRlci5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXIuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tdHdpdHRlcltkaXNhYmxlZF06aG92ZXIsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXR3aXR0ZXI6aG92ZXIsXHJcbi5idG4tdHdpdHRlci5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi10d2l0dGVyW2Rpc2FibGVkXTpmb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdHdpdHRlcjpmb2N1cyxcclxuLmJ0bi10d2l0dGVyLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXR3aXR0ZXJbZGlzYWJsZWRdLmZvY3VzLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi10d2l0dGVyLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXIgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjNTVhY2VlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXZpbWVvIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdmltZW86Zm9jdXMsXHJcbi5idG4tdmltZW8uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI5NWJmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi12aW1lbzpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjk1YmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXZpbWVvOmFjdGl2ZSxcclxuLmJ0bi12aW1lby5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXZpbWVvIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyOTViZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdmltZW86YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXZpbWVvLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdmltZW86aG92ZXIsXHJcbi5idG4tdmltZW86YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXZpbWVvLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdmltZW86Zm9jdXMsXHJcbi5idG4tdmltZW86YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXZpbWVvLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdmltZW8uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3YjlmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi12aW1lbzphY3RpdmUsXHJcbi5idG4tdmltZW8uYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi12aW1lbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tdmltZW8uZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tdmltZW9bZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi12aW1lbzpob3ZlcixcclxuLmJ0bi12aW1lby5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi12aW1lb1tkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXZpbWVvOmZvY3VzLFxyXG4uYnRuLXZpbWVvLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXZpbWVvW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmltZW8uZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdmltZW8gLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjMWFiN2VhO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXZrIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N2VhMztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdms6Zm9jdXMsXHJcbi5idG4tdmsuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY2NDgyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi12azpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjY0ODI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXZrOmFjdGl2ZSxcclxuLmJ0bi12ay5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXZrIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NjQ4MjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdms6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXZrLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdms6aG92ZXIsXHJcbi5idG4tdms6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXZrLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdms6Zm9jdXMsXHJcbi5idG4tdms6YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXZrLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tdmsuZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1MjZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi12azphY3RpdmUsXHJcbi5idG4tdmsuYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi12ayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4tdmsuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tdmtbZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi12azpob3ZlcixcclxuLmJ0bi12ay5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi12a1tkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXZrOmZvY3VzLFxyXG4uYnRuLXZrLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXZrW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmsuZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N2VhMztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tdmsgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjNTg3ZWEzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXlhaG9vIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMGU5ZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4teWFob286Zm9jdXMsXHJcbi5idG4teWFob28uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwYTZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi15YWhvbzpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDBhNmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4uYnRuLXlhaG9vOmFjdGl2ZSxcclxuLmJ0bi15YWhvby5hY3RpdmUsXHJcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXlhaG9vIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwMGE2ZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4teWFob286YWN0aXZlOmhvdmVyLFxyXG4uYnRuLXlhaG9vLmFjdGl2ZTpob3ZlcixcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4teWFob286aG92ZXIsXHJcbi5idG4teWFob286YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXlhaG9vLmFjdGl2ZTpmb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4teWFob286Zm9jdXMsXHJcbi5idG4teWFob286YWN0aXZlLmZvY3VzLFxyXG4uYnRuLXlhaG9vLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4teWFob28uZm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkwNzRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0bi15YWhvbzphY3RpdmUsXHJcbi5idG4teWFob28uYWN0aXZlLFxyXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi15YWhvbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbn1cclxuXHJcbi5idG4teWFob28uZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4teWFob29bZGlzYWJsZWRdOmhvdmVyLFxyXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi15YWhvbzpob3ZlcixcclxuLmJ0bi15YWhvby5kaXNhYmxlZDpmb2N1cyxcclxuLmJ0bi15YWhvb1tkaXNhYmxlZF06Zm9jdXMsXHJcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXlhaG9vOmZvY3VzLFxyXG4uYnRuLXlhaG9vLmRpc2FibGVkLmZvY3VzLFxyXG4uYnRuLXlhaG9vW2Rpc2FibGVkXS5mb2N1cyxcclxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4teWFob28uZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMGU5ZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4teWFob28gLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjNzIwZTllO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar col-md-3\">\r\n    <img class=\"img-responsive circle_image \" [src]=\"(imagen_principal)\" alt=\"Foto de francisco Amo \" />\r\n    <h3>Curriculum Vitae</h3>\r\n    <h4>Amo Redondo,<br>Francisco</h4>\r\n    <a *ngFor=\"let sn of links \" class=\"btn btn-block btn-social btn-{{sn.icon}} redes \" href=\"{{sn.link}} \" target=\"_blank \">\r\n        <span class=\"fa fa-{{sn.icon}} \"></span>{{sn.name}}\r\n    </a>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(dataService) {
        this.dataService = dataService;
        this.redes_sociales = [
            {
                nombre: "Facebook",
                icon: "facebook",
                link: "https://facebook.com"
            },
            {
                nombre: "Linkedin",
                icon: "linkedin",
                link: "https://linkedin.com"
            },
            {
                nombre: "Twitter",
                icon: "twitter",
                link: "https://twitter.com"
            },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (datos) {
            _this.links = datos['social_networks'];
        });
        this.dataService.getData().subscribe(function (datos) {
            _this.imagen_principal = datos['img_profile'];
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\famor\CV-En-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map