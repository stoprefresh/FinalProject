(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{vdCw:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),i=u("gs/X"),t=u("oPjg"),o=function(){function n(n,l){this.providerSvc=n,this.router=l,this.provider=new t.a,this.organizationList=["Denver Metro Ambulance","SD Internal Medicine Group","Other"]}return n.prototype.ngOnInit=function(){},n.prototype.addProvider=function(){var n=this;this.providerSvc.create(this.provider).subscribe(function(l){n.router.navigateByUrl("/patient-registration")},function(n){console.error("ProviderRegister.addProvider(): error creating user."),console.error(n)},function(){})},n}(),r=function(){return function(){}}(),b=u("pMnS"),a=u("oBZk"),s=u("ZZ/e"),d=u("gIcY"),g=u("Ip0R"),c=u("ZYCi"),p=e.Bb({encapsulation:0,styles:[[""]],data:{}});function C(n){return e.Xb(0,[(n()(),e.Db(0,0,null,null,2,"ion-select-option",[],null,null,null,a.tb,a.F)),e.Cb(1,49152,null,0,s.pb,[e.j,e.p,e.H],{value:[0,"value"]},null),(n()(),e.Vb(2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,2,0,l.context.$implicit)})}function v(n){return e.Xb(0,[(n()(),e.Db(0,0,null,null,10,"ion-header",[],null,null,null,a.hb,a.s)),e.Cb(1,49152,null,0,s.D,[e.j,e.p,e.H],null,null),(n()(),e.Db(2,0,null,0,8,"ion-toolbar",[],null,null,null,a.Db,a.O)),e.Cb(3,49152,null,0,s.Db,[e.j,e.p,e.H],null,null),(n()(),e.Db(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.T,a.e)),e.Cb(5,49152,null,0,s.n,[e.j,e.p,e.H],null,null),(n()(),e.Db(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.ob,a.A)),e.Cb(7,49152,null,0,s.T,[e.j,e.p,e.H],null,null),(n()(),e.Db(8,0,null,0,2,"ion-title",[],null,null,null,a.Bb,a.M)),e.Cb(9,49152,null,0,s.Bb,[e.j,e.p,e.H],null,null),(n()(),e.Vb(-1,0,["Provider Registration"])),(n()(),e.Db(11,0,null,null,40,"ion-content",[],null,null,null,a.bb,a.m)),e.Cb(12,49152,null,0,s.w,[e.j,e.p,e.H],null,null),(n()(),e.Db(13,0,null,0,38,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var i=!0;return"submit"===l&&(i=!1!==e.Pb(n,15).onSubmit(u)&&i),"reset"===l&&(i=!1!==e.Pb(n,15).onReset()&&i),i},null,null)),e.Cb(14,16384,null,0,d.m,[],null,null),e.Cb(15,4210688,[["reigsterForm",4]],0,d.h,[[8,null],[8,null]],null,null),e.Sb(2048,null,d.a,null,[d.h]),e.Cb(17,16384,null,0,d.g,[[4,d.a]],null,null),(n()(),e.Db(18,0,null,null,29,"ion-list",[["lines","none"]],null,null,null,a.nb,a.x)),e.Cb(19,49152,null,0,s.Q,[e.j,e.p,e.H],{lines:[0,"lines"]},null),(n()(),e.Db(20,0,null,0,13,"ion-item",[],null,null,null,a.kb,a.v)),e.Cb(21,49152,null,0,s.J,[e.j,e.p,e.H],null,null),(n()(),e.Db(22,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.lb,a.w)),e.Cb(23,49152,null,0,s.P,[e.j,e.p,e.H],{position:[0,"position"]},null),(n()(),e.Vb(-1,0,["Organization"])),(n()(),e.Db(25,0,null,0,8,"ion-select",[["name","organization"],["placeholder","Select One"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var i=!0,t=n.component;return"ionBlur"===l&&(i=!1!==e.Pb(n,26)._handleBlurEvent(u.target)&&i),"ionChange"===l&&(i=!1!==e.Pb(n,26)._handleChangeEvent(u.target)&&i),"ngModelChange"===l&&(i=!1!==(t.provider.organization=u)&&i),i},a.ub,a.E)),e.Cb(26,16384,null,0,s.Mb,[e.p],null,null),e.Sb(1024,null,d.d,function(n){return[n]},[s.Mb]),e.Cb(28,671744,null,0,d.i,[[2,d.a],[8,null],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,d.e,null,[d.i]),e.Cb(30,16384,null,0,d.f,[[4,d.e]],null,null),e.Cb(31,49152,null,0,s.ob,[e.j,e.p,e.H],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),e.sb(16777216,null,0,1,null,C)),e.Cb(33,278528,null,0,g.i,[e.Y,e.U,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Db(34,0,null,0,13,"ion-item",[],null,null,null,a.kb,a.v)),e.Cb(35,49152,null,0,s.J,[e.j,e.p,e.H],null,null),(n()(),e.Db(36,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,a.lb,a.w)),e.Cb(37,49152,null,0,s.P,[e.j,e.p,e.H],{color:[0,"color"],position:[1,"position"]},null),(n()(),e.Vb(-1,0,["Department/Subunit"])),(n()(),e.Db(39,0,null,0,8,"ion-input",[["name","organization"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var i=!0,t=n.component;return"ionBlur"===l&&(i=!1!==e.Pb(n,42)._handleBlurEvent(u.target)&&i),"ionChange"===l&&(i=!1!==e.Pb(n,42)._handleInputEvent(u.target)&&i),"ngModelChange"===l&&(i=!1!==(t.provider.subunit=u)&&i),i},a.jb,a.u)),e.Cb(40,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Sb(1024,null,d.c,function(n){return[n]},[d.j]),e.Cb(42,16384,null,0,s.Nb,[e.p],null,null),e.Sb(1024,null,d.d,function(n){return[n]},[s.Nb]),e.Cb(44,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,d.e,null,[d.i]),e.Cb(46,16384,null,0,d.f,[[4,d.e]],null,null),e.Cb(47,49152,null,0,s.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),e.Db(48,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),e.Db(49,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.addProvider()&&e),e},a.S,a.d)),e.Cb(50,49152,null,0,s.m,[e.j,e.p,e.H],{expand:[0,"expand"],type:[1,"type"]},null),(n()(),e.Vb(-1,0,["Create"]))],function(n,l){var u=l.component;n(l,19,0,"none"),n(l,23,0,"stacked"),n(l,28,0,"organization",u.provider.organization),n(l,31,0,"organization","Select One"),n(l,33,0,u.organizationList),n(l,37,0,"primary","stacked"),n(l,40,0,""),n(l,44,0,"organization",u.provider.subunit),n(l,47,0,"organization","","text"),n(l,50,0,"block","submit")},function(n,l){n(l,13,0,e.Pb(l,17).ngClassUntouched,e.Pb(l,17).ngClassTouched,e.Pb(l,17).ngClassPristine,e.Pb(l,17).ngClassDirty,e.Pb(l,17).ngClassValid,e.Pb(l,17).ngClassInvalid,e.Pb(l,17).ngClassPending),n(l,25,0,e.Pb(l,30).ngClassUntouched,e.Pb(l,30).ngClassTouched,e.Pb(l,30).ngClassPristine,e.Pb(l,30).ngClassDirty,e.Pb(l,30).ngClassValid,e.Pb(l,30).ngClassInvalid,e.Pb(l,30).ngClassPending),n(l,39,0,e.Pb(l,40).required?"":null,e.Pb(l,46).ngClassUntouched,e.Pb(l,46).ngClassTouched,e.Pb(l,46).ngClassPristine,e.Pb(l,46).ngClassDirty,e.Pb(l,46).ngClassValid,e.Pb(l,46).ngClassInvalid,e.Pb(l,46).ngClassPending)})}function h(n){return e.Xb(0,[(n()(),e.Db(0,0,null,null,1,"provider",[],null,null,null,v,p)),e.Cb(1,114688,null,0,o,[i.a,c.m],null,null)],function(n,l){n(l,1,0)},null)}var m=e.zb("provider",o,h,{},{},[]);u.d(l,"ProviderPageModuleNgFactory",function(){return P});var P=e.Ab(r,[],function(n){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[b.a,m]],[3,e.m],e.F]),e.Nb(4608,g.l,g.k,[e.B,[2,g.s]]),e.Nb(4608,d.l,d.l,[]),e.Nb(4608,s.c,s.c,[e.H,e.g]),e.Nb(4608,s.Gb,s.Gb,[s.c,e.m,e.x]),e.Nb(4608,s.Kb,s.Kb,[s.c,e.m,e.x]),e.Nb(1073742336,g.b,g.b,[]),e.Nb(1073742336,d.k,d.k,[]),e.Nb(1073742336,d.b,d.b,[]),e.Nb(1073742336,s.Fb,s.Fb,[]),e.Nb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),e.Nb(1073742336,r,r,[]),e.Nb(1024,c.k,function(){return[[{path:"",component:o}]]},[])])})}}]);