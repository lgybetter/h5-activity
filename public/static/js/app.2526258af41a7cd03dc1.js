webpackJsonp([1],{"+KzP":function(e,t){},"0q52":function(e,t,a){"use strict";var n=a("lC5x"),o=a.n(n),c=a("J0Oq"),s=a.n(c),r=a("BMa3"),i=a.n(r),u=a("QmSG"),l=a("WOFH"),d=a.n(l);t.a={data:function(){return{showToAuth:!1,authUrl:"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+u.a.appId+"&redirect_uri="+encodeURIComponent(u.a.redirectUrl)+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect",localId:"",showText:""}},methods:{translateVoice:function(){var e=this;d.a.translateVoice({localId:this.localId,isShowProgressTips:0,success:function(t){e.showText=t.translateResult}})},startRecord:function(){var e=this;d.a.startRecord(),setTimeout(function(){e.stopRecord()},5e3)},stopRecord:function(){var e=this;d.a.stopRecord({success:function(t){e.localId=t.localId}})},playVoice:function(){d.a.playVoice({localId:this.localId})},pauseVoice:function(){d.a.pauseVoice({localId:this.localId})},stopVoice:function(){d.a.stopVoice({localId:this.localId})},uploadVoice:function(){d.a.uploadVoice({localId:this.localId,isShowProgressTips:0,success:function(e){var t=e.serverId;i.a.request({url:u.a.baseUrl+"/api/auth/audio",method:"post",data:{mediaId:t}})}})}},mounted:function(){var e=this;return s()(o.a.mark(function t(){var a,n,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.$route.query.code,(n=window.localStorage.getItem("openid"))||a){t.next=6;break}e.showToAuth=!0,t.next=20;break;case 6:if(!a||n){t.next=19;break}return e.showToAuth=!1,t.prev=8,t.next=11,i.a.request({method:"post",url:u.a.baseUrl+"/api/wechat/exchangeToken",data:{code:a}});case 11:c=t.sent,window.localStorage.setItem("openid",c.data.data.openid),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(8);case 17:t.next=20;break;case 19:e.showToAuth=!1;case 20:case"end":return t.stop()}},t,e,[[8,15]])}))()}}},"4Frp":function(e,t){},DICR:function(e,t,a){"use strict";var n=a("lC5x"),o=a.n(n),c=a("J0Oq"),s=a.n(c),r=a("WOFH"),i=a.n(r),u=a("QmSG"),l=a("BMa3"),d=a.n(l);t.a={name:"app",mounted:function(){var e=this;return s()(o.a.mark(function t(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.request({url:u.a.baseUrl+"/api/wechat/getJSConfig",method:"get",params:{url:window.location.href}});case 2:a=e.sent,i.a.config(a.data.data),i.a.ready(function(){console.log("config success")}),i.a.error(function(e){console.log("wx jsapi err:",e)}),i.a.onMenuShareTimeline({title:"美莱周年庆",link:u.a.redirectUrl+"?type=share",imgUrl:"http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg",success:function(){console.log("分享成功")},cancel:function(){console.log("分享失败")}}),i.a.onMenuShareAppMessage({title:"美莱周年庆",desc:"唱歌",link:u.a.redirectUrl+"?type=share",imgUrl:"http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg",success:function(){console.log("分享成功")},cancel:function(){console.log("分享失败")}});case 8:case"end":return e.stop()}},t,e)}))()}}},Es8E:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],c={render:n,staticRenderFns:o};t.a=c},L8Y5:function(e,t,a){"use strict";function n(e){a("4Frp")}var o=a("0q52"),c=a("hegJ"),s=a("46Yf"),r=n,i=s(o.a,c.a,!1,r,"data-v-ab3b5d52",null);t.a=i.exports},Lu2J:function(e,t){},M93x:function(e,t,a){"use strict";function n(e){a("Lu2J")}var o=a("DICR"),c=a("Es8E"),s=a("46Yf"),r=n,i=s(o.a,c.a,!1,r,null,null);t.a=i.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("BQQs"),o=a("M93x"),c=a("YaEn"),s=a("+KzP");a.n(s);n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,render:function(e){return e(o.a)}})},QmSG:function(e,t,a){"use strict";t.a={appId:"wxed73c69d3bdf1dce",redirectUrl:"http://119.29.193.240",baseUrl:"http://119.29.193.240"}},YaEn:function(e,t,a){"use strict";var n=a("BQQs"),o=a("cigS"),c=a("L8Y5");n.a.use(o.a),t.a=new o.a({mode:"history",routes:[{path:"/",name:"index",component:c.a}]})},hegJ:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[e._v("\n  微信测试 "+e._s(e.showText)+"\n  "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.showToAuth,expression:"showToAuth"}],staticStyle:{"font-size":"20px"},attrs:{href:e.authUrl}},[e._v("跳转授权")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.startRecord}},[e._v("开始录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.stopRecord}},[e._v("停止录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.playVoice}},[e._v("播放录音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.pauseVoice}},[e._v("暂停播放")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.stopVoice}},[e._v("停止播放")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.translateVoice}},[e._v("识别语音")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.uploadVoice}},[e._v("上传")])])},o=[],c={render:n,staticRenderFns:o};t.a=c}},["NHnr"]);
//# sourceMappingURL=app.2526258af41a7cd03dc1.js.map