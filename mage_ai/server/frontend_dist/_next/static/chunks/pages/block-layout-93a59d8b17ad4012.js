(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{54750:function(e,t,n){"use strict";var r=n(82394),o=n(12691),u=n.n(o),c=n(55485),i=n(48670),a=n(44085),l=n(38276),s=n(4190),f=n(30160),p=n(72473),d=n(70515),h=n(28598),v=n(82684);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.breadcrumbs,n=e.noMarginLeft,r=t.length,o=[];return t.forEach((function(e,t){var b=e.bold,g=e.danger,y=e.label,j=e.linkProps,m=e.loading,Z=e.monospace,P=void 0===Z||Z,k=e.onClick,w=e.options,x=y();r>=2&&t>=1&&o.push((0,h.jsx)(l.Z,{mx:1,children:(0,h.jsx)(p.ChevronRight,{muted:!0})},"divider-".concat(x)));var _=(0,h.jsx)(f.ZP,{bold:b,danger:g,default:!b,monospace:P,noWrapping:!0,children:x});if((null==w?void 0:w.length)>=1){var C,E,I=null==w?void 0:w.find((function(e){return!!e.selected}));if(I)(C=((null==I||null===(E=I.uuid)||void 0===E?void 0:E.length)||0)*d.ro)&&(C+=3*d.iI,m&&(C+=2*d.iI));_=(0,h.jsx)(c.ZP,{alignItems:"center",children:(0,h.jsx)(a.Z,{afterIcon:m?(0,h.jsx)(s.Z,{inverted:!0,small:!0}):null,danger:g,defaultTextColor:!b,maxWidth:C||null,monospace:P,noBackground:!0,noBorder:!0,onChange:function(e){var t,n=e.target.value,r=null==w?void 0:w.find((function(e){return e.uuid===n}));r&&null!=r&&r.onClick&&(null==r||null===(t=r.onClick)||void 0===t||t.call(r,n))},paddingHorizontal:0,paddingVertical:0,value:(null==I?void 0:I.uuid)||"",children:null==w?void 0:w.map((function(e){var t=e.label,n=e.selected,r=e.uuid,o=t?null==t?void 0:t():r;return(0,h.jsx)("option",{value:r,children:n?r:o},r)}))})})}var D=(0,h.jsx)(l.Z,{ml:n||0!==t?0:2,children:_},"breadcrumb-".concat(x));j?D=(0,v.createElement)(u(),O(O({},j),{},{key:"breadcrumb-link-".concat(x),passHref:!0}),(0,h.jsx)(i.Z,{block:!0,default:!b,noOutline:!0,sameColorAsText:b,children:D})):k&&(D=(0,h.jsx)(i.Z,{block:!0,default:!b,noOutline:!0,onClick:k,preventDefault:!0,sameColorAsText:b,children:D})),o.push(D)})),(0,h.jsx)(c.ZP,{alignItems:"center",children:o})}},93808:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(77837),o=n(26304),u=n(62243),c=n(29385),i=n(80022),a=n(13692),l=n(93189),s=n(15544),f=n(82394),p=n(38860),d=n.n(p),h=n(82684),v=n(56663),b=n.n(v),O=n(40761),g=n(34661),y=n(36105),j=n(50178),m=n(69419),Z=n(28598),P=["auth"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}function _(e){return function(t){(0,a.Z)(s,t);var n,l=x(s);function s(){var e;(0,u.Z)(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=l.call.apply(l,[this].concat(n)),(0,f.Z)((0,i.Z)(e),"state",{auth:new O.Z(e.props.token)}),e}return(0,c.Z)(s,[{key:"componentDidMount",value:function(){this.setState({auth:new O.Z(this.props.token)})}},{key:"render",value:function(){var t=this.props,n=(t.auth,(0,o.Z)(t,P));return(0,Z.jsx)(e,w({auth:this.state.auth},n))}}],[{key:"getInitialProps",value:(n=(0,r.Z)(d().mark((function t(n){var r,o,u,c,i,a,l,s,f;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=b()(n),o=(0,j.ex)(n),u=o.id,c=r[g.Mv],i=r[y.qt],a=new O.Z(c),l=w(w({},n),{},{auth:a,currentGroupId:u,theme:i}),(0,j.YB)(n)&&a.isExpired&&(console.log("OAuth token has expired."),s=w(w({},n.query),{},{redirect_url:n.asPath}),(0,m.nL)("/sign-in?".concat((0,m.uM)(s)),n.res)),!e.getInitialProps){t.next=12;break}return t.next=10,e.getInitialProps(l);case 10:return f=t.sent,t.abrupt("return",w(w({},f),{},{auth:a,currentGroupId:u,theme:i}));case 12:return t.abrupt("return",l);case 13:case"end":return t.stop()}}),t)}))),function(e){return n.apply(this,arguments)})}]),s}(h.Component)}},6943:function(e,t,n){"use strict";n.r(t);var r=n(77837),o=n(38860),u=n.n(o),c=n(36065),i=n(93808),a=n(28598);function l(){return(0,a.jsx)(c.Z,{uuid:"dashboard"})}l.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,i.Z)(l)},91162:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return n(6943)}])}},function(e){e.O(0,[3662,125,1799,2714,2379,2996,8095,4168,8023,6065,9774,2888,179],(function(){return t=91162,e(e.s=t);var t}));var t=e.O();_N_E=t}]);