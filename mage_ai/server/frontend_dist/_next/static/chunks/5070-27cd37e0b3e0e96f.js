(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5070],{45795:function(o,r,e){"use strict";e.d(r,{H:function(){return t}});var l=function(){throw new Error("Attempted to call useMutate outside of APIMutation Context.\n    Make sure your app is rendered inside APIMutationProvider.")},t=e(82684).createContext({dismissError:l,dismissTarget:l,renderError:l,renderTarget:l});t.displayName="APIMutationContext"},64524:function(o,r,e){"use strict";e.d(r,{T:function(){return g}});var l,t=e(21831),n=e(75582),c=e(77837),u=e(82394),i=e(38860),_=e.n(i),a=e(55056),s=e.n(a),d=e(37680),T=e(4383),p=e(11498),v=e(69419),f=e(316),x=e(82684),b=e(54587),m=e(78379),E=e(45795);!function(o){o.ERROR="error",o.IDLE="idle",o.PENDING="pending",o.SUCCESS="success"}(l||(l={}));var h=e(81728);function O(o,r){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),e.push.apply(e,l)}return e}function y(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?O(Object(e),!0).forEach((function(r){(0,u.Z)(o,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))}))}return o}function g(o,r){var e,i,a,O,g,w=o.id,D=o.idParent,P=o.resource,L=o.resourceParent,Z=(0,x.useContext)(E.H),k=r||{},A=k.automaticAbort,S=(k.callbackOnEveryRequest,k.subscribeToStatusUpdates),I=k.throttle,j=null!==(e=null==r?void 0:r.urlParser)&&void 0!==e?e:{},C=j.disableEncodeURIComponent,N=j.disableHyphenCase,R=r||{},M=R.handlers,U=R.parse,z=(0,h.C5)(P),q=(0,x.useRef)((i={},(0,u.Z)(i,p.TO.CREATE,null),(0,u.Z)(i,p.TO.DELETE,null),(0,u.Z)(i,p.TO.DETAIL,null),(0,u.Z)(i,p.TO.LIST,null),(0,u.Z)(i,p.TO.UPDATE,null),i)),B=(0,x.useRef)(y((a={},(0,u.Z)(a,p.TO.CREATE,300),(0,u.Z)(a,p.TO.DELETE,300),(0,u.Z)(a,p.TO.DETAIL,300),(0,u.Z)(a,p.TO.LIST,300),(0,u.Z)(a,p.TO.UPDATE,300),a),I)),W=(0,x.useRef)(null),G=(0,x.useRef)({}),H=(0,x.useRef)((O={},(0,u.Z)(O,p.TO.CREATE,[]),(0,u.Z)(O,p.TO.DELETE,[]),(0,u.Z)(O,p.TO.DETAIL,[]),(0,u.Z)(O,p.TO.LIST,[]),(0,u.Z)(O,p.TO.UPDATE,[]),O)),J=(0,x.useRef)((g={},(0,u.Z)(g,p.TO.CREATE,l.IDLE),(0,u.Z)(g,p.TO.DELETE,l.IDLE),(0,u.Z)(g,p.TO.DETAIL,l.IDLE),(0,u.Z)(g,p.TO.LIST,l.IDLE),(0,u.Z)(g,p.TO.UPDATE,l.IDLE),g)),X=(0,x.useState)(),K=X[0],F=X[1];function Y(o){var r,e;return null==G||null===(r=G.current)||void 0===r||null===(e=r[z])||void 0===e?void 0:e[null!=o?o:w]}function Q(o,r){var e,l,t,n=null!=r?r:w,c=null;"function"==typeof o?c=o(null==G||null===(l=G.current)||void 0===l||null===(t=l[z])||void 0===t?void 0:t[n]):c=o;return(e=G.current)[z]||(e[z]={}),G.current[z][n]=c,G.current[z]}function V(o){var r="function"==typeof o?o(G.current[P]):o;return G.current[P]=r,G.current[P]}function $(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=o.id,e=o.payload,l=Y(r);return(0,u.Z)({},z,"function"==typeof e?e(l):e)}function oo(o,r,e){var l,t,n,c,u,i=y({id:w,idParent:D},r),_=(null!=i?i:{}).id,a=(o||{}).data,s=null,d=null,T=z in(null!=a?a:{})?z:P;(s=U&&"function"==typeof U?U(a):a[T],_)?(d=null==G||null===(l=G.current)||void 0===l||null===(t=l[T])||void 0===t?void 0:t[_],Q(null!==(n=s)&&void 0!==n?n:d,_)):(d=null==G||null===(c=G.current)||void 0===c?void 0:c[T],V(null!==(u=s)&&void 0!==u?u:d));return fo(),[s,d]}function ro(o,r){console.error(o);var e,l=null!=o?o:{},t=l.message,n=l.name,c=l.stack;Z&&null!=Z&&Z.renderError&&(null==Z||Z.renderError(y({client:{error:{errors:c&&(null==c||null===(e=c.split("\n"))||void 0===e?void 0:e.map(String)),message:t&&String(t),type:n&&String(n)}},message:t},o),(function(o){var e,l=(null!==(e=H.current[r])&&void 0!==e?e:[]).pop();l&&io(r,y(y({},l),{},{event:o})).then(oo).catch((function(o){return ro(o,r)}))})));return fo(),o}function eo(r){var e=y(y({},r),o),l=e.id,t=void 0===l?void 0:l,n=e.idParent,c=void 0===n?void 0:n;return{id:t?uo(t):void 0,idParent:c?uo(c):void 0}}function lo(o,r){return to.apply(this,arguments)}function to(){return to=(0,c.Z)(_().mark((function o(r,e){var l,t,n,c,u,i,a,v,f,x,b,m,E,h,O,g,w,D,Z,k=arguments;return _().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=k.length>2&&void 0!==k[2]?k[2]:{},c=null!==(l=eo(e))&&void 0!==l?l:{},u=null!==(t=eo(e))&&void 0!==t?t:{},i=u.id,a=u.idParent,v=(0,T.Q2)(null!=L?L:P,null!=a?a:i,L?P:null,L?i:null),x=(f=n||{}).responseType,b=void 0===x?p.Eg.JSON:x,m=f.signal,E=void 0===m?null:m,h=(0,d.dj)(v,y(y({},n),{},{body:$(y(y({},e),c)),method:p.TO.CREATE===r?"POST":p.TO.DELETE===r?"DELETE":p.TO.UPDATE===r?"PUT":"GET",query:co(e)})),O=h.data,g=h.headers,w=h.method,D=h.queryString,Z=h.url,o.abrupt("return",new Promise((function(o,l){return null!=e&&e.onStart&&(null==e||e.onStart()),s().request({data:O.body,headers:g,method:w,onDownloadProgress:null!=n&&n.onDownloadProgress?function(o){return n.onDownloadProgress(o,{body:null==n?void 0:n.body,query:null==n?void 0:n.query})}:null,onUploadProgress:null!=n&&n.onUploadProgress?function(o){return n.onUploadProgress(o,{body:null==n?void 0:n.body,query:null==n?void 0:n.query})}:null,responseType:b,signal:E,url:D?"".concat(Z,"?").concat(D):Z}).then((function(r){var l;return(null==e?void 0:e.onSuccess)&&(null==e||null===(l=e.onSuccess)||void 0===l||l.call(e,r,e,n)),o(r)})).catch((function(o){var r;return(null==e?void 0:e.onError)&&(null==e||null===(r=e.onError)||void 0===r||r.call(e,o,e,n)),l(o)})).finally((function(){delete q.current[r]}))})));case 7:case"end":return o.stop()}}),o)}))),to.apply(this,arguments)}function no(o){var r,e=null!==(r=null==M?void 0:M[o])&&void 0!==r?r:{},l=e||{},t=l.onError,c=l.onSuccess;return y(y({},e||{}),{},{mutationFn:function(r){return io(o,r)},onError:function(r,e,l){ro(r,o),t&&t(r,e,l)},onSettled:function(){return fo()},onSuccess:function(o,r,e){var l=oo(o,r),t=(0,n.Z)(l,2),u=t[0],i=t[1];c&&c(u,i)}})}function co(){return y(y({},(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).query),{},{_http_error_codes:!0})}function uo(o){return o?[function(o){return N?o:(0,v.Uu)(o)},function(o){return C?o:encodeURIComponent(o)}].reduce((function(o,r){return r(o)}),o):o}function io(o,r){return _o.apply(this,arguments)}function _o(){return(_o=(0,c.Z)(_().mark((function o(r,e){var l,n,c,u,i,a,s,d,T,p,v,x,m,E,h;return _().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=Number(new Date),null==Z||Z.dismissError(),null==Z||Z.dismissTarget(),null===(null==W||null===(l=W.current)||void 0===l?void 0:l[r])&&(W.current[r]=s),!(r in(null!==(n=null==B?void 0:B.current)&&void 0!==n?n:{})&&s-(null!==(c=null==W||null===(u=W.current)||void 0===u?void 0:u[r])&&void 0!==c?c:0)<(null==B||null===(i=B.current)||void 0===i?void 0:i[r]))){o.next=6;break}return o.abrupt("return",Promise.resolve(null));case 6:return A&&null!=q&&null!==(a=q.current)&&void 0!==a&&a[r]&&(console.log("[useMutate] Aborting ".concat(r," for ").concat(P),e),null==q||null===(d=q.current)||void 0===d||d[r].abort()),q.current[r]=new AbortController,T=q.current[r].signal,p=[r,e],H.current[r].push(p),null!=e&&e.event&&(m=null==e||null===(v=e.event)||void 0===v?void 0:v.target,(E=m?null!==(x=(0,f.IM)(m,[b.h.BUTTON]))&&void 0!==x?x:(0,f.vi)(m,[b.h.BUTTON]):null)&&(h=E.getBoundingClientRect(),Z.renderTarget({content:null,rect:h,target:E}))),o.abrupt("return",lo.apply(void 0,(0,t.Z)(p).concat([{signal:T}])));case 13:case"end":return o.stop()}}),o)})))).apply(this,arguments)}var ao=(0,m.D)(no(p.TO.CREATE)),so=(0,m.D)(no(p.TO.DELETE)),To=(0,m.D)(no(p.TO.DETAIL)),po=(0,m.D)(no(p.TO.LIST)),vo=(0,m.D)(no(p.TO.UPDATE));function fo(){var o,r;Z.dismissTarget(),null===(o=Object.entries((r={},(0,u.Z)(r,p.TO.CREATE,ao),(0,u.Z)(r,p.TO.DELETE,so),(0,u.Z)(r,p.TO.DETAIL,To),(0,u.Z)(r,p.TO.LIST,po),(0,u.Z)(r,p.TO.UPDATE,vo),r)))||void 0===o||o.forEach((function(o){var r,e=(0,n.Z)(o,2),l=e[0],t=e[1],c=(null==J||null===(r=J.current)||void 0===r?void 0:r[l])!==t.status;J.current[l]=t.status,S&&c&&F(J.current)}))}var xo=(0,x.useMemo)((function(){return ao}),[ao]),bo=(0,x.useMemo)((function(){return so}),[so]),mo=(0,x.useMemo)((function(){return To}),[To]),Eo=(0,x.useMemo)((function(){return po}),[po]),ho=(0,x.useMemo)((function(){return vo}),[vo]);return{abortController:q.current,create:xo,delete:bo,detail:mo,getModel:Y,getModels:function(){var o;return null==G||null===(o=G.current)||void 0===o?void 0:o[P]},list:Eo,setModel:Q,setModels:V,status:K,update:ho}}},28160:function(o,r,e){"use strict";e.d(r,{i:function(){return x}});var l=e(82394),t=e(21831),n=e(75582),c=e(26304),u=e(82684),i=e(77772),_=e.n(i),a=e(21103),s=e(81728),d=e(28598),T=["colorName","className","maxWidth","nowrap","small","success","error","warning","xsmall"],p=["children","inline","pre"];function v(o,r){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),e.push.apply(e,l)}return e}function f(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){(0,l.Z)(o,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))}))}return o}function x(o){var r=o.colorName,e=o.className,l=o.maxWidth,u=o.nowrap,i=o.small,d=o.success,p=o.error,v=o.warning,x=o.xsmall,b=(0,c.Z)(o,T),m=[i?_().small:x?_().xsmall:_().text,e||"",u&&_().nowrap,r&&_()["color-".concat(r.toLowerCase())],d&&_().success,p&&_().error,v&&_().warning].filter(Boolean);Object.entries(b||{}).forEach((function(o){var r=(0,n.Z)(o,2),e=r[0],l=r[1];if(void 0!==l&&!1!==l){var c,u,i,a=null===(c=[(0,s.JA)(e)].concat((0,t.Z)(null===(u=String("boolean"==typeof l?"":l))||void 0===u||null===(i=u.replace("%",""))||void 0===i?void 0:i.split(" "))).filter((function(o){return(null==o?void 0:o.length)>=1})))||void 0===c?void 0:c.join("-"),d=_()[a];m.push(d)}}));var E=m.filter((function(o){var r;return null!=o&&(null===(r=String(o))||void 0===r?void 0:r.length)>=1})).join(" "),h=(0,a.y)(b);return h.style=f(f({},h.style),{},{maxWidth:l?"".concat(l,"px"):void 0}),{classNames:E,props:h}}function b(o,r){var e=o.children,l=o.inline,t=o.pre,n=x((0,c.Z)(o,p)),u=n.classNames,i=n.props,_="p";return t?_="pre":l&&(_="span"),(0,d.jsx)(_,f(f({},i),{},{className:u,ref:r,children:e}))}r.Z=u.forwardRef(b)},54587:function(o,r,e){"use strict";var l,t;e.d(r,{h:function(){return t},i:function(){return l}}),function(o){o.INLINE="inline"}(l||(l={})),function(o){o.BLOCK="block",o.BUTTON="button",o.CONTENT="content",o.DRAGGABLE="draggable",o.DROPPABLE="droppable",o.MODAL="modal",o.PANNABLE="pannable",o.PIPELINE="pipeline",o.RESIZEABLE="resizable",o.SCROLLABLE="scrollable",o.ZOOMABLE="zoomable"}(t||(t={}))},77772:function(o){o.exports={text:"Text_text__uz5r4","color-azure":"Text_color-azure__6h0H6","color-azurelo":"Text_color-azurelo__COHxe","color-black":"Text_color-black__uJmtL","color-blackfixed":"Text_color-blackfixed__s_il_","color-blackhi":"Text_color-blackhi__hAKYO","color-blacklo":"Text_color-blacklo__KSS_a","color-blackmd":"Text_color-blackmd__0L2wT","color-blue":"Text_color-blue__j9zws","color-bluehi":"Text_color-bluehi__Oa7Na","color-bluelo":"Text_color-bluelo__Q6mv_","color-bluemd":"Text_color-bluemd__La6NO","color-bluemuted":"Text_color-bluemuted__X_3AO","color-bluetext":"Text_color-bluetext__sIdO1","color-dbt":"Text_color-dbt__Lh3Em","color-dbthi":"Text_color-dbthi__AcEJz","color-dbtlo":"Text_color-dbtlo__hTDg1","color-dbtmd":"Text_color-dbtmd__uOEtt","color-glow2":"Text_color-glow2__wl1s0","color-glow":"Text_color-glow__Yz1d8","color-gray":"Text_color-gray__zLHWy","color-grayhi":"Text_color-grayhi__ztHAh","color-graylo":"Text_color-graylo__oWZJL","color-graymd":"Text_color-graymd__iH6Zj","color-green":"Text_color-green__SvGW6","color-greenhi":"Text_color-greenhi__x_Lq3","color-greenlo":"Text_color-greenlo__NFylM","color-greenmd":"Text_color-greenmd__mr2mC","color-pink":"Text_color-pink__1NWa9","color-pinkhi":"Text_color-pinkhi__XWk0h","color-pinklo":"Text_color-pinklo__AqKw_","color-pinkmd":"Text_color-pinkmd__lyki6","color-purple":"Text_color-purple__FUjVa","color-purplehi":"Text_color-purplehi__o3fSt","color-purplelo":"Text_color-purplelo___zsaF","color-purplemd":"Text_color-purplemd__3Hz8x","color-red":"Text_color-red__pTETX","color-redhi":"Text_color-redhi__zXGmh","color-redlo":"Text_color-redlo__2HD3x","color-redmd":"Text_color-redmd__1SJ8G","color-rose":"Text_color-rose__LEJPZ","color-rosehi":"Text_color-rosehi__5mEI3","color-roselo":"Text_color-roselo__Ix__Z","color-rosemd":"Text_color-rosemd__7EbMZ","color-sky":"Text_color-sky__bt_5h","color-skyhi":"Text_color-skyhi__AYidy","color-skylo":"Text_color-skylo___DXvZ","color-skymd":"Text_color-skymd__qp8t4","color-statuses-success":"Text_color-statuses-success__9JDxK","color-statuses-successhi":"Text_color-statuses-successhi__hnk7f","color-teal":"Text_color-teal__94mjV","color-tealhi":"Text_color-tealhi__RYs1C","color-teallo":"Text_color-teallo__ms7Jz","color-tealmd":"Text_color-tealmd__xMP96","color-white":"Text_color-white__KDhqj","color-whitefixed":"Text_color-whitefixed__0Wqt_","color-whitehi":"Text_color-whitehi__e5oVm","color-whitelo":"Text_color-whitelo__gIFqb","color-whitemd":"Text_color-whitemd__BfOnI","color-yellow":"Text_color-yellow__F8uw6","color-yellowhi":"Text_color-yellowhi__kyur2","color-yellowlo":"Text_color-yellowlo__dZDhQ","color-yellowmd":"Text_color-yellowmd__CXLvX",nowrap:"Text_nowrap__pGn5g",inverted:"Text_inverted__32PC6",blue:"Text_blue___EUOq",muted:"Text_muted__JRwai",secondary:"Text_secondary__zRZrd",error:"Text_error__CDxon",warning:"Text_warning___E0Ea",success:"Text_success__xoK9z",italic:"Text_italic__SOXdC",light:"Text_light__Dcwkw",medium:"Text_medium__hSWiP",semibold:"Text_semibold__sinbr",bold:"Text_bold__0SalO",underline:"Text_underline__GIbTU",black:"Text_black___x9WX",small:"Text_small__zGqaM",xsmall:"Text_xsmall__tdzOm",monospace:"Text_monospace__xbT6D"}}}]);