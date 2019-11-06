(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-anuncio-cadastro-anuncio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastro-anuncio/cadastro-anuncio.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastro-anuncio/cadastro-anuncio.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastro de Anuncio</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"anuncioForm\" (ngSubmit)=\"cadAnuncio()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Novo Anuncio</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item>\n                <ion-label position=\"floating\">Titulo da Oferta:</ion-label>\n                <ion-input type=\"text\" formControlName=\"titulo\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Descrição:</ion-label>\n                <ion-textarea formControlName=\"descricao\"></ion-textarea>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Categoria</ion-label>\n                <ion-select interface=\"popover\" formControlName=\"categoria\">\n                  <ion-select-option *ngFor=\"let cat of categorias\">{{cat}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n             \n              <ion-item>\n                <ion-label>Data de inicio:</ion-label>\n                <ion-datetime displayFormat=\"DD MM YY, HH:mm\" [(ngModel)]=\"myDate\"  formControlName=\"dataInicial\"></ion-datetime>\n              </ion-item>\n  \n              <ion-item>\n                <ion-label>Data de fim:</ion-label>\n                <ion-datetime displayFormat=\"DD MM YY, HH:mm\" min=\"{{myDate}}\" max=\"2030\" placeholder=\"Escolha a data\" formControlName=\"dataFinal\"></ion-datetime>\n              </ion-item>\n             \n              <div margin-vertical text-right>\n                <ion-button fill=\"outline\" color=\"danger\" (click)=\"cancelar()\">Cancelar</ion-button>\n                <ion-button type=\"submit\" [disabled]=\"!anuncioForm.valid\">Publicar</ion-button>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cadastro-anuncio/cadastro-anuncio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/cadastro-anuncio/cadastro-anuncio.module.ts ***!
  \*************************************************************/
/*! exports provided: CadastroAnuncioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAnuncioPageModule", function() { return CadastroAnuncioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_anuncio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-anuncio.page */ "./src/app/cadastro-anuncio/cadastro-anuncio.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_anuncio_page__WEBPACK_IMPORTED_MODULE_6__["CadastroAnuncioPage"]
    }
];
var CadastroAnuncioPageModule = /** @class */ (function () {
    function CadastroAnuncioPageModule() {
    }
    CadastroAnuncioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_anuncio_page__WEBPACK_IMPORTED_MODULE_6__["CadastroAnuncioPage"]]
        })
    ], CadastroAnuncioPageModule);
    return CadastroAnuncioPageModule;
}());



/***/ }),

/***/ "./src/app/cadastro-anuncio/cadastro-anuncio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/cadastro-anuncio/cadastro-anuncio.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvLWFudW5jaW8vY2FkYXN0cm8tYW51bmNpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cadastro-anuncio/cadastro-anuncio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/cadastro-anuncio/cadastro-anuncio.page.ts ***!
  \***********************************************************/
/*! exports provided: CadastroAnuncioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAnuncioPage", function() { return CadastroAnuncioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Categories */ "./src/app/Categories.ts");
/* harmony import */ var _anuncio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../anuncio.service */ "./src/app/anuncio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var CadastroAnuncioPage = /** @class */ (function () {
    function CadastroAnuncioPage(_form, _router, _anuncioService, _alert) {
        this._form = _form;
        this._router = _router;
        this._anuncioService = _anuncioService;
        this._alert = _alert;
        this.myDate = new Date().toISOString();
        this.categorias = [];
        this.categorias = Object.keys(_Categories__WEBPACK_IMPORTED_MODULE_4__["Categories"]).map(function (k) { return _Categories__WEBPACK_IMPORTED_MODULE_4__["Categories"][k]; });
        console.log(this.categorias);
        this.anuncioForm = this._form.group({
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataInicial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    CadastroAnuncioPage.prototype.ngOnInit = function () {
    };
    CadastroAnuncioPage.prototype.cadAnuncio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.anuncioForm.value);
                        this._anuncioService.save(this.anuncioForm.value);
                        return [4 /*yield*/, this._alert.create({
                                header: 'Cadastro realizado',
                                message: 'Anúncio cadastrado',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        _a.sent();
                        this._router.navigate(['/home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroAnuncioPage.prototype.cancelar = function () {
        this._router.navigate(['/home']);
    };
    CadastroAnuncioPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _anuncio_service__WEBPACK_IMPORTED_MODULE_5__["AnuncioService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    CadastroAnuncioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro-anuncio',
            template: __webpack_require__(/*! raw-loader!./cadastro-anuncio.page.html */ "./node_modules/raw-loader/index.js!./src/app/cadastro-anuncio/cadastro-anuncio.page.html"),
            styles: [__webpack_require__(/*! ./cadastro-anuncio.page.scss */ "./src/app/cadastro-anuncio/cadastro-anuncio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _anuncio_service__WEBPACK_IMPORTED_MODULE_5__["AnuncioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], CadastroAnuncioPage);
    return CadastroAnuncioPage;
}());



/***/ })

}]);
//# sourceMappingURL=cadastro-anuncio-cadastro-anuncio-module-es5.js.map