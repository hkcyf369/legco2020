(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+xWQ":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("tRbT");t.a=function(e){var t=e.children;return r.a.createElement(i.a,{container:!0,spacing:2},t.map((function(e){return r.a.createElement(i.a,{item:!0,xs:12,sm:6,md:4},e)})))}},"469l":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("5AJ6"),s=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=i.forwardRef((function(e,t){var a=e.alt,c=e.children,l=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,p=e.imgProps,f=e.sizes,b=e.src,g=e.srcSet,h=e.variant,v=void 0===h?"circle":h,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,k=function(e){var t=e.src,a=e.srcSet,n=i.useState(!1),r=n[0],o=n[1];return i.useEffect((function(){if(t||a){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,a]),r}({src:b,srcSet:g}),w=b||g,E=w&&"error"!==k;return x=E?i.createElement("img",Object(n.a)({alt:a,src:b,srcSet:g,sizes:f,className:l.img},p)):null!=c?c:w&&a?a[0]:i.createElement(s,{className:l.fallback}),i.createElement(m,Object(n.a)({className:Object(o.a)(l.root,l.system,l[v],d,!E&&l.colorDefault),ref:t},y),x)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},"6JlU":function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("pJf4"),a("E5k/"),a("zTTH");var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("469l"),c=a("ofer"),l=a("9Koi"),s=a("efpO");var d=Object(i.b)(o.a).withConfig({displayName:"People__CampAvatar",componentId:"sc-14rjn9w-0"})(["width:","px;height:","px;border:","px "," solid;opacity:",";"],(function(e){return e.xsdimension||48}),(function(e){return e.xsdimension||48}),(function(e){return e.camp?e.border||3:0}),(function(e){return t=e.camp,{demo:(a=e.theme).palette.warning.main,beijing:a.palette.info.main,other:a.palette.success.main}[t];var t,a}),(function(e){return e.opacity||1})),u=i.b.div.withConfig({displayName:"People__PeopleWrapper",componentId:"sc-14rjn9w-1"})([".avatar-group{display:flex;flex-direction:column;align-items:center;justify-content:space-end;}","{.avatar{width:64px;height:64px;}}.avatar.demo{border:3px "," solid;}.avatar.beijing{border:3px "," solid;}.avatar.other{border:3px "," solid;}.center{font-size:12px;text-align:center;display:flex;flex-direction:column;align-items:center;}"],(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.palette.warning.main}),(function(e){return e.theme.palette.info.main}),(function(e){return e.theme.palette.success.main})),m=function(e){var t=e.info,a=e.imgUrl,n=e.onClick,i=e.xsdimension,o=e.showName,c=void 0===o||o,m=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["info","imgUrl","onClick","xsdimension","showName"]),p=Object(l.a)().i18n,f=Object(s.c)(p,t,"name");return r.a.createElement(u,{className:"avatar-group clickable",onClick:n,onKeyDown:function(){}},r.a.createElement("div",Object.assign({className:"center"},m),r.a.createElement(d,{alt:f,src:a,camp:t.camp&&t.camp.toLowerCase(),xsdimension:i},r.a.createElement("img",{alt:f,src:t.img_url,style:{maxWidth:"100%"}})),c&&r.a.createElement("span",null,f+(t.tags&&-1!==t.tags.findIndex((function(e){return"不參加民主派初選"===e.name_zh}))?"*":""))))},p=function(e){var t=e.onClick,a=e.name,n=e.info,o=e.subText,l=e.imgUrl,s=e.status,u=i.b.div.withConfig({displayName:"People__Wrapper",componentId:"sc-14rjn9w-2"})(["display:flex;.avatar-wrapper{position:relative;.icon{position:absolute;bottom:0;right:0;svg{width:20px;height:20px;}}}.main{margin-left:","px;display:flex;flex-direction:column;justify-content:center;}.subText{line-height:0.8rem;}"],(function(e){return e.theme.spacing(1)}));return r.a.createElement(u,{item:!0,onClick:t},r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement(d,{alt:a,src:l,camp:n.camp.toLowerCase(),xsdimension:56,border:5,opacity:s.opacity},r.a.createElement("img",{alt:a,src:n.img_url,style:{maxWidth:"100%"}})),s.icon&&r.a.createElement("div",{className:"icon"},s.icon)),r.a.createElement("div",{className:"main"},r.a.createElement(c.a,{variant:"h5"},a),r.a.createElement(c.a,{className:"subText",variant:"caption",color:"textSecondary"},o)))}},HbF4:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("tRbT"),o=a("ofer"),c=a("vOnD"),l=Object(c.b)(i.a).withConfig({displayName:"LinkBox__List",componentId:"sc-15fbmda-0"})(["box-shadow:0 1px 6px 0 ",";line-height:0;.details{padding-left:","px;padding-right:","px;display:flex;flex-direction:column;justify-content:center;}img{width:100%;}"],(function(e){return e.theme.palette.divider}),(function(e){return e.theme.spacing(1.5)}),(function(e){return e.theme.spacing(1.5)})),s=c.b.div.withConfig({displayName:"LinkBox__FlexList",componentId:"sc-15fbmda-1"})(["box-shadow:0 1px 6px 0 ",";line-height:0;"],(function(e){return e.theme.palette.divider})),d=function(e){var t=e.onClick,a=e.image,n=e.title,c=e.subTitle;return r.a.createElement(l,{container:!0,className:"clickable",key:n,onClick:t},r.a.createElement(i.a,{item:!0,xs:4},a),r.a.createElement(i.a,{item:!0,xs:8,className:"details"},c&&r.a.createElement(o.a,{variant:"caption",color:"textSecondary"},c),r.a.createElement(o.a,{variant:"h6"},n)))},u=function(e){var t=e.key,a=e.onClick,n=e.children;return r.a.createElement(s,{className:"clickable",key:t,onClick:a},n)}},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,r=e.value,i=e.nonInteraction,o=void 0!==i&&i,c=e.transport,l=e.hitCallback,s=e.callbackTimeout,d=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var u={eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteraction:o,transport:c};l&&"function"==typeof l&&(u.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(l,d)),window.ga("send","event",u)}};var r=n(a("pVnL")),i=n(a("8OQS")),o=n(a("q1tI")),c=n(a("17x9"));function l(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,c=e.eventValue,l=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,r.default)({},l,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var i=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:c,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}l.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},X689:function(e,t,a){"use strict";a.r(t);a("gu/5"),a("eoYm"),a("HQhv"),a("zGcK"),a("YBKJ");var n=a("vl8L"),r=a("q1tI"),i=a.n(r),o=a("tRbT"),c=a("ofer"),l=a("Ji2X"),s=a("XX3T"),d=a("vOnD"),u=a("9Koi"),m=a("rsHp"),p=a("h2rB"),f=a("7Qib"),b=a("efpO"),g=a("Wbzz"),h=a("6JlU"),v=a("c077"),y=a("+xWQ"),x=a("vrFN"),k=a("HbF4"),w=a("tr08"),E=a("ma3e"),O=a("Kfvu"),j=d.b.div.withConfig({displayName:"Primaries__Nav",componentId:"sc-114h9g1-0"})(["padding-bottom:","px;overflow-x:auto;white-space:nowrap;.nav-link{color:",";text-decoration:none;font-size:14px;margin-bottom:","px;margin-right:","px;padding:3px 8px;}.active{font-weight:700;color:#ffffff;background:",";border-radius:5px;}"],(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.secondary.main})),_=Object(d.b)(o.a).withConfig({displayName:"Primaries__Header",componentId:"sc-114h9g1-1"})(["margin-bottom:","px;.title-box{margin-right:","px;}}.title{font-size:24px;font-weight:700;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(3)})),C=d.b.div.withConfig({displayName:"Primaries__CandidatesWrapper",componentId:"sc-114h9g1-2"})(["margin-top:","px;display:grid;grid-row-gap:","px;grid-column-gap:","px;grid-template-columns:repeat(2,1fr);","{grid-template-columns:repeat(4,1fr);}","{grid-template-columns:repeat(6,1fr);}.candi-box{display:flex;align-items:center;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(1.5)}),(function(e){return e.theme.breakpoints.up("sm")}),(function(e){return e.theme.breakpoints.up("md")}));t.default=function(e){var t=e.pageContext,a=t.uri,r=t.allConstituencies,d=t.constituency,N=t.candidates,I=t.assets,z=Object(u.a)(),T=z.t,S=z.i18n,F=n.data.site,R=Object(w.a)(),L=[];return I.length&&L.push({name:"election_forum",title:T("election_forum"),content:i.a.createElement(y.a,null,I.map((function(e){return i.a.createElement(k.a,{key:e.id,onClick:function(){window.open(Object(f.e)({assetId:e.asset_id,type:e.type}).videoUrl,"_blank")},image:i.a.createElement("img",{style:{height:"100%"},src:Object(f.e)({assetId:e.asset_id,type:e.type,thumbnailUrl:e.thumbnail_url}).imgUrl,alt:e.title}),title:e.title,subTitle:e.channel})})))}),i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{uri:a,titleOveride:T("primary.title")+" | "+Object(b.c)(S,d,"name"),meta:[{property:"og:title",content:T("primary.title")+" | "+Object(b.c)(S,d,"name")},{property:"og:description",content:Object(b.c)(S,d,"primary_description")}]}),i.a.createElement(j,null,r.map((function(e){return i.a.createElement(g.Link,{key:e.node.key,className:"nav-link "+(e.node.key===d.key?"active":""),to:Object(b.a)(S,"/primaries/"+e.node.key)},Object(b.c)(S,e.node,"alias"))}))),i.a.createElement(_,{container:!0},i.a.createElement(o.a,{item:!0},i.a.createElement(o.a,{container:!0,direction:"column",justify:"center",className:"title-box"},i.a.createElement("div",{className:"title"},Object(b.c)(S,d,"name")),i.a.createElement(c.a,{variant:"body2",color:"textSecondary"},Object(b.c)(S,d,"primary_rule")),i.a.createElement(c.a,{variant:"body2",color:"textSecondary"},T("list_count",{list_count:N.length})))),i.a.createElement(o.a,{item:!0},m.a[d.key]&&i.a.createElement(p.a,{title:{vote:T("dc2019_demo_beijing_ratio"),seat:Number(d.target)>0?T("demo_target",{target:d.target}):T("demo_target_not_decide")},votes:m.a[d.key].votes,seats:Object(f.b)(d)}))),Object(b.c)(S,d,"primary_description")&&i.a.createElement(c.a,{className:"block",variant:"body2",dangerouslySetInnerHTML:{__html:Object(b.c)(S,d,"primary_description")}}),i.a.createElement(C,null,N.sort((function(e,t){return e.node.primary_list_no&&t.node.primary_list_no?Number(e.node.primary_list_no)>Number(t.node.primary_list_no)?1:-1:e.node.name_en>t.node.name_en?1:-1})).map((function(e){return i.a.createElement(o.a,{item:!0,key:Object(b.c)(S,e.node,"name"),className:"clickable"},i.a.createElement(h.a,{item:!0,imgUrl:F.siteMetadata.siteUrl+"/images/avatars/"+e.node.uuid+".png",key:e.node.name_zh,info:e.node,name:Object(b.c)(S,e.node,"name"),subText:Object(b.c)(S,e.node,"title")&&Object(b.c)(S,e.node,"title").split(/[，、,]+/).shift(),onClick:function(){Object(g.navigate)(Object(b.a)(S,"/profile/"+e.node.uuid+"/"+e.node.name_zh))},status:Object(f.d)(e.node)}))}))),i.a.createElement(v.a,{sections:L,pageName:"primary_"+d.name_zh}),["HKI","KLW","KLE","NTW","NTE","HS"].includes(d.key)&&i.a.createElement(l.a,{maxWidth:"lg"},i.a.createElement(s.a,{className:"clickable",onClick:function(){Object(O.trackCustomEvent)({category:"primaries_stations",action:"click_primaries_stations",label:d.name_zh}),Object(g.navigate)(Object(b.a)(S,"/primaries/stations/"+d.key))},variant:"extended",size:"medium","aria-label":"add",style:{position:"fixed",bottom:R.spacing(2),right:R.spacing(2),backgroundColor:R.palette.secondary.main,color:"#FFFFFF"}},i.a.createElement(E.d,{style:{width:24,height:24,marginRight:R.spacing(1)}}),T("primaries_stations.title"))))}},XX3T:function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("VD++"),s=a("NqtD"),d=i.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,u=e.color,m=void 0===u?"default":u,p=e.component,f=void 0===p?"button":p,b=e.disabled,g=void 0!==b&&b,h=e.disableFocusRipple,v=void 0!==h&&h,y=e.focusVisibleClassName,x=e.size,k=void 0===x?"large":x,w=e.variant,E=void 0===w?"round":w,O=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(l.a,Object(r.a)({className:Object(o.a)(c.root,d,"round"!==E&&c.extended,"large"!==k&&c["size".concat(Object(s.a)(k))],g&&c.disabled,{primary:c.primary,secondary:c.secondary,inherit:c.colorInherit}[m]),component:f,disabled:g,focusRipple:!v,focusVisibleClassName:Object(o.a)(c.focusVisible,y),ref:t},O),i.createElement("span",{className:c.label},a))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)(Object(r.a)({},e.typography.button),{},{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},c077:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("tr08"),c=a("lopY"),l=a("esk+"),s=a("ofer"),d=a("Kfvu"),u=i.b.div.withConfig({displayName:"ResponsiveSections__DesktopWrapper",componentId:"z68g0-0"})([".title{margin:","px 0;}.content{padding:","px 0 ","px;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(2)}));t.a=function(e){var t=e.sections,a=e.pageName,n=e.variant,i=Object(o.a)();return Object(c.a)(i.breakpoints.up("md"))?r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(u,null,r.a.createElement("div",{className:"title"},r.a.createElement(s.a,{variant:"h4"},e.title)),r.a.createElement("div",{className:"content"},e.content))}))):r.a.createElement(l.a,{variant:n,tabs:t,onTabChange:function(e){Object(d.trackCustomEvent)({category:a,action:"tab_select",label:e})}})}},h2rB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("e89E"),o=a("VphZ"),c=a("tr08"),l=a("20nU"),s=24,d=3,u=5,m=12;t.a=function(e){var t=e.votes,a=e.seats,p=e.title,f=Object(n.useRef)(),b=Object(n.useRef)(),g=Object(i.a)(b),h=Object(c.a)();return Object(n.useEffect)((function(){var e=Object(o.b)(f.current);if(g){var n=s,r=u,i=d,c=m,b=t.DEMO+t.BEIJING,v=Object(o.a)().domain([0,b]).range([0,100]),y=[{value:t.DEMO,cumulative:0,percentage:v(t.DEMO),color:l.a.FC_EXPECTED_WIN_DEMO},{value:t.BEIJING,cumulative:t.DEMO,percentage:v(t.BEIJING),color:l.a.FC_EXPECTED_WIN_BEIJING}],x=Object(o.a)().domain([0,b]).range([0,n*a.length]);e.selectAll(".vote-label").remove(),e.append("text").attr("class","vote-label").attr("text-anchor","start").attr("x",0).attr("y",0).attr("transform","translate(0,"+c+")").style("fill",h.palette.text.primary).style("font-size",c).style("font-weight",400).text(p.vote),e.selectAll(".vote-stacked").data(y).join("rect").attr("class","vote-stacked").attr("x",(function(e){return x(e.cumulative)})).attr("y",c+i).attr("height",n).attr("width",(function(e){return x(e.value)})).style("fill",(function(e){return e.color})).style("stroke",h.palette.background.paper),e.selectAll(".seat-label").remove(),e.append("text").attr("class","seat-label").attr("text-anchor","start").attr("x",0).attr("y",c+i+n+r/2).attr("transform","translate(0,"+c+")").style("fill",h.palette.text.primary).style("font-size",c).style("font-weight",400).text(p.seat),e.selectAll(".seat-stacked").remove(),e.selectAll("seat").data(a).join("rect").attr("class","seat-stacked").attr("x",(function(e,t){return t*n})).attr("y",c+i+n+r+c).attr("height",n).attr("width",n).style("fill",(function(e){return e.color})).style("stroke",h.palette.background.paper),e.selectAll(".text-percentage-label").data(y).join("text").attr("class","text-percentage-label").attr("text-anchor","middle").attr("x",(function(e){return x(e.cumulative)+x(e.value)/2})).attr("y",c+i+n/2+5).style("fill","#000000").style("font-size",16).style("font-weight",700).text((function(e){return e.percentage.toFixed(0)+"%"}))}}),[t,a,g]),r.a.createElement("div",{ref:b},r.a.createElement("svg",{ref:f,style:{overflow:"visible",display:"block",width:s*a.length+"px",height:"84px"}}))}},vl8L:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://legco2020.vote4.hk"}}}}')}}]);
//# sourceMappingURL=component---src-templates-primaries-js-89bc97e2d7fd59d3338a.js.map