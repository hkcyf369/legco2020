(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{R2zn:function(e,t,a){"use strict";a.r(t);a("pJf4"),a("q8oJ"),a("8npG"),a("YbXK"),a("cFtU"),a("rzGZ"),a("m210"),a("4DPX"),a("gu/5"),a("eoYm"),a("HQhv"),a("zGcK"),a("YBKJ"),a("zTTH");var n=a("vl8L"),r=a("q1tI"),i=a.n(r),c=a("tRbT"),l=a("ofer"),o=a("Ji2X"),s=a("XX3T"),m=a("vOnD"),u=a("9Koi"),d=a("rsHp"),p=a("h2rB"),f=a("7Qib"),g=a("efpO"),b=a("Wbzz"),h=a("6JlU"),y=a("c077"),v=a("+xWQ"),x=a("vrFN"),_=a("HbF4"),E=a("tr08"),O=a("ma3e"),j=a("Kfvu"),k=a("GSes"),w=a("X13+");function N(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var z=m.b.div.withConfig({displayName:"PrimariesResult__Nav",componentId:"sc-1ue5dqm-0"})(["padding:","px 0;overflow-x:auto;white-space:nowrap;.nav-link{color:",";text-decoration:none;font-size:1rem;margin-bottom:","px;margin-right:","px;padding:4px 8px;}.active{font-weight:700;color:#ffffff;background:",";border-radius:5px;}"],(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.palette.secondary.main})),C=Object(m.b)(c.a).withConfig({displayName:"PrimariesResult__Header",componentId:"sc-1ue5dqm-1"})(["margin-bottom:","px;.title-box{margin-right:","px;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(3)})),T=m.b.div.withConfig({displayName:"PrimariesResult__ProportionBar",componentId:"sc-1ue5dqm-2"})(["margin:","px 0;.labels{display:flex;align-items:baseline;svg{margin-left:4px;}}.bar{display:flex;.left{height:18px;width:","%;border-radius:16px 0 0 16px;background:",";vertical-align:center;.percentage{font-weight:700;margin-left:8px;color:",";}}.right{height:18px;width:","%;border-radius:0 16px 16px 0;background:",";}}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.left}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.background.default}),(function(e){return e.right}),(function(e){return e.theme.palette.action.disabled})),F=m.b.div.withConfig({displayName:"PrimariesResult__CandidatesWrapper",componentId:"sc-1ue5dqm-3"})(["margin-top:","px;display:grid;grid-template-columns:repeat(1,1fr);grid-row-gap:","px;.candi-box{display:flex;align-items:center;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1.5)}));t.default=function(e){var t=e.pageContext,a=t.uri,r=t.allConstituencies,m=t.constituency,I=t.candidates,A=t.assets,S=Object(u.a)(),D=S.t,H=S.i18n,J=Object(g.b)(),M=n.data.site,R=Object(E.a)(),U=[];A.length&&U.push({name:"election_forum",title:D("election_forum"),content:i.a.createElement(v.a,null,A.map((function(e){return i.a.createElement(_.a,{key:e.id,onClick:function(){window.open(Object(f.f)({assetId:e.asset_id,type:e.type}).videoUrl,"_blank")},image:i.a.createElement("img",{style:{height:"100%"},src:Object(f.f)({assetId:e.asset_id,type:e.type,thumbnailUrl:e.thumbnail_url}).imgUrl,alt:e.title}),title:e.title,subTitle:e.channel})})))});var W=I.reduce((function(e,t){return e+t.node.primaries_votes}),0),B=Math.max.apply(Math,N(I.map((function(e){return e.node.primaries_votes})))),G=function(){var e=I.filter((function(e){return e.node.tags.findIndex((function(e){return"本土及抗爭派"===e.name_zh}))>-1})).reduce((function(e,t){return e+t.node.primaries_votes}),0),t=I.filter((function(e){return-1===e.node.tags.findIndex((function(e){return"本土及抗爭派"===e.name_zh}))})).reduce((function(e,t){return e+t.node.primaries_votes}),0);return{left:{votes:e,percentage:e/W*100},right:{votes:t,percentage:t/W*100}}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{uri:a,titleOveride:D("primaries_result.title")+" | "+Object(g.c)(H,m,"name"),meta:[{property:"og:title",content:D("primaries_result.title")+" | "+Object(g.c)(H,m,"name")},{property:"og:description",content:Object(g.c)(H,m,"primary_description")}]}),i.a.createElement(z,null,r.map((function(e){return i.a.createElement(b.Link,{key:e.node.key,className:"nav-link "+(e.node.key===m.key?"active":""),to:Object(g.a)(H,"/primaries/"+e.node.key)},Object(g.c)(H,e.node,"alias"))}))),i.a.createElement(C,{container:!0,justify:"flex-start"},i.a.createElement(c.a,{item:!0},i.a.createElement(c.a,{container:!0,direction:"column",justify:"center",className:"title-box"},i.a.createElement(l.a,{variant:"h3"},Object(g.c)(H,m,"name")),i.a.createElement(l.a,{variant:"body2",color:"textSecondary"},Object(g.c)(H,m,"primary_rule")),i.a.createElement(l.a,{variant:"body2",color:"textSecondary"},D("list_count",{list_count:I.length})))),i.a.createElement(c.a,{item:!0,xs:7},d.a[m.key]&&i.a.createElement(p.a,{title:{vote:D("dc2019_demo_beijing_ratio"),seat:Number(m.target)>0?D("demo_target",{target:m.target}):D("demo_target_not_decide")},votes:d.a[m.key].votes,seats:Object(f.b)(m)}))),Object(g.c)(H,m,"primary_description")&&i.a.createElement(l.a,{className:"block",variant:"body1",dangerouslySetInnerHTML:{__html:Object(g.c)(H,m,"primary_description")}}),!!W&&"HS"!==m.key&&i.a.createElement(T,{left:G().left.percentage,right:G().right.percentage},i.a.createElement("div",{className:"labels"},i.a.createElement(l.a,{variant:"h5",className:"left-label"},D("resistance_localist")),i.a.createElement(k.a,{title:i.a.createElement("div",{dangerouslySetInnerHTML:{__html:J("resistance_localist_remarks")}}),enterTouchDelay:10,leaveTouchDelay:5e3,interactive:!0},i.a.createElement("div",null,i.a.createElement(w.a,null)))),i.a.createElement("div",{className:"bar"},i.a.createElement("div",{className:"left"},i.a.createElement(l.a,{variant:"h6",className:"percentage"},G().left.percentage.toFixed(2),"%")),i.a.createElement("div",{className:"right"}))),i.a.createElement(F,null,I.sort((function(e,t){return Number(e.node.primaries_votes)<Number(t.node.primaries_votes)?1:-1})).map((function(e,t){return i.a.createElement("div",{key:Object(g.c)(H,e.node,"name"),className:"clickable"},i.a.createElement(h.b,{item:!0,imgUrl:M.siteMetadata.siteUrl+"/images/avatars/"+e.node.uuid+".png",key:e.node.name_zh,info:e.node,name:Object(g.c)(H,e.node,"name"),subText:Object(g.c)(H,e.node,"title")&&Object(g.c)(H,e.node,"title").split(/[，、,]+/).shift(),votes:e.node.primaries_votes,percentage:e.node.primaries_votes/W,width:e.node.primaries_votes/B*100,onClick:function(){Object(b.navigate)(Object(g.a)(H,"/profile/"+e.node.uuid+"/"+e.node.name_zh))},status:Object(f.e)(e.node),isWin:"HS"===m.key||t<m.target}))}))),i.a.createElement(y.a,{sections:U,pageName:"primary_"+m.name_zh}),["HKI","KLW","KLE","NTW","NTE","HS"].includes(m.key)&&i.a.createElement(o.a,{maxWidth:"lg"},i.a.createElement(s.a,{className:"clickable",onClick:function(){Object(j.trackCustomEvent)({category:"primaries_stations",action:"click_primaries_stations",label:m.name_zh}),Object(b.navigate)(Object(g.a)(H,"/primaries/stations/"+m.key))},variant:"extended",size:"medium","aria-label":"add",style:{position:"fixed",bottom:R.spacing(2),right:R.spacing(2),backgroundColor:R.palette.secondary.main,color:"#FFFFFF"}},i.a.createElement(O.d,{style:{width:24,height:24,marginRight:R.spacing(1)}}),D("primaries_stations.title"))))}},h2rB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("e89E"),c=a("VphZ"),l=a("tr08"),o=a("20nU"),s=24,m=3,u=5,d=12;t.a=function(e){var t=e.votes,a=e.seats,p=e.title,f=Object(n.useRef)(),g=Object(n.useRef)(),b=Object(i.a)(g),h=Object(l.a)();return Object(n.useEffect)((function(){var e=Object(c.b)(f.current);if(b){var n=s,r=u,i=m,l=d,g=t.DEMO+t.BEIJING,y=Object(c.a)().domain([0,g]).range([0,100]),v=[{value:t.DEMO,cumulative:0,percentage:y(t.DEMO),color:o.a.FC_EXPECTED_WIN_DEMO},{value:t.BEIJING,cumulative:t.DEMO,percentage:y(t.BEIJING),color:o.a.FC_EXPECTED_WIN_BEIJING}],x=Object(c.a)().domain([0,g]).range([0,n*a.length]);e.selectAll(".vote-label").remove(),e.append("text").attr("class","vote-label").attr("text-anchor","start").attr("x",0).attr("y",0).attr("transform","translate(0,"+l+")").style("fill",h.palette.text.primary).style("font-size",l).style("font-weight",400).text(p.vote),e.selectAll(".vote-stacked").data(v).join("rect").attr("class","vote-stacked").attr("x",(function(e){return x(e.cumulative)})).attr("y",l+i).attr("height",n).attr("width",(function(e){return x(e.value)})).style("fill",(function(e){return e.color})).style("stroke",h.palette.background.paper),e.selectAll(".seat-label").remove(),e.append("text").attr("class","seat-label").attr("text-anchor","start").attr("x",0).attr("y",l+i+n+r/2).attr("transform","translate(0,"+l+")").style("fill",h.palette.text.primary).style("font-size",l).style("font-weight",400).text(p.seat),e.selectAll(".seat-stacked").remove(),e.selectAll("seat").data(a).join("rect").attr("class","seat-stacked").attr("x",(function(e,t){return t*n})).attr("y",l+i+n+r+l).attr("height",n).attr("width",n).style("fill",(function(e){return e.color})).style("stroke",h.palette.background.paper),e.selectAll(".text-percentage-label").data(v).join("text").attr("class","text-percentage-label").attr("text-anchor","middle").attr("x",(function(e){return x(e.cumulative)+x(e.value)/2})).attr("y",l+i+n/2+5).style("fill","#000000").style("font-size",16).style("font-weight",700).text((function(e){return e.percentage.toFixed(0)+"%"}))}}),[t,a,b]),r.a.createElement("div",{ref:g},r.a.createElement("svg",{ref:f,style:{overflow:"visible",display:"block",width:s*a.length+"px",height:"84px"}}))}}}]);
//# sourceMappingURL=component---src-templates-primaries-result-js-4b1ab75fe50ea9c54357.js.map