(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ZDAp:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=u("mrSG"),e=u("xOQr"),i=u("ZZ/e"),r=u("nYR2");class a{constructor(l,n,u,o,t){this.route=l,this.nav=n,this.todoService=u,this.loadingController=o,this.storage=t,this.todo={task:"",priority:0,img:"",img2:"",category:""},this.todoId=null}ngOnInit(){this.todoId=this.route.snapshot.params.id,this.todoId&&this.loadTodo()}loadTodo(){return t.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Loading...."});yield l.present(),this.todoService.getTodo(this.todoId).subscribe(n=>{l.dismiss(),this.todo=n})}))}saveTodo(){return t.__awaiter(this,void 0,void 0,(function*(){this.imagenGuardar=document.getElementById("imagen").value,this.todo.img=this.imagenGuardar,this.imagenGuardar2=document.getElementById("imagen2").value,this.todo.img2=this.imagenGuardar2;const l=yield this.loadingController.create({message:"Saving...."});yield l.present(),this.todoId?this.todoService.updateTodo(this.todo,this.todoId).then(()=>{l.dismiss(),this.nav.navigateForward("/dashboard")}):this.todoService.addTodo(this.todo).then(()=>{l.dismiss(),this.nav.navigateForward("/dashboard")})}))}onRemoveTodo(l){return t.__awaiter(this,void 0,void 0,(function*(){this.todoService.removeTodo(l)}))}onUpload(l){const n=Math.random().toString(36).substring(2),u=l.target.files[0],o=`uploads/portfolio_${n}`,t=this.storage.ref(o),e=this.storage.upload(o,u);this.uploadPercent=e.percentageChanges(),e.snapshotChanges().pipe(Object(r.a)(()=>this.urlImage=t.getDownloadURL())).subscribe()}onUpload2(l){const n=Math.random().toString(36).substring(2),u=l.target.files[0],o=`originales/portfolio_${n}`,t=this.storage.ref(o),e=this.storage.upload(o,u);this.uploadPercent=e.percentageChanges(),e.snapshotChanges().pipe(Object(r.a)(()=>this.urlImage2=t.getDownloadURL())).subscribe()}}class b{}var d=u("pMnS"),s=u("oBZk"),g=u("s7LF"),c=u("SVse"),h=u("iInd"),p=u("gJ2e"),m=o.pb({encapsulation:0,styles:[[".header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-ios-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-ios-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{--background-hover:rgba(255, 255, 255, 0.08);color:#fff;margin-top:0;font-size:30px}"]],data:{}});function f(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" Imagen Actualizada "]))],null,null)}function v(l){return o.Lb(0,[(l()(),o.Jb(-1,null,[" Imagen Actual 452 x 444 "]))],null,null)}function k(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,0,"img",[["style","max-width:200px;"],["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,o.vb(1,"",n.component.todo.img,""))}))}function C(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,4,"ion-card",[["class","azul"],["style","max-width:200px;"]],null,null,null,s.L,s.e)),o.qb(1,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,2,"ion-card-content",[],null,null,null,s.K,s.f)),o.qb(3,49152,null,0,i.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,0,"img",[["src","/assets/img/preview.png"],["width","100%"]],null,null,null,null,null))],null,null)}function q(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" Imagen Original Actualizada "]))],null,null)}function D(l){return o.Lb(0,[(l()(),o.Jb(-1,null,[" Imagen Actual "]))],null,null)}function I(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,0,"img",[["style","max-width:200px;"],["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,o.vb(1,"",n.component.todo.img2,""))}))}function x(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,4,"ion-card",[["class","azul"],["style","max-width:200px;"]],null,null,null,s.L,s.e)),o.qb(1,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,2,"ion-card-content",[],null,null,null,s.K,s.f)),o.qb(3,49152,null,0,i.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,0,"img",[["src","/assets/img/preview.png"],["width","100%"]],null,null,null,null,null))],null,null)}function M(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,10,"ion-item",[],null,null,null,s.X,s.o)),o.qb(1,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,8,"ion-input",[["placeholder","TITULO"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,5)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.todo.task=u)&&t),t}),s.T,s.n)),o.qb(3,16384,null,0,g.l,[],{required:[0,"required"]},null),o.Gb(1024,null,g.e,(function(l){return[l]}),[g.l]),o.qb(5,16384,null,0,i.Mb,[o.k],null,null),o.Gb(1024,null,g.f,(function(l){return[l]}),[i.Mb]),o.qb(7,671744,null,0,g.k,[[8,null],[6,g.e],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.g,null,[g.k]),o.qb(9,16384,null,0,g.h,[[4,g.g]],null,null),o.qb(10,49152,null,0,i.F,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null)],(function(l,n){var u=n.component;l(n,3,0,""),l(n,7,0,u.todo.task),l(n,10,0,"TITULO","","text")}),(function(l,n){l(n,2,0,o.Db(n,3).required?"":null,o.Db(n,9).ngClassUntouched,o.Db(n,9).ngClassTouched,o.Db(n,9).ngClassPristine,o.Db(n,9).ngClassDirty,o.Db(n,9).ngClassValid,o.Db(n,9).ngClassInvalid,o.Db(n,9).ngClassPending)}))}function y(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,25,"ion-item",[],null,null,null,s.X,s.o)),o.qb(1,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,23,"ion-select",[["placeholder","CATEGORIA"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,5)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.todo.category=u)&&t),t}),s.gb,s.z)),o.qb(3,16384,null,0,g.l,[],{required:[0,"required"]},null),o.Gb(1024,null,g.e,(function(l){return[l]}),[g.l]),o.qb(5,16384,null,0,i.Lb,[o.k],null,null),o.Gb(1024,null,g.f,(function(l){return[l]}),[i.Lb]),o.qb(7,671744,null,0,g.k,[[8,null],[6,g.e],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.g,null,[g.k]),o.qb(9,16384,null,0,g.h,[[4,g.g]],null,null),o.qb(10,49152,null,0,i.mb,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null),(l()(),o.rb(11,0,null,0,2,"ion-select-option",[["value","branding"]],null,null,null,s.fb,s.A)),o.qb(12,49152,null,0,i.nb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.Jb(-1,0,["Branding"])),(l()(),o.rb(14,0,null,0,2,"ion-select-option",[["value","web"]],null,null,null,s.fb,s.A)),o.qb(15,49152,null,0,i.nb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.Jb(-1,0,["Web"])),(l()(),o.rb(17,0,null,0,2,"ion-select-option",[["value","app"]],null,null,null,s.fb,s.A)),o.qb(18,49152,null,0,i.nb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.Jb(-1,0,["App"])),(l()(),o.rb(20,0,null,0,2,"ion-select-option",[["value","redes"]],null,null,null,s.fb,s.A)),o.qb(21,49152,null,0,i.nb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.Jb(-1,0,["Redes"])),(l()(),o.rb(23,0,null,0,2,"ion-select-option",[["value","otros"]],null,null,null,s.fb,s.A)),o.qb(24,49152,null,0,i.nb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.Jb(-1,0,["Otros"]))],(function(l,n){var u=n.component;l(n,3,0,""),l(n,7,0,u.todo.category),l(n,10,0,"CATEGORIA"),l(n,12,0,"branding"),l(n,15,0,"web"),l(n,18,0,"app"),l(n,21,0,"redes"),l(n,24,0,"otros")}),(function(l,n){l(n,2,0,o.Db(n,3).required?"":null,o.Db(n,9).ngClassUntouched,o.Db(n,9).ngClassTouched,o.Db(n,9).ngClassPristine,o.Db(n,9).ngClassDirty,o.Db(n,9).ngClassValid,o.Db(n,9).ngClassInvalid,o.Db(n,9).ngClassPending)}))}function _(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,11,"ion-header",[],null,null,null,s.R,s.l)),o.qb(1,49152,null,0,i.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.lb,s.F)),o.qb(3,49152,null,0,i.Bb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.J,s.d)),o.qb(5,49152,null,0,i.k,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,8).onClick(u)&&t),t}),s.H,s.b)),o.qb(7,49152,null,0,i.f,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.qb(8,16384,null,0,i.g,[[2,i.hb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.rb(9,0,null,0,2,"ion-title",[],null,null,null,s.kb,s.E)),o.qb(10,49152,null,0,i.zb,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Details"])),(l()(),o.rb(12,0,null,null,73,"ion-content",[["padding",""]],null,null,null,s.N,s.h)),o.qb(13,49152,null,0,i.t,[o.h,o.k,o.x],null,null),o.qb(14,16384,null,0,i.c,[o.k],null,null),(l()(),o.rb(15,0,null,0,45,"ion-grid",[],null,null,null,s.Q,s.k)),o.qb(16,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(17,0,null,0,43,"ion-row",[],null,null,null,s.eb,s.y)),o.qb(18,49152,null,0,i.ib,[o.h,o.k,o.x],null,null),(l()(),o.rb(19,0,null,0,20,"ion-col",[],null,null,null,s.M,s.g)),o.qb(20,49152,null,0,i.s,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,2,null,f)),o.qb(22,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o.Fb(131072,c.b,[o.h]),(l()(),o.gb(0,[["btnDisabled",2]],0,0,null,v)),(l()(),o.rb(25,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.gb(16777216,null,0,1,null,k)),o.qb(27,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,C)),o.qb(29,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(30,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Seleccionar image:"])),(l()(),o.rb(32,0,null,0,0,"input",[["accept",".png, .jpg"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var o=!0;return"change"===n&&(o=!1!==l.component.onUpload(u)&&o),o}),null,null)),(l()(),o.rb(33,0,null,0,6,"input",[["id","imagen"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0,e=l.component;return"input"===n&&(t=!1!==o.Db(l,34)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.Db(l,34).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.Db(l,34)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.Db(l,34)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(e.todo.img=u)&&t),t}),null,null)),o.qb(34,16384,null,0,g.c,[o.B,o.k,[2,g.a]],null,null),o.Gb(1024,null,g.f,(function(l){return[l]}),[g.c]),o.qb(36,671744,null,0,g.k,[[8,null],[8,null],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.g,null,[g.k]),o.qb(38,16384,null,0,g.h,[[4,g.g]],null,null),o.Fb(131072,c.b,[o.h]),(l()(),o.rb(40,0,null,0,20,"ion-col",[],null,null,null,s.M,s.g)),o.qb(41,49152,null,0,i.s,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,2,null,q)),o.qb(43,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o.Fb(131072,c.b,[o.h]),(l()(),o.gb(0,[["btnDisabled2",2]],0,0,null,D)),(l()(),o.rb(46,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.gb(16777216,null,0,1,null,I)),o.qb(48,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,x)),o.qb(50,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(51,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Seleccionar image:"])),(l()(),o.rb(53,0,null,0,0,"input",[["accept",".png, .jpg"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var o=!0;return"change"===n&&(o=!1!==l.component.onUpload2(u)&&o),o}),null,null)),(l()(),o.rb(54,0,null,0,6,"input",[["id","imagen2"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0,e=l.component;return"input"===n&&(t=!1!==o.Db(l,55)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.Db(l,55).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.Db(l,55)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.Db(l,55)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(e.todo.img2=u)&&t),t}),null,null)),o.qb(55,16384,null,0,g.c,[o.B,o.k,[2,g.a]],null,null),o.Gb(1024,null,g.f,(function(l){return[l]}),[g.c]),o.qb(57,671744,null,0,g.k,[[8,null],[8,null],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.g,null,[g.k]),o.qb(59,16384,null,0,g.h,[[4,g.g]],null,null),o.Fb(131072,c.b,[o.h]),(l()(),o.rb(61,0,null,0,11,"ion-grid",[],null,null,null,s.Q,s.k)),o.qb(62,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(63,0,null,0,9,"ion-row",[],null,null,null,s.eb,s.y)),o.qb(64,49152,null,0,i.ib,[o.h,o.k,o.x],null,null),(l()(),o.rb(65,0,null,0,3,"ion-col",[],null,null,null,s.M,s.g)),o.qb(66,49152,null,0,i.s,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,M)),o.qb(68,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(69,0,null,0,3,"ion-col",[],null,null,null,s.M,s.g)),o.qb(70,49152,null,0,i.s,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,y)),o.qb(72,16384,null,0,c.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(73,0,null,0,1,"ion-list",[["lines","full"]],null,null,null,s.Z,s.t)),o.qb(74,49152,null,0,i.N,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.rb(75,0,null,0,2,"ion-button",[["class","boton-menu"],["color","primary"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.saveTodo()&&o),o}),s.I,s.c)),o.qb(76,49152,null,0,i.j,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),o.Jb(-1,0,["Save"])),(l()(),o.rb(78,0,null,0,7,"ion-fab",[["color","danger"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,s.P,s.i)),o.qb(79,49152,null,0,i.v,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.rb(80,0,null,0,5,"ion-fab-button",[["color","danger"],["routerDirection","forward"],["routerLink","/dashboard"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==o.Db(l,82).onClick()&&t),"click"===n&&(t=!1!==o.Db(l,83).onClick(u)&&t),"click"===n&&(t=!1!==e.onRemoveTodo(e.todoId)&&t),t}),s.O,s.j)),o.qb(81,49152,null,0,i.w,[o.h,o.k,o.x],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),o.qb(82,16384,null,0,h.n,[h.m,h.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.qb(83,737280,null,0,i.Kb,[c.h,i.Hb,o.k,h.m,[2,h.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),o.rb(84,0,null,0,1,"ion-icon",[["name","trash"]],null,null,null,s.S,s.m)),o.qb(85,49152,null,0,i.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,22,0,o.Kb(n,22,0,o.Db(n,23).transform(u.urlImage)),o.Db(n,24)),l(n,27,0,u.todo.img),l(n,29,0,""==u.todo.img),l(n,36,0,u.todo.img),l(n,43,0,o.Kb(n,43,0,o.Db(n,44).transform(u.urlImage2)),o.Db(n,45)),l(n,48,0,u.todo.img2),l(n,50,0,""==u.todo.img2),l(n,57,0,u.todo.img2),l(n,68,0,u.todo),l(n,72,0,u.todo),l(n,74,0,"full"),l(n,76,0,"primary","full","round"),l(n,79,0,"end","bottom"),l(n,81,0,"danger","forward"),l(n,82,0,"/dashboard"),l(n,83,0,"forward"),l(n,85,0,"trash")}),(function(l,n){var u=n.component;l(n,33,0,o.Kb(n,33,0,o.Db(n,39).transform(u.urlImage)),o.Db(n,38).ngClassUntouched,o.Db(n,38).ngClassTouched,o.Db(n,38).ngClassPristine,o.Db(n,38).ngClassDirty,o.Db(n,38).ngClassValid,o.Db(n,38).ngClassInvalid,o.Db(n,38).ngClassPending),l(n,54,0,o.Kb(n,54,0,o.Db(n,60).transform(u.urlImage2)),o.Db(n,59).ngClassUntouched,o.Db(n,59).ngClassTouched,o.Db(n,59).ngClassPristine,o.Db(n,59).ngClassDirty,o.Db(n,59).ngClassValid,o.Db(n,59).ngClassInvalid,o.Db(n,59).ngClassPending)}))}function w(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-todo-details",[],null,null,null,_,m)),o.qb(1,114688,null,0,a,[h.a,i.Hb,e.a,i.Fb,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=o.nb("app-todo-details",a,w,{},{},[]);u.d(n,"TodoDetailsPageModuleNgFactory",(function(){return J}));var J=o.ob(b,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[d.a,B]],[3,o.j],o.v]),o.Bb(4608,c.l,c.k,[o.s,[2,c.s]]),o.Bb(4608,g.n,g.n,[]),o.Bb(4608,i.a,i.a,[o.x,o.g]),o.Bb(4608,i.Gb,i.Gb,[i.a,o.j,o.p]),o.Bb(4608,i.Jb,i.Jb,[i.a,o.j,o.p]),o.Bb(1073742336,c.c,c.c,[]),o.Bb(1073742336,g.m,g.m,[]),o.Bb(1073742336,g.d,g.d,[]),o.Bb(1073742336,i.Db,i.Db,[]),o.Bb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),o.Bb(1073742336,b,b,[]),o.Bb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);