webpackJsonp([1],{"+KzP":function(e,t){},"0q52":function(e,t,a){"use strict";var o=a("lC5x"),n=a.n(o),c=a("J0Oq"),s=a.n(c),r=a("BMa3"),i=a.n(r),u=a("QmSG"),l=a("WOFH"),d=a.n(l);t.a={data:function(){return{showToAuth:!1,authUrl:"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+u.a.appId+"&redirect_uri="+encodeURIComponent(u.a.redirectUrl)+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect",localId:""}},methods:{startRecord:function(){console.log("start"),d.a.startRecord()},stopRecord:function(){var e=this;d.a.stopRecord({success:function(t){e.localId=t.localId}})},playVoice:function(){d.a.playVoice({localId:this.localId})},pauseVoice:function(){d.a.pauseVoice({localId:this.localId})},stopVoice:function(){d.a.stopVoice({localId:this.localId})},uploadVoice:function(){d.a.uploadVoice({localId:this.localId,isShowProgressTips:1,success:function(e){var t=e.serverId;i.a.request({url:u.a.baseUrl+"/api/auth/audio",method:"post",data:{mediaId:t}})}})}},mounted:function(){var e=this;return s()(n.a.mark(function t(){var a,o,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.$route.query.code,o=window.localStorage.getItem("openId"),console.log(o,"localstorage"),o||a){t.next=7;break}e.showToAuth=!0,t.next=22;break;case 7:if(!a||o){t.next=21;break}return e.showToAuth=!1,t.prev=9,t.next=12,i.a.request({method:"post",url:u.a.baseUrl+"/api/wechat/exchangeToken",data:{code:a}});case 12:c=t.sent,200===c.data.data.code?window.localStorage.setItem("openId",c.data.data.openId):console.log("验证出错"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),console.log(t.t0);case 19:t.next=22;break;case 21:e.showToAuth=!1;case 22:case"end":return t.stop()}},t,e,[[9,16]])}))()}}},"4Frp":function(e,t){},DICR:function(e,t,a){"use strict";var o=a("lC5x"),n=a.n(o),c=a("J0Oq"),s=a.n(c),r=a("WOFH"),i=a.n(r),u=a("QmSG"),l=a("BMa3"),d=a.n(l);t.a={name:"app",mounted:function(){var e=this;return s()(n.a.mark(function t(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.request({url:u.a.baseUrl+"/api/wechat/getJSConfig",method:"get",params:{url:window.location.href}});case 2:a=e.sent,i.a.config(a.data.data),i.a.ready(function(){console.log("config success")}),i.a.error(function(e){console.log("wx jsapi err:",e)}),i.a.onMenuShareTimeline({title:"美莱周年庆",link:u.a.redirectUrl+"?type=share",imgUrl:"http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg",success:function(){console.log("分享成功")},cancel:function(){console.log("分享失败")}}),i.a.onMenuShareAppMessage({title:"美莱周年庆",desc:"唱歌",link:u.a.redirectUrl+"?type=share",imgUrl:"http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg",success:function(){console.log("分享成功")},cancel:function(){console.log("分享失败")}});case 8:case"end":return e.stop()}},t,e)}))()}}},Es8E:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],c={render:o,staticRenderFns:n};t.a=c},L8Y5:function(e,t,a){"use strict";function o(e){a("4Frp")}var n=a("0q52"),c=a("hegJ"),s=a("46Yf"),r=o,i=s(n.a,c.a,!1,r,"data-v-ab3b5d52",null);t.a=i.exports},Lu2J:function(e,t){},M93x:function(e,t,a){"use strict";function o(e){a("Lu2J")}var n=a("DICR"),c=a("Es8E"),s=a("46Yf"),r=o,i=s(n.a,c.a,!1,r,null,null);t.a=i.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("BQQs"),n=a("M93x"),c=a("YaEn"),s=a("+KzP");a.n(s);o.a.config.productionTip=!1,new o.a({el:"#app",router:c.a,render:function(e){return e(n.a)}})},QmSG:function(e,t,a){"use strict";t.a={appId:"wxed73c69d3bdf1dce",redirectUrl:"http://119.29.193.240",baseUrl:"http://119.29.193.240"}},YaEn:function(e,t,a){"use strict";var o=a("BQQs"),n=a("cigS"),c=a("L8Y5");o.a.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"index",component:c.a}]})},hegJ:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[e._v("\n  微信测试\n  "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.showToAuth,expression:"showToAuth"}],staticStyle:{"font-size":"20px"},attrs:{href:e.authUrl}},[e._v("跳转授权")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.startRecord}},[e._v("开始录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.stopRecord}},[e._v("停止录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.playVoice}},[e._v("播放录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.pauseVoice}},[e._v("暂停播放")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.stopVoice}},[e._v("停止播放")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.uploadVoice}},[e._v("上传")])])},n=[],c={render:o,staticRenderFns:n};t.a=c}},["NHnr"]);
//# sourceMappingURL=app.f74e963c479aad172498.js.map