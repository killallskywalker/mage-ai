(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{79264:function(e,n,t){"use strict";var i=t(82394),r=t(75582),l=t(82684),s=t(21764),o=t(46568),c=t(97618),a=t(68562),u=t(82682),d=t(30160),h=t(17488),p=t(36300),f=t(72473),b=t(31748),y=t(79633),m=t(70515),j=t(72619),g=t(33834),v=t(83455),x=t(22271),Z=t(28598);n.Z=function(e){var n=e.copyText,t=e.deleteVariable,_=e.disableKeyEdit,w=e.editStateInit,O=void 0!==w&&w,k=e.fetchVariables,P=e.focusKey,C=e.hideEdit,S=e.obfuscate,T=e.onEnterCallback,I=e.onEscapeCallback,E=e.pipelineUUID,M=e.updateVariable,D=e.variable||{},q=D.uuid,G=D.value,N=(0,l.useRef)(null),H=(0,l.useRef)(null),A=(0,l.useState)(!1),R=A[0],W=A[1],z=(0,l.useState)(q),L=z[0],U=z[1],V=(0,l.useState)(G),B=V[0],F=V[1],Y=(0,l.useState)(O),J=Y[0],K=Y[1],X=(0,v.Db)(x.ZP.variables.pipelines.useUpdate(E,q),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(){K(!1),k()}})}}),$=(0,r.Z)(X,1)[0],Q=(0,l.useCallback)((function(e){if("Enter"===e.key){var n=B;try{n=JSON.parse(B)}catch(e){}M?L&&B&&(null==M||M((0,i.Z)({},L,B)),K(!1)):$({variable:{name:L,value:n}}),(0,g.ez)(),null==T||T()}else"Escape"===e.key&&((0,g.ez)(),K(!1),null==I||I())}),[T,I,M,$,L,B]),ee=(0,l.useCallback)((function(){(0,g.ez)(),t()}),[t]);(0,l.useEffect)((function(){var e,n;J&&(P?null==N||null===(e=N.current)||void 0===e||e.focus():null==H||null===(n=H.current)||void 0===n||n.focus())}),[J,P]);var ne=n||"kwargs['".concat(q,"']");return(0,Z.jsx)("div",{onMouseEnter:function(){return W(!0)},onMouseLeave:function(){return W(!1)},children:(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(o.Z,{hiddenSmDown:!0,md:1,children:(0,Z.jsx)(p.qZ,{noPadding:!0,children:(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,centerText:!0,muted:!0,onClick:function(){navigator.clipboard.writeText(ne),s.Am.success("Successfully copied to clipboard.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:q})},small:!0,uuid:"Sidekick/GlobalVariables/".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Copy,{size:2.5*m.iI})})})}),(0,Z.jsx)(o.Z,{md:S?9:4,children:J&&!_?(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(h.Z,{borderless:!0,compact:!0,fullWidth:!0,monospace:!0,onChange:function(e){U(e.target.value),e.preventDefault()},onKeyDown:Q,paddingHorizontal:0,placeholder:"variable",ref:N,small:!0,value:L})}):(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(d.ZP,{color:y.Or,monospace:!0,small:!0,title:q,children:q})})}),(0,Z.jsx)(o.Z,{md:S?2:7,children:J?(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(h.Z,{borderless:!0,compact:!0,fullWidth:!0,monospace:!0,onChange:function(e){F(e.target.value),e.preventDefault()},onKeyDown:Q,paddingHorizontal:0,placeholder:"enter value",ref:H,small:!0,value:B})}):(0,Z.jsxs)(p.qZ,{children:[S?(0,Z.jsx)(d.ZP,{monospace:!0,small:!0,children:R?"*":"*******"}):(0,Z.jsx)(d.ZP,{monospace:!0,small:!0,title:G.toString(),children:G.toString()}),(0,Z.jsxs)(c.Z,{children:[!C&&R&&(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,inline:!0,muted:!0,onClick:function(){K(!0)},small:!0,uuid:"Sidekick/GlobalVariables/edit_".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Edit,{size:2.5*m.iI})}),t&&R&&(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,inline:!0,muted:!0,onClick:ee,small:!0,uuid:"Sidekick/GlobalVariables/delete_".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Trash,{size:2.5*m.iI})})]})]})})]})})}},36300:function(e,n,t){"use strict";t.d(n,{kA:function(){return a},qZ:function(){return u}});var i=t(9518),r=t(2842),l=t(4982),s=t(61896),o=t(47041),c=t(70515),a=(c.iI,l.O$,c.iI,s.dN,i.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-cr39lf-0"})(["height:calc(100vh - ","px - ","px);width:fit-content;",""],r.Wi,o.nn,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),i.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-cr39lf-1"})(["padding:","px;",""],2*c.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "})),i.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-cr39lf-2"})(["",""],(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))),u=i.default.td.withConfig({displayName:"indexstyle__CellStyle",componentId:"sc-cr39lf-3"})(["display:flex;align-items:center;justify-content:space-between;border:1px solid #1C1C1C;height:100%;",""],(function(e){return!e.noPadding&&"\n    padding: 0 ".concat(2*c.iI,"px;\n  ")}))},46568:function(e,n,t){"use strict";var i=t(82394),r=t(26304),l=(t(82684),t(33591)),s=t(28598),o=["children","fullHeight","gutter","style"];function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,c=e.style,u=void 0===c?{}:c,d=(0,r.Z)(e,o),h=a({},u);return i&&(h.paddingLeft=i,h.paddingRight=h.paddingLeft),t&&(h.height="100%"),(0,s.jsx)(l.Col,a(a({},d),{},{style:h,children:n}))}},82682:function(e,n,t){"use strict";var i=t(82394),r=t(26304),l=t(82684),s=t(33591),o=t(28598),c=["children","fullHeight","gutter","justifyContent","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,a=e.justifyContent,d=e.style,h=void 0===d?{}:d,p=(0,r.Z)(e,c),f=u({},h);return i&&(f.marginLeft=-1*i,f.marginRight=f.marginLeft),t&&(f.height="100%"),(0,o.jsx)(s.Row,u(u({},p),{},{justifyContent:a,style:f,children:l.Children.map(n,(function(e,n){return e&&l.cloneElement(e,{gutter:i,key:n})}))}))}},60480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var i,r=t(77837),l=t(82394),s=t(75582),o=t(38860),c=t.n(o),a=t(82684),u=t(12691),d=t.n(u),h=t(21764),p=t(83455),f=t(71180),b=t(90299),y=t(70652),m=t(50724),j=t(15338),g=t(1402),v=t(55485),x=t(85854),Z=t(48670),_=t(93808),w=t(44085),O=t(28274),k=t(38276);!function(e){e.SSH="ssh",e.HTTPS="https"}(i||(i={}));var P=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],C=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",type:"password",uuid:"ssh_private_key"}],S=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret. You will see the secret below if you have already added it.",required:!0,type:"password",uuid:"access_token"}],T=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],I=t(30160),E=t(17488),M=t(79264),D=t(22271),q=t(70515),G=t(24755),N=t(15610),H=t(72619),A=t(69419),R=t(28598);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L={label:function(){return"One-way Git Sync"},uuid:"git_sync"},U={label:function(){return"Git Actions"},uuid:"git_integration"},V=[L,U];function B(){var e=D.ZP.syncs.list(),n=e.data,t=e.mutate,r=(0,a.useState)(null),o=r[0],c=r[1],u=(0,a.useState)(null),_=u[0],W=u[1],B=(0,a.useState)(null),F=B[0],Y=B[1];(0,a.useEffect)((function(){if(n){var e,t=null==n||null===(e=n.syncs)||void 0===e?void 0:e[0];W(null==t?void 0:t.user_git_settings),c(t)}}),[n]);var J=(0,a.useMemo)((function(){if(n){var e,t=null==n||null===(e=n.syncs)||void 0===e?void 0:e[0];return!(null==t||!t.branch)}return!1}),[n]),K=D.ZP.git_branches.detail("test",{_format:"with_basic_details"},{revalidateOnFocus:!1}),X=K.data,$=(K.mutate,(0,a.useMemo)((function(){return(null==X?void 0:X.git_branch)||{}}),[X]).is_git_integration_enabled),Q=(0,p.Db)(D.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){var n=e.sync;n&&(c(n),window.location.reload(),h.Am.success("Sync saved",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e,n){return Y({errors:n,response:e})}})}}),ee=(0,s.Z)(Q,2),ne=ee[0],te=ee[1].isLoading,ie=(0,p.Db)(D.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){e.sync&&h.Am.success("Success!",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e,n){return Y({errors:n,response:e})}})}}),re=(0,s.Z)(ie,2),le=re[0],se=re[1].isLoading,oe=(0,p.Db)((function(e){return D.ZP.secrets.useDelete(e)()}),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(){t()},onErrorCallback:function(e){var n=e.error,t=(n.errors,n.message);setErrorMessages((function(e){return e.concat(t)}))}})}}),ce=(0,s.Z)(oe,1)[0],ae=(0,a.useMemo)((function(){return(null==o?void 0:o.auth_type)||i.SSH}),[null==o?void 0:o.auth_type]),ue=(0,a.useMemo)((function(){return ae===i.HTTPS?S:C}),[ae]),de=D.ZP.statuses.list().data,he=(0,a.useMemo)((function(){var e,n;return null==de||null===(e=de.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.require_user_authentication}),[de]),pe=(0,a.useMemo)((function(){return V}),[]),fe=(0,a.useState)(),be=fe[0],ye=fe[1];(0,a.useEffect)((function(){be||ye($?U:L)}),[$,be]);var me=(0,a.useMemo)((function(){var e,n=c,t=o;(null==be?void 0:be.uuid)===U.uuid&&he&&(n=W,t=_);var i=Object.entries(t||{}).filter((function(e){var n=(0,s.Z)(e,2),t=n[0],i=n[1];return t.endsWith("_secret_name")&&!!i}));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("form",{children:ue.map((function(e){var i,r,s=e.autoComplete,o=e.disabled,c=e.label,a=e.labelDescription,u=e.required,d=e.type,p=e.uuid;return r="ssh_public_key"===p?(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsxs)(I.ZP,{small:!0,children:["Run ",(0,R.jsx)(Z.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n && echo"),h.Am.success("Successfully copied to clipboard.",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:p})},small:!0,children:"cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n && echo"})," in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret. You will see the secret below if you have already added it."]})}):"ssh_private_key"===p?(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsxs)(I.ZP,{small:!0,children:["Follow same steps as the public key, but run ",(0,R.jsx)(Z.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"),h.Am.success("Successfully copied to clipboard.",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:p})},small:!0,children:"cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"})," instead. The key will be stored as a Mage secret. You will see the secret below if you have already added it."]})}):a&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{small:!0,children:a})}),(0,R.jsxs)(k.Z,{mt:2,children:[r,(0,R.jsx)(E.Z,{autoComplete:s,disabled:o,label:c,onChange:function(e){n((function(n){return z(z({},n),{},(0,l.Z)({},p,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:d,value:(null===(i=t)||void 0===i?void 0:i[p])||""})]},p)}))}),(0,R.jsx)(k.Z,{mb:1,mt:q.Mq,children:(0,R.jsx)(x.Z,{level:5,children:"Git secrets"})}),i&&i.length>0?i.map((function(e){var n=(0,s.Z)(e,2),t=(n[0],n[1]);return(0,R.jsx)(M.Z,{deleteVariable:function(){return ce(t)},hideEdit:!0,obfuscate:!0,variable:{uuid:t,value:"placeholder"}},t)})):(0,R.jsxs)(I.ZP,{children:["You have no Git secrets saved for ",null==be||null===(e=be.label)||void 0===e?void 0:e.call(be)]})]})}),[ue,ce,he,be,W,c,o,_]),je=(0,A.iV)();(0,a.useEffect)((function(){null!=je&&je.tab&&ye(pe.find((function(e){return e.uuid===(null==je?void 0:je.tab)})))}),[je,pe]);var ge=(0,a.useMemo)((function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.Z,{mt:q.Mq,children:[(0,R.jsxs)(I.ZP,{inline:!0,children:["To learn more about One-way git sync, click"," "]}),(0,R.jsx)(Z.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git-sync",openNewWindow:!0,children:"here"})]}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Sync with a specified branch. These settings will be saved at the project level."})}),(0,R.jsx)("form",{children:T.map((function(e){var n=e.autoComplete,t=e.disabled,i=e.label,r=e.required,s=e.type,a=e.uuid;return(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(E.Z,{autoComplete:n,disabled:t,label:i,onChange:function(e){c((function(n){return z(z({},n),{},(0,l.Z)({},a,e.target.value))}))},primary:!0,required:r,setContentOnMount:!0,type:s,value:(null==o?void 0:o[a])||""})},a)}))}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(y.Z,{checked:null==o?void 0:o.sync_submodules,label:"Include submodules",onClick:function(){c((function(e){return z(z({},e),{},{sync_submodules:!(null!=o&&o.sync_submodules)})}))}})})}),(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(x.Z,{level:5,children:"Additional sync settings"})}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(y.Z,{checked:null==o?void 0:o.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){c((function(e){return z(z({},e),{},{sync_on_pipeline_run:!(null!=o&&o.sync_on_pipeline_run)})}))}})})}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(y.Z,{checked:null==o?void 0:o.sync_on_start,label:"Sync on server start up",onClick:function(){c((function(e){return z(z({},e),{},{sync_on_start:!(null!=o&&o.sync_on_start)})}))}})})}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Configure the Git authentication credentials that will be used to sync with the specified Git repository."})}),me]})}),[o,me]),ve=(0,a.useMemo)((function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.Z,{mt:q.Mq,children:[!$&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{bold:!0,warning:!0,children:"When One-way git sync is enabled, you will be unable to access the Git Actions modal. If you want to bypass this safeguard, set the GIT_ENABLE_GIT_INTEGRATION environment variable."})}),(0,R.jsxs)(I.ZP,{bold:!0,children:["We recommend using the ",(0,R.jsx)(d(),{as:"/version-control",href:"/version-control",children:(0,R.jsx)(Z.Z,{bold:!0,inline:!0,children:"version control app"})})," unless you have a specific need to use the Git Actions modal."]})]}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{children:"These fields are required to help Mage configure your Git settings. These settings will be specific to your user."})}),me]})}),[$,me]);return(0,R.jsx)(O.Z,{uuidItemSelected:G.fF,uuidWorkspaceSelected:G.WH,children:(0,R.jsxs)(k.Z,{p:q.cd,style:{width:"600px"},children:[(0,R.jsx)(x.Z,{children:"Git repository settings"}),(0,R.jsx)(k.Z,{mt:1,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Authentication type"})}),(0,R.jsx)(k.Z,{mt:1,children:(0,R.jsx)(w.Z,{compact:!0,label:"Authentication type",onChange:function(e){var n=e.target.value;c((function(e){return z(z({},e),{},{auth_type:n})}))},value:ae,children:Object.entries(i).map((function(e){var n=(0,s.Z)(e,2),t=n[0],i=n[1];return(0,R.jsx)("option",{value:i,children:t},i)}))})}),(0,R.jsx)(k.Z,{mt:q.Mq,children:ae===i.SSH&&(0,R.jsxs)(I.ZP,{bold:!0,children:["You will need to ",(0,R.jsx)(Z.Z,{href:"https://docs.mage.ai/development/git/configure#generate-ssh-token",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})}),(0,R.jsx)("form",{children:P.map((function(e){var n=e.autoComplete,t=e.disabled,i=e.label,r=e.labelDescription,s=e.required,a=e.type,u=e.uuid;return(0,R.jsxs)(k.Z,{mt:2,children:[r&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{small:!0,children:r})}),(0,R.jsx)(E.Z,{autoComplete:n,disabled:t,label:i,onChange:function(e){c((function(n){return z(z({},n),{},(0,l.Z)({},u,e.target.value))}))},primary:!0,required:s,setContentOnMount:!0,type:a,value:(null==o?void 0:o[u])||""})]},u)}))}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(j.Z,{light:!0})}),(0,R.jsx)(b.Z,{onClickTab:function(e){var n=e.uuid;(0,N.u)({tab:n})},selectedTabUUID:null==be?void 0:be.uuid,tabs:pe,underlineStyle:!0}),(0,R.jsx)(j.Z,{light:!0}),(0,R.jsxs)(k.Z,{ml:2,children:[L.uuid===(null==be?void 0:be.uuid)&&ge,U.uuid===(null==be?void 0:be.uuid)&&ve]}),(0,R.jsx)(k.Z,{mt:q.HN,children:(0,R.jsx)(f.ZP,{loading:te,onClick:function(){return ne({sync:z(z({},o),{},{user_git_settings:_})})},primary:!0,children:"Save repository settings"})}),F&&(0,R.jsx)(m.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null==Y?void 0:Y(null)},children:(0,R.jsx)(g.Z,z(z({},F),{},{onClose:function(){return null==Y?void 0:Y(null)}}))}),J&&(0,R.jsxs)(k.Z,{mt:q.HN,children:[(0,R.jsx)(x.Z,{children:"Synchronize code from remote repository"}),(0,R.jsxs)(k.Z,{mt:1,children:[(0,R.jsxs)(I.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,R.jsx)("br",{}),"This may ",(0,R.jsx)(I.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you’ve committed or backed up your current changes."]}),(0,R.jsx)(k.Z,{mt:2}),(0,R.jsxs)(I.ZP,{children:["Reset will tell Mage to try to clone your repository from remote. This will also ",(0,R.jsx)(I.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," all your local changes and reset any settings you may have configured for your local Git repo. This may be helpful if you are having issues syncing your repository."]})]}),(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsxs)(v.ZP,{children:[(0,R.jsx)(f.ZP,{loading:se,onClick:function(){return le({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"}),(0,R.jsx)(k.Z,{ml:2}),(0,R.jsx)(f.ZP,{danger:!0,loading:se,onClick:function(){return le({sync:{action_type:"reset"}})},children:"Reset repository"})]})})]})]})})}B.getInitialProps=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var F=(0,_.Z)(B)},37056:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return t(60480)}])}},function(e){e.O(0,[125,1799,2379,1557,5699,8095,4982,9774,2888,179],(function(){return n=37056,e(e.s=n);var n}));var n=e.O();_N_E=n}]);