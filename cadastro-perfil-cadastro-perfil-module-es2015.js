(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-perfil-cadastro-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastro-perfil/cadastro-perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastro-perfil/cadastro-perfil.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cadastro-perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"cadPerfil()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Novo Perfil</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n\n              <ion-item>\n                <ion-label>Raio de Busca</ion-label>\n                <ion-select interface=\"popover\" [(ngModel)]=\"perfil.raio\" name=\"raio\">\n                  <ion-select-option value=\"0.5\">0.5 km (Perto de voçê)</ion-select-option>\n                  <ion-select-option value=\"2\">2 km (Redondezas)</ion-select-option>\n                  <ion-select-option value=\"10\">10 km (Zona)</ion-select-option>\n                  <ion-select-option value=\"50\">50 km (Cidade)</ion-select-option>\n                  <ion-select-option value=\"-1\">Sem raio</ion-select-option>\n                </ion-select>\n              </ion-item>\n              \n              <ion-list>\n                <ion-label>Categorias</ion-label>\n                <ion-item *ngFor=\"let cat of categoriasToggle\">\n                  <ion-label>{{cat.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"cat.isChecked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n\n              <div margin-vertical text-right>\n                <ion-button fill=\"outline\" color=\"danger\" (click)=\"cancelar()\">Cancelar</ion-button>\n                <ion-button type=\"submit\">Publicar</ion-button>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cadastro-perfil/cadastro-perfil.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cadastro-perfil/cadastro-perfil.module.ts ***!
  \***********************************************************/
/*! exports provided: CadastroPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPerfilPageModule", function() { return CadastroPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-perfil.page */ "./src/app/cadastro-perfil/cadastro-perfil.page.ts");







const routes = [
    {
        path: '',
        component: _cadastro_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPerfilPage"]
    }
];
let CadastroPerfilPageModule = class CadastroPerfilPageModule {
};
CadastroPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cadastro_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPerfilPage"]]
    })
], CadastroPerfilPageModule);



/***/ }),

/***/ "./src/app/cadastro-perfil/cadastro-perfil.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/cadastro-perfil/cadastro-perfil.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvLXBlcmZpbC9jYWRhc3Ryby1wZXJmaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cadastro-perfil/cadastro-perfil.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/cadastro-perfil/cadastro-perfil.page.ts ***!
  \*********************************************************/
/*! exports provided: CadastroPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPerfilPage", function() { return CadastroPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../perfil.service */ "./src/app/perfil.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Categories */ "./src/app/Categories.ts");







let CadastroPerfilPage = class CadastroPerfilPage {
    constructor(_form, _router, _service, _alert) {
        this._form = _form;
        this._router = _router;
        this._service = _service;
        this._alert = _alert;
        // perfilForm: FormGroup;
        this.categoriasToggle = [];
        this.perfil = { raio: -1, categorias: [] };
        var categorias = Object.keys(_Categories__WEBPACK_IMPORTED_MODULE_6__["Categories"]).map(k => _Categories__WEBPACK_IMPORTED_MODULE_6__["Categories"][k]);
        categorias.forEach(c => {
            this.categoriasToggle.push({ val: c, isChecked: false });
        });
        console.log(this.categoriasToggle);
        // this.perfilForm = this._form.group({
        // raio: ['', [Validators.required]],
        // categorias: _form.group({
        //   0: ['', Validators.required],
        // }),
        // });
    }
    cadPerfil() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.categoriasToggle.forEach(c => {
                if (c.isChecked == true) {
                    this.perfil.categorias.push(c.val);
                }
            });
            console.log(this.perfil);
            this._service.save(this.perfil);
            const alert = yield this._alert.create({
                header: 'Cadastro realizado',
                message: 'Perfil cadastrado',
                buttons: ['OK']
            });
            yield alert.present();
            yield alert.onDidDismiss();
            this._router.navigate(['/home']);
        });
    }
    cancelar() {
        this._router.navigate(['/home']);
    }
};
CadastroPerfilPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CadastroPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro-perfil',
        template: __webpack_require__(/*! raw-loader!./cadastro-perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/cadastro-perfil/cadastro-perfil.page.html"),
        styles: [__webpack_require__(/*! ./cadastro-perfil.page.scss */ "./src/app/cadastro-perfil/cadastro-perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], CadastroPerfilPage);



/***/ })

}]);
//# sourceMappingURL=cadastro-perfil-cadastro-perfil-module-es2015.js.map