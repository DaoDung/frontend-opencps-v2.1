(function(e){function t(t){for(var i,n,r=t[0],l=t[1],d=t[2],p=0,u=[];p<r.length;p++)n=r[p],o[n]&&u.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=l;s.push(["56d7","chunk-vendors"]),a()})({"1b71":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return templateDefault}),__webpack_require__.d(__webpack_exports__,"b",function(){return testData});const templateDefault={template:'\n        <div>\n            <p style="margin-bottom: 0px;">\n                {{item["notificationText"]}}\n                <a href="" style="\n                    color: #0072c2;\n                    font-weight: bold;\n                ">\n                    {{dossier["dossierId"]}}\n                    <i aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 15px;color: #0072c2;">launch</i>\n                </a>\n            </p>\n            <p style="color: #90949c;font-size: 12px;">\n            <i aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 15px; color: rgb(0, 114, 194);">event</i>\n                {{new Date(dossier["createDate"]).toLocaleDateString(\'vi-VN\')}}\n            </p>\n        </div>\n    ',data:()=>({item:{},dossier:{}}),created:function(){let vm=this;void 0!==vm.$parent.item&&null!==vm.$parent.item&&(vm.item=vm.$parent.item,vm.dossier=eval(" ( "+vm.item["data"]+" ) ")["Dossier"]),console.log(vm.item)}},testData=[{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""},{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""}]},"56d7":function(e,t,a){"use strict";a.r(t);a("0f18");var i=a("a026"),o=a("bb71");i["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app_dynamic_report"}},[e.isSignedIn?a("div",[a("div",{staticClass:"login_wrap_app_panel",staticStyle:{"text-align":"right","max-width":"1366px"}},[e.notificationCount>0?a("v-badge",{attrs:{color:"red"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[e._v("2")]),a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:""},on:{click:e.showNoti}},[a("v-icon",{staticClass:"swing animated",staticStyle:{"-webkit-animation":"swing 0.8s infinite",animation:"swing 0.8s infinite"},attrs:{size:"20",color:"blue darken-3"}},[e._v("\n            notifications_active\n          ")])],1)],1):a("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:""},on:{click:e.showNoti}},[a("v-icon",{staticClass:"swing animated",staticStyle:{"-webkit-animation":"swing 0.8s infinite",animation:"swing 0.8s infinite"},attrs:{size:"20",color:"blue darken-3"}},[e._v("\n          notifications\n        ")])],1),a("v-menu",{attrs:{"offset-y":"","nudge-bottom":5}},[a("v-chip",{attrs:{slot:"activator"},on:{click:function(t){e.isShowUserMenu=!e.isShowUserMenu}},slot:"activator"},[""!==e.avatarURL?a("v-avatar",[a("img",{attrs:{src:e.avatarURL}})]):a("v-avatar",{staticClass:"white--text",style:{background:"#"+e.colorBG}},[a("span",{staticClass:"white--text"},[e._v(e._s(e.userNameLogin.slice(0,1).toUpperCase()))])]),e._v("\n          "+e._s(e.userNameLogin)+"\n          "),e.isShowUserMenu?a("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[e._v("\n            expand_less\n          ")]):a("v-icon",{staticClass:"swing animated",attrs:{size:"20",color:"blue darken-3"}},[e._v("\n            expand_more\n          ")])],1),a("v-list",[a("v-list-tile",{on:{click:e.doUserInfo}},[a("v-list-tile-action",[a("v-icon",{attrs:{size:"16"}},[e._v("person")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Thông tin tài khoản")])],1)],1),a("v-list-tile",{on:{click:e.doExitApp}},[a("v-list-tile-action",[a("v-icon",{attrs:{size:"16",color:"red darken-3"}},[e._v("exit_to_app")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Đăng xuất")])],1)],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"login_drawer",staticStyle:{"-webkit-box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","z-index":"9999"},attrs:{fixed:"",right:"","hide-overlay":"",temporary:""},model:{value:e.drawerLogin,callback:function(t){e.drawerLogin=t},expression:"drawerLogin"}},[a("article",{staticClass:"glass down"},[a("v-layout",{staticClass:"px-3",staticStyle:{display:"flex","border-bottom":"1px solid #fff"},attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0","border-top-left-radius":"8px","border-bottom-left-radius":"8px"},attrs:{block:"",small:""}},[e._v("\n              Thông báo mới\n            ")])],1),a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{background:"#d0d0d0","border-top-left-radius":"0","border-bottom-left-radius":"0","border-top-right-radius":"8px","border-bottom-right-radius":"8px"},attrs:{block:"",small:""}},[e._v("\n              Đánh dấu đã đọc\n            ")])],1)],1),a("div",{staticClass:"layout row wrap pl-3 pr-4",staticStyle:{display:"flex"}},[a("div",{staticClass:"flex xs12 mt-3",staticStyle:{background:"#ffffff66","border-radius":"8px"}},[a("div",{staticStyle:{padding:"5px 10px",background:"#fff0","text-transform":"uppercase","font-weight":"bold"}},[a("v-icon",{attrs:{size:"15",color:"red accent-4"}},[e._v("mail")]),e._v("\n              Thông báo\n            ")],1),a("div",{staticClass:"notification_wrap",staticStyle:{padding:"5px 10px",background:"#ffffffb3","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},e._l(e.testData,function(t,i){return a("template-rendering",{key:i,attrs:{item:t,layout_view:t["layout_view"],template_default:e.templateDefault}})}),1)])])],1)])],1):a("div",{staticStyle:{position:"relative",height:"50px"}},[e._v("\n            123123 17777 123 2132131\n  ")])])},n=[],r=a("bc3a"),l=a.n(r),d=a("854a"),c=a.n(d),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return null!==e.template_default&&void 0!==e.template_default&&"undefined"!==e.template_default?a("my-dynamic-view"):e._e()},u=[],m=a("da1e"),g=m["a"],h=a("2877"),f=Object(h["a"])(g,p,u,!1,null,null,null);f.options.__file="template_rendering.vue";var v=f.exports,_=a("1b71");c.a.options={closeButton:!0,timeOut:"15000"};var y={components:{"template-rendering":v},data:()=>({isSignedIn:!1,userNameLogin:"",drawerLogin:!1,avatarURL:"http://via.placeholder.com/350x150",notificationCount:0,isShowUserMenu:!1,toggle_exclusive:0,forgottenURLStr:"",userName:"",passWord:"",userData:{},colorBG:"009688",templateDefault:_["a"],testData:_["b"]}),created(){let e=this;e.$nextTick(function(){e.isSignedIn=themeDisplay.isSignedIn(),e.userNameLogin=themeDisplay.getUserName(),e.colorBG=e.intToRGB(e.hashCode(e.userNameLogin));let t=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));if(e.forgottenURLStr=""!==t?t+"/register/#/cap-lai-mat-khau":themeDisplay.getURLHome()+"/register/#/cap-lai-mat-khau",e.isSignedIn){e.userData={};let t={responseType:"blob"};l.a.get("/o/v1/opencps/users/"+themeDisplay.getUserId(),t).then(function(t){e.userData=t.data,e.avatarURL=e.userData["avatar"],e.avatarURL.includes("img_id=0")&&(e.avatarURL=""),e.userNameLogin=e.userData["userName"],e.colorBG=e.intToRGB(e.hashCode(e.userNameLogin))}).catch(function(t){e.avatarURL=""})}})},methods:{showNoti(){let e=this;e.drawerLogin=!e.drawerLogin,e.isShowUserMenu=!1},doRegisterRedirect(){let e=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register":themeDisplay.getURLHome()+"/register"},doUserInfo(){if(null!==themeDisplay&&void 0!==themeDisplay){let e=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=e+"/profile"}else window.location.href="/profile"},doExitApp(){window.location.href="/c/portal/logout"},goToDangKyPage(){if(null!==themeDisplay&&void 0!==themeDisplay){let e=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register":themeDisplay.getURLHome()+"/register"}else window.location.href="/register"},goToDangNhap(){let e=this;l.a.post("/o/v1/opencps/login",{},{headers:{Authorization:"BASIC "+window.btoa(e.userName+":"+e.passWord)}}).then(function(e){if(""!==e.data&&"ok"!==e.data&&"captcha"!==e.data)"pending"===e.data?window.location.href=window.themeDisplay.getURLHome()+"/register#/xac-thuc-tai-khoan?active_user_id="+window.themeDisplay.getUserId()+"&redirectURL="+window.themeDisplay.getURLHome():window.location.href=e.data;else if("ok"===e.data)window.location.href=window.themeDisplay.getURLHome();else if("captcha"===e.data){let e=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register#/login":themeDisplay.getURLHome()+"/register#/login"}else c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")}).catch(function(e){c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")})},goToDangNhapPress(e){let t=this;13==e.keyCode&&l.a.post("/o/v1/opencps/login",{},{headers:{Authorization:"BASIC "+window.btoa(t.userName+":"+t.passWord)}}).then(function(e){if(console.log(e.data),""!==e.data&&"ok"!==e.data&&"captcha"!==e.data)"pending"===e.data?window.location.href=window.themeDisplay.getURLHome()+"/register#/xac-thuc-tai-khoan?active_user_id="+window.themeDisplay.getUserId()+"&redirectURL="+window.themeDisplay.getURLHome():window.location.href=e.data;else if("ok"===e.data)window.location.href=window.themeDisplay.getURLHome();else if("captcha"===e.data){let e=themeDisplay.getLayoutRelativeURL().substring(0,themeDisplay.getLayoutRelativeURL().lastIndexOf("/"));window.location.href=""!==e?e+"/register#/login":themeDisplay.getURLHome()+"/register#/login"}else c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")}).catch(function(e){c.a.error("Tên đăng nhập hoặc mật khẩu không chính xác.")})},hashCode(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);return t},intToRGB(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}}},b=y,w=a("6544"),D=a.n(w),N=a("7496"),x=a("8212"),C=a("4ca6"),S=a("8336"),L=a("cc20"),T=a("0e8f"),I=a("132d"),U=a("a722"),R=a("8860"),k=a("ba95"),V=a("40fe"),A=a("5d23"),O=a("e449"),G=a("f774"),P=Object(h["a"])(b,s,n,!1,null,null,null);P.options.__file="App.vue";var M=P.exports;D()(P,{VApp:N["a"],VAvatar:x["a"],VBadge:C["a"],VBtn:S["a"],VChip:L["a"],VFlex:T["a"],VIcon:I["a"],VLayout:U["a"],VList:R["a"],VListTile:k["a"],VListTileAction:V["a"],VListTileContent:A["a"],VListTileTitle:A["b"],VMenu:O["a"],VNavigationDrawer:G["a"]}),l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",i["a"].config.productionTip=!0,new i["a"]({render:function(e){return e(M)}}).$mount("#app_dynamic_report")},da1e:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026");__webpack_exports__["a"]={props:{item:{type:Object,default(){return{dossierId:0}}},layout_view:{type:Object},template_default:{type:Object}},created(){let vm=this,template="",data="{}",created="{}",updated="{}",methods="{}";null!==vm.layout_view&&void 0!==vm.layout_view&&"undefined"!==vm.layout_view?vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.layout_view["template"],data:eval(" ( "+vm.layout_view["data"]+" ) "),created:eval(" ( "+vm.layout_view["created"]+" ) "),updated:eval(" ( "+vm.layout_view["updated"]+" ) "),methods:vm.layout_view["methods"]}):null!==vm.template_default&&void 0!==vm.template_default&&"undefined"!==vm.template_default&&vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.template_default["template"],data:eval(" ( "+vm.template_default["data"]+" ) "),created:eval(" ( "+vm.template_default["created"]+" ) "),updated:eval(" ( "+vm.template_default["updated"]+" ) "),methods:vm.template_default["methods"]})}}}});
//# sourceMappingURL=app.e09f1f9c.js.map