(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"469l":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),c=a("iuhU"),l=a("H2TA"),o=a("5AJ6"),s=Object(o.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=i.forwardRef((function(e,t){var a=e.alt,l=e.children,o=e.classes,m=e.className,u=e.component,p=void 0===u?"div":u,d=e.imgProps,f=e.sizes,g=e.src,h=e.srcSet,v=e.variant,b=void 0===v?"circle":v,x=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,y=function(e){var t=e.src,a=e.srcSet,n=i.useState(!1),r=n[0],c=n[1];return i.useEffect((function(){if(t||a){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),r}({src:g,srcSet:h}),j=g||h,O=j&&"error"!==y;return E=O?i.createElement("img",Object(n.a)({alt:a,src:g,srcSet:h,sizes:f,className:o.img},d)):null!=l?l:j&&a?a[0]:i.createElement(s,{className:o.fallback}),i.createElement(p,Object(n.a)({className:Object(c.a)(o.root,o.system,o[b],m,!O&&o.colorDefault),ref:t},x),E)}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},"5AJ6":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("wx14"),r=a("q1tI"),i=a.n(r),c=a("HR5l");function l(e,t){var a=i.a.memo(i.a.forwardRef((function(t,a){return i.a.createElement(c.a,Object(n.a)({ref:a},t),e)})));return a.muiName=c.a.muiName,a}},"6JlU":function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return d}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("pJf4"),a("E5k/"),a("zTTH");var n=a("q1tI"),r=a.n(n),i=a("vOnD"),c=a("469l"),l=a("ofer"),o=a("9Koi"),s=a("efpO");var m=Object(i.b)(c.a).withConfig({displayName:"People__CampAvatar",componentId:"sc-14rjn9w-0"})(["width:","px;height:","px;border:","px "," solid;opacity:",";"],(function(e){return e.xsdimension||48}),(function(e){return e.xsdimension||48}),(function(e){return e.camp?e.border||3:0}),(function(e){return t=e.camp,{demo:(a=e.theme).palette.warning.main,beijing:a.palette.info.main,other:a.palette.success.main}[t];var t,a}),(function(e){return e.opacity||1})),u=i.b.div.withConfig({displayName:"People__PeopleWrapper",componentId:"sc-14rjn9w-1"})([".avatar-group{display:flex;flex-direction:column;align-items:center;justify-content:space-end;}","{.avatar{width:64px;height:64px;}}.avatar.demo{border:3px "," solid;}.avatar.beijing{border:3px "," solid;}.avatar.other{border:3px "," solid;}.center{font-size:12px;text-align:center;display:flex;flex-direction:column;align-items:center;}"],(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.palette.warning.main}),(function(e){return e.theme.palette.info.main}),(function(e){return e.theme.palette.success.main})),p=function(e){var t=e.info,a=e.imgUrl,n=e.onClick,i=e.xsdimension,c=e.showName,l=void 0===c||c,p=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["info","imgUrl","onClick","xsdimension","showName"]),d=Object(o.a)().i18n,f=Object(s.c)(d,t,"name");return r.a.createElement(u,{className:"avatar-group clickable",onClick:n,onKeyDown:function(){}},r.a.createElement("div",Object.assign({className:"center"},p),r.a.createElement(m,{alt:f,src:a,camp:t.camp&&t.camp.toLowerCase(),xsdimension:i},r.a.createElement("img",{alt:f,src:t.img_url,style:{maxWidth:"100%"}})),l&&r.a.createElement("span",null,f+(t.tags&&-1!==t.tags.findIndex((function(e){return"不參加民主派初選"===e.name_zh}))?"*":""))))},d=function(e){var t=e.onClick,a=e.name,n=e.info,c=e.subText,o=e.imgUrl,s=e.status,u=i.b.div.withConfig({displayName:"People__Wrapper",componentId:"sc-14rjn9w-2"})(["display:flex;.avatar-wrapper{position:relative;.icon{position:absolute;bottom:0;right:0;svg{width:20px;height:20px;}}}.main{margin-left:","px;display:flex;flex-direction:column;justify-content:center;}.subText{line-height:0.8rem;}"],(function(e){return e.theme.spacing(1)}));return r.a.createElement(u,{item:!0,onClick:t},r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement(m,{alt:a,src:o,camp:n.camp.toLowerCase(),xsdimension:56,border:5,opacity:s.opacity},r.a.createElement("img",{alt:a,src:n.img_url,style:{maxWidth:"100%"}})),s.icon&&r.a.createElement("div",{className:"icon"},s.icon)),r.a.createElement("div",{className:"main"},r.a.createElement(l.a,{variant:"h5"},a),r.a.createElement(l.a,{className:"subText",variant:"caption",color:"textSecondary"},c)))}},"U/uD":function(e,t,a){"use strict";a.r(t);var n=a("vl8L"),r=a("q1tI"),i=a.n(r),c=a("tRbT"),l=a("ofer"),o=a("vOnD"),s=a("9Koi"),m=a("rsHp"),u=a("h2rB"),p=a("7Qib"),d=a("efpO"),f=a("6JlU"),g=a("vrFN"),h=a("Wbzz"),v=Object(o.b)(c.a).withConfig({displayName:"GeoFuncDc2Constituency__GeoHeader",componentId:"zjl6u1-0"})([".title-box{margin-right:","px;}}.title{font-size:24px;font-weight:700;}"],(function(e){return e.theme.spacing(3)})),b=Object(o.b)(c.a).withConfig({displayName:"GeoFuncDc2Constituency__CampWrapper",componentId:"zjl6u1-1"})([".list-number{font-size:32px;font-weight:900;}.right{text-align:right;}.camp-text{color:#000000;padding:3px 5px;font-weight:700;}.camp-text.demo{background:",";}.camp-text.beijing{background:",";}.camp-text.other{background:",";}"],(function(e){return e.theme.palette.warning.light}),(function(e){return e.theme.palette.info.light}),(function(e){return e.theme.palette.success.light})),x=o.b.div.withConfig({displayName:"GeoFuncDc2Constituency__CandidatesWrapper",componentId:"zjl6u1-2"})(["display:grid;grid-gap:","px;grid-template-columns:repeat(3,1fr);","{grid-template-columns:repeat(4,1fr);}","{grid-template-columns:repeat(6,1fr);}"],(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.breakpoints.up("sm")}),(function(e){return e.theme.breakpoints.up("md")}));t.default=function(e){var t=e.pageContext,a=t.uri,r=t.constituency,o=t.candidates,E=Object(s.a)(),y=E.t,j=E.i18n,O=n.data.site,w=o.filter((function(e){return"DEMO"===e.node.camp})),N=o.filter((function(e){return"BEIJING"===e.node.camp})),k=o.filter((function(e){return"OTHER"===e.node.camp}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{uri:a,titleOveride:Object(d.c)(j,r,"name"),meta:[{property:"og:title",content:Object(d.c)(j,r,"name")},{property:"og:description",content:Object(d.c)(j,r,"description")}]}),i.a.createElement(v,{container:!0},i.a.createElement(c.a,{item:!0},i.a.createElement(c.a,{container:!0,direction:"column",justify:"center",className:"title-box"},i.a.createElement(l.a,{variant:"body2",color:"textSecondary"},y("no_of_seats",{seats:r.seats})),i.a.createElement("div",{className:"title"},Object(d.c)(j,r,"name")))),i.a.createElement(c.a,{item:!0},i.a.createElement(u.a,{title:{vote:y("dc2019_demo_beijing_ratio"),seat:y("simulation_result")},votes:m.a[r.key].votes,seats:Object(p.a)(r)}))),i.a.createElement(l.a,{className:"block",variant:"body2"},Object(d.c)(j,r,"description")),i.a.createElement(b,{container:!0,spacing:3},i.a.createElement(c.a,{item:!0,xs:6},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("span",{className:"camp-text demo"},y("alias.DEMO"))),i.a.createElement("div",{className:"list-number"},w.length),i.a.createElement(l.a,{variant:"caption"},y("intented_list")),i.a.createElement(x,null,w.map((function(e){return i.a.createElement(f.b,{onClick:function(){Object(h.navigate)(Object(d.a)(j,"/profile/"+e.node.uuid+"/"+e.node.name_zh))},imgUrl:O.siteMetadata.siteUrl+"/images/avatars/"+e.node.uuid+".png",key:Object(d.c)(j,e.node,"name"),info:e.node})})))),i.a.createElement(l.a,{variant:"caption"},y("intented_list_postscript"))),i.a.createElement(c.a,{item:!0,xs:6},i.a.createElement("div",{className:"right"},i.a.createElement("div",null,i.a.createElement("span",{className:"camp-text beijing"},y("alias.BEIJING"))),i.a.createElement("div",{className:"list-number"},N.length),i.a.createElement(l.a,{variant:"caption"},y("intented_list")),i.a.createElement(x,{mt:2},N.map((function(e){return i.a.createElement(f.b,{key:Object(d.c)(j,e.node,"name"),info:e.node})})))),k.length?i.a.createElement("div",{className:"right"},i.a.createElement("div",null,i.a.createElement("span",{className:"camp-text other"},y("alias.OTHER"))),i.a.createElement(l.a,{variant:"caption"},y("intented_list")),i.a.createElement(x,null,k.map((function(e){return i.a.createElement(f.b,{key:e.node,info:e.node})})))):"")))}},h2rB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("e89E"),c=a("VphZ"),l=a("tr08"),o=a("20nU"),s=24,m=3,u=5,p=12;t.a=function(e){var t=e.votes,a=e.seats,d=e.title,f=Object(n.useRef)(),g=Object(n.useRef)(),h=Object(i.a)(g),v=Object(l.a)();return Object(n.useEffect)((function(){var e=Object(c.b)(f.current);if(h){var n=s,r=u,i=m,l=p,g=t.DEMO+t.BEIJING,b=Object(c.a)().domain([0,g]).range([0,100]),x=[{value:t.DEMO,cumulative:0,percentage:b(t.DEMO),color:o.a.FC_EXPECTED_WIN_DEMO},{value:t.BEIJING,cumulative:t.DEMO,percentage:b(t.BEIJING),color:o.a.FC_EXPECTED_WIN_BEIJING}],E=Object(c.a)().domain([0,g]).range([0,n*a.length]);e.selectAll(".vote-label").remove(),e.append("text").attr("class","vote-label").attr("text-anchor","start").attr("x",0).attr("y",0).attr("transform","translate(0,"+l+")").style("fill",v.palette.text.primary).style("font-size",l).style("font-weight",400).text(d.vote),e.selectAll(".vote-stacked").data(x).join("rect").attr("class","vote-stacked").attr("x",(function(e){return E(e.cumulative)})).attr("y",l+i).attr("height",n).attr("width",(function(e){return E(e.value)})).style("fill",(function(e){return e.color})).style("stroke",v.palette.background.paper),e.selectAll(".seat-label").remove(),e.append("text").attr("class","seat-label").attr("text-anchor","start").attr("x",0).attr("y",l+i+n+r/2).attr("transform","translate(0,"+l+")").style("fill",v.palette.text.primary).style("font-size",l).style("font-weight",400).text(d.seat),e.selectAll(".seat-stacked").remove(),e.selectAll("seat").data(a).join("rect").attr("class","seat-stacked").attr("x",(function(e,t){return t*n})).attr("y",l+i+n+r+l).attr("height",n).attr("width",n).style("fill",(function(e){return e.color})).style("stroke",v.palette.background.paper),e.selectAll(".text-percentage-label").data(x).join("text").attr("class","text-percentage-label").attr("text-anchor","middle").attr("x",(function(e){return E(e.cumulative)+E(e.value)/2})).attr("y",l+i+n/2+5).style("fill","#000000").style("font-size",16).style("font-weight",700).text((function(e){return e.percentage.toFixed(0)+"%"}))}}),[t,a,h]),r.a.createElement("div",{ref:g},r.a.createElement("svg",{ref:f,style:{overflow:"visible",display:"block",width:s*a.length+"px",height:"84px"}}))}},vl8L:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://legco2020.vote4.hk"}}}}')}}]);
//# sourceMappingURL=component---src-templates-geo-func-dc-2-constituency-js-a8f169dc1aa36c402ad3.js.map