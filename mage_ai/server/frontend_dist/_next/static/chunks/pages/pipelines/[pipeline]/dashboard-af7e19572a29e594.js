(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7983],{91175:function(t,e,n){"use strict";n.r(e);var c=n(77837),o=n(82394),r=n(38860),a=n.n(r),u=n(82684),i=n(36065),d=n(75457),p=n(93808),s=n(22271),_=n(35058),l=n(44425),f=n(75399),E=n(46684),b=n(28795),y=n(41143),Z=n(70515),g=n(81728),O=n(28598);function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t){var e=t.pipeline,n=null==e?void 0:e.uuid,c=s.ZP.pipelines.detail(n).data,r=(0,u.useMemo)((function(){return h(h({},null==c?void 0:c.pipeline),e)}),[c,e]),a=(0,u.useMemo)((function(){var t,e,c,r,a,u,i="Trigger active status",d=(0,g.kE)("".concat(i,"_").concat(n,"_").concat((0,g.Lo)())),p="Trigger types",s=(0,g.kE)("".concat(p,"_").concat(n,"_").concat((0,g.Lo)())),E="Trigger frequency",b=(0,g.kE)("".concat(E,"_").concat(n,"_").concat((0,g.Lo)())),Z="Pipeline run status",O=(0,g.kE)("".concat(Z,"_").concat(n,"_").concat((0,g.Lo)())),T="Pipeline runs daily",N=(0,g.kE)("".concat(T,"_").concat(n,"_").concat((0,g.Lo)())),C="Completed pipeline runs daily",I=(0,g.kE)("".concat(C,"_").concat(n,"_").concat((0,g.Lo)())),m="Failed pipeline runs daily",D=(0,g.kE)("".concat(m,"_").concat(n,"_").concat((0,g.Lo)())),P={pipeline_uuid:n,type:f.XO.PIPELINE_SCHEDULES},k={pipeline_uuid:n,type:f.XO.PIPELINE_RUNS},w={configuration:(t={},(0,o.Z)(t,_.eN,["execution_date"]),(0,o.Z)(t,_.bE,[{aggregation:_.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(t,_.Yg,_.aE.DAY),(0,o.Z)(t,"chart_type",_.oV.TIME_SERIES_LINE_CHART),t),data_source:k,type:l.tf.CHART};return{blocks:(u={},(0,o.Z)(u,d,{configuration:(e={},(0,o.Z)(e,_.eN,["status"]),(0,o.Z)(e,_.bE,[{aggregation:_.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(e,_.$1,_.MP.DESCENDING),(0,o.Z)(e,"chart_type",_.oV.BAR_CHART),e),data_source:P,name:i,type:l.tf.CHART,uuid:d}),(0,o.Z)(u,s,{configuration:(c={},(0,o.Z)(c,_.eN,["schedule_type"]),(0,o.Z)(c,"chart_type",_.oV.PIE_CHART),c),data_source:P,name:p,type:l.tf.CHART,uuid:s}),(0,o.Z)(u,b,{configuration:(r={},(0,o.Z)(r,_.eN,["schedule_interval"]),(0,o.Z)(r,_.bE,[{aggregation:_.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(r,_.$1,_.MP.DESCENDING),(0,o.Z)(r,"chart_style",_.JT.HORIZONTAL),(0,o.Z)(r,"chart_type",_.oV.BAR_CHART),r),data_source:P,name:E,type:l.tf.CHART,uuid:b}),(0,o.Z)(u,O,{configuration:(a={},(0,o.Z)(a,_.eN,["status"]),(0,o.Z)(a,_.bE,[{aggregation:_.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(a,_.$1,_.MP.DESCENDING),(0,o.Z)(a,"chart_style",_.JT.HORIZONTAL),(0,o.Z)(a,"chart_type",_.oV.BAR_CHART),a),data_source:k,name:Z,type:l.tf.CHART,uuid:O}),(0,o.Z)(u,N,h(h({},w),{},{name:T,uuid:N})),(0,o.Z)(u,I,h(h({},w),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(y.V.COMPLETED,"']\n"),name:C,uuid:I})),(0,o.Z)(u,D,h(h({},w),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(y.V.FAILED,"']\n"),name:m,uuid:D})),u),layout:[[{block_uuid:d,width:1},{block_uuid:s,width:1},{block_uuid:b,width:2}],[{block_uuid:O,width:1},{block_uuid:N,width:2}],[{block_uuid:I,width:1},{block_uuid:D,width:1}]]}}),[n]),p=(0,u.useMemo)((function(){return(0,O.jsx)(i.Z,{leftOffset:9*Z.iI,pageBlockLayoutTemplate:a,topOffset:E.Mz,uuid:"pipelines/".concat(n,"/dashboard")})}),[a,n]);return(0,O.jsx)(d.Z,{breadcrumbs:[{label:function(){return"Dashboard"}}],pageName:b.M.DASHBOARD,pipeline:r,title:function(t){var e=t.name;return"".concat(e," dashboard")},uuid:"".concat(b.M.DASHBOARD,"_").concat(n),children:p})}N.getInitialProps=function(){var t=(0,c.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.pipeline,t.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=(0,p.Z)(N)},47974:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/dashboard",function(){return n(91175)}])}},function(t){t.O(0,[3662,125,1799,2714,2379,2996,1557,3782,8095,4168,8023,6065,9774,2888,179],(function(){return e=47974,t(t.s=e);var e}));var e=t.O();_N_E=e}]);