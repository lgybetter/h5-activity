webpackJsonp([1],{DICR:function(e,n,t){"use strict";var r=t("lC5x"),a=t.n(r),c=t("J0Oq"),o=t.n(c),s=t("BMa3"),i=t.n(s);n.a={name:"app",created:function(){var e=this;return o()(a.a.mark(function n(){var t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=localStorage.getItem("code"),r=e.$route.query.code,t||r){n.next=6;break}window.open("https://open.weixin.qq.com/connect/qrconnect?appid=wx8bb878c38f43a3ef&redirect_uri="+encodeURIComponent("http://119.29.193.240/#/")+"&response_type=code&scope=snsapi_login&state=state#wechat_redirect"),n.next=9;break;case 6:return!t&&r&&localStorage.setItem("code",r),n.next=9,i.a.request({method:"post",url:"http://119.29.193.240/api/wechat/exchangeToken",data:{code:r}});case 9:case"end":return n.stop()}},n,e)}))()}}},Es8E:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c={render:r,staticRenderFns:a};n.a=c},L8Y5:function(e,n,t){"use strict";var r=t("ynm2"),a=t("46Yf"),c=a(null,r.a,!1,null,null,null);n.a=c.exports},M93x:function(e,n,t){"use strict";function r(e){t("zbKw")}var a=t("DICR"),c=t("Es8E"),o=t("46Yf"),s=r,i=o(a.a,c.a,!1,s,null,null);n.a=i.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("BQQs"),a=t("M93x"),c=t("YaEn");r.a.config.productionTip=!1,new r.a({el:"#app",router:c.a,render:function(e){return e(a.a)}})},YaEn:function(e,n,t){"use strict";var r=t("BQQs"),a=t("cigS"),c=t("L8Y5");r.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"index",component:c.a}]})},ynm2:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("\n  微信测试\n")])},a=[],c={render:r,staticRenderFns:a};n.a=c},zbKw:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.1f1a464c235933054c96.js.map