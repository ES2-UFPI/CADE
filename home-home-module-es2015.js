(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>\n      CADÊ - Anúncios\n    </ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngIf=\"!anuncios || anuncios.length <= 0\">\n          Nenhum anúncio encontrado no momento.\n      </ion-item>\n        <ion-item *ngFor=\"let an of anuncios\">\n          <ion-card>\n\n            <ion-card-header>\n              <ion-card-subtitle>{{an.categoria}}</ion-card-subtitle>\n              <ion-card-title>{{an.titulo}}</ion-card-title>\n            </ion-card-header>\n          \n            <ion-card-content>\n              {{an.descricao}}\n            </ion-card-content>\n\n          </ion-card>\n        </ion-item>\n      </ion-list>\n  </div>\n\n  <ion-button fill=\"outline\" href=\"/cad-anuncio\">Cadastrar Anúncio</ion-button>\n  <ion-button fill=\"outline\" href=\"/cad-perfil\">Cadastrar Perfil</ion-button>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _anuncio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../anuncio.service */ "./src/app/anuncio.service.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../perfil.service */ "./src/app/perfil.service.ts");




let HomePage = class HomePage {
    constructor(_anuncioService, _perfilService) {
        this._anuncioService = _anuncioService;
        this._perfilService = _perfilService;
        this.anuncios = [];
    }
    ngOnInit() {
        this._perfilService.load()
            .subscribe(perfil => {
            this.perfil = perfil;
        });
    }
    ionViewWillEnter() {
        if (this.perfil) {
            this.findAnunciosByPerfil(this.perfil);
        }
        else {
            this.findAllAnuncios();
        }
    }
    findAllAnuncios() {
        this._anuncioService.findAll()
            .subscribe(anuncios => {
            this.anuncios = anuncios;
        });
    }
    findAnunciosByPerfil(perfil) {
        this._anuncioService.findByPerfil(perfil)
            .subscribe(anunciosMatrix => {
            anunciosMatrix.forEach(anuncios => {
                anuncios.forEach(anuncio => {
                    this.anuncios.push(anuncio);
                });
            });
        });
    }
    doRefresh(event) {
        this.findAllAnuncios();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _anuncio_service__WEBPACK_IMPORTED_MODULE_2__["AnuncioService"] },
    { type: _perfil_service__WEBPACK_IMPORTED_MODULE_3__["PerfilService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_anuncio_service__WEBPACK_IMPORTED_MODULE_2__["AnuncioService"], _perfil_service__WEBPACK_IMPORTED_MODULE_3__["PerfilService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map