(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"469l":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=a("5AJ6"),s=Object(c.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=i.forwardRef((function(e,t){var a=e.alt,l=e.children,c=e.classes,m=e.className,p=e.component,d=void 0===p?"div":p,u=e.imgProps,f=e.sizes,b=e.src,g=e.srcSet,y=e.variant,v=void 0===y?"circle":y,x=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),h=null,j=function(e){var t=e.src,a=e.srcSet,n=i.useState(!1),r=n[0],o=n[1];return i.useEffect((function(){if(t||a){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,a]),r}({src:b,srcSet:g}),E=b||g,_=E&&"error"!==j;return h=_?i.createElement("img",Object(n.a)({alt:a,src:b,srcSet:g,sizes:f,className:c.img},u)):null!=l?l:E&&a?a[0]:i.createElement(s,{className:c.fallback}),i.createElement(d,Object(n.a)({className:Object(o.a)(c.root,c.system,c[v],m,!_&&c.colorDefault),ref:t},x),h)}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},"6JlU":function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return g}));a("pJf4");var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("469l"),l=a("ofer"),c=a("9Koi"),s=a("efpO"),m=a("Wbzz"),p=a("AiFK"),d={demo:p.a.palette.warning.main,beijing:p.a.palette.info.main,other:p.a.palette.success.main},u=Object(i.a)(o.a).withConfig({displayName:"People__CampAvatar",componentId:"sc-14rjn9w-0"})(["width:","px;height:","px;border:","px "," solid;"],(function(e){return e.xsdimension||48}),(function(e){return e.xsdimension||48}),(function(e){return e.border||3}),(function(e){return d[e.camp]})),f=i.a.div.withConfig({displayName:"People__PeopleWrapper",componentId:"sc-14rjn9w-1"})([".avatar-group{display:flex;flex-direction:column;align-items:center;justify-content:space-end;}","{.avatar{width:64px;height:64px;}}.avatar.demo{border:3px "," solid;}.avatar.beijing{border:3px "," solid;}.avatar.other{border:3px "," solid;}.center{font-size:12px;text-align:center;display:flex;flex-direction:column;align-items:center;}"],p.a.breakpoints.up("md"),p.a.palette.warning.main,p.a.palette.info.main,p.a.palette.success.main),b=function(e){var t=e.info,a=e.showName,n=void 0===a||a,i=Object(c.a)().i18n,o=Object(s.b)(i,t,"name");return r.a.createElement(f,{className:"avatar-group clickable",onClick:function(){Object(m.navigate)(Object(s.a)(i,"/profile/"+t.uuid+"/"+o))},onKeyDown:function(){}},r.a.createElement("div",{className:"center"},r.a.createElement(u,{alt:o,src:t.img_url,camp:t.camp.toLowerCase()}),n&&r.a.createElement("span",null,o+("FALSE"===t.primary?"*":""))))},g=function(e){var t=e.onClick,a=e.name,n=e.info,o=e.subText,c=i.a.div.withConfig({displayName:"People__Wrapper",componentId:"sc-14rjn9w-2"})(["display:flex;.main{margin-left:","px;display:flex;flex-direction:column;justify-content:center;}.subText{line-height:0.8rem;}"],p.a.spacing(1));return r.a.createElement(c,{item:!0,onClick:t},r.a.createElement(u,{alt:a,src:n.img_url,camp:n.camp.toLowerCase(),xsdimension:56,border:5}),r.a.createElement("div",{className:"main"},r.a.createElement(l.a,{variant:"h5"},a),r.a.createElement(l.a,{className:"subText",variant:"caption",color:"textSecondary"},o)))}},"V+3/":function(e,t,a){"use strict";a.r(t);a("HQhv"),a("zGcK"),a("YBKJ");var n=a("q1tI"),r=a.n(n),i=a("tRbT"),o=a("ofer"),l=a("vOnD"),c=a("AiFK"),s=a("9Koi"),m=a("rsHp"),p=a("h2rB"),d=a("7Qib"),u=a("efpO"),f=a("Wbzz"),b=a("6JlU"),g=l.a.div.withConfig({displayName:"Primary__Nav",componentId:"jl2r8q-0"})(["padding-bottom:","px;overflow-x:auto;white-space:nowrap;.nav-link{color:",";text-decoration:none;font-size:14px;margin-bottom:","px;margin-right:","px;padding:3px 8px;}.active{font-weight:700;color:",";background:",";border-radius:5px;}"],c.a.spacing(1),c.a.palette.primary.main,c.a.spacing(1),c.a.spacing(1),c.a.palette.background.default,c.a.palette.secondary.main),y=Object(l.a)(i.a).withConfig({displayName:"Primary__Header",componentId:"jl2r8q-1"})(["margin-bottom:","px;.title-box{margin-right:","px;}}.title{font-size:24px;font-weight:700;}"],c.a.spacing(2),c.a.spacing(3)),v=l.a.div.withConfig({displayName:"Primary__CandidatesWrapper",componentId:"jl2r8q-2"})(["margin-top:","px;display:grid;grid-row-gap:","px;grid-column-gap:","px;grid-template-columns:repeat(2,1fr);","{grid-template-columns:repeat(4,1fr);}","{grid-template-columns:repeat(6,1fr);}.candi-box{display:flex;align-items:center;}"],c.a.spacing(2),c.a.spacing(1),c.a.spacing(1.5),c.a.breakpoints.up("sm"),c.a.breakpoints.up("md"));t.default=function(e){var t=e.pageContext,a=t.allConstituencies,n=t.constituency,l=t.candidates,c=Object(s.a)(),x=c.t,h=c.i18n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,a.map((function(e){return r.a.createElement(f.Link,{key:e.node.key,className:"nav-link "+(e.node.key===n.key?"active":""),to:Object(u.a)(h,"/primary/"+e.node.key)},Object(u.b)(h,e.node,"alias"))}))),r.a.createElement(y,{container:!0},r.a.createElement(i.a,{item:!0},r.a.createElement(i.a,{container:!0,direction:"column",justify:"center",className:"title-box"},r.a.createElement("div",{className:"title"},Object(u.b)(h,n,"name")),r.a.createElement(o.a,{variant:"body2",color:"textSecondary"},Object(u.b)(h,n,"primary_rule")),r.a.createElement(o.a,{variant:"body2",color:"textSecondary"},x("list_count",{list_count:l.length})))),r.a.createElement(i.a,{item:!0},m.a[n.key]&&r.a.createElement(p.a,{title:{vote:x("dc2019_demo_beijing_ratio"),seat:Number(n.target)>0?x("demo_target",{target:n.target}):x("demo_target_not_decide")},votes:m.a[n.key].votes,seats:Object(d.b)(n)}))),Object(u.b)(h,n,"primary_description")&&r.a.createElement(o.a,{className:"block",variant:"body2",dangerouslySetInnerHTML:{__html:Object(u.b)(h,n,"primary_description")}}),r.a.createElement(v,null,l.sort((function(e,t){return e.node.primary_list_no&&t.node.primary_list_no?Number(e.node.primary_list_no)>Number(t.node.primary_list_no)?1:-1:e.node.name_en>t.node.name_en?1:-1})).map((function(e){return r.a.createElement(i.a,{item:!0,key:Object(u.b)(h,e.node,"name"),className:"clickable"},r.a.createElement(b.a,{item:!0,key:e.node.name_zh,info:e.node,name:Object(u.b)(h,e.node,"name"),subText:Object(u.b)(h,e.node,"title")&&Object(u.b)(h,e.node,"title").split(/[，、,]+/).shift(),onClick:function(){Object(f.navigate)(Object(u.a)(h,"/profile/"+e.node.uuid+"/"+e.node.name_zh))}}))}))))}},h2rB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("e89E"),o=a("VphZ"),l=a("AiFK"),c=a("20nU"),s=24,m=3,p=5,d=12;t.a=function(e){var t=e.votes,a=e.seats,u=e.title,f=Object(n.useRef)(),b=Object(n.useRef)(),g=Object(i.a)(b);return Object(n.useEffect)((function(){var e=Object(o.b)(f.current);if(g){var n=s,r=p,i=m,b=d,y=t.DEMO+t.BEIJING,v=Object(o.a)().domain([0,y]).range([0,100]),x=[{value:t.DEMO,cumulative:0,percentage:v(t.DEMO),color:c.a.FC_EXPECTED_WIN_DEMO},{value:t.BEIJING,cumulative:t.DEMO,percentage:v(t.BEIJING),color:c.a.FC_EXPECTED_WIN_BEIJING}],h=Object(o.a)().domain([0,y]).range([0,n*a.length]);e.selectAll(".vote-label").remove(),e.append("text").attr("class","vote-label").attr("text-anchor","start").attr("x",0).attr("y",0).attr("transform","translate(0,"+b+")").style("fill",l.a.palette.text.primary).style("font-size",b).style("font-weight",400).text(u.vote),e.selectAll(".vote-stacked").data(x).join("rect").attr("class","vote-stacked").attr("x",(function(e){return h(e.cumulative)})).attr("y",b+i).attr("height",n).attr("width",(function(e){return h(e.value)})).style("fill",(function(e){return e.color})).style("stroke",l.a.palette.background.paper),e.selectAll(".seat-label").remove(),e.append("text").attr("class","seat-label").attr("text-anchor","start").attr("x",0).attr("y",b+i+n+r/2).attr("transform","translate(0,"+b+")").style("fill",l.a.palette.text.primary).style("font-size",b).style("font-weight",400).text(u.seat),e.selectAll(".seat-stacked").remove(),e.selectAll("seat").data(a).join("rect").attr("class","seat-stacked").attr("x",(function(e,t){return t*n})).attr("y",b+i+n+r+b).attr("height",n).attr("width",n).style("fill",(function(e){return e.color})).style("stroke",l.a.palette.background.paper),e.selectAll(".text-percentage-label").data(x).join("text").attr("class","text-percentage-label").attr("text-anchor","middle").attr("x",(function(e){return h(e.cumulative)+h(e.value)/2})).attr("y",b+i+n/2+5).style("fill",l.a.palette.text.primary).style("font-size",16).style("font-weight",700).text((function(e){return e.percentage.toFixed(0)+"%"}))}}),[t,a,g]),r.a.createElement("div",{ref:b},r.a.createElement("svg",{ref:f,style:{overflow:"visible",display:"block",width:s*a.length+"px",height:"84px"}}))}}}]);
//# sourceMappingURL=component---src-templates-primary-js-02355c3fe9ffecc1e37e.js.map