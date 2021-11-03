(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6950],{36950:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var t,a,u=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(u.push(t.value),!r||u.length!==r);o=!0);}catch(s){i=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return u}(e,r)||u(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){if(e){if("string"===typeof e)return o(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,r):void 0}}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r,n,t,a,u,o){try{var i=e[u](o),s=i.value}catch(c){return void n(c)}i.done?r(s):Promise.resolve(s).then(t,a)}function s(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var u=e.apply(r,n);function o(e){i(u,t,a,o,s,"next",e)}function s(e){i(u,t,a,o,s,"throw",e)}o(void 0)}))}}n.r(r);function c(e){return l.apply(this,arguments)}function l(){return(l=s(regeneratorRuntime.mark((function e(r){var u,o,i,c,l,p,f,h,d,m,g,w,v,y,b,x,k,P,R,A,E,S,L,C,T,M,I,z,N,U,B,_,j,O,V,D,K,W,Z,G,H,$,q,F,J,Q,X,Y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y=function(){return(Y=s(regeneratorRuntime.mark((function e(r){var n,u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==E.size){e.next=3;break}return e.next=3,U();case 3:return n=t(a(E.entries())[0],2),u=n[0],o=n[1],e.abrupt("return",new Promise((function(e,n){d.ethereumSignMessage({path:o,message:i.stripHexPrefix(r.data),hex:!0}).then((function(r){if(r.success){r.payload.address!==i.toChecksumAddress(u)&&n(new Error("signature doesnt match the right address"));var t="0x".concat(r.payload.signature);e(t)}else n(new Error(r.payload&&r.payload.error||"There was an error signing a message"))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},X=function(e){return Y.apply(this,arguments)},Q=function(){return(Q=s(regeneratorRuntime.mark((function e(r){var n,t,u,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==E.size){e.next=3;break}return e.next=3,U();case 3:return n=a(E.values())[0],t=new o.Transaction(r,{chain:P(v)}),e.next=7,F(n,r);case 7:if((u=e.sent).success){e.next=10;break}throw new Error(u.payload.error);case 10:return i=u.payload,t.v=i.v,t.r=i.r,t.s=i.s,e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)},J=function(e){return Q.apply(this,arguments)},F=function(e,r){var n=r.nonce,t=r.gasPrice,a=r.gas,u=r.to,o=r.value,i=r.data;return d.ethereumSignTransaction({path:e,transaction:{nonce:n,gasPrice:t,gasLimit:a,to:u,value:o||"",data:i||"",chainId:v}})},q=function(e){return new Promise((function(r,n){T.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&n(e);var a=t&&t.result;r(null!=a?new k(a).toString(10):null)}))}))},$=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=s(regeneratorRuntime.mark((function r(n){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q(e);case 2:t=r.sent,n({address:e,balance:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},H=function(){return(H=s(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return",[void 0]);case 2:if(!(E.size>0)||r){e.next=4;break}return e.abrupt("return",j());case 4:if(""===A&&(A=w),C){e.next=15;break}return e.prev=6,e.next=9,V();case 9:C=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),e.t0;case 15:return f(C,E.size).forEach((function(e){var r=e.dPath,n=e.address;E.set(n,r)})),e.abrupt("return",j());case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)},G=function(e){return H.apply(this,arguments)},Z=function(){return(Z=s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(!0);case 2:return r=e.sent,e.abrupt("return",$(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},W=function(){return Z.apply(this,arguments)},K=function(){return S?j()[0]:void 0},D=function(){return(D=s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:return e.prev=2,e.next=5,d.getPublicKey({path:A,coin:"eth"});case 5:if((r=e.sent).success){e.next=8;break}throw new Error(r.payload.error);case 8:return C={publicKey:r.payload.publicKey,chainCode:r.payload.chainCode,path:r.payload.serializedPath},e.abrupt("return",C);case 12:throw e.prev=12,e.t0=e.catch(2),new Error("There was an error accessing your Trezor accounts.");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)},V=function(){return D.apply(this,arguments)},O=function(e){var r=a(E.entries()),n=r.findIndex((function(r){return t(r,1)[0]===e}));r.unshift(r.splice(n,1)[0]),E=new Map(r)},j=function(){return Array.from(E.keys())},_=function(){return(_=s(regeneratorRuntime.mark((function e(r){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Unable to derive address from path ".concat(r),e.prev=1,e.next=4,d.ethereumGetAddress({path:r,showOnTrezor:!1});case 4:if((t=e.sent).success){e.next=7;break}throw new Error(n);case 7:return e.abrupt("return",t.payload.address);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(n);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)},B=function(e){return _.apply(this,arguments)},U=function(){return S=!0,G()},N=function(){return L},z=function(){return(z=s(regeneratorRuntime.mark((function e(r,n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==A&&(E=new Map),!n){e.next=17;break}return e.prev=4,e.next=7,B(r);case 7:return t=e.sent,E.set(t,r),A=r,L=!0,e.abrupt("return",!0);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("There was a problem deriving an address from path ".concat(r));case 17:return L=!1,A=r,e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)},I=function(e,r){return z.apply(this,arguments)},M=function(){A="",E=new Map,S=!1,T.stop()},e.next=25,Promise.all([n.e(9351),n.e(8875)]).then(n.t.bind(n,8875,23));case 25:return u=e.sent,e.next=28,Promise.all([n.e(9351),n.e(5982),n.e(5943),n.e(9677)]).then(n.bind(n,15943));case 28:return o=e.sent,e.next=31,Promise.all([n.e(9351),n.e(5682),n.e(8543)]).then(n.t.bind(n,65682,23));case 31:return i=e.sent,e.next=34,Promise.all([n.e(9351),n.e(9835),n.e(351),n.e(8785)]).then(n.bind(n,90351));case 34:return c=e.sent,l=c.default,e.next=38,Promise.all([n.e(9351),n.e(5682),n.e(9840),n.e(1183)]).then(n.bind(n,9321));case 38:return p=e.sent,f=p.generateAddresses,h=p.isValidPath,d=u.default,m=u.DEVICE_EVENT,g=u.DEVICE,w="m/44'/60'/0'/0",v=r.networkId,y=r.email,b=r.appUrl,x=r.rpcUrl,k=r.BigNumber,P=r.networkName,R=r.resetWalletState,A="",E=new Map,S=!1,L=!1,d.manifest({email:y,appUrl:b}),T=l({getAccounts:function(e){G().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){J(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){X(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){X(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){X(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){X(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:x}),d.on(m,(function(e){e.type===g.DISCONNECT&&(T.stop(),R({disconnected:!0,walletName:"Trezor"}))})),T.setPath=I,T.dPath=A,T.enable=U,T.setPrimaryAccount=O,T.getPrimaryAddress=K,T.getAccounts=G,T.getMoreAccounts=W,T.getBalance=q,T.getBalances=$,T.send=T.sendAsync,T.disconnect=M,T.isCustomPath=N,e.abrupt("return",T);case 64:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.default=function(e){var r=e.rpcUrl,n=e.networkId,t=e.email,a=e.appUrl,u=e.preferred,o=e.label,i=e.iconSrc;return{name:o||"Trezor",svg:e.svg||'\n\t<svg width="40px" height="40px" viewBox="0 0 114 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<path d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z" id="Trezor-logo" fill="currentColor"></path>\n\t\t</g>\n\t</svg>\n',iconSrc:i,wallet:function(){var e=s(regeneratorRuntime.mark((function e(u){var o,i,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.BigNumber,i=u.networkName,l=u.resetWalletState,e.next=3,c({rpcUrl:r,networkId:n,email:t,appUrl:a,BigNumber:o,networkName:i,resetWalletState:l});case 3:return p=e.sent,e.abrupt("return",{provider:p,interface:{name:"Trezor",connect:p.enable,disconnect:p.disconnect,address:{get:function(){var e=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.getPrimaryAddress(),e.abrupt("return",r&&p.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:u}}}}]);