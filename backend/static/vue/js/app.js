webpackJsonp([1],{0:function(e,s,t){t("rplX"),e.exports=t("NHnr")},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("w/U7"),a=t("7+uW"),r=t("U8jO"),i=t.n(r),o=t("bqTm"),c=t.n(o),u=t("Xxa5"),d=t.n(u),l=t("Gu7T"),m=t.n(l),f=t("Dd8w"),h=t.n(f),v=t("NYxO"),j=t("PJh5"),g=t.n(j),_={name:"Main",data:function(){return{busy:!1,systemFeeds:[{id:"all",name:"All messages",words:"",last_retrieve:"",new_messages:0},{id:"favorites",name:"Favorites",words:"",last_retrieve:"",new_messages:0},{id:"failover",name:"Fail Over",words:"",last_retrieve:"",new_messages:0}]}},methods:h()({},Object(v.b)(["addToFavorites","removeFromFavorites","removeAuthorFromBlacklist"]),{addAuthorToBlacklist:function(e){var s=this;this.$store.dispatch("addAuthorToBlacklist",e).then(function(){s.$redrawVueMasonry()})},setCurrentFeed:function(e){var s=this;this.busy=!0,this.$store.dispatch("setCurrentFeed",e).then(function(){s.busy=!1})},loadMore:function(){var e=this;this.currentFeed&&(this.currentFeed.full_loaded||(this.busy=!0,this.$store.dispatch("loadMessages",{feed:this.currentFeed,offset:this.messages.length}).then(function(){e.busy=!1})))},higligthWords:function(e,s){var t=e;if(t=t.replace(new RegExp("(https?://[\\S]+)(?![^<]*>|[^<>]*</)","g"),function(e){return'<a href="'+e+'">'+e+"</a>"}),!s)return t;for(var n=[].concat(m()(d.a.mark(function e(s){var t,n,a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=s.split("\r\n"),n=0;case 2:if(!(n<t.length)){e.next=14;break}a=t[n].split(" "),r=0;case 5:if(!(r<a.length)){e.next=11;break}return e.next=8,a[r];case 8:r+=1,e.next=5;break;case 11:n+=1,e.next=2;break;case 14:case"end":return e.stop()}},e,this)})(s))),a=0;a<n.length;a+=1){var r=n[a];t=t.replace(new RegExp("("+r+")(?![^<]*>|[^<>]*</)","gi"),function(e){return'<span class="highlighted_word">'+e+"</span>"})}return t},prettyDate:function(e){return g.a.parseZone(e).format("DD.MM.YYYY, HH:mm:ss")}}),computed:h()({},Object(v.c)(["feedList","currentFeed","messages"])),created:function(){this.$store.dispatch("getFeedList").then(function(){}),this.setCurrentFeed(this.systemFeeds[0])}},p={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"layout"},[t("div",{staticClass:"layout__sidebar feed-list"},[e._m(0),e._v(" "),e._l(e.feedList,function(s,n){return t("div",{key:n,staticClass:"feed-list__feed",on:{click:function(t){e.setCurrentFeed(s)}}},[e._v("\n      "+e._s(s.name)+"\n      "),t("span",{directives:[{name:"show",rawName:"v-show",value:s.new_messages,expression:"feed.new_messages"}],staticClass:"feed-list__feed-counter"},[e._v("\n          "+e._s(s.new_messages)+"\n        ")])])}),e._v(" "),e._l(e.systemFeeds,function(s,n){return t("div",{key:s.name,staticClass:"feed-list__feed",on:{click:function(t){e.setCurrentFeed(s)}}},[e._v("\n      "+e._s(s.name)+"\n      "),t("span",{directives:[{name:"show",rawName:"v-show",value:s.new_messages,expression:"feed.new_messages"}],staticClass:"feed-list__feed-counter"},[e._v("\n          "+e._s(s.new_messages)+"\n        ")])])})],2),e._v(" "),t("div",{staticClass:"layout__content"},[t("div",{staticClass:"header"},[e.currentFeed?t("span",[e._v(e._s(e.currentFeed.name))]):e._e()]),e._v(" "),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"},{name:"masonry",rawName:"v-masonry"}],staticClass:"messages",class:e.busy?"messages--loading":"",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10","transition-duration":"0.3s","item-selector":".messages__message"}},[e._m(1),e._v(" "),e._l(e.messages,function(s,n){return t("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:s.id,staticClass:"messages__message message"},[t("div",{staticClass:"message__header header",class:{"message__header--blacklist":s.blacklist,"message__header--favorites":s.favorites}},[t("div",[t("span",[t("span",{directives:[{name:"show",rawName:"v-show",value:s.new,expression:"message.new"}],staticClass:"message__new"}),e._v(e._s(s.source.link))]),e._v(" "),s.username?t("span",[e._v(" | ")]):e._e(),e._v(" "),s.username?t("span",[e._v(e._s(s.username))]):e._e()]),e._v(" "),t("div",[t("span",[e._v(e._s(e.prettyDate(s.date)))]),e._v(" "),t("div",{staticClass:"dropdown"},[t("span",{staticClass:"arrow-down"}),e._v(" "),t("div",{staticClass:"dropdown-content"},[s.favorites?e._e():t("div",{staticClass:"dropdown-link",on:{click:function(t){e.addToFavorites(s)}}},[e._v("\n                  Add to favorites\n                ")]),e._v(" "),s.favorites?t("div",{staticClass:"dropdown-link",on:{click:function(t){e.removeFromFavorites(s)}}},[e._v("\n                  Remove from favorites\n                ")]):e._e(),e._v(" "),s.username&&!s.blacklist?t("div",{staticClass:"dropdown-link",on:{click:function(t){e.addAuthorToBlacklist(s)}}},[e._v("\n                  Block author\n                ")]):e._e(),e._v(" "),s.blacklist?t("div",{staticClass:"dropdown-link",on:{click:function(t){e.removeAuthorFromBlacklist(s)}}},[e._v("\n                  Unlock author\n                ")]):e._e()])])])]),e._v(" "),s.duplicates_count?t("div",{staticClass:"message__duplicates"},[e._v("\n          "+e._s(s.duplicates_count)+" duplicate messages in\n          "),s.duplicates_sources_count?t("span",[e._v(e._s(s.duplicates_sources_count)+" sources")]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"message__text",domProps:{innerHTML:e._s(e.higligthWords(s.text,e.currentFeed.words))}})])})],2)])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"header"},[s("a",{attrs:{href:"/telegram_watcher/feed/"}},[this._v("Feed list")]),this._v(" "),s("a",{staticClass:"addlink",attrs:{href:"/telegram_watcher/feed/add/"}},[this._v("New feed")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"loader"},[s("div",{staticClass:"loader__spinner"})])}]};var w={name:"App",components:{Main:t("VU/8")(_,p,!1,function(e){t("REhy")},null,null).exports}},F={render:function(){var e=this.$createElement;return(this._self._c||e)("Main")},staticRenderFns:[]};var k=t("VU/8")(w,F,!1,function(e){t("zbAH")},null,null).exports,C=function(e){return fetch("api/feed_message/blacklist/"+e+"/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},b=function(e){return fetch("api/feed_message/blacklist/"+e+"/remove",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},y=function(e){return fetch("/api/feed_message/favorites/"+e+"/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},E=function(e){return fetch("/api/feed_message/favorites/"+e+"/remove",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},z=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return fetch("/api/feed_message/"+e+"/?offset="+s,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},T=function(){return fetch("/api/feed",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},x={state:{feedList:[],currentFeed:null,messages:[],shownDuplicates:[]},getters:{feedList:function(e){return e.feedList},currentFeed:function(e){return e.currentFeed},messages:function(e){return e.messages},shownDuplicates:function(e){return e.shownDuplicates}},actions:{removeFromFavorites:function(e,s){return(0,e.commit)("toggleMessageFavoritesFlag",s),E(s.id)},addToFavorites:function(e,s){return(0,e.commit)("toggleMessageFavoritesFlag",s),y(s.id)},addAuthorToBlacklist:function(e,s){return(0,e.commit)("addAuthorToBlacklist",s),C(s.id).then()},removeAuthorFromBlacklist:function(e,s){return(0,e.commit)("removeAuthorFromBlacklist",s),b(s.id).then()},getFeedList:function(e){var s=e.commit;return T().then(function(e){return s("setFeedList",e.results)})},setCurrentFeed:function(e,s){var t=e.commit;return t("setCurrentFeed",s),t("clearMessages",[]),z(s.id).then(function(e){return t("addMessages",e)})},loadMessages:function(e,s){var t=e.commit;return z(s.feed.id,s.offset+s.feed.new_messages).then(function(e){return t("addMessages",e)})}},mutations:{setFeedList:function(e,s){e.feedList=s},setCurrentFeed:function(e,s){e.currentFeed=s,e.currentFeed.full_loaded=!1,e.currentFeed.news=e.currentFeed.new_messages,e.currentFeed.new_messages=0},clearMessages:function(e){e.messages=[],e.shownDuplicates=[]},addMessages:function(e,s){if(e.currentFeed){null===s.next&&(e.currentFeed.full_loaded=!0);for(var t=e.messages.length,n=t,a=0;a<s.results.length;a+=1)s.results[a].duplicate_id>0?e.shownDuplicates.includes(s.results[a].duplicate_id)||(e.shownDuplicates.push(s.results[a].duplicate_id),e.messages.push(s.results[a])):e.messages.push(s.results[a]);for(;n<e.messages.length&&n<t+e.currentFeed.news;n+=1)e.messages[n].new=!0;e.currentFeed.news-=n}},addAuthorToBlacklist:function(e,s){if(e.currentFeed&&e.currentFeed.id===parseInt(e.currentFeed.id,10))for(var t=0;t<e.messages.length;t+=1)e.messages[t].username===s.username&&(e.messages.splice(t,1),t-=1);else s.blacklist=!0},removeAuthorFromBlacklist:function(e,s){for(var t=0;t<e.messages.length;t+=1)e.messages[t].username===s.username&&(e.messages[t].blacklist=!1,t-=1)},toggleMessageFavoritesFlag:function(e,s){s.favorites=!s.favorites}}};a.a.use(v.a);var O=new v.a.Store({state:{socket:{isConnected:!1,reconnectError:!1}},actions:{feedNewMessage:function(e,s){(0,e.commit)("incrementNewMessage",s.feed)}},mutations:{incrementNewMessage:function(e,s){for(var t=0;t<e.feed.feedList.length;t+=1){var n=e.feed.feedList[t];n.id===s&&(n.new_messages+=1)}},SOCKET_ONOPEN:function(e,s){e.socket.isConnected=!0},SOCKET_ONCLOSE:function(e,s){e.socket.isConnected=!1},SOCKET_ONERROR:function(e,s){},SOCKET_ONMESSAGE:function(e,s){},SOCKET_RECONNECT:function(e,s){},SOCKET_RECONNECT_ERROR:function(e){e.socket.reconnectError=!0}},modules:{feed:x},strict:!0});a.a.use(i.a,"ws://"+window.location.host+"/ws/",{store:O,format:"json"}),a.a.use(c.a),a.a.use(n.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:O,components:{App:k},template:"<App/>"})},REhy:function(e,s){},uslO:function(e,s,t){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return t(r(e))}function r(e){var s=n[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="uslO"},zbAH:function(e,s){}},[0]);
//# sourceMappingURL=app.js.map