(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6366,3450,6392],{16045:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(82684);function o(t){var e=t.resource,n=t.stale,o=t.updateLocalContent,i=t.updateServerContent,u=(0,r.useRef)(null),l=e.main,s=e.original,a=(0,r.useCallback)((function(t,e){var n;i(t,l,{path:(null==u||null===(n=u.current)||void 0===n?void 0:n.value)||(null==l?void 0:l.path)},e)}),[l,i]),c=(0,r.useCallback)((function(t){return i(t,l,l)}),[l,i]),d=(0,r.useCallback)((function(){return o(s)}),[s,o]);return{inputRef:u,main:l,original:s,overrideLocalContentFromServer:d,overrideServerContentFromLocal:c,saveCurrentContent:a,stale:n}}},32525:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var r=n(77837),o=n(82394),i=n(38860),u=n.n(i),l=n(82684),s=n(51774),a=n.n(s),c=n(16045),d=n(16831),v=n(46042),p=n(23450),h=n(28598);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=a()((function(){return n.e(9856).then(n.bind(n,79856))}),{loadableGenerated:{webpack:function(){return[79856]}}}),b=a()((function(){return n.e(1572).then(n.bind(n,61572))}),{ssr:!1,loadableGenerated:{webpack:function(){return[61572]}}});function j(t){var e=(0,l.useRef)(null),o=(0,l.useRef)(null),i=t.app,s=t.editor,a=t.onMountEditor,f=t.skipInitialFetch,j=t.useToolbars;null!=i&&i.uuid||console.error("App UUID is required.");var O,y=(0,l.useMemo)((function(){var t;return null==i||null===(t=i.options)||void 0===t?void 0:t.file}),[i]),_=(0,l.useMemo)((function(){return(0,d.WO)(null==y?void 0:y.path)||{}}),[y]),x=_.client,M=_.server;null===e.current&&(e.current=null==x||null===(O=x.file)||void 0===O?void 0:O.content);var C=(0,l.useState)(m(m({},y),(null==x?void 0:x.file)||{})),R=C[0],w=C[1],S=(0,l.useState)(null==M?void 0:M.file),E=S[0],L=S[1],P=(0,l.useState)((0,d._T)(null==y?void 0:y.path)),D=P[0],k=P[1],Z=(0,l.useRef)(null==x?void 0:x.file),N=(0,l.useRef)(0);function T(){var t,e;return null==o||null===(t=o.current)||void 0===t||null===(e=t.getModel())||void 0===e?void 0:e.getValue()}function U(){var t;return(null==o||null===(t=o.current)||void 0===t?void 0:t.getModel()).uri.path}function A(){(0,d.SX)({client:{content:T(),path:U()}})}function I(t){return V.apply(this,arguments)}function V(){return(V=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p.e.editor.app&&console.log("updateLocalContent",e),e){t.next=4;break}return p.e.editor.app&&console.log("No item to update.",e),t.abrupt("return");case 4:if(null==o||!o.current){t.next=8;break}r=e.content,i=void 0,null==o||null===(i=o.current)||void 0===i||i.setValue(r),A(),t.next=10;break;case 8:return t.next=10,n.e(3528).then(n.bind(n,3528)).then((function(t){t.Manager.setValue(e)}));case 10:(0,d.SX)({client:e,server:e}),w(e),k((0,d._T)(e.path));case 13:case"end":return t.stop()}var r,i}),t)})))).apply(this,arguments)}var F=(0,v.Tu)({resource:"browser_items"},{handlers:{detail:{onSuccess:function(t){L(t);var n=!1;if(Z.current?(0,d.SX)({server:t}):(I(t),n=!0),null!=x&&x.file||w(t),t){var r,i;if(null===(null==e?void 0:e.current))e.current=t.content,null==o||null===(r=o.current)||void 0===r||null===(i=r.setValue)||void 0===i||i.call(r,e.current);!n&&k((0,d._T)(t.path))}N.current+=1}},update:{onSuccess:function(t){if((0,d.SX)({server:t}),w(t),t){var n,r;if(null===(null==e?void 0:e.current))e.current=t.content,null==o||null===(n=o.current)||void 0===n||null===(r=n.setValue)||void 0===r||r.call(n,e.current);k((0,d._T)(t.path))}N.current+=1}}}});function X(t,e,n,r){F.update.mutate(m({event:t,id:e.path,payload:{content:(null==n?void 0:n.content)||T(),path:(null==n?void 0:n.path)||e.path}},r))}(0,l.useEffect)((function(){var t=null==y?void 0:y.path;0===N.current&&t&&!f&&F.detail.mutate({id:t})}),[x,y,f]);var G=(0,l.useMemo)((function(){var t;return((null==Z?void 0:Z.current)||(null==R?void 0:R.content)||N.current>=1)&&(0,h.jsx)(b,m(m({},s),{},{configurations:null==i||null===(t=i.options)||void 0===t?void 0:t.configurations,eventListeners:m(m({},null==s?void 0:s.eventListeners),{},{onDidChangeModelContent:function(t){var e,n;A(),null==s||null===(e=s.eventListeners)||void 0===e||null===(n=e.onDidChangeModelContent)||void 0===n||n.call(e,t)}}),onMountEditor:function(t){o.current=t,a&&(null==a||a(t))},persistManagerOnUnmount:!0,persistResourceOnUnmount:null==s?void 0:s.persistResourceOnUnmount,resource:{main:R},uuid:null==i?void 0:i.uuid}))}),[i,R,s,a]),K=(0,c.Z)(m(m({},t),{},{resource:{main:R,original:E},stale:D,updateLocalContent:I,updateServerContent:X})),W=K.inputRef,B=K.overrideLocalContentFromServer,z=K.saveCurrentContent,Y=(0,l.useMemo)((function(){return!j&&(0,h.jsx)(g,m(m({},t),{},{loading:F.update.isLoading,resource:{main:R,original:E},stale:D,updateLocalContent:I,updateServerContent:X}))}),[F.update.isLoading,R,E,t,D,j]);return{editor:{getValue:T},main:G,mutate:F,toolbars:j?{inputRef:W,main:R,original:E,overrideLocalContentFromServer:B,overrideServerContentFromLocal:function(t){X(t,R,{content:T(),path:U()})},saveCurrentContent:z,stale:D}:{top:Y}}}},16831:function(t,e,n){"use strict";n.d(e,{SX:function(){return d},WO:function(){return c},_T:function(){return a}});var r=n(82394),o=n(53808);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l="materia-ide";function s(t){return"".concat(l,"-").concat(t)}function a(t){var e,n,r=(0,o.U2)(s(t))||{},i=r.client,u=r.server;return(null==i||null===(e=i.file)||void 0===e?void 0:e.content)!==(null==u||null===(n=u.file)||void 0===n?void 0:n.content)}function c(t){return(0,o.U2)(s(t))}function d(t){var e,n,r,i,l,a,c,d,v,p,h=t.client,f=t.server,m=s((null==h?void 0:h.path)||(null==f?void 0:f.path)),g=Number(new Date),b=(0,o.U2)(m),j=!b;(b=b||{},h)&&(b.client=u(u({},(null===(e=b)||void 0===e?void 0:e.client)||{}),{},{cachedAt:j?g:null===(n=b)||void 0===n||null===(r=n.client)||void 0===r?void 0:r.cachedAt,file:u(u({},(null===(i=b)||void 0===i||null===(l=i.client)||void 0===l?void 0:l.file)||{}),h),updatedAt:g}));f&&(b.server=u(u({},(null===(a=b)||void 0===a?void 0:a.server)||{}),{},{cachedAt:j?g:null===(c=b)||void 0===c||null===(d=c.server)||void 0===d?void 0:d.cachedAt,file:u(u({},(null===(v=b)||void 0===v||null===(p=v.server)||void 0===p?void 0:p.file)||{}),f),updatedAt:g}));return(0,o.t8)(m,b),b}},23450:function(t,e,n){"use strict";n.d(e,{e:function(){return r}});var r={appManager:!1,apps:!1,codeExecution:{manager:!1,node:!1,output:!1,outputManager:!1},dragging:!1,dropping:!1,editor:{app:!1,manager:!1,node:!1},events:!1,header:{navigation:!1},itemManager:!1,keyboard:!1,layout:!1,layoutManager:!1,lines:{manager:!1},node:{block:!1,node:!1},rects:!1,rendering:!1,settings:{manager:!1},state:!1}},46042:function(t,e,n){"use strict";n.d(e,{sp:function(){return w},Tu:function(){return S.T}});var r=n(45795),o=n(89565),i=n.n(o),u=n(82684),l=n(89635),s=n(66878),a=n(63091),c=n(11611),d=n(28160),v=n(36801),p=n.n(v),h=n(28862),f=n(86735),m=n(28598),g=["bottomLeft","bottomRight","right","topLeft","topRight"],b=(0,u.memo)((function(t){var e,n,r,o,u,v,b,j,O,y,_,x,M=t.dismissError,C=t.errorRef,R=(t.retry,(0,f.mp)(g),(null!==(e=null==C||null===(n=C.current)||void 0===n||null===(r=n.response)||void 0===r?void 0:r.data)&&void 0!==e?e:{}).error),w=(null!==(o=null==C||null===(u=C.current)||void 0===u?void 0:u.client)&&void 0!==o?o:{}).error,S=null==R?void 0:R.code,E=null!==(v=null==R?void 0:R.errors)&&void 0!==v?v:null==w?void 0:w.errors,L=null!==(b=null==R?void 0:R.message)&&void 0!==b?b:null==w?void 0:w.message,P=null!==(j=null==R?void 0:R.type)&&void 0!==j?j:null==w?void 0:w.type;return(0,m.jsx)(l.E.div,{className:[p().errorManager].filter(Boolean).join(" "),drag:!0,dragMomentum:!1,dragPropagation:!1,onPointerDown:function(t){t.stopPropagation()},children:(0,m.jsxs)(c.Z,{borderColor:"redmd",borders:!0,className:p().errorContainer,rowGap:12,style:{borderWidth:2,padding:24},templateColumns:"auto",templateRows:"auto auto",width:"max-content",children:[(0,m.jsxs)(c.Z,{rowGap:12,templateColumns:"auto",templateRows:"auto auto",children:[(0,m.jsx)(h.uyG,{error:!0,size:32}),(null==C||null===(O=C.current)||void 0===O?void 0:O.message)&&(0,m.jsx)(d.Z,{monospace:!0,secondary:!0,semibold:!0,small:!0,children:(0,m.jsx)(i(),{children:null==C||null===(y=C.current)||void 0===y?void 0:y.message})}),(null===(_=[S,P,L,(null==E?void 0:E.length)>=1])||void 0===_?void 0:_.some(Boolean))&&(0,m.jsx)(a.Z,{}),[S,P,L].map((function(t){return t&&(0,m.jsx)(d.Z,{monospace:!0,small:!0,children:(0,m.jsx)(i(),{children:String(t)})},t)})),(null===(x=[(null==E?void 0:E.length)>0])||void 0===x?void 0:x.some(Boolean))&&(0,m.jsx)(a.Z,{short:!0}),(null==E?void 0:E.length)>=1&&w&&(0,m.jsx)(d.Z,{monospace:!0,small:!0,children:(0,m.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:(0,m.jsx)(i(),{children:null==E?void 0:E.join("\n")})})}),(null==E?void 0:E.length)>=1&&!w&&(0,m.jsx)("pre",{style:{whiteSpace:"break-spaces"},children:(0,m.jsx)(d.Z,{inline:!0,monospace:!0,small:!0,children:null==E?void 0:E.map((function(t){return(0,m.jsx)(i(),{children:t},t)}))})})]}),(0,m.jsx)(a.Z,{}),(0,m.jsxs)(c.Z,{autoFlow:"column",justifyContent:"space-between",templateColumns:"min-content",children:[(0,m.jsxs)(s.h,{children:[(0,m.jsx)(s.Z,{basic:!0,onClick:M,small:!0,children:"Dismiss error"}),!1]}),(0,m.jsxs)(s.h,{children:[(0,m.jsx)(s.Z,{Icon:h.ugo,basic:!0,disabled:!0,small:!0,children:"Fix error"}),(0,m.jsx)(s.Z,{Icon:h.u$H,basic:!0,disabled:!0,small:!0,children:"Explain error"})]})]})]})})})),j=n(18735),O=n(85202),y=n(13903),_=n.n(y),x=n(54587),M=n(9518),C=n(78050),R="api-mutation-root",w=function(t){var e=t.base,n=t.children,o=(0,u.useContext)(M.ThemeContext),i=(0,u.useRef)(null),l=(0,u.useRef)(null),s=(0,u.useRef)(null),a=(0,u.useState)(null),c=a[0],d=a[1],v=(0,u.useRef)(null),h=(0,u.useMemo)((function(){var t,e;return null==c||null===(t=c.target)||void 0===t||null===(e=t.dataset)||void 0===e?void 0:e.loadingStyle}),[c]);function f(){var t,e;null==c||null===(t=c.target)||void 0===t||null===(e=t.classList)||void 0===e||e.remove(_().loading),d(null)}function g(){f(),i.current=null,(null==s?void 0:s.current)&&s.current.render(null)}return(0,m.jsx)(r.H.Provider,{value:{dismissError:g,dismissTarget:f,renderError:function(t,e){var n;l.current=document.getElementById(R),(n=s).current||(n.current=(0,C.createRoot)(l.current)),g(),i.current=t,s.current.render((0,m.jsx)(M.ThemeProvider,{theme:o,children:(0,m.jsx)(b,{dismissError:g,errorRef:i,retry:e},String(new Date))}))},renderTarget:function(t){var e,n,r,o;d(t),x.i.INLINE===(null==t||null===(e=t.target)||void 0===e||null===(n=e.dataset)||void 0===n?void 0:n.loadingStyle)&&(null==t||null===(r=t.target)||void 0===r||null===(o=r.classList)||void 0===o||o.add(_().loading))}},children:(0,m.jsxs)(m.Fragment,{children:[n,e&&(0,m.jsx)("div",{id:R}),c&&x.i.INLINE!==h&&O.createPortal((0,m.jsxs)("div",{className:p().target,ref:v,style:{height:null!=c&&c.content?"inherit":2,left:c.rect.left,top:c.rect.top+c.rect.height,width:c.rect.width},children:[!c.content&&(0,m.jsx)(j.Z,{}),c.content]}),document.body)]})})},S=n(64524)},63091:function(t,e,n){"use strict";n(82684);var r=n(85059),o=n.n(r),i=n(28598);e.Z=function(t){var e=t.compact,n=t.short,r=t.vertical;return(0,i.jsx)("div",{className:[o().divider,n&&!r?o().short:"",n||r?"":o().full,r?o().vertical:"",e?o().compact:""].join(" ")})}},85059:function(t){t.exports={divider:"Divider_divider__yfOqj",short:"Divider_short__otA5r",full:"Divider_full__gbb3x",vertical:"Divider_vertical__pKs_7",compact:"Divider_compact__VW40b","dashed-divider":"Divider_dashed-divider__2dffa"}},36801:function(t){t.exports={errorManager:"ErrorManager_errorManager__Ndvfo",right:"ErrorManager_right__u08uU",left:"ErrorManager_left__CWjDX",topRight:"ErrorManager_topRight__hhz2A",topLeft:"ErrorManager_topLeft__dpmcp",bottomLeft:"ErrorManager_bottomLeft__X4zMM",bottomRight:"ErrorManager_bottomRight__YPZXk",errorContainer:"ErrorManager_errorContainer__OEePD",target:"ErrorManager_target__nc6_5"}},78379:function(t,e,n){"use strict";n.d(e,{D:function(){return d}});var r=n(82684),o=n(91204),i=n(42034),u=n(5285),l=n(59714),s=class extends u.l{#t;#e=void 0;#n;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,l.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,l.Ym)(e.mutationKey)!==(0,l.Ym)(this.options.mutationKey)?this.reset():"pending"===this.#n?.state.status&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(t){this.#o(),this.#i(t)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#o(),this.#i()}mutate(t,e){return this.#r=e,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(t)}#o(){const t=this.#n?.state??(0,o.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#i(t){i.V.batch((()=>{if(this.#r&&this.hasListeners()){const e=this.#e.variables,n=this.#e.context;"success"===t?.type?(this.#r.onSuccess?.(t.data,e,n),this.#r.onSettled?.(t.data,null,e,n)):"error"===t?.type&&(this.#r.onError?.(t.error,e,n),this.#r.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach((t=>{t(this.#e)}))}))}},a=n(30210);function c(){}function d(t,e){const n=(0,a.NL)(e),[o]=r.useState((()=>new s(n,t)));r.useEffect((()=>{o.setOptions(t)}),[o,t]);const u=r.useSyncExternalStore(r.useCallback((t=>o.subscribe(i.V.batchCalls(t))),[o]),(()=>o.getCurrentResult()),(()=>o.getCurrentResult())),l=r.useCallback(((t,e)=>{o.mutate(t,e).catch(c)}),[o]);if(u.error&&(d=o.options.throwOnError,v=[u.error],"function"==typeof d?d(...v):d))throw u.error;var d,v;return{...u,mutate:l,mutateAsync:u.mutate}}}}]);