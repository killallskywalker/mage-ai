(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1858],{57438:function(e,n,r){"use strict";r.r(n);var u=r(77837),s=r(38860),t=r.n(s),i=r(82684),a=r(34376),l=r(71180),c=r(15338),d=r(93808),o=r(28274),f=r(38276),m=r(75499),p=r(30160),h=r(37361),_=r(22271),w=r(72473),x=r(70515),Z=r(24755),j=r(3917),v=r(50178),P=r(28598);function k(){var e=(0,a.useRouter)(),n=(0,i.useState)(!1),r=n[0],u=n[1],s=(0,v.PR)()||{},t=(s.id,s.owner),d=_.ZP.users.list({},{revalidateOnFocus:!1}).data,k=(0,i.useMemo)((function(){return(null==d?void 0:d.users)||[]}),[null==d?void 0:d.users]),b=[{bold:!r,label:function(){return"Users"}}];return r?(b[0].onClick=function(){return u(!1)},b.push({bold:!0,label:function(){return"New user"}})):b[0].linkProps={href:"/settings/workspace/users"},(0,P.jsxs)(o.Z,{appendBreadcrumbs:!0,breadcrumbs:b,title:"Users",uuidItemSelected:Z.B2.USERS,uuidWorkspaceSelected:Z.Pl.USER_MANAGEMENT,children:[r&&(0,P.jsx)(h.Z,{contained:!0,onCancel:function(){return u(!1)}}),!r&&(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsx)(f.Z,{p:x.cd,children:(0,P.jsx)(l.ZP,{beforeIcon:(0,P.jsx)(w.AddUserSmileyFace,{}),onClick:function(){return u(!0)},primary:!0,children:"Add new user"})}),(0,P.jsx)(c.Z,{light:!0}),(0,P.jsx)(m.Z,{columnFlex:[null,1,1,1,1,null,null],columns:[{label:function(){return""},uuid:"avatar"},{uuid:"Username"},{uuid:"First name"},{uuid:"Last name"},{uuid:"Email"},{uuid:"Role"},{rightAligned:!0,uuid:"Created"}],onClickRow:function(n){var r,u=null===(r=k[n])||void 0===r?void 0:r.id;e.push("/settings/workspace/users/".concat(u))},rows:k.map((function(e){var n=e.avatar,r=e.created_at,u=e.email,s=e.first_name,t=e.last_name,i=e.roles_display,a=e.roles_new,l=e.username,c=a||[];return c.sort((function(e,n){return e.id-n.id})),[(0,P.jsx)(p.ZP,{large:!0,rightAligned:!0,children:n},"avatar"),(0,P.jsx)(p.ZP,{children:l||"-"},"username"),(0,P.jsx)(p.ZP,{default:!0,children:s||"-"},"firstName"),(0,P.jsx)(p.ZP,{default:!0,children:t||"-"},"lastName"),(0,P.jsx)(p.ZP,{default:!0,children:u},"email"),(0,P.jsx)(p.ZP,{default:!0,children:c.length>0?c[0].name:i},"roles"),(0,P.jsx)(p.ZP,{default:!0,monospace:!0,children:r&&(0,j.d$)(r)},"created")]})),uuid:"pipeline-runs"})]})]})}k.getInitialProps=(0,u.Z)(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,d.Z)(k)},30808:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates/settings/workspace/users",function(){return r(57438)}])}},function(e){e.O(0,[1557,5699,3958,9774,2888,179],(function(){return n=30808,e(e.s=n);var n}));var n=e.O();_N_E=n}]);