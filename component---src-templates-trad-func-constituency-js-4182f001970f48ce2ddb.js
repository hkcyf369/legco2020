(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5JGD":function(e,t,a){"use strict";a.r(t);a("YBKJ");var n=a("q1tI"),i=a.n(n),r=a("tRbT"),o=a("ofer"),c=a("zgWt"),l=a("vOnD"),s=a("AiFK"),m=a("9Koi"),d=a("efpO"),p=a("6JlU"),u=a("vrFN"),b=l.a.div.withConfig({displayName:"TradFuncConstituency__TradTemplateWrapper",componentId:"fxenoq-0"})([".block{margin:","px 0;}.social{font-size:24px;}.social svg{margin-left:","px;}"],s.a.spacing(1),s.a.spacing(1)),f=Object(l.a)(r.a).withConfig({displayName:"TradFuncConstituency__TradHeader",componentId:"fxenoq-1"})([".title-box{margin-right:","px;}}.title{font-size:24px;font-weight:700;}"],s.a.spacing(3)),g=l.a.div.withConfig({displayName:"TradFuncConstituency__CandidatesWrapper",componentId:"fxenoq-2"})(["display:grid;grid-gap:","px;grid-template-columns:repeat(4,1fr);"],s.a.spacing(1));t.default=function(e){var t=e.pageContext,a=t.uri,n=t.constituency,l=t.councillors,s=t.candidates,_=t.tags,E=Object(m.a)(),v=E.t,y=E.i18n;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{uri:a,titleOveride:Object(d.b)(y,n,"name"),meta:[{property:"og:title",content:Object(d.b)(y,n,"name")},{property:"og:description",content:Object(d.b)(y,n,"description")}]}),i.a.createElement(b,null,i.a.createElement(f,{container:!0},i.a.createElement(r.a,{item:!0},i.a.createElement(r.a,{container:!0,direction:"column",justify:"center",className:"title-box"},i.a.createElement(o.a,{variant:"body2",color:"textSecondary"},v("no_of_seats",{seats:n.seats})),i.a.createElement("div",{className:"title"},Object(d.b)(y,n,"name")))),i.a.createElement(r.a,{item:!0},i.a.createElement(o.a,{variant:"body1"},v("number_of_voters")+" "+n.electors_total_2020+"（較16年"+(Number(n.electors_total_2020)-Number(n.electors_total_2016))+"）"),i.a.createElement(o.a,{variant:"body1"},v("vote_diff")," ",n.last_election_vote_beijing_minus_demo))),i.a.createElement(r.a,{className:"block",container:!0},_.map((function(e){return i.a.createElement(c.a,{label:v("tag."+e.i18nKey),variant:"outlined"})}))),i.a.createElement(o.a,{className:"block",variant:"body2"},Object(d.b)(y,n,"description")),i.a.createElement(o.a,{variant:"h5"},v("current_legislator")),i.a.createElement(r.a,{container:!0},l.map((function(e){return i.a.createElement(p.b,{key:e.node,info:e.node})}))),i.a.createElement(o.a,{variant:"h5"},v("intended")),i.a.createElement(g,null,s.filter((function(e){return"TRUE"===e.node.is_2020_candidate})).map((function(e){return i.a.createElement(p.b,{key:e.node,info:e.node})})))))}}}]);
//# sourceMappingURL=component---src-templates-trad-func-constituency-js-4182f001970f48ce2ddb.js.map