(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5317],{46042:function(e,n,t){"use strict";t.d(n,{sp:function(){return T},Tu:function(){return I.T}});var r=t(45795),o=t(89565),i=t.n(o),l=t(82684),u=t(73457),a=t(89635),c=t(66878),s=t(63091),d=t(11611),v=t(28160),f=t(36801),p=t.n(f),m=t(28862),h=t(86735),g=t(28598),O=["bottomLeft","bottomRight","right","topLeft","topRight"],j=(0,l.memo)((function(e){var n,t,r,o,l,f,j,_,b,x,R,E,N=e.dismissError,y=e.errorRef,C=(e.retry,(0,u.o)()),T=(0,h.mp)(O),I=(null!==(n=null==y||null===(t=y.current)||void 0===t||null===(r=t.response)||void 0===r?void 0:r.data)&&void 0!==n?n:{}).error,P=(null!==(o=null==y||null===(l=y.current)||void 0===l?void 0:l.client)&&void 0!==o?o:{}).error,w=null==I?void 0:I.code,M=null!==(f=null==I?void 0:I.errors)&&void 0!==f?f:null==P?void 0:P.errors,S=null!==(j=null==I?void 0:I.message)&&void 0!==j?j:null==P?void 0:P.message,A=null!==(_=null==I?void 0:I.type)&&void 0!==_?_:null==P?void 0:P.type;return(0,g.jsx)("div",{onPointerDown:function(e){},children:(0,g.jsx)(a.E.div,{className:[p().errorManager,p()[T]].filter(Boolean).join(" "),dragControls:C,children:(0,g.jsxs)(d.Z,{borderColor:"redmd",borders:!0,className:p().errorContainer,rowGap:12,style:{borderWidth:2,padding:24},templateColumns:"auto",templateRows:"auto auto",width:"max-content",children:[(0,g.jsxs)(d.Z,{rowGap:12,templateColumns:"auto",templateRows:"auto auto",children:[(0,g.jsx)(m.uyG,{colorName:"yellow"}),(null==y||null===(b=y.current)||void 0===b?void 0:b.message)&&(0,g.jsx)(v.Z,{monospace:!0,secondary:!0,semibold:!0,small:!0,children:(0,g.jsx)(i(),{children:null==y||null===(x=y.current)||void 0===x?void 0:x.message})}),(null===(R=[w,A,S,(null==M?void 0:M.length)>=1])||void 0===R?void 0:R.some(Boolean))&&(0,g.jsx)(s.Z,{}),[w,A,S].map((function(e){return e&&(0,g.jsx)(v.Z,{monospace:!0,small:!0,children:(0,g.jsx)(i(),{children:String(e)})},e)})),(null===(E=[(null==M?void 0:M.length)>0])||void 0===E?void 0:E.some(Boolean))&&(0,g.jsx)(s.Z,{short:!0}),(null==M?void 0:M.length)>=1&&P&&(0,g.jsx)(v.Z,{monospace:!0,small:!0,children:(0,g.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:(0,g.jsx)(i(),{children:null==M?void 0:M.join("\n")})})}),(null==M?void 0:M.length)>=1&&!P&&(0,g.jsx)("pre",{style:{whiteSpace:"break-spaces"},children:(0,g.jsx)(v.Z,{inline:!0,monospace:!0,small:!0,children:null==M?void 0:M.map((function(e){return(0,g.jsx)(i(),{children:e},e)}))})})]}),(0,g.jsx)(s.Z,{}),(0,g.jsxs)(d.Z,{autoFlow:"column",justifyContent:"space-between",templateColumns:"min-content",children:[(0,g.jsxs)(c.h,{children:[(0,g.jsx)(c.Z,{basic:!0,onClick:N,small:!0,children:"Dismiss error"}),!1]}),(0,g.jsxs)(c.h,{children:[(0,g.jsx)(c.Z,{Icon:m.ugo,basic:!0,disabled:!0,small:!0,children:"Fix error"}),(0,g.jsx)(c.Z,{Icon:m.u$H,basic:!0,disabled:!0,small:!0,children:"Explain error"})]})]})]})})})})),_=t(18735),b=t(85202),x=t(13903),R=t.n(x),E=t(54587),N=t(9518),y=t(78050),C="api-mutation-root",T=function(e){var n=e.children,t=(0,l.useContext)(N.ThemeContext),o=(0,l.useRef)(null),i=(0,l.useRef)(null),u=(0,l.useRef)(null),a=(0,l.useState)(null),c=a[0],s=a[1],d=(0,l.useRef)(null),v=(0,l.useMemo)((function(){var e,n;return null==c||null===(e=c.target)||void 0===e||null===(n=e.dataset)||void 0===n?void 0:n.loadingStyle}),[c]);function f(){var e,n;null==c||null===(e=c.target)||void 0===e||null===(n=e.classList)||void 0===n||n.remove(R().loading),s(null)}function m(){f(),o.current=null,(null==u?void 0:u.current)&&u.current.render(null)}return(0,g.jsx)(r.H.Provider,{value:{dismissError:m,dismissTarget:f,renderError:function(e,n){var r,l=(null==i?void 0:i.current)||(i.current=document.getElementById(C));(r=u).current||(r.current=(0,y.createRoot)(l)),m(),o.current=e,u.current.render((0,g.jsx)(N.ThemeProvider,{theme:t,children:(0,g.jsx)(j,{dismissError:m,errorRef:o,retry:n},String(new Date))}))},renderTarget:function(e){var n,t,r,o;s(e),E.i.INLINE===(null==e||null===(n=e.target)||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.loadingStyle)&&(null==e||null===(r=e.target)||void 0===r||null===(o=r.classList)||void 0===o||o.add(R().loading))}},children:(0,g.jsxs)(g.Fragment,{children:[n,(0,g.jsx)("div",{id:C}),c&&E.i.INLINE!==v&&b.createPortal((0,g.jsxs)("div",{className:p().target,ref:d,style:{height:null!=c&&c.content?"inherit":2,left:c.rect.left,top:c.rect.top+c.rect.height,width:c.rect.width},children:[!c.content&&(0,g.jsx)(_.Z,{}),c.content]}),document.body)]})})},I=t(64524)},84104:function(e,n,t){"use strict";t.d(n,{VY:function(){return o},aM:function(){return $},$Y:function(){return i}});var r=t(82684),o=r.createContext({changeRoute:function(){return null},header:{},initialize:null,page:{},updateThemeSettings:function(){return null}}),i=function(){return(0,r.useContext)(o)},l=t(82394),u=t(26304),a=t(21831),c=t(66878),s=t(28598);function d(e){var n=e.backgroundColorName,t=void 0===n?"backgrounds-body":n,r=e.foregroundColorName,o=void 0===r?"colors-graymd":r,i=e.height,l=void 0===i?1:i,u=e.length,a=void 0===u?2:u,c=e.spacing,d=void 0===c?2:c,v=e.vertical,f=void 0!==v&&v,p=e.width,m=void 0===p?"100%":p;return(0,s.jsx)("div",{style:{background:"repeating-linear-gradient(\n          ".concat(f?"0deg":"90deg",",\n          var(--").concat(o,") 0 ").concat(a,"px,\n          var(--").concat(t,") 0 ").concat(a+d,"px\n        )"),height:f?"100%":l,width:f?l:m}})}var v=t(11611),f=t(37765),p=t.n(f);function m(e){var n=e.size,t=e.variant;return(0,s.jsx)("div",{className:[p().avatarContainer].filter(Boolean).join(" "),style:{height:null!=n?n:40,width:null!=n?n:40},children:(0,s.jsx)("div",{className:[p().avatar,p()["variant-".concat(null!=t?t:"a")]].filter(Boolean).join(" ")})})}var h=t(85202),g=t(66555),O=t(51721),j=t.n(O),_=t(8809),b=t.n(_),x=t(37084),R=t(28862),E=t(62876),N=t(1604),y=t(43406),C=t(69419),T=t(78839),I=t(34376);function P(e){var n=e.groups,t=e.uuid,o=(0,I.useRouter)(),i=(0,r.useRef)(null),l=(0,r.useRef)(null),u=(0,r.useRef)(null),a=(0,r.useState)(null),c=a[0],f=a[1],p="NavigationButtonGroup",m=(0,T.U)({contextMenuRef:i,direction:N.T.RIGHT,onClose:function(e){0===e&&O({items:null,openItems:null})},ref:l,uuid:null!=t?t:p}),O=m.handleToggleMenu,_=m.portalRef,P=(0,x.Z)({target:l}),w=P.deregisterCommands,M=P.registerCommands,S=(0,r.useCallback)((function(e){var t,r,o=(null!=e?e:u.current)<=(null==c?void 0:c.length)?null!=e?e:u.current:null==c?void 0:c.length,i=null===o?null:null==n?void 0:n[0],l=null==c?void 0:c.map((function(e){var n=e.index;return{column:e.level,row:n}})),a=[null==n||null===(t=n[0])||void 0===t?void 0:t.items];null==l||l.reduce((function(e,n){var t,r=null==e||null===(t=e[null==n?void 0:n.row])||void 0===t?void 0:t.items;return a.push(r),r}),a[0]);var s=null!==(r=null==a?void 0:a[o])&&void 0!==r?r:null==i?void 0:i.items;O({items:s,openItems:null==l?void 0:l.slice((null==l?void 0:l.length)-1)})}),[n,O,c]);(0,r.useEffect)((function(){return M({open:{handler:function(){if(null===u.current){var e=0;(null==c?void 0:c.length)>=1&&(e=(null==c?void 0:c.length)-1),u.current=e}S()},predicate:{key:E.i.ARROWDOWN,metaKey:!0}}},{uuid:"NavigationButtonGroup"}),function(){w()}}),[w,S,M,c]),(0,r.useEffect)((function(){var e=function(e){var t,r,o=(0,C.$o)(e,"/v2/pipelines/[uuid]/[...slug]").slug,i=null===(t=Array.isArray(o)?o:[o])||void 0===t||null===(r=t.map((function(e){return(0,C.Uu)(e)})))||void 0===r?void 0:r.filter((function(e){return e!==y.q6.RAG})),l=[];i.forEach((function(e,t){var r,o=null===(r=0===t?n[t]:l[t-1])||void 0===r?void 0:r.items;if((null==o?void 0:o.length)>0){var i=null==o?void 0:o.find((function(n){return n.uuid===e}));l.push(i)}else l.push(null)}));var u=l.findIndex((function(e){return!(null!=e&&e)}));u>=0&&l.splice(u),f(l)};return null===c&&e(o.asPath),o.events.on("routeChangeComplete",e),function(){o.events.off("routeChangeComplete",e)}}),[n,c]);var A=(0,r.useMemo)((function(){var e,t,r,o=null===c,i=null!==(e=null==n?void 0:n.length)&&void 0!==e?e:0,l=null!==(t=null==c?void 0:c.length)&&void 0!==t?t:0,a=[],f=l-1;return null==n||null===(r=n.slice(0,l+1))||void 0===r||r.forEach((function(e,n){var t,r,p,m=e.label,h=e.uuid,O=l>=1&&n===Math.min(f+1,i-1),_=l>=1&&n===Math.min(f,i-1),x=0===n,E=o&&0===n,N=n<=f,y=N?null==c?void 0:c[n]:null,C=null!==(t=null!==(r=null==y?void 0:y.name)&&void 0!==r?r:null==y?void 0:y.label)&&void 0!==t?t:m,T=null!==(p=null==y?void 0:y.uuid)&&void 0!==p?p:h,I=(0,s.jsx)("div",{className:b()["diagnoal-line-container"],children:(0,s.jsx)("div",{className:b()["diagonal-line"],children:(0,s.jsx)(d,{height:1,vertical:!0})})},"group-".concat(n,"-divider"));x||a.push(I),a.push((0,s.jsx)(g.Z,{activeColorOnHover:!0,className:[b().link].join(" "),nowrap:!0,onClick:function(e){e.preventDefault(),e.stopPropagation(),u.current=n,S()},secondary:!0,semibold:!N||_,small:!0,style:{color:_?"var(--backgrounds-button-secondary-default)":void 0},wrap:!0,children:(0,s.jsxs)(v.Z,{alignItems:"center",autoFlow:"column",className:[b().grid,O?b().selected:"",N?b().done:"",N?j()["done-".concat(n)]:""].filter(Boolean).join(" "),columnGap:8,paddingLeft:11,paddingRight:11,style:{zIndex:l-n},children:[("function"==typeof C?null==C?void 0:C():C)||T,(O||E)&&(0,s.jsx)(R.pO,{secondary:!0,size:10})]})},"".concat(h,"-label")))})),a}),[n,S,c]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:[j().button,b().button].join(" "),ref:l,style:{gridTemplateColumns:""},children:(0,s.jsx)(v.Z,{alignItems:"center",autoColumns:"min-content",autoFlow:"column",height:"100%",children:A})}),(0,h.createPortal)((0,s.jsx)("div",{id:[t,p,"menu-manager-context-menu"].filter(Boolean).join(":"),ref:i}),_.current)]})}var w=t(79945),M=t.n(w),S=(0,t(99713).D)(M(),{HTMLTag:"div",classNames:["nav-tag"]}),A=t(28160),D=t(86735);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function G(e,n){var t=e.buttonProps,i=e.gridProps,l=e.iconProps,u=e.navTag,a=e.routeHistory,d=(e.selectedNavItem,e.title),f=e.uuid,p=(0,r.useContext)(o).changeRoute,m=(0,r.useRef)(null),h=(0,r.useRef)(null),g=(0,x.Z)({target:h}),O=g.deregisterCommands,j=g.registerCommands,_=(0,r.useMemo)((function(){var e;return 0===(null!==(e=null==a?void 0:a.length)&&void 0!==e?e:0)}),[a]),b="RouteNavigation",y=(0,T.U)({direction:N.T.RIGHT,onClose:function(e){0===e&&y({items:null})},ref:h,uuid:null!=f?f:b}).handleToggleMenu;return(0,r.useEffect)((function(){return j({open:{handler:function(e){_||p(null)},predicate:{altKey:!0,key:E.i.ARROWLEFT}}},{uuid:"RouteNavigation"}),function(){O()}}),[O,_,a,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:h,children:(0,s.jsx)(c.Z,k(k({},t),{},{motion:!1,onClick:_?void 0:function(e){e.preventDefault(),e.stopPropagation(),y({items:null}),p(null)},onMouseEnter:_?void 0:function(e){var n;e.preventDefault(),e.stopPropagation(),y({items:null===(n=(0,D.YC)(null!=a?a:[],(function(e){return e.timestamp}),{ascending:!1}))||void 0===n?void 0:n.map((function(e,n){var t,r=e.app,o=e.route;return{Icon:null==r?void 0:r.Icon,description:null==o?void 0:o.href,label:null!==(t=null==r?void 0:r.name)&&void 0!==t?t:null==r?void 0:r.uuid,onClick:function(e){e.preventDefault(),e.stopPropagation(),p({app:r,route:o},{transitionOnly:!0}),y({items:null})},uuid:[null==r?void 0:r.uuid,null==o?void 0:o.hreef,String(n)].filter(Boolean).join(":")}}))})},style:{cursor:_?"default":"pointer",gridTemplateColumns:""},wrap:!0,children:(0,s.jsxs)(v.Z,k(k({},i),{},{alignItems:"center",columnGap:12,paddingRight:null!=d&&d?8:void 0,children:[!_&&(0,s.jsx)(R.Wau,k({},l)),u&&(0,s.jsx)(S,{role:"tag",children:u||(0,s.jsx)(s.Fragment,{children:"     "})}),d?(0,s.jsx)(A.Z,{nowrap:!0,role:"title",semibold:!0,children:d}):(0,s.jsx)("div",{style:{width:120}})]}))}))}),(0,s.jsx)("div",{id:[f,b,"menu-manager-context-menu"].filter(Boolean).join(":"),ref:m})]})}var H=r.forwardRef(G),L=t(48655),B=(t(79967),t(22306)),U=["Icon","label","placeholder","uuid"];function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e,n){var t=e.buildInterAppNavItems,o=e.buildIntraAppNavItems,i=e.cacheKey,l=e.globalNavItems,f=e.interAppNavItems,p=e.intraAppNavItems,h=e.navTag,g=e.routeHistory,O=e.router,_=e.selectedNavItem,b=e.title,x=e.uuid,E=e.updateThemeSettings,N=e.version,y=(0,r.useRef)(null==n?void 0:n.current),C=(0,r.useMemo)((function(){return{className:[j().button].join(" "),small:!0}}),[]),T=(0,r.useMemo)((function(){return{autoColumns:"min-content",autoFlow:"column",columnGap:10}}),[]),I=(0,r.useMemo)((function(){return{className:j().buttonIcon,size:16}}),[]),w=(0,r.useMemo)((function(){var e=[{Icon:R.EKh,onClick:function(){O.push("/v2/apps/editor")},uuid:"code"}],n=(0,a.Z)(null!=f?f:[]);return N||null!=n&&n.length||n.push({placeholder:!0,uuid:"placeholder-inter-app-item-0"}),t?null==t?void 0:t(null!=f?f:e,{router:O}):n.concat(e)}),[N,O,f,t]),M=null!=l?l:[{Icon:R.LP4,onClick:function(){E((function(e){var n=e.mode;return{mode:B.H.LIGHT===n?B.H.DARK:B.H.LIGHT}}))},style:{gridTemplateColumns:""},uuid:"Change theme mode"},{Icon:R.bbu,linkProps:{href:"https://www.mage.ai/chat"},style:{gridTemplateColumns:""},target:"_blank",uuid:"help"},{Icon:R.$lS,linkProps:{href:"https://docs.mage.ai"},style:{gridTemplateColumns:""},target:"_blank",uuid:"docs"}],S=function(e){var n;return null===(n=(0,D.Tw)(e,(function(e){return e.uuid})))||void 0===n?void 0:n.map((function(e){var n,t,r=e.Icon,o=e.label,i=e.placeholder,l=e.uuid,d=(0,u.Z)(e,U);return(0,s.jsx)("nav",{children:(0,s.jsxs)(c.Z,F(F(F({},C),d),{},{Icon:function(e){return r?(0,s.jsx)(r,F(F({},e),I)):null},className:[].concat((0,a.Z)(null!==(n=null==C||null===(t=C.className)||void 0===t?void 0:t.split(" "))&&void 0!==n?n:[]),[_===l?j().selected:""]).filter(Boolean).join(" "),"data-uuid":l,style:{gridTemplateColumns:""},children:[i&&(0,s.jsx)("div",{style:{width:null==I?void 0:I.size}}),o&&(null==o?void 0:o())]}))},l)}))},A=(0,r.useMemo)((function(){var e=(null==p?void 0:p.length)>=1||o;return N&&!e?null:(0,s.jsxs)(v.Z,F(F({},T),{},{children:[!N&&!e&&(0,s.jsx)(c.Z,F(F({},C),{},{style:{gridTemplateColumns:""},children:(0,s.jsx)("div",{style:{width:200}})})),e&&(0,s.jsx)(P,{groups:p,uuid:x})]}))}),[C,i,p,o,T,x,N]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("header",{className:j().header,ref:y,children:[(0,s.jsxs)(v.Z,F(F({},T),{},{paddingLeft:10,paddingRight:10,style:{gridTemplateColumns:["min-content",w&&"min-content","minmax(0, 1fr)","min-content"].filter(Boolean).join(" ")},children:[(0,s.jsx)(v.Z,F(F({},T),{},{paddingBottom:6,paddingTop:6,children:(0,s.jsx)(H,{buttonProps:C,gridProps:T,iconProps:I,navTag:h,routeHistory:g,selectedNavItem:_,title:b,uuid:x})})),(null==w?void 0:w.length)&&(0,s.jsx)(v.Z,F(F({},T),{},{paddingBottom:6,paddingTop:6,children:S(w)})),(0,s.jsx)(L.Z,{hideXscrollbar:!0,children:(0,s.jsxs)(v.Z,F(F({},T),{},{paddingBottom:6,paddingTop:6,style:{gridTemplateColumns:"min-content min-content 1fr min-content"},children:[(0,s.jsx)(d,{vertical:!0}),A,(0,s.jsx)("div",{})]}))}),(0,s.jsxs)(v.Z,F(F({},T),{},{paddingBottom:6,paddingTop:6,children:[S(M),(0,s.jsx)(c.Z,F(F({},C),{},{style:{gridTemplateColumns:""},children:(0,s.jsxs)(v.Z,F(F({},T),{},{alignItems:"center",columnGap:10,children:[(0,s.jsx)(m,{size:24,variant:"a"}),"Sorceress",(0,s.jsx)(R.pO,F({},I))]}))}))]}))]})),(0,s.jsx)(d,{})]})})}var X,q=r.forwardRef(K);!function(e){e.BUSY="busy",e.ERROR="error",e.NOTICE="notice",e.SUCCESS="success"}(X||(X={}));var z=function(e){var n=document.querySelector("link[rel*='icon']");if(n)n.href=e;else{var t=document.createElement("link");t.rel="shortcut icon",t.href=e,document.head.appendChild(t)}},W=t(5635);function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){var n=e.children,t=e.router,i=(e.theme,e.updateThemeSettings),l=(0,r.useState)(null),u=l[0],a=l[1],c=(0,r.useState)({}),d=c[0],v=c[1],f=(0,r.useState)(null),p=(f[0],f[1],(0,W.Xh)(),(0,r.useRef)(null),(0,r.useRef)(d)),m=(0,r.useRef)({title:null}),g=(0,r.useState)([]),O=g[0],j=g[1],_=(0,r.useRef)([]),b=(0,r.useRef)(null);var x=(0,r.useCallback)((function(e,n){var r=null!=n?n:{},o=r.appendOnly,i=r.transitionOnly;if(!e){_.current=_.current.slice(0,_.current.length-1);var l=_.current[_.current.length-1];if(b.current=l,!l)return;var u=l.route;return t.replace({pathname:u.pathname,query:u.params},u.href),void j(_.current)}if(i||!o){var a=e.route;t.replace({pathname:a.pathname,query:a.params},a.href)}b.current?b.current=null:!o&&i||(_.current.push(Q(Q({},e),{},{timestamp:Number(new Date)})),j(_.current))}),[]);return(0,s.jsxs)(o.Provider,{value:{changeRoute:x,header:Q(Q({},p.current),{},{setHeader:function(e){var n,t,r="version"in e?e.version:(null!==(n=null==p||null===(t=p.current)||void 0===t?void 0:t.version)&&void 0!==n?n:0)+1;p.current=Q(Q(Q({},p.current),e),{},{version:r}),v(p.current)}}),initialize:function(e){var n=e.headerRef;e.page,a(n)},page:Q(Q({},m.current),{},{setPage:function(e){if(["busy","error","notice","success"].some((function(n){return n in(null!=e?e:{})}))){var n=null!=e&&e.busy?X.BUSY:null!=e&&e.error?X.ERROR:null!=e&&e.notice?X.NOTICE:null!=e&&e.success?X.SUCCESS:void 0;z(null!=n&&n?"/images/favicons/".concat(n,".png"):"/images/favicons/pro.ico")}null!=e&&e.title&&(document.title=e.title),m.current=e}}),updateThemeSettings:i},children:[(null==u?void 0:u.current)&&(0,h.createPortal)((0,s.jsx)(q,Q(Q({},Q(Q({},null==p?void 0:p.current),d)),{},{routeHistory:O,router:t,updateThemeSettings:i})),null==u?void 0:u.current),n]})}},5635:function(e,n,t){"use strict";t.d(n,{pl:function(){return o},Kb:function(){return f},Xh:function(){return i}});var r=t(82684),o=r.createContext({contextMenu:null,contextMenuRef:null,hideMenu:function(){return null},portalID:null,portalRef:null,removeContextMenu:function(){return null},renderContextMenu:function(){return null},shouldPassControl:function(){return null},showMenu:function(){return null},teardown:function(){return null},useMenu:function(){return{contextMenu:null,contextMenuRef:null,hideMenu:function(){return null},removeContextMenu:function(){return null},renderContextMenu:function(){return null},shouldPassControl:function(){return null},showMenu:function(){return null},teardown:function(){return null}}}}),i=function(){return(0,r.useContext)(o)},l=t(82394),u=t(85202),a=t(86213),c=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v="menu-context-portal",f=function(e){var n=e.children,t=(0,r.useRef)(null),i=(0,r.useRef)({}),l=(0,r.useRef)(null),s="SharedMenuProvider",f=(0,a.Z)({containerRef:t,useAsStandardMenu:!1,uuid:s}),p=f.contextMenuRef,m=f.removeContextMenu,h=f.renderContextMenu,g=f.shouldPassControl,O=f.showMenu,j=f.hideMenu,_=f.teardown,b=["context-menu",s].join(":"),x=[v,s].join(":"),R=(0,c.jsx)("div",{id:b,ref:p});return(0,c.jsxs)(o.Provider,{value:{contextMenuRef:p,hideMenu:j,portalID:x,portalRef:l,removeContextMenu:m,renderContextMenu:h,shouldPassControl:g,showMenu:O,teardown:_,useMenu:function(e){var n,t=null!=e?e:{},o=t.containerRef,a=t.contextMenuRef,s=t.uuid;function v(e,n,t){var r;console.log("MenuProvider.renderContextMenu",s,t),h(e,n,d(d({},t),{},{containerRef:o,contextMenuRef:null!==(r=null==t?void 0:t.contextMenuRef)&&void 0!==r?r:i.current[s],uuid:s}))}return s&&((n=i.current)[s]||(n[s]=null!=a?a:(0,r.createRef)())),{contextMenu:function(){return(0,c.jsx)(c.Fragment,{children:(0,u.createPortal)(R,l.current)})},contextMenuRef:s?i.current[s]:null,hideMenu:function(){j(s)},removeContextMenu:function(e,n){m(e,n,s)},renderContextMenu:v,shouldPassControl:g,showMenu:function(e,n){v(null,e,n)},teardown:function(){_(s)}}}},children:[(0,c.jsx)("div",{ref:t,children:n}),R,(0,c.jsx)("div",{id:x,ref:l})]})}},43406:function(e,n,t){"use strict";t.d(n,{q6:function(){return l},qN:function(){return c}});var r,o,i,l,u=t(82394);!function(e){e.RAG="rag"}(l||(l={}));var a,c=(0,u.Z)({},l.RAG,"Retrieval Augmented Generation");!function(e){e.ANSWER_ENRICHMENT="answer_enrichment",e.CHUNKING="chunking",e.CLEANING="cleaning",e.CONTEXTUALIZATION="contextualization",e.CONTEXTUAL_DICTIONARY="contextual_dictionary",e.DATA_PREPARATION="data_preparation",e.DOCUMENT_HIERARCHY="document_hierarchy",e.EMBED="embed",e.ENRICH="enrich",e.EXPORT="export",e.INDEX="index",e.INFERENCE="inference",e.INGEST="ingest",e.INTENT_DETECTION="intent_detection",e.ITERATIVE_RETRIEVAL="iterative_retrieval",e.KNOWLEDGE_GRAPH="knowledge_graph",e.LOAD="load",e.MAP="map",e.MEMORY="memory",e.MULTI_HOP_REASONING="multi_hop_reasoning",e.QUERY_AUGMENTATION="query_augmentation",e.QUERY_DECOMPOSITION="query_decomposition",e.QUERY_PROCESSING="query_processing",e.RANKING="ranking",e.RESPONSE_FORMATTING="response_formatting",e.RESPONSE_GENERATION="response_generation",e.RESPONSE_SYNTHESIS="response_synthesis",e.RETRIEVAL="retrieval",e.SEARCH_INDEX="search_index",e.TOKENIZATION="tokenization",e.TRANSFORM="transform",e.VECTOR_DATABASE="vector_database",e.NONE="none"}(a||(a={}));i={},(0,u.Z)(i,a.DATA_PREPARATION,(r={},(0,u.Z)(r,a.LOAD,[a.INGEST,a.MAP]),(0,u.Z)(r,a.TRANSFORM,[a.CLEANING,a.ENRICH,a.CHUNKING,a.TOKENIZATION,a.EMBED]),(0,u.Z)(r,a.EXPORT,[a.VECTOR_DATABASE,a.KNOWLEDGE_GRAPH]),(0,u.Z)(r,a.INDEX,[a.CONTEXTUAL_DICTIONARY,a.DOCUMENT_HIERARCHY,a.SEARCH_INDEX]),r)),(0,u.Z)(i,a.INFERENCE,(o={},(0,u.Z)(o,a.QUERY_PROCESSING,[a.INTENT_DETECTION,a.QUERY_DECOMPOSITION,a.QUERY_AUGMENTATION]),(0,u.Z)(o,a.RETRIEVAL,[a.ITERATIVE_RETRIEVAL,a.MEMORY,a.MULTI_HOP_REASONING,a.RANKING]),(0,u.Z)(o,a.RESPONSE_GENERATION,[a.CONTEXTUALIZATION,a.RESPONSE_SYNTHESIS,a.ANSWER_ENRICHMENT,a.RESPONSE_FORMATTING]),o))},78839:function(e,n,t){"use strict";t.d(n,{U:function(){return f}});var r=t(82394),o=t(26304),i=t(82684),l=t(5635),u=t(85202),a=t(63634),c=t(1604),s=t(28598),d=["children","className","contained","items","open","openItems","handleOpen","isOpen"];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){var n=e.contained,t=e.contextMenuRef,r=e.direction,o=e.onClose,u=e.ref,s=e.uuid,d=(0,i.useRef)(null),v=u||d,f=(0,i.useContext)(l.pl),p=f.portalRef,m=(0,f.useMenu)({containerRef:v,uuid:s}),h=m.contextMenu,g=m.showMenu,O=m.hideMenu,j=m.teardown,_=(0,i.useCallback)((function(e){var i,l=e.items,u=e.openItems;if((null!==(i=null==l?void 0:l.length)&&void 0!==i?i:0)>0){var d,f=null==v||null===(d=v.current)||void 0===d?void 0:d.getBoundingClientRect(),p={height:null==f?void 0:f.height,left:null==f?void 0:f.left,top:null==f?void 0:f.top,width:null==f?void 0:f.width},m=((0,a.M)(null==v?void 0:v.current,{includeParents:!0}).parents,{contained:n,containerRef:v,contextMenuRef:t,direction:r,onClose:o,openItems:u,position:p,rects:{bounding:{height:window.innerHeight,left:0,top:0,width:window.innerWidth},container:p,offset:{left:c.T.LEFT===r?null==p?void 0:p.width:0,top:0}}});g(l,m,s)}else O(s)}),[n,v,r,O,o,g,s]);return{containerRef:v,contextMenu:h,handleToggleMenu:_,portalRef:p,teardown:j}}function p(e,n){var t=e.children,l=e.className,a=e.contained,c=e.items,p=(e.open,e.openItems),m=(e.handleOpen,e.isOpen,(0,o.Z)(e,d)),h=((0,i.useRef)(0),(0,i.useState)((0,i.createRef)())),g=h[0],O=(h[1],f(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({contained:a,contextMenuRef:g,ref:n},m))),j=O.containerRef,_=O.handleToggleMenu,b=O.portalRef,x=(O.teardown,(0,s.jsx)("div",{id:"menu-manager-".concat(m.uuid),ref:g,style:a?{position:"absolute"}:{}}));return(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("div",{className:l,onClick:function(e){e.preventDefault(),e.stopPropagation(),console.log("MenuManager.onClick",c),_({items:c,openItems:p})},ref:j,children:t}),a?x:(0,u.createPortal)(x,b.current)]})}n.Z=i.forwardRef(p)},63091:function(e,n,t){"use strict";t(82684);var r=t(85059),o=t.n(r),i=t(28598);n.Z=function(e){var n=e.compact,t=e.short,r=e.vertical;return(0,i.jsx)("div",{className:[o().divider,t&&!r?o().short:"",t||r?"":o().full,r?o().vertical:"",n?o().compact:""].join(" ")})}},66555:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(82394),o=t(26304),i=t(12691),l=t.n(i),u=t(82684),a=t(24022),c=t.n(a),s=t(89635),d=t(28160),v=t(28598),f=["activeColorOnHover","children","className","disabled","display","href","motionProps","onClick","preventDefault","role","wrap"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h={blink:{opacity:[1,0,1,0,1],transition:{duration:.5,ease:"easeInOut"}},initial:{opacity:1}};function g(e){var n=e.activeColorOnHover,t=e.children,r=e.className,i=e.disabled,a=e.display,p=e.href,g=void 0===p?"#":p,O=e.motionProps,j=e.onClick,_=e.preventDefault,b=void 0===_||_,x=e.role,R=e.wrap,E=(0,o.Z)(e,f),N=(0,d.i)(E),y=N.classNames,C=N.props,T=(0,u.useState)(!1),I=T[0],P=T[1],w=O||!R,M=w?s.E.a:"a";return(0,v.jsx)(l(),{href:g,passHref:!0,children:(0,v.jsx)(M,m(m(m({},C),m(m({},O),w&&!O?{animate:I?"blink":"initial"}:{})),{},{className:[c().link,R?c().wrap:c().base,n&&c().activeColorOnHover,i&&c().disabled,null!=r?r:"",a?c()[a]:"",null!=y?y:""].filter(Boolean).join(" "),initial:"initial",onClick:function(e){P(!0),setTimeout((function(){return P(!1)}),500),j&&(b&&e.preventDefault(),j(e))},role:x,variants:h,children:t}))})}},85059:function(e){e.exports={divider:"Divider_divider__yfOqj",short:"Divider_short__otA5r",full:"Divider_full__gbb3x",vertical:"Divider_vertical__pKs_7",compact:"Divider_compact__VW40b","dashed-divider":"Divider_dashed-divider__2dffa"}},36801:function(e){e.exports={errorManager:"ErrorManager_errorManager__Ndvfo",right:"ErrorManager_right__u08uU",left:"ErrorManager_left__CWjDX",topRight:"ErrorManager_topRight__hhz2A",topLeft:"ErrorManager_topLeft__dpmcp",bottomLeft:"ErrorManager_bottomLeft__X4zMM",bottomRight:"ErrorManager_bottomRight__YPZXk",errorContainer:"ErrorManager_errorContainer__OEePD",target:"ErrorManager_target__nc6_5"}},8809:function(e){e.exports={grid:"NavigationButtonGroup_grid__PWGqf",button:"NavigationButtonGroup_button__b2dLT","diagnoal-line-container":"NavigationButtonGroup_diagnoal-line-container__UTYh0","diagonal-line":"NavigationButtonGroup_diagonal-line__g0Q59",selected:"NavigationButtonGroup_selected__6_tyz",done:"NavigationButtonGroup_done__6_RUl"}},79945:function(e){e.exports={"nav-tag":"NavTag_nav-tag__N7PI2"}},24022:function(e){e.exports={link:"Link_link__aqMVc",block:"Link_block__KN_xq","inline-block":"Link_inline-block__y4vdz",disabled:"Link_disabled__PRBf9",activeColorOnHover:"Link_activeColorOnHover__K0vcR",base:"Link_base__UhzqJ",wrap:"Link_wrap__KPDKC"}},37765:function(e){e.exports={avatarContainer:"Avatar_avatarContainer___Mx_T",avatar:"Avatar_avatar___uvXq"}},51721:function(e){e.exports={header:"Header_header__0598Y",button:"Header_button__xnxnX",buttonIcon:"Header_buttonIcon__ZP0mu",selected:"Header_selected__laPgD",content:"Header_content__Spn60"}}}]);