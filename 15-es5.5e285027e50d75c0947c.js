(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"b5I+":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=t("mrSG"),a=t("zBdl"),i=t("ZZ/e"),e=t("1tsC"),c=function(){function n(n,l,t,o){this.platform=n,this._route=l,this._router=t,this._anuncioService=o}return n.prototype.ngOnInit=function(){return u.__awaiter(this,void 0,void 0,(function(){return u.__generator(this,(function(n){switch(n.label){case 0:return this.anuncio=this._anuncioService.loadLocal(),this.location=this.anuncio?this.anuncio.geolocalizacao:this._route.snapshot.data.location.latLng,[4,this.platform.ready()];case 1:return n.sent(),console.log("ready"),[4,this.loadMap()];case 2:return n.sent(),[2]}}))}))},n.prototype.loadMap=function(){this.map=a.a.create("map_canvas",{controls:{compass:!0,myLocationButton:!0,myLocation:!0,zoom:!0,mapToolbar:!0},gestures:{scroll:!0,zoom:!0,rotate:!0},camera:{target:[this.location]},preferences:{zoom:{maxZoom:18},building:!1}})},n.prototype.choosePlace=function(){this.anuncio.geolocalizacao=this.map.getCameraPosition().target,this._anuncioService.saveLocal(this.anuncio),this._router.navigate(["/cad-anuncio"])},n}(),r=function(){return function(){}}(),s=t("pMnS"),b=t("oBZk"),p=t("ZYCi"),h=o.rb({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{height:90%;position:relative}#centerMarkerImage[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;width:32px;height:32px;z-index:1}"]],data:{}});function f(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,11,"ion-header",[],null,null,null,b.Q,b.o)),o.sb(1,49152,null,0,i.C,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.db,b.B)),o.sb(3,49152,null,0,i.Db,[o.h,o.k,o.z],null,null),(n()(),o.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.F,b.d)),o.sb(5,49152,null,0,i.m,[o.h,o.k,o.z],null,null),(n()(),o.tb(6,0,null,0,2,"ion-back-button",[["defaultHref","cad-anuncio"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==o.Fb(n,8).onClick(t)&&u),u}),b.D,b.b)),o.sb(7,49152,null,0,i.h,[o.h,o.k,o.z],{defaultHref:[0,"defaultHref"]},null),o.sb(8,16384,null,0,i.i,[[2,i.jb],i.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),o.tb(9,0,null,0,2,"ion-title",[],null,null,null,b.cb,b.A)),o.sb(10,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(n()(),o.Kb(-1,0,["Escolha um Local para o An\xfancio"])),(n()(),o.tb(12,0,null,null,6,"ion-content",[],null,null,null,b.N,b.l)),o.sb(13,49152,null,0,i.v,[o.h,o.k,o.z],null,null),(n()(),o.tb(14,0,[["map_canvas",1]],0,1,"div",[["id","map_canvas"]],null,null,null,null,null)),(n()(),o.tb(15,0,null,null,0,"img",[["id","centerMarkerImage"],["src","assets/marker.png"]],null,null,null,null,null)),(n()(),o.tb(16,0,null,0,2,"ion-button",[["fill","outline"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.choosePlace()&&o),o}),b.E,b.c)),o.sb(17,49152,null,0,i.l,[o.h,o.k,o.z],{fill:[0,"fill"]},null),(n()(),o.Kb(-1,0,["OK"]))],(function(n,l){n(l,7,0,"cad-anuncio"),n(l,8,0,"cad-anuncio"),n(l,17,0,"outline")}),null)}function m(n){return o.Lb(0,[(n()(),o.tb(0,0,null,null,1,"app-maps",[],null,null,null,f,h)),o.sb(1,114688,null,0,c,[i.Jb,p.a,p.m,e.a],null,null)],(function(n,l){n(l,1,0)}),null)}var d=o.pb("app-maps",c,m,{},{},[]),g=t("Ip0R"),k=t("gIcY");t.d(l,"MapsPageModuleNgFactory",(function(){return v}));var v=o.qb(r,[],(function(n){return o.Cb([o.Db(512,o.j,o.bb,[[8,[s.a,d]],[3,o.j],o.x]),o.Db(4608,g.k,g.j,[o.u,[2,g.q]]),o.Db(4608,k.o,k.o,[]),o.Db(4608,i.b,i.b,[o.z,o.g]),o.Db(4608,i.Hb,i.Hb,[i.b,o.j,o.q]),o.Db(4608,i.Kb,i.Kb,[i.b,o.j,o.q]),o.Db(1073742336,g.b,g.b,[]),o.Db(1073742336,k.n,k.n,[]),o.Db(1073742336,k.e,k.e,[]),o.Db(1073742336,i.Fb,i.Fb,[]),o.Db(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),o.Db(1073742336,r,r,[]),o.Db(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);