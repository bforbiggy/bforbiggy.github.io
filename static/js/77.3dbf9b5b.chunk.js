"use strict";(self.webpackChunkbforbiggy=self.webpackChunkbforbiggy||[]).push([[77],{77:function(e,s,i){i.r(s),i.d(s,{default:function(){return v}});var n=i(214),r=i(152),a=i(861),c=i(791),l=i(123),t=i(186),o=i(425),d=i(355),u=i(184),f={"c#":"#af36ff",scss:"#ff36c6",html:"#ff5917",javascript:"#ffdf6b",typescript:"#0096ed",css:"#00fbff",null:"#ff00a2"};function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(s,i){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/bforbiggy/repos").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.fork})).sort((function(e,s){return s.stargazers_count-e.stargazers_count||s.size-e.size}))}));case 2:return r=e.sent,s(r),e.next=6,fetch("https://api.github.com/users/bforbiggy").then((function(e){return e.json()}));case 6:a=e.sent,i(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=(0,c.useState)(!0),s=(0,r.Z)(e,2),i=s[0],n=s[1],a=(0,c.useState)([]),v=(0,r.Z)(a,2),m=v[0],j=v[1],x=(0,c.useState)(null),g=(0,r.Z)(x,2),p=g[0],N=g[1];(0,c.useEffect)((function(){!function(e,s){h.apply(this,arguments)}(j,N),n(!1)}),[]);var b=function(e){var s,i,n;return e=null!==(s=e)&&void 0!==s?s:"null",null!==(i=f[null===(n=e)||void 0===n?void 0:n.toLowerCase()])&&void 0!==i?i:"#FFF"};return(0,u.jsxs)("div",{className:"repositories-container",children:[(0,u.jsx)("main",{children:i?(0,u.jsx)(t.Z,{local:!0}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"user",children:p&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{className:"avatar",src:"https://github.com/bforbiggy.png",alt:"Biggy's pfp"}),(0,u.jsxs)("div",{className:"user-info",children:[(0,u.jsxs)("div",{className:"name",children:["\ud83c\udfb4 ",p.login," \ud83c\udfb4"]}),(0,u.jsx)("div",{className:"bio",children:p.bio}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("div",{className:"key",children:[(0,u.jsx)(o.kr8,{}),"Repositories:~ $ "]}),(0,u.jsx)("div",{className:"value",children:p.public_repos})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("div",{className:"key",children:[(0,u.jsx)(o.hwR,{}),"Followers:~ $"," "]}),(0,u.jsx)("div",{className:"value",children:p.followers})]})]})]})}),(0,u.jsxs)("div",{className:"repositories",children:[(0,u.jsx)("div",{className:"title",children:"bforbiggy@Repositories:~ $"}),null===m||void 0===m?void 0:m.map((function(e){var s;return(0,u.jsxs)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",className:"repository-container",children:[(0,u.jsxs)("div",{className:"name",children:[(0,u.jsx)(o.$W,{})," ",e.name]}),(0,u.jsx)("div",{className:"description",children:e.description}),(0,u.jsxs)("div",{className:"info-container",children:[(0,u.jsxs)("div",{className:"item",children:[(0,u.jsx)("div",{className:"key",children:"Main Language"}),(0,u.jsx)("div",{className:"value",style:{color:b(e.language)},children:null!==(s=e.language)&&void 0!==s?s:"Unknown"})]}),(0,u.jsxs)("div",{className:"item",children:[(0,u.jsx)("div",{className:"key",children:"Created On"}),(0,u.jsx)("div",{className:"value",children:new Date(e.created_at).toLocaleDateString()})]}),(0,u.jsxs)("div",{className:"item",children:[(0,u.jsx)("div",{className:"key",children:(0,u.jsx)(d.QJe,{})}),(0,u.jsx)("div",{className:"value",children:e.stargazers_count})]})]})]})}))]})]})}),(0,u.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=77.3dbf9b5b.chunk.js.map