(function(t){function i(i){for(var n,s,r=i[0],l=i[1],c=i[2],u=0,p=[];u<r.length;u++)s=r[u],a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(i);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,r=1;r<e.length;r++){var l=e[r];0!==a[l]&&(n=!1)}n&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var n={},a={app:0},o=[];function s(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(e,n,function(i){return t[i]}.bind(null,n));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push(["56d7","chunk-vendors"]),e()})({"56d7":function(t,i,e){"use strict";e.r(i);e("0f18");var n=e("a026"),a=e("bb71");n["a"].use(a["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{id:"app_login"}},[t.drawer?e("div",{staticStyle:{position:"fixed",width:"100%",height:"100vh",left:"0",top:"0"}}):t._e(),t.isSignedIn?e("div",[e("div",{staticStyle:{"text-align":"right"}},[t.notificationCount>0?e("v-badge",{attrs:{color:"red"}},[e("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("2")]),e("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:""},on:{click:t.showNoti}},[e("v-icon",{staticClass:"swing animated",staticStyle:{"-webkit-animation":"swing 0.8s infinite",animation:"swing 0.8s infinite"},attrs:{size:"20",color:"blue darken-3"}},[t._v("\n            notifications_active\n          ")])],1)],1):e("v-btn",{staticClass:"mx-0 my-0",staticStyle:{"margin-right":"-10px !important"},attrs:{icon:""}},[e("v-icon",{staticClass:"swing animated",staticStyle:{"-webkit-animation":"swing 0.8s infinite",animation:"swing 0.8s infinite"},attrs:{size:"20",color:"blue darken-3"}},[t._v("\n            notifications\n          ")])],1),e("v-menu",{attrs:{"offset-y":"","nudge-bottom":5}},[e("v-chip",{attrs:{slot:"activator"},on:{click:function(i){t.isShowUserMenu=!t.isShowUserMenu}},slot:"activator"},[e("v-avatar",[e("img",{attrs:{src:t.avatarURL}})]),t._v("\n          "+t._s(t.userNameLogin)+"\n          "),t.isShowUserMenu?e("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[t._v("\n            expand_less\n          ")]):e("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[t._v("\n            expand_more\n          ")])],1),e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{size:"16"}},[t._v("person")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Thông tin tài khoản")])],1)],1),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{size:"16",color:"red darken-3"}},[t._v("exit_to_app")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Đăng xuất")])],1)],1)],1)],1)],1)]):e("div",{staticStyle:{position:"relative",height:"50px"}},[e("div",{staticClass:"login-wrapper"},[e("div",{staticClass:"login-input"},[e("div",{staticClass:"ico ico-user"},[e("input",{attrs:{type:"text",placeholder:"Tài khoản đăng nhập",name:"_LoginNotification_login"}})]),e("div",{staticClass:"ico ico-pass"},[e("input",{attrs:{type:"text",placeholder:"Mật khẩu",name:"_LoginNotification_password"}})])]),e("div",{staticClass:"login-input"},[e("div",{staticStyle:{width:"100%"}},[e("a",{staticClass:"text-hover-blue",staticStyle:{"line-height":"30px","font-size":"12px",color:"#005792","text-decoration":"underline","padding-left":"10px"},attrs:{href:"/forgotten-password"}},[t._v("Quên mật khẩu?")])]),e("div",{staticStyle:{width:"100%","text-align":"right"}},[e("button",{staticClass:"btn-register",attrs:{type:"button"}},[t._v("Đăng ký")]),e("button",{staticClass:"btn-login",attrs:{type:"submit"}},[t._v("Đăng nhập")])])])])])])},s=[],r=e("bc3a"),l=e.n(r),c={data:()=>({isSignedIn:!1,userNameLogin:"",drawerLogin:!1,avatarURL:"http://via.placeholder.com/350x150",notificationCount:0,isShowUserMenu:!1,toggle_exclusive:0}),created(){let t=this;t.$nextTick(function(){if(t.isSignedIn=themeDisplay.isSignedIn(),t.userNameLogin=themeDisplay.getUserName(),t.isSignedIn){let i={responseType:"blob"};l.a.get("/o/rest/v2/users/"+themeDisplay.getUserId()+"/photo",i).then(function(i){t.avatarURL=window.URL.createObjectURL(i.data)})}})},methods:{showNoti(){let t=this;t.drawerLogin=!t.drawerLogin,console.log("do show Noti")},doRegisterRedirect(){},doUserInfo(){},doExitApp(){window.location.href="/c/portal/logout"}}},d=c,u=e("2877"),p=e("6544"),v=e.n(p),f=e("7496"),g=e("8212"),h=e("4ca6"),w=e("8336"),b=e("cc20"),m=e("132d"),y=e("8860"),_=e("ba95"),x=e("40fe"),S=e("5d23"),k=e("e449"),C=Object(u["a"])(d,o,s,!1,null,null,null);C.options.__file="App.vue";var L=C.exports;v()(C,{VApp:f["a"],VAvatar:g["a"],VBadge:h["a"],VBtn:w["a"],VChip:b["a"],VIcon:m["a"],VList:y["a"],VListTile:_["a"],VListTileAction:x["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VMenu:k["a"]}),l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",n["a"].config.productionTip=!0,new n["a"]({render:function(t){return t(L)}}).$mount("#app_login")}});
//# sourceMappingURL=app.f6be9399.js.map