(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{379:function(t,e,r){"use strict";r.r(e);var n={methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},o=r(80),l=r(109),c=r.n(l),d=r(485),v=r(486),f=r(362),m=r(475),h=r(377),_=r(476),x=r(392),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{staticClass:"el",style:{padding:t.$vuetify.breakpoint.mdAndUp?"0px 100px":""},attrs:{color:"surface",height:"80",app:""}},[r("v-toolbar-title",{staticClass:"text-md-h5 font-weight-bold pointer",on:{click:function(e){return t.$router.push("/")}}},[t._v("\n        YouCommerce\n    ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",nuxt:"",to:"/products"}},[r("v-icon",{attrs:{size:"20"}},[t._v("mdi-store-outline")])],1),t._v(" "),t.$store.state.cart.cart.length>0?r("v-badge",{attrs:{overlap:"",content:t.$store.state.cart.cart.length}},[r("v-btn",{attrs:{icon:"",nuxt:"",to:"/cart"}},[r("v-icon",{attrs:{size:"20"}},[t._v("mdi-cart-outline")])],1)],1):r("v-btn",{attrs:{icon:"",nuxt:"",to:"/cart"}},[r("v-icon",{attrs:{size:"20"}},[t._v("mdi-cart-outline")])],1),t._v(" "),r("v-divider",{staticClass:"mx-md-5 mx-2",attrs:{vertical:""}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.toggleTheme}},[r("v-icon",{attrs:{size:"20"}},[t._v("mdi mdi-brightness-7")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VBadge:v.a,VBtn:f.a,VDivider:m.a,VIcon:h.a,VSpacer:_.a,VToolbarTitle:x.a})},480:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(63),r(15),{mixins:[{data:function(){return{editorOption:{theme:"snow",modules:{toolbar:[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],[{size:["small",!1,"large","huge"]}],[{align:[]}],["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}]]}},rules:{file_limit:function(t){return!t||t.size<1e7||"File should be less than 10MB."},num_only:function(t){return/^[0-9]+$/g.test(t)||"Numbers Only."},money_only:function(t){return/^[0-9]+$|^[0-9]+(.[0-9]{1,2}$)/g.test(t)||"Enter a valid amount"},password_length:function(t){return!!t&&t.length>=8||"Password must be at least 8 characters"},username:function(t){return(t||"").indexOf(" ")<0||"No spaces are allowed"},userreg:function(t){return/^[a-z0-9_]{2,}[a-z_]+[\d]*$/.test(t)||"No captial letters. No special chars. Only Underscore"},required:function(t){return!!t||"Required."},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Invalid e-mail."}}}}}],data:function(){return{email:null,name:null,phone:null,address:null,city:null,country:null,cc:"424242424242",expdate:"06/15",cvv:"123"}},methods:{process:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$swal({title:"Proceessing your order",icon:"info",allowEscapeKey:!1,allowOutsideClick:!1,timer:3e3,timerProgressBar:!0,text:"Please Wait",showConfirmButton:!1});case 4:return e.next=6,t.$swal({title:"Order Complete",icon:"success",allowEscapeKey:!1,allowOutsideClick:!1,timer:4e3,timerProgressBar:!0,text:"Thank You So Much ❤",showConfirmButton:!1});case 6:t.$store.commit("cart/ClearCart"),t.$router.push("/");case 8:case"end":return e.stop()}}),e)})))()}}}),l=r(80),c=r(109),d=r.n(c),v=r(362),f=r(368),m=r(371),h=r(2),_=(r(47),r(73),r(194),r(20),r(6),r(19),r(72),r(112),r(16),r(13),r(30),r(31),r(79)),x=r(183),y=r(191);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(_.a)(x.a,Object(y.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:O({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),$=r(369),C=r(479),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Nav"),t._v(" "),r("br"),t._v(" "),0==t.$store.state.cart.cart.length?r("div",{staticClass:"text-center"},[r("p",[t._v("No items just yet. Keep shopping")])]):t._e(),t._v(" "),r("v-container",[t.$store.state.cart.cart.length>0?r("div",{staticClass:"mb-3"},[r("v-btn",{attrs:{nuxt:"",to:"/cart","min-width":"150","min-height":"45",depressed:""}},[t._v("Back")]),t._v(" "),r("v-btn",{attrs:{"min-width":"150","min-height":"45",color:"primary"},on:{click:t.process}},[t._v("Complete")])],1):t._e(),t._v(" "),r("v-form",{ref:"form",staticClass:"mt-10",attrs:{"lazy-validation":""}},[r("p",{staticClass:"font-weight-bold"},[t._v("Personal & Delivery")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],outlined:"",label:"Email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Full Name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{outlined:"",label:"Phone",type:"tel"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Address",type:"text"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"City",type:"text"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Country ",type:"text"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1),t._v(" "),r("p",{staticClass:"font-weight-bold"},[t._v("Credit Card")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Credit Card Number"},model:{value:t.cc,callback:function(e){t.cc=e},expression:"cc"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Exp date"},model:{value:t.expdate,callback:function(e){t.expdate=e},expression:"expdate"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],outlined:"",label:"Security code/CVV"},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Nav:r(379).default}),d()(component,{VBtn:v.a,VCol:f.a,VContainer:m.a,VForm:k,VRow:$.a,VTextField:C.a})}}]);