(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+xWQ":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("tRbT");t.a=function(e){var t=e.children;return r.a.createElement(i.a,{container:!0,spacing:2},t.map((function(e){return r.a.createElement(i.a,{item:!0,xs:12,sm:6,md:4},e)})))}},"469l":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),l=n("5AJ6"),s=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=i.forwardRef((function(e,t){var n=e.alt,c=e.children,l=e.classes,m=e.className,u=e.component,d=void 0===u?"div":u,p=e.imgProps,f=e.sizes,g=e.src,b=e.srcSet,v=e.variant,h=void 0===v?"circle":v,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,E=function(e){var t=e.src,n=e.srcSet,a=i.useState(!1),r=a[0],o=a[1];return i.useEffect((function(){if(t||n){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),r}({src:g,srcSet:b}),k=g||b,w=k&&"error"!==E;return x=w?i.createElement("img",Object(a.a)({alt:n,src:g,srcSet:b,sizes:f,className:l.img},p)):null!=c?c:k&&n?n[0]:i.createElement(s,{className:l.fallback}),i.createElement(d,Object(a.a)({className:Object(o.a)(l.root,l.system,l[h],m,!w&&l.colorDefault),ref:t},y),x)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},"6JlU":function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("pJf4"),n("E5k/"),n("zTTH");var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("469l"),c=n("ofer"),l=n("9Koi"),s=n("efpO"),m=n("tr08");var u=Object(i.a)(o.a).withConfig({displayName:"People__CampAvatar",componentId:"sc-14rjn9w-0"})(["width:","px;height:","px;border:","px "," solid;"],(function(e){return e.xsdimension||48}),(function(e){return e.xsdimension||48}),(function(e){return e.camp?e.border||3:0}),(function(e){return t=e.camp,{demo:(n=e.theme).palette.warning.main,beijing:n.palette.info.main,other:n.palette.success.main}[t];var t,n})),d=i.a.div.withConfig({displayName:"People__PeopleWrapper",componentId:"sc-14rjn9w-1"})([".avatar-group{display:flex;flex-direction:column;align-items:center;justify-content:space-end;}","{.avatar{width:64px;height:64px;}}.avatar.demo{border:3px "," solid;}.avatar.beijing{border:3px "," solid;}.avatar.other{border:3px "," solid;}.center{font-size:12px;text-align:center;display:flex;flex-direction:column;align-items:center;}"],(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.palette.warning.main}),(function(e){return e.theme.palette.info.main}),(function(e){return e.theme.palette.success.main})),p=function(e){var t=e.info,n=e.imgUrl,a=e.onClick,i=e.xsdimension,o=e.showName,c=void 0===o||o,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["info","imgUrl","onClick","xsdimension","showName"]),f=Object(l.a)().i18n,g=Object(m.a)(),b=Object(s.b)(f,t,"name");return r.a.createElement(d,{className:"avatar-group clickable",onClick:a,onKeyDown:function(){},theme:g},r.a.createElement("div",Object.assign({className:"center"},p),r.a.createElement(u,{alt:b,src:n,camp:t.camp&&t.camp.toLowerCase(),xsdimension:i,theme:g},r.a.createElement("img",{alt:b,src:t.img_url,style:{maxWidth:"100%"}})),c&&r.a.createElement("span",null,b+(t.tags&&-1!==t.tags.findIndex((function(e){return"不參加民主派初選"===e.name_zh}))?"*":""))))},f=function(e){var t=e.onClick,n=e.name,a=e.info,o=e.subText,l=e.imgUrl,s=Object(m.a)(),d=i.a.div.withConfig({displayName:"People__Wrapper",componentId:"sc-14rjn9w-2"})(["display:flex;.main{margin-left:","px;display:flex;flex-direction:column;justify-content:center;}.subText{line-height:0.8rem;}"],(function(e){return e.theme.spacing(1)}));return r.a.createElement(d,{item:!0,onClick:t,theme:s},r.a.createElement(u,{alt:n,src:l,camp:a.camp.toLowerCase(),xsdimension:56,border:5,theme:s},r.a.createElement("img",{alt:n,src:a.img_url,style:{maxWidth:"100%"}})),r.a.createElement("div",{className:"main"},r.a.createElement(c.a,{variant:"h5"},n),r.a.createElement(c.a,{className:"subText",variant:"caption",color:"textSecondary"},o)))}},HbF4:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),i=n("tRbT"),o=n("ofer"),c=n("vOnD"),l=n("tr08"),s=Object(c.a)(i.a).withConfig({displayName:"LinkBox__List",componentId:"sc-15fbmda-0"})(["box-shadow:0 1px 6px 0 ",";line-height:0;.details{padding-left:","px;padding-right:","px;display:flex;flex-direction:column;justify-content:center;}img{width:100%;}"],(function(e){return e.theme.palette.divider}),(function(e){return e.theme.spacing(1.5)}),(function(e){return e.theme.spacing(1.5)})),m=function(e){var t=e.onClick,n=e.image,a=e.title,c=e.subTitle,m=Object(l.a)();return r.a.createElement(s,{container:!0,className:"clickable",key:a,onClick:t,theme:m},r.a.createElement(i.a,{item:!0,xs:4},n),r.a.createElement(i.a,{item:!0,xs:8,className:"details"},c&&r.a.createElement(o.a,{variant:"caption",color:"textSecondary"},c),r.a.createElement(o.a,{variant:"h6"},a)))}},Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,i=e.nonInteraction,o=void 0!==i&&i,c=e.transport,l=e.hitCallback,s=e.callbackTimeout,m=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var u={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:o,transport:c};l&&"function"==typeof l&&(u.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(l,m)),window.ga("send","event",u)}};var r=a(n("pVnL")),i=a(n("8OQS")),o=a(n("q1tI")),c=a(n("17x9"));function l(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,c=e.eventValue,l=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,r.default)({},l,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var i=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:c,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}l.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},"V+3/":function(e,t,n){"use strict";n.r(t);n("HQhv"),n("zGcK"),n("YBKJ");var a=n("vl8L"),r=n("q1tI"),i=n.n(r),o=n("tRbT"),c=n("ofer"),l=n("vOnD"),s=n("9Koi"),m=n("rsHp"),u=n("h2rB"),d=n("7Qib"),p=n("efpO"),f=n("Wbzz"),g=n("6JlU"),b=n("c077"),v=n("+xWQ"),h=n("vrFN"),y=n("HbF4"),x=n("tr08"),E=l.a.div.withConfig({displayName:"Primary__Nav",componentId:"jl2r8q-0"})(["padding-bottom:","px;overflow-x:auto;white-space:nowrap;.nav-link{color:",";text-decoration:none;font-size:14px;margin-bottom:","px;margin-right:","px;padding:3px 8px;}.active{font-weight:700;color:#ffffff;background:",";border-radius:5px;}"],(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.secondary.main})),k=Object(l.a)(o.a).withConfig({displayName:"Primary__Header",componentId:"jl2r8q-1"})(["margin-bottom:","px;.title-box{margin-right:","px;}}.title{font-size:24px;font-weight:700;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(3)})),w=l.a.div.withConfig({displayName:"Primary__CandidatesWrapper",componentId:"jl2r8q-2"})(["margin-top:","px;display:grid;grid-row-gap:","px;grid-column-gap:","px;grid-template-columns:repeat(2,1fr);","{grid-template-columns:repeat(4,1fr);}","{grid-template-columns:repeat(6,1fr);}.candi-box{display:flex;align-items:center;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(1.5)}),(function(e){return e.theme.breakpoints.up("sm")}),(function(e){return e.theme.breakpoints.up("md")}));t.default=function(e){var t=e.pageContext,n=t.uri,r=t.allConstituencies,l=t.constituency,j=t.candidates,_=t.assets,O=Object(s.a)(),C=O.t,N=O.i18n,I=a.data.site,z=Object(x.a)(),T=[];return _&&_.filter((function(e){return"youtube"===e.type})).length&&T.push({name:"election_forum",title:C("election_forum"),content:i.a.createElement(v.a,null,_.map((function(e){return i.a.createElement(y.a,{key:e.id,onClick:function(){window.open("https://www.youtube.com/watch?v="+e.asset_id,"_blank")},image:i.a.createElement("img",{style:{height:"100%"},src:"https://i.ytimg.com/vi/"+e.asset_id+"/hqdefault.jpg",alt:e.title}),title:e.title,subTitle:e.channel})})))}),i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{uri:n,titleOveride:C("primary.title")+" | "+Object(p.b)(N,l,"name"),meta:[{property:"og:title",content:C("primary.title")+" | "+Object(p.b)(N,l,"name")},{property:"og:description",content:Object(p.b)(N,l,"primary_description")}]}),i.a.createElement(E,{theme:z},r.map((function(e){return i.a.createElement(f.Link,{key:e.node.key,className:"nav-link "+(e.node.key===l.key?"active":""),to:Object(p.a)(N,"/primary/"+e.node.key)},Object(p.b)(N,e.node,"alias"))}))),i.a.createElement(k,{container:!0,theme:z},i.a.createElement(o.a,{item:!0},i.a.createElement(o.a,{container:!0,direction:"column",justify:"center",className:"title-box"},i.a.createElement("div",{className:"title"},Object(p.b)(N,l,"name")),i.a.createElement(c.a,{variant:"body2",color:"textSecondary"},Object(p.b)(N,l,"primary_rule")),i.a.createElement(c.a,{variant:"body2",color:"textSecondary"},C("list_count",{list_count:j.length})))),i.a.createElement(o.a,{item:!0},m.a[l.key]&&i.a.createElement(u.a,{title:{vote:C("dc2019_demo_beijing_ratio"),seat:Number(l.target)>0?C("demo_target",{target:l.target}):C("demo_target_not_decide")},votes:m.a[l.key].votes,seats:Object(d.b)(l)}))),Object(p.b)(N,l,"primary_description")&&i.a.createElement(c.a,{className:"block",variant:"body2",dangerouslySetInnerHTML:{__html:Object(p.b)(N,l,"primary_description")}}),i.a.createElement(w,{theme:z},j.sort((function(e,t){return e.node.primary_list_no&&t.node.primary_list_no?Number(e.node.primary_list_no)>Number(t.node.primary_list_no)?1:-1:e.node.name_en>t.node.name_en?1:-1})).map((function(e){return i.a.createElement(o.a,{item:!0,key:Object(p.b)(N,e.node,"name"),className:"clickable"},i.a.createElement(g.a,{item:!0,imgUrl:I.siteMetadata.siteUrl+"/images/avatars/"+e.node.uuid+".png",key:e.node.name_zh,info:e.node,name:Object(p.b)(N,e.node,"name"),subText:Object(p.b)(N,e.node,"title")&&Object(p.b)(N,e.node,"title").split(/[，、,]+/).shift(),onClick:function(){Object(f.navigate)(Object(p.a)(N,"/profile/"+e.node.uuid+"/"+e.node.name_zh))}}))}))),i.a.createElement(b.a,{sections:T,pageName:"primary_"+l.name_zh}))}},c077:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("tr08"),c=n("lopY"),l=n("esk+"),s=n("ofer"),m=n("Kfvu"),u=i.a.div.withConfig({displayName:"ResponsiveSections__DesktopWrapper",componentId:"z68g0-0"})([".title{margin:","px 0;}.content{padding:","px 0 ","px;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(2)}));t.a=function(e){var t=e.sections,n=e.pageName,a=Object(o.a)();return Object(c.a)(a.breakpoints.up("md"))?r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(u,{theme:a},r.a.createElement("div",{className:"title"},r.a.createElement(s.a,{variant:"h4"},e.title)),r.a.createElement("div",{className:"content"},e.content))}))):r.a.createElement(l.a,{tabs:t,onTabChange:function(e){Object(m.trackCustomEvent)({category:n,action:"tab_select",label:e})}})}},h2rB:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("e89E"),o=n("VphZ"),c=n("tr08"),l=n("20nU"),s=24,m=3,u=5,d=12;t.a=function(e){var t=e.votes,n=e.seats,p=e.title,f=Object(a.useRef)(),g=Object(a.useRef)(),b=Object(i.a)(g),v=Object(c.a)();return Object(a.useEffect)((function(){var e=Object(o.b)(f.current);if(b){var a=s,r=u,i=m,c=d,g=t.DEMO+t.BEIJING,h=Object(o.a)().domain([0,g]).range([0,100]),y=[{value:t.DEMO,cumulative:0,percentage:h(t.DEMO),color:l.a.FC_EXPECTED_WIN_DEMO},{value:t.BEIJING,cumulative:t.DEMO,percentage:h(t.BEIJING),color:l.a.FC_EXPECTED_WIN_BEIJING}],x=Object(o.a)().domain([0,g]).range([0,a*n.length]);e.selectAll(".vote-label").remove(),e.append("text").attr("class","vote-label").attr("text-anchor","start").attr("x",0).attr("y",0).attr("transform","translate(0,"+c+")").style("fill",v.palette.text.primary).style("font-size",c).style("font-weight",400).text(p.vote),e.selectAll(".vote-stacked").data(y).join("rect").attr("class","vote-stacked").attr("x",(function(e){return x(e.cumulative)})).attr("y",c+i).attr("height",a).attr("width",(function(e){return x(e.value)})).style("fill",(function(e){return e.color})).style("stroke",v.palette.background.paper),e.selectAll(".seat-label").remove(),e.append("text").attr("class","seat-label").attr("text-anchor","start").attr("x",0).attr("y",c+i+a+r/2).attr("transform","translate(0,"+c+")").style("fill",v.palette.text.primary).style("font-size",c).style("font-weight",400).text(p.seat),e.selectAll(".seat-stacked").remove(),e.selectAll("seat").data(n).join("rect").attr("class","seat-stacked").attr("x",(function(e,t){return t*a})).attr("y",c+i+a+r+c).attr("height",a).attr("width",a).style("fill",(function(e){return e.color})).style("stroke",v.palette.background.paper),e.selectAll(".text-percentage-label").data(y).join("text").attr("class","text-percentage-label").attr("text-anchor","middle").attr("x",(function(e){return x(e.cumulative)+x(e.value)/2})).attr("y",c+i+a/2+5).style("fill","#000000").style("font-size",16).style("font-weight",700).text((function(e){return e.percentage.toFixed(0)+"%"}))}}),[t,n,b]),r.a.createElement("div",{ref:g},r.a.createElement("svg",{ref:f,style:{overflow:"visible",display:"block",width:s*n.length+"px",height:"84px"}}))}},vl8L:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://legco2020.vote4.hk"}}}}')}}]);
//# sourceMappingURL=component---src-templates-primary-js-27d09989d606712c1e0c.js.map