(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4688],{66316:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(82394),i=r(70613),o=r(31557),u=r(33591),c=r(38276),s=r(70515),l=r(28598);var a=function(e){var t=e.children,r=e.width,n=void 0===r?12:r;return(0,l.jsx)(c.Z,{px:s.zC,children:(0,l.jsx)(u.Row,{children:(0,l.jsx)(u.Col,{lg:n,md:Math.min(12,Math.round(1.5*(12-n))),sm:Math.min(12,Math.round(1.75*(12-n))),xs:12,children:t})})})},f=r(9518),p=r(46684),d=f.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-jcgu5l-0"})(["padding-top:","px;",""],p.Mz,(function(e){return e.fullHeight&&"\n    height: calc(100vh);\n  "}));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.children,r=e.headerProps,n=e.title;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{title:n}),(0,l.jsx)(o.Z,O({},r)),(0,l.jsx)(a,{children:(0,l.jsx)(d,{fullHeight:!0,children:t})})]})}},77429:function(e,t,r){"use strict";r.r(t);var n=r(77837),i=r(82394),o=r(38860),u=r.n(o),c=r(82684),s=r(34376),l=r(66316),a=r(50724),f=r(1402),p=r(22271),d=r(53808),h=r(69419),O=r(28598);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(){var e=(0,s.useRouter)(),t=(0,h.iV)(),r=null==t?void 0:t.state,n=(0,d.U2)(r),i=null==n?void 0:n.provider,o=t;n&&(o=b(b({},t),n));var u=p.ZP.oauths.detail(i,o).data,j=(0,c.useMemo)((function(){var e;return null==u||null===(e=u.oauth)||void 0===e?void 0:e.url}),[u]),v=(0,c.useState)(null),g=v[0],y=v[1];return(0,c.useEffect)((function(){if(j){var t=((0,h.iV)(j)||{}).error;t?y(t):n?((0,d.Od)(r),e.push(j)):n||y("Oauth failed due to state not matching!")}}),[n,j,e,t,r]),(0,O.jsxs)(l.Z,{title:"Oauth",children:[(0,O.jsx)(O.Fragment,{}),g&&(0,O.jsx)(a.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null==y?void 0:y(null)},children:(0,O.jsx)(f.Z,{displayMessage:g,onClose:function(){return null==y?void 0:y(null)}})})]})}v.getInitialProps=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=v},39341:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oauth",function(){return r(77429)}])}},function(e){e.O(0,[1557,9774,2888,179],(function(){return t=39341,e(e.s=t);var t}));var t=e.O();_N_E=t}]);