(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4891],{84891:function(e,t,n){"use strict";n.r(t);n(35666);var r=n(32112);n(44431),n(5942),n(51206);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.heading,n=e.description,o=e.icon,c=e.html,a=e.button;return function(){var e=u(regeneratorRuntime.mark((function e(s){var l,f,p,w,h,b,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=s.network,f=s.appNetworkId,p=s.walletSelect,w=s.walletCheck,h=s.exit,b=s.stateSyncStatus,y=s.stateStore,null!==l){e.next=5;break}if(!b.network){e.next=5;break}return e.next=5,new Promise((function(e){b.network&&b.network.then(e),setTimeout((function(){null===l&&e(void 0)}),500)}));case 5:if(y.network.get()==f){e.next=7;break}return e.abrupt("return",{heading:t||"You Must Change Networks",description:n||"We've detected that you need to switch your wallet's network from <b>".concat((0,r.n)(l),"</b> to <b>").concat((0,r.n)(f),'</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:a||{onclick:function(){var e=u(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1,{switchingWallets:!0}),e.next=3,p();case 3:if(t=e.sent,e.t0=t,!e.t0){e.next=9;break}return e.next=8,w();case 8:e.t0=e.sent;case 9:n=e.t0,r.a.update((function(e){return i(i({},e),{},{switchingWallets:!1,walletCheckCompleted:n})}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),text:"Switch Wallet"},html:c,icon:o||r.f});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);