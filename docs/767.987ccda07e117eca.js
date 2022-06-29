"use strict";(self.webpackChunkstock_tracker_application=self.webpackChunkstock_tracker_application||[]).push([[767],{6767:(cN,R2,o)=>{o.r(R2),o.d(R2,{HomepageModule:()=>aN});var l=o(9808),l7=o(4466),h=o(4375),s=o(3075),q=o(7579),s7=o(4049),L7=o(4482),M7=o(5403),V7=o(1884),z7=o(9300),t7=o(4351),p=o(2722),v7=o(4004),C=o(7587);let U2=(()=>{class e{constructor(){this.symbolList=[]}addSymbolToList(a){var c,r=JSON.parse(null!==(c=localStorage.getItem("listSymbolStock"))&&void 0!==c?c:"[]");r.unshift(a),localStorage.setItem("listSymbolStock",JSON.stringify(r))}getSymbolList(){var a;return JSON.parse(null!==(a=localStorage.getItem("listSymbolStock"))&&void 0!==a?a:"[]")}deleteSymbolToList(a){var c,r=JSON.parse(null!==(c=localStorage.getItem("listSymbolStock"))&&void 0!==c?c:"[]");r.forEach((i,n)=>{i.symbol===a&&r.splice(n,1)}),r.length>0?localStorage.setItem("listSymbolStock",JSON.stringify(r)):localStorage.removeItem("listSymbolStock")}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=C.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=o(520),E=o(2340);let G=(()=>{class e{constructor(a){this.http=a,this.token="bu4f8kn48v6uehqi3cqg"}getQuote(a){let c=new m.LE;return c=c.set("symbol",`${a}`),c=c.set("token",`${this.token}`),this.http.get(E.N.api.getQuota,{params:c})}getSymbolLookup(a){let c=new m.LE;return c=c.set("q",`${a}`),c=c.set("token",`${this.token}`),this.http.get(E.N.api.search,{params:c})}getSentiment(a,c,r){let i=new m.LE;return i=i.set("symbol",`${a}`),i=i.set("from",`${c}`),i=i.set("to",`${r}`),i=i.set("token",`${this.token}`),this.http.get(E.N.api.sentiment,{params:i})}}return e.\u0275fac=function(a){return new(a||e)(C.LFG(m.eN))},e.\u0275prov=C.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h7=o(2290),I={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"]},j={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"]},M={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]},i7=o(9609),R=o(7232);let Gx=(()=>{class e{constructor(a,c){this.activeModal=a,this.translateService=c,this.text=this.translateService.instant("alert")}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)(C.Y36(i7.Kz),C.Y36(R.sK))},e.\u0275cmp=C.Xpm({type:e,selectors:[["app-modal"]],decls:12,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(a,c){1&a&&(C.TgZ(0,"div",0)(1,"h4",1),C._uU(2,"Attenzione!"),C.qZA(),C.TgZ(3,"button",2),C.NdJ("click",function(){return c.activeModal.dismiss("Cross click")}),C.qZA()(),C.TgZ(4,"div",3)(5,"p"),C._uU(6),C.qZA()(),C.TgZ(7,"div",4)(8,"button",5),C.NdJ("click",function(){return c.activeModal.close("CANCEL")}),C._uU(9,"Cancel"),C.qZA(),C.TgZ(10,"button",6),C.NdJ("click",function(){return c.activeModal.close("OK")}),C._uU(11,"Ok"),C.qZA()()),2&a&&(C.xp6(6),C.hij("",c.text,"!"))},styles:[""]}),e})();var o7=o(9444);function Wx(e,f){if(1&e&&C._UZ(0,"fa-icon",13),2&e){const a=C.oxw(2);C.Q6J("icon",a.faArrowUp)}}function Ix(e,f){if(1&e&&C._UZ(0,"fa-icon",14),2&e){const a=C.oxw(2);C.Q6J("icon",a.faArrowDown)}}function Ox(e,f){if(1&e){const a=C.EpF();C.TgZ(0,"div",1)(1,"div",2)(2,"h3",3),C._uU(3),C.qZA(),C.TgZ(4,"fa-icon",4),C.NdJ("click",function(){C.CHM(a);const r=C.oxw();return r.confermaEliminaElemento(r.typeStock)}),C.qZA()(),C.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"p",8),C._uU(9),C.ALo(10,"translate"),C.TgZ(11,"span",9),C._uU(12),C.qZA()(),C.TgZ(13,"p",8),C._uU(14),C.ALo(15,"translate"),C.TgZ(16,"span",9),C._uU(17),C.ALo(18,"currency"),C.qZA()()(),C.TgZ(19,"div",7)(20,"p",8),C._uU(21),C.ALo(22,"translate"),C.TgZ(23,"span",9),C._uU(24),C.ALo(25,"currency"),C.qZA()(),C.TgZ(26,"p",8),C._uU(27),C.ALo(28,"translate"),C.TgZ(29,"span",9),C._uU(30),C.ALo(31,"currency"),C.qZA()()(),C.TgZ(32,"div"),C.YNc(33,Wx,1,1,"fa-icon",10),C.YNc(34,Ix,1,1,"ng-template",null,11,C.W1O),C.qZA()(),C.TgZ(36,"button",12),C.NdJ("click",function(){C.CHM(a);const r=C.oxw();return r.gotoSentimentPage(r.typeStock)}),C._uU(37),C.ALo(38,"translate"),C.qZA()()()}if(2&e){const a=C.MAs(35),c=C.oxw();C.xp6(3),C.AsE("",c.typeStock.name," (",c.typeStock.symbol,")"),C.xp6(1),C.Q6J("icon",c.faXmark),C.xp6(5),C.hij(" ",C.lcZ(10,15,"homePage.change-to-day")," "),C.xp6(3),C.AsE("",c.typeStock.quote.d>0?"+":"","",c.typeStock.quote.d,"%"),C.xp6(2),C.hij(" ",C.lcZ(15,17,"homePage.current-price")," "),C.xp6(3),C.Oqu(C.lcZ(18,19,c.typeStock.quote.c)),C.xp6(4),C.hij(" ",C.lcZ(22,21,"homePage.opening-price")," "),C.xp6(3),C.Oqu(C.lcZ(25,23,c.typeStock.quote.o)),C.xp6(3),C.hij(" ",C.lcZ(28,25,"homePage.high-price")," "),C.xp6(3),C.Oqu(C.lcZ(31,27,c.typeStock.quote.h)),C.xp6(3),C.Q6J("ngIf",c.typeStock.quote.d>0)("ngIfElse",a),C.xp6(4),C.Oqu(C.lcZ(38,29,"button2"))}}let Zx=(()=>{class e{constructor(a,c,r){this.httpService=a,this.modalService=c,this.router=r,this.faArrowUp=j,this.faArrowDown=I,this.faXmark=M,this.destroy$=new q.x,this.eliminaEvento=new C.vpe,this.typeStock={},this.isLoad=!1}ngOnInit(){}ngOnChanges(a){console.log(a),this.isLoad=!1,this.loadInfo()}ngOnDestroy(){this.destroy$.next(!0)}loadInfo(){this.typeStock={},this.httpService.getQuote(this.symbol.symbol).pipe((0,p.R)(this.destroy$)).subscribe(a=>{this.typeStock.quote=a,this.typeStock.name=this.symbol.description,this.typeStock.symbol=this.symbol.symbol,this.isLoad=!0})}confermaEliminaElemento(a){const c=this.modalService.open(Gx).result.then(r=>{"OK"===r&&this.eliminaEvento.emit(a.symbol)});console.log(c)}gotoSentimentPage(a){this.router.navigate(["sentiment",a.symbol])}}return e.\u0275fac=function(a){return new(a||e)(C.Y36(G),C.Y36(i7.FF),C.Y36(h.F0))},e.\u0275cmp=C.Xpm({type:e,selectors:[["app-current-quote"]],inputs:{symbol:"symbol"},outputs:{eliminaEvento:"eliminaEvento"},features:[C.TTD],decls:1,vars:1,consts:[["class","card shadow mb-5 bg-white rounded",4,"ngIf"],[1,"card","shadow","mb-5","bg-white","rounded"],[1,"card-header"],[1,"title-card"],[1,"icon-close",3,"icon","click"],[1,"card-body"],[1,"d-flex","justify-content-start","mb-3","flex-wrap"],[1,"box-info"],[1,"info-element-title"],[1,"info-element-value"],["class","up-arrow",3,"icon",4,"ngIf","ngIfElse"],["elseBlock",""],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"up-arrow",3,"icon"],[1,"down-arrow",3,"icon"]],template:function(a,c){1&a&&C.YNc(0,Ox,39,31,"div",0),2&a&&C.Q6J("ngIf",c.isLoad)},directives:[l.O5,o7.BN],pipes:[R.X$,l.H9],styles:[""]}),e})();function _x(e,f){if(1&e&&(C.TgZ(0,"div")(1,"div",11),C._uU(2),C.ALo(3,"translate"),C.qZA(),C.TgZ(4,"div",11),C._uU(5),C.ALo(6,"translate"),C.qZA(),C.TgZ(7,"div",11),C._uU(8),C.ALo(9,"translate"),C.qZA(),C.TgZ(10,"div",11),C._uU(11),C.ALo(12,"translate"),C.qZA(),C.TgZ(13,"div",11),C._uU(14),C.ALo(15,"translate"),C.qZA()()),2&e){const a=C.oxw();C.xp6(1),C.Q6J("hidden",!(null!=a.symbolForm.errors&&a.symbolForm.errors.required)),C.xp6(1),C.hij(" ",C.lcZ(3,10,"errorMessage1")," "),C.xp6(2),C.Q6J("hidden",!(null!=a.symbolForm.errors&&a.symbolForm.errors.maxlength)),C.xp6(1),C.hij(" ",C.lcZ(6,12,"errorMessage2")," "),C.xp6(2),C.Q6J("hidden",!(null!=a.symbolForm.errors&&a.symbolForm.errors.pattern)),C.xp6(1),C.hij(" ",C.lcZ(9,14,"errorMessage3")," "),C.xp6(2),C.Q6J("hidden",!(null!=a.symbolForm.errors&&a.symbolForm.errors.isSimbolNotFound)),C.xp6(1),C.hij(" ",C.lcZ(12,16,"errorMessage4")," "),C.xp6(2),C.Q6J("hidden",!(null!=a.symbolForm.errors&&a.symbolForm.errors.isSimbolDuplicated)),C.xp6(1),C.hij(" ",C.lcZ(15,18,"errorMessage5")," ")}}function Qx(e,f){if(1&e){const a=C.EpF();C.ynx(0),C.TgZ(1,"app-current-quote",12),C.NdJ("eliminaEvento",function(r){return C.CHM(a),C.oxw().eliminaStock(r)}),C.qZA(),C.BQk()}if(2&e){const a=f.$implicit;C.xp6(1),C.Q6J("symbol",a)}}function Xx(e,f){if(1&e&&C._UZ(0,"fa-icon",15),2&e){const a=C.oxw(4);C.Q6J("icon",a.faArrowUp)}}function jx(e,f){if(1&e&&C._UZ(0,"fa-icon",16),2&e){const a=C.oxw(4);C.Q6J("icon",a.faArrowDown)}}function Kx(e,f){if(1&e&&(C.TgZ(0,"div",10)(1,"div")(2,"p",11),C._uU(3),C.ALo(4,"uppercase"),C.qZA(),C.TgZ(5,"p"),C._uU(6),C.ALo(7,"translate"),C.TgZ(8,"span",11),C._uU(9),C.qZA()(),C.TgZ(10,"p"),C._uU(11),C.ALo(12,"translate"),C.TgZ(13,"span",11),C._uU(14),C.qZA()()(),C.TgZ(15,"div",12),C.YNc(16,Xx,1,1,"fa-icon",13),C.YNc(17,jx,1,1,"ng-template",null,14,C.W1O),C.qZA()()),2&e){const a=f.$implicit,c=C.MAs(18),r=C.oxw(3);C.xp6(3),C.Oqu(C.lcZ(4,8,r.getMonthName(a.month))),C.xp6(3),C.hij(" ",C.lcZ(7,10,"sentiment.change")," "),C.xp6(3),C.AsE("",a.change>0?"+":"","",a.change,""),C.xp6(2),C.hij(" ",C.lcZ(12,12,"sentiment.mpsr")," "),C.xp6(3),C.Oqu(a.mspr),C.xp6(2),C.Q6J("ngIf",a.change>0)("ngIfElse",c)}}function Yx(e,f){if(1&e&&(C.TgZ(0,"div",4)(1,"div",5)(2,"h3",6),C._uU(3),C.qZA()(),C.TgZ(4,"div",7)(5,"div",8),C.YNc(6,Kx,19,14,"div",9),C.qZA()()()),2&e){const a=C.oxw(2);C.xp6(3),C.AsE("",a.stockSelezionato.description," (",a.stockSelezionato.symbol,")"),C.xp6(3),C.Q6J("ngForOf",a.sentiment)}}function $x(e,f){if(1&e){const a=C.EpF();C.TgZ(0,"div",1),C.YNc(1,Yx,7,3,"div",2),C.TgZ(2,"button",3),C.NdJ("click",function(){return C.CHM(a),C.oxw().back()}),C._uU(3),C.ALo(4,"translate"),C.qZA()()}if(2&e){const a=C.oxw();C.xp6(1),C.Q6J("ngIf",a.isLoad),C.xp6(2),C.Oqu(C.lcZ(4,2,"button3"))}}const CN=[{path:"",component:(()=>{class e{constructor(a,c,r){this.managerService=a,this.httpService=c,this.toastrService=r,this.destroy$=new q.x,this.symbolList=[],this.symbolForm=new s.NI("",[s.kI.required,s.kI.minLength(1),s.kI.maxLength(5),s.kI.pattern("[a-zA-Z ]*")]),this.search=i=>i.pipe(function H7(e,f=s7.z){return(0,L7.e)((a,c)=>{let r=null,i=null,n=null;const L=()=>{if(r){r.unsubscribe(),r=null;const H=i;i=null,c.next(H)}};function U(){const H=n+e,n7=f.now();if(n7<H)return r=this.schedule(void 0,H-n7),void c.add(r);L()}a.subscribe((0,M7.x)(c,H=>{i=H,n=f.now(),r||(r=f.schedule(U,e),c.add(r))},()=>{L(),c.complete()},void 0,()=>{i=r=null}))})}(200),(0,V7.x)(),(0,z7.h)(n=>n.length>0),(0,t7.b)(n=>this.httpService.getSymbolLookup(n.toUpperCase()).pipe((0,p.R)(this.destroy$),(0,v7.U)(L=>L.result.map(U=>U.symbol)))))}ngOnInit(){this.caricaDatiPregressi()}ngOnDestroy(){this.destroy$.next(!0)}caricaDatiPregressi(){this.symbolList=this.managerService.getSymbolList()}loadSymbolIntoLocalStorage(a){this.httpService.getSymbolLookup(a).pipe((0,p.R)(this.destroy$)).subscribe(c=>{if(!(c.count>0))return this.symbolForm.setErrors({isSimbolNotFound:!0}),void this.symbolForm.markAllAsTouched();{let i=c.result.find(n=>n.symbol==a.toUpperCase());if(!i)return this.symbolForm.setErrors({isSimbolNotFound:!0}),void this.symbolForm.markAllAsTouched();this.managerService.addSymbolToList(i),this.symbolList=this.managerService.getSymbolList(),this.symbolForm.setValue(""),this.symbolForm.reset(),setTimeout(()=>{this.toastrService.success("Stock added!","Success!",{positionClass:"toast-top-center"})},500)}})}verificaSimbolo(){if(this.symbolForm.invalid)this.symbolForm.markAllAsTouched();else{let c=this.symbolForm.value;if(this.symbolList.find(r=>r.symbol==c.toUpperCase()))return this.symbolForm.setErrors({isSimbolDuplicated:!0}),void this.symbolForm.markAllAsTouched();this.loadSymbolIntoLocalStorage(c.toUpperCase())}}eliminaStock(a){this.managerService.deleteSymbolToList(a),this.toastrService.success("Stock deleted!","Success!",{positionClass:"toast-top-center"}),this.caricaDatiPregressi()}}return e.\u0275fac=function(a){return new(a||e)(C.Y36(U2),C.Y36(G),C.Y36(h7._W))},e.\u0275cmp=C.Xpm({type:e,selectors:[["app-homepage"]],decls:17,vars:9,consts:[[1,"bodyContainer"],[1,"card","shadow","p-3","mb-5","bg-white","rounded"],[1,"card-body"],[1,"row"],[1,"col"],["for","stockSymbol",1,"form-label"],[1,"col-sm"],["type","text","id","stockSymbol","maxlength","5",1,"form-control","uppercase",3,"formControl"],[4,"ngIf"],["type","button",1,"btn","btn-outline-primary",3,"click"],[4,"ngFor","ngForOf"],[1,"alert","alert-danger","alertCustom",3,"hidden"],[3,"symbol","eliminaEvento"]],template:function(a,c){1&a&&(C.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),C._uU(6),C.ALo(7,"translate"),C.qZA()()(),C.TgZ(8,"div",3)(9,"div",6),C._UZ(10,"input",7),C.YNc(11,_x,16,20,"div",8),C.qZA(),C.TgZ(12,"div",6)(13,"button",9),C.NdJ("click",function(){return c.verificaSimbolo()}),C._uU(14),C.ALo(15,"translate"),C.qZA()()()()(),C.YNc(16,Qx,2,1,"ng-container",10),C.qZA()),2&a&&(C.xp6(6),C.Oqu(C.lcZ(7,5,"label1")),C.xp6(4),C.Q6J("formControl",c.symbolForm),C.xp6(1),C.Q6J("ngIf",c.symbolForm.invalid&&(c.symbolForm.dirty||c.symbolForm.touched)),C.xp6(3),C.Oqu(C.lcZ(15,7,"button1")),C.xp6(2),C.Q6J("ngForOf",c.symbolList))},directives:[s.Fj,s.nD,s.JJ,s.oH,l.O5,l.sg,Zx],pipes:[R.X$],styles:[".ng-valid[_ngcontent-%COMP%]{border-left:5px solid #42A948}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}.alertCustom[_ngcontent-%COMP%]{margin-top:8px;padding:.5rem}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}"]}),e})()},{path:"sentiment/:symbol",component:(()=>{class e{constructor(a,c,r,i,n){this.route=a,this.httpService=c,this.datepipe=r,this.managerService=i,this.router=n,this.destroy$=new q.x,this.sentiment=[],this.isLoad=!1,this.faArrowUp=j,this.faArrowDown=I,this.getMonthName=L=>["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][L],this.symbol=this.route.snapshot.params.symbol}ngOnInit(){var a=new Date,c=this.datepipe.transform(a,"yyyy-MM-dd");console.log(c);var r=a.setMonth(a.getMonth()-2),i=this.datepipe.transform(r,"yyyy-MM-dd");console.log(i),i&&c&&this.httpService.getSentiment(this.symbol,i,c).pipe((0,p.R)(this.destroy$)).subscribe(n=>{console.log(this.symbol),this.sentiment=n.data,this.stockSelezionato=this.managerService.getSymbolList().find(L=>L.symbol==this.symbol.toUpperCase()),console.log(this.stockSelezionato),this.isLoad=!0})}ngOnDestroy(){this.destroy$.next(!0)}back(){this.router.navigate([""])}}return e.\u0275fac=function(a){return new(a||e)(C.Y36(h.gz),C.Y36(G),C.Y36(l.uU),C.Y36(U2),C.Y36(h.F0))},e.\u0275cmp=C.Xpm({type:e,selectors:[["app-sentiment"]],decls:1,vars:1,consts:[["class","bodyContainer",4,"ngIf"],[1,"bodyContainer"],["class","card shadow mb-5 bg-white rounded",4,"ngIf"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"card","shadow","mb-5","bg-white","rounded"],[1,"card-header"],[1,"title-card"],[1,"card-body"],[1,"d-flex","justify-content-start","mb-3","flex-wrap"],["class","box-info d-flex justify-content-start mb-3 flex-wrap",4,"ngFor","ngForOf"],[1,"box-info","d-flex","justify-content-start","mb-3","flex-wrap"],[1,"info-element-value"],[1,"box-info-2"],["class","up-arrow",3,"icon",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"up-arrow",3,"icon"],[1,"down-arrow",3,"icon"]],template:function(a,c){1&a&&C.YNc(0,$x,5,4,"div",0),2&a&&C.Q6J("ngIf",c.stockSelezionato)},directives:[l.O5,l.sg,o7.BN],pipes:[l.gd,R.X$],styles:[""]}),e})()}];let aN=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=C.oAB({type:e}),e.\u0275inj=C.cJS({imports:[[l.ez,l7.m,h.Bz.forChild(CN)]]}),e})()}}]);