(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZDAp:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("xOQr"),i=u("ZZ/e"),r=u("2WpN"),a=function(){function l(l,n,u,t,o){this.route=l,this.nav=n,this.todoService=u,this.loadingController=t,this.storage=o,this.todo={task:"",priority:0,img:"",img2:"",category:""},this.todoId=null}return l.prototype.ngOnInit=function(){this.todoId=this.route.snapshot.params.id,this.todoId&&this.loadTodo()},l.prototype.loadTodo=function(){return o.__awaiter(this,void 0,void 0,(function(){var l,n=this;return o.__generator(this,(function(u){switch(u.label){case 0:return[4,this.loadingController.create({message:"Loading...."})];case 1:return[4,(l=u.sent()).present()];case 2:return u.sent(),this.todoService.getTodo(this.todoId).subscribe((function(u){l.dismiss(),n.todo=u})),[2]}}))}))},l.prototype.saveTodo=function(){return o.__awaiter(this,void 0,void 0,(function(){var l,n=this;return o.__generator(this,(function(u){switch(u.label){case 0:return this.imagenGuardar=document.getElementById("imagen").value,this.todo.img=this.imagenGuardar,this.imagenGuardar2=document.getElementById("imagen2").value,this.todo.img2=this.imagenGuardar2,[4,this.loadingController.create({message:"Saving...."})];case 1:return[4,(l=u.sent()).present()];case 2:return u.sent(),this.todoId?this.todoService.updateTodo(this.todo,this.todoId).then((function(){l.dismiss(),n.nav.navigateForward("/dashboard")})):this.todoService.addTodo(this.todo).then((function(){l.dismiss(),n.nav.navigateForward("/dashboard")})),[2]}}))}))},l.prototype.onRemoveTodo=function(l){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(n){return this.todoService.removeTodo(l),[2]}))}))},l.prototype.onUpload=function(l){var n=this,u=Math.random().toString(36).substring(2),t=l.target.files[0],o="uploads/portfolio_"+u,e=this.storage.ref(o),i=this.storage.upload(o,t);this.uploadPercent=i.percentageChanges(),i.snapshotChanges().pipe(Object(r.a)((function(){return n.urlImage=e.getDownloadURL()}))).subscribe()},l.prototype.onUpload2=function(l){var n=this,u=Math.random().toString(36).substring(2),t=l.target.files[0],o="originales/portfolio_"+u,e=this.storage.ref(o),i=this.storage.upload(o,t);this.uploadPercent=i.percentageChanges(),i.snapshotChanges().pipe(Object(r.a)((function(){return n.urlImage2=e.getDownloadURL()}))).subscribe()},l}(),s=function(){return function(){}}(),b=u("pMnS"),d=u("oBZk"),c=u("gIcY"),g=u("Ip0R"),h=u("ZYCi"),p=u("VRER"),f=t.rb({encapsulation:0,styles:[[".header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-ios-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-ios-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{--background-hover:rgba(255, 255, 255, 0.08);color:#fff;margin-top:0;font-size:30px}"]],data:{}});function m(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Imagen Actualizada "]))],null,null)}function v(l){return t.Nb(0,[(l()(),t.Lb(-1,null,[" Imagen Actual 452 x 444 "]))],null,null)}function C(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,0,"img",[["style","max-width:200px;"],["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.xb(1,"",n.component.todo.img,""))}))}function k(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,4,"ion-card",[["class","azul"],["style","max-width:200px;"]],null,null,null,d.L,d.e)),t.sb(1,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-card-content",[],null,null,null,d.K,d.f)),t.sb(3,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[["src","/assets/img/preview.png"],["width","100%"]],null,null,null,null,null))],null,null)}function I(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Imagen Original Actualizada "]))],null,null)}function F(l){return t.Nb(0,[(l()(),t.Lb(-1,null,[" Imagen Actual "]))],null,null)}function z(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,0,"img",[["style","max-width:200px;"],["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.xb(1,"",n.component.todo.img2,""))}))}function M(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,4,"ion-card",[["class","azul"],["style","max-width:200px;"]],null,null,null,d.L,d.e)),t.sb(1,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-card-content",[],null,null,null,d.K,d.f)),t.sb(3,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[["src","/assets/img/preview.png"],["width","100%"]],null,null,null,null,null))],null,null)}function _(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,"ion-item",[],null,null,null,d.X,d.o)),t.sb(1,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-input",[["placeholder","TITULO"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,5)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,5)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.todo.task=u)&&o),o}),d.T,d.n)),t.sb(3,16384,null,0,c.l,[],{required:[0,"required"]},null),t.Ib(1024,null,c.e,(function(l){return[l]}),[c.l]),t.sb(5,16384,null,0,i.Mb,[t.k],null,null),t.Ib(1024,null,c.f,(function(l){return[l]}),[i.Mb]),t.sb(7,671744,null,0,c.k,[[8,null],[6,c.e],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,c.g,null,[c.k]),t.sb(9,16384,null,0,c.h,[[4,c.g]],null,null),t.sb(10,49152,null,0,i.F,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null)],(function(l,n){var u=n.component;l(n,3,0,""),l(n,7,0,u.todo.task),l(n,10,0,"TITULO","","text")}),(function(l,n){l(n,2,0,t.Fb(n,3).required?"":null,t.Fb(n,9).ngClassUntouched,t.Fb(n,9).ngClassTouched,t.Fb(n,9).ngClassPristine,t.Fb(n,9).ngClassDirty,t.Fb(n,9).ngClassValid,t.Fb(n,9).ngClassInvalid,t.Fb(n,9).ngClassPending)}))}function y(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,25,"ion-item",[],null,null,null,d.X,d.o)),t.sb(1,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,23,"ion-select",[["placeholder","CATEGORIA"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,5)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,5)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.todo.category=u)&&o),o}),d.gb,d.z)),t.sb(3,16384,null,0,c.l,[],{required:[0,"required"]},null),t.Ib(1024,null,c.e,(function(l){return[l]}),[c.l]),t.sb(5,16384,null,0,i.Lb,[t.k],null,null),t.Ib(1024,null,c.f,(function(l){return[l]}),[i.Lb]),t.sb(7,671744,null,0,c.k,[[8,null],[6,c.e],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,c.g,null,[c.k]),t.sb(9,16384,null,0,c.h,[[4,c.g]],null,null),t.sb(10,49152,null,0,i.mb,[t.h,t.k,t.z],{placeholder:[0,"placeholder"]},null),(l()(),t.tb(11,0,null,0,2,"ion-select-option",[["value","branding"]],null,null,null,d.fb,d.A)),t.sb(12,49152,null,0,i.nb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(-1,0,["Branding"])),(l()(),t.tb(14,0,null,0,2,"ion-select-option",[["value","web"]],null,null,null,d.fb,d.A)),t.sb(15,49152,null,0,i.nb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(-1,0,["Web"])),(l()(),t.tb(17,0,null,0,2,"ion-select-option",[["value","app"]],null,null,null,d.fb,d.A)),t.sb(18,49152,null,0,i.nb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(-1,0,["App"])),(l()(),t.tb(20,0,null,0,2,"ion-select-option",[["value","redes"]],null,null,null,d.fb,d.A)),t.sb(21,49152,null,0,i.nb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(-1,0,["Redes"])),(l()(),t.tb(23,0,null,0,2,"ion-select-option",[["value","otros"]],null,null,null,d.fb,d.A)),t.sb(24,49152,null,0,i.nb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(-1,0,["Otros"]))],(function(l,n){var u=n.component;l(n,3,0,""),l(n,7,0,u.todo.category),l(n,10,0,"CATEGORIA"),l(n,12,0,"branding"),l(n,15,0,"web"),l(n,18,0,"app"),l(n,21,0,"redes"),l(n,24,0,"otros")}),(function(l,n){l(n,2,0,t.Fb(n,3).required?"":null,t.Fb(n,9).ngClassUntouched,t.Fb(n,9).ngClassTouched,t.Fb(n,9).ngClassPristine,t.Fb(n,9).ngClassDirty,t.Fb(n,9).ngClassValid,t.Fb(n,9).ngClassInvalid,t.Fb(n,9).ngClassPending)}))}function O(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,11,"ion-header",[],null,null,null,d.R,d.l)),t.sb(1,49152,null,0,i.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,d.lb,d.F)),t.sb(3,49152,null,0,i.Bb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.J,d.d)),t.sb(5,49152,null,0,i.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Fb(l,8).onClick(u)&&o),o}),d.H,d.b)),t.sb(7,49152,null,0,i.f,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.sb(8,16384,null,0,i.g,[[2,i.hb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.tb(9,0,null,0,2,"ion-title",[],null,null,null,d.kb,d.E)),t.sb(10,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Details"])),(l()(),t.tb(12,0,null,null,73,"ion-content",[["padding",""]],null,null,null,d.N,d.h)),t.sb(13,49152,null,0,i.t,[t.h,t.k,t.z],null,null),t.sb(14,16384,null,0,i.c,[t.k],null,null),(l()(),t.tb(15,0,null,0,45,"ion-grid",[],null,null,null,d.Q,d.k)),t.sb(16,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,43,"ion-row",[],null,null,null,d.eb,d.y)),t.sb(18,49152,null,0,i.ib,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,20,"ion-col",[],null,null,null,d.M,d.g)),t.sb(20,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,2,null,m)),t.sb(22,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Hb(131072,g.b,[t.h]),(l()(),t.ib(0,[["btnDisabled",2]],0,0,null,v)),(l()(),t.tb(25,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,0,1,null,C)),t.sb(27,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(29,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(30,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Seleccionar image:"])),(l()(),t.tb(32,0,null,0,0,"input",[["accept",".png, .jpg"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onUpload(u)&&t),t}),null,null)),(l()(),t.tb(33,0,null,0,6,"input",[["id","imagen"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.Fb(l,34)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Fb(l,34).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Fb(l,34)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Fb(l,34)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.todo.img=u)&&o),o}),null,null)),t.sb(34,16384,null,0,c.c,[t.D,t.k,[2,c.a]],null,null),t.Ib(1024,null,c.f,(function(l){return[l]}),[c.c]),t.sb(36,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,c.g,null,[c.k]),t.sb(38,16384,null,0,c.h,[[4,c.g]],null,null),t.Hb(131072,g.b,[t.h]),(l()(),t.tb(40,0,null,0,20,"ion-col",[],null,null,null,d.M,d.g)),t.sb(41,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,2,null,I)),t.sb(43,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Hb(131072,g.b,[t.h]),(l()(),t.ib(0,[["btnDisabled2",2]],0,0,null,F)),(l()(),t.tb(46,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(48,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,M)),t.sb(50,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(51,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Seleccionar image:"])),(l()(),t.tb(53,0,null,0,0,"input",[["accept",".png, .jpg"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onUpload2(u)&&t),t}),null,null)),(l()(),t.tb(54,0,null,0,6,"input",[["id","imagen2"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.Fb(l,55)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Fb(l,55).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Fb(l,55)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Fb(l,55)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.todo.img2=u)&&o),o}),null,null)),t.sb(55,16384,null,0,c.c,[t.D,t.k,[2,c.a]],null,null),t.Ib(1024,null,c.f,(function(l){return[l]}),[c.c]),t.sb(57,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,c.g,null,[c.k]),t.sb(59,16384,null,0,c.h,[[4,c.g]],null,null),t.Hb(131072,g.b,[t.h]),(l()(),t.tb(61,0,null,0,11,"ion-grid",[],null,null,null,d.Q,d.k)),t.sb(62,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(63,0,null,0,9,"ion-row",[],null,null,null,d.eb,d.y)),t.sb(64,49152,null,0,i.ib,[t.h,t.k,t.z],null,null),(l()(),t.tb(65,0,null,0,3,"ion-col",[],null,null,null,d.M,d.g)),t.sb(66,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,_)),t.sb(68,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(69,0,null,0,3,"ion-col",[],null,null,null,d.M,d.g)),t.sb(70,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,y)),t.sb(72,16384,null,0,g.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(73,0,null,0,1,"ion-list",[["lines","full"]],null,null,null,d.Z,d.t)),t.sb(74,49152,null,0,i.N,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.tb(75,0,null,0,2,"ion-button",[["class","boton-menu"],["color","primary"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.saveTodo()&&t),t}),d.I,d.c)),t.sb(76,49152,null,0,i.j,[t.h,t.k,t.z],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),t.Lb(-1,0,["Save"])),(l()(),t.tb(78,0,null,0,7,"ion-fab",[["color","danger"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.P,d.i)),t.sb(79,49152,null,0,i.v,[t.h,t.k,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.tb(80,0,null,0,5,"ion-fab-button",[["color","danger"],["routerDirection","forward"],["routerLink","/dashboard"]],null,[[null,"click"]],(function(l,n,u){var o=!0,e=l.component;return"click"===n&&(o=!1!==t.Fb(l,82).onClick()&&o),"click"===n&&(o=!1!==t.Fb(l,83).onClick(u)&&o),"click"===n&&(o=!1!==e.onRemoveTodo(e.todoId)&&o),o}),d.O,d.j)),t.sb(81,49152,null,0,i.w,[t.h,t.k,t.z],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),t.sb(82,16384,null,0,h.n,[h.m,h.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(83,737280,null,0,i.Kb,[g.h,i.Hb,t.k,h.m,[2,h.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(84,0,null,0,1,"ion-icon",[["name","trash"]],null,null,null,d.S,d.m)),t.sb(85,49152,null,0,i.B,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,22,0,t.Mb(n,22,0,t.Fb(n,23).transform(u.urlImage)),t.Fb(n,24)),l(n,27,0,u.todo.img),l(n,29,0,""==u.todo.img),l(n,36,0,u.todo.img),l(n,43,0,t.Mb(n,43,0,t.Fb(n,44).transform(u.urlImage2)),t.Fb(n,45)),l(n,48,0,u.todo.img2),l(n,50,0,""==u.todo.img2),l(n,57,0,u.todo.img2),l(n,68,0,u.todo),l(n,72,0,u.todo),l(n,74,0,"full"),l(n,76,0,"primary","full","round"),l(n,79,0,"end","bottom"),l(n,81,0,"danger","forward"),l(n,82,0,"/dashboard"),l(n,83,0,"forward"),l(n,85,0,"trash")}),(function(l,n){var u=n.component;l(n,33,0,t.Mb(n,33,0,t.Fb(n,39).transform(u.urlImage)),t.Fb(n,38).ngClassUntouched,t.Fb(n,38).ngClassTouched,t.Fb(n,38).ngClassPristine,t.Fb(n,38).ngClassDirty,t.Fb(n,38).ngClassValid,t.Fb(n,38).ngClassInvalid,t.Fb(n,38).ngClassPending),l(n,54,0,t.Mb(n,54,0,t.Fb(n,60).transform(u.urlImage2)),t.Fb(n,59).ngClassUntouched,t.Fb(n,59).ngClassTouched,t.Fb(n,59).ngClassPristine,t.Fb(n,59).ngClassDirty,t.Fb(n,59).ngClassValid,t.Fb(n,59).ngClassInvalid,t.Fb(n,59).ngClassPending)}))}function D(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-todo-details",[],null,null,null,O,f)),t.sb(1,114688,null,0,a,[h.a,i.Hb,e.a,i.Fb,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.pb("app-todo-details",a,D,{},{},[]);u.d(n,"TodoDetailsPageModuleNgFactory",(function(){return L}));var L=t.qb(s,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[b.a,w]],[3,t.j],t.x]),t.Db(4608,g.l,g.k,[t.u,[2,g.s]]),t.Db(4608,c.n,c.n,[]),t.Db(4608,i.a,i.a,[t.z,t.g]),t.Db(4608,i.Gb,i.Gb,[i.a,t.j,t.q]),t.Db(4608,i.Jb,i.Jb,[i.a,t.j,t.q]),t.Db(1073742336,g.c,g.c,[]),t.Db(1073742336,c.m,c.m,[]),t.Db(1073742336,c.d,c.d,[]),t.Db(1073742336,i.Db,i.Db,[]),t.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Db(1073742336,s,s,[]),t.Db(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);