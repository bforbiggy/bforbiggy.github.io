import{s as pe,n as ie,o as de,g as me,c as ge,a as xe,b as fe,d as ue}from"../chunks/scheduler.Cpuw55rT.js";import{S as be,i as we,e as n,s as x,c as o,a as m,d as c,f as b,l as f,g as ae,h as t,t as W,k as ee,b as B,j as J,m as De}from"../chunks/index.DgktKwEV.js";import{e as ve}from"../chunks/each.D6YF6ztN.js";function he(p,e,a){const i=p.slice();return i[4]=e[a],i}function Ee(p){let e,a,i,D,_,d,u="🎴",v,w,k=p[1].login+"",K,V,E,q="🎴",te,F,L=p[1].bio+"",N,Q,z,C,U=`<span class="icon-[carbon--cics-program] text-red-500"></span>
					Repositories:`,le,A,y=p[1].public_repos+"",T,X,S,I,Y=`<span class="icon-[carbon--user-profile] text-red-500"></span>
					Followers:`,$,j,M=p[1].followers+"",G,Z,P,g=ve(p[0]),l=[];for(let s=0;s<g.length;s+=1)l[s]=_e(he(p,g,s));return{c(){e=n("div"),a=n("img"),D=x(),_=n("div"),d=n("span"),d.textContent=u,v=x(),w=n("p"),K=W(k),V=x(),E=n("span"),E.textContent=q,te=x(),F=n("p"),N=W(L),Q=x(),z=n("div"),C=n("p"),C.innerHTML=U,le=x(),A=n("p"),T=W(y),X=x(),S=n("div"),I=n("p"),I.innerHTML=Y,$=x(),j=n("p"),G=W(M),Z=x(),P=n("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0});var h=m(e);a=o(h,"IMG",{class:!0,src:!0,alt:!0}),D=b(h),_=o(h,"DIV",{class:!0});var r=m(_);d=o(r,"SPAN",{"data-svelte-h":!0}),ee(d)!=="svelte-gtin6"&&(d.textContent=u),v=b(r),w=o(r,"P",{});var H=m(w);K=B(H,k),H.forEach(c),V=b(r),E=o(r,"SPAN",{"data-svelte-h":!0}),ee(E)!=="svelte-gtin6"&&(E.textContent=q),r.forEach(c),te=b(h),F=o(h,"P",{});var se=m(F);N=B(se,L),se.forEach(c),Q=b(h),z=o(h,"DIV",{class:!0});var O=m(z);C=o(O,"P",{"data-svelte-h":!0}),ee(C)!=="svelte-s55131"&&(C.innerHTML=U),le=b(O),A=o(O,"P",{class:!0});var re=m(A);T=B(re,y),re.forEach(c),O.forEach(c),X=b(h),S=o(h,"DIV",{class:!0});var R=m(S);I=o(R,"P",{"data-svelte-h":!0}),ee(I)!=="svelte-pxwgws"&&(I.innerHTML=Y),$=b(R),j=o(R,"P",{class:!0});var ne=m(j);G=B(ne,M),ne.forEach(c),R.forEach(c),h.forEach(c),Z=b(s),P=o(s,"DIV",{class:!0});var ce=m(P);for(let oe=0;oe<l.length;oe+=1)l[oe].l(ce);ce.forEach(c),this.h()},h(){f(a,"class","min-w-64 max-w-64 h-auto rounded-full border-4 border-teal-800"),ue(a.src,i=p[1].avatar_url)||f(a,"src",i),f(a,"alt",""),f(_,"class","flex justify-between text-3xl py-1"),f(A,"class","text-red-500"),f(z,"class","w-full flex justify-between text-md"),f(j,"class","text-red-500"),f(S,"class","w-full flex justify-between text-md"),f(e,"class","z-20 w-min h-min bg-slate-900 rounded-md border-2 border-slate-800 p-3 flex flex-col gap-2 text-center text-amber-50"),f(P,"class","z-20 flex flex-col gap-6 text-center")},m(s,h){ae(s,e,h),t(e,a),t(e,D),t(e,_),t(_,d),t(_,v),t(_,w),t(w,K),t(_,V),t(_,E),t(e,te),t(e,F),t(F,N),t(e,Q),t(e,z),t(z,C),t(z,le),t(z,A),t(A,T),t(e,X),t(e,S),t(S,I),t(S,$),t(S,j),t(j,G),ae(s,Z,h),ae(s,P,h);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(P,null)},p(s,h){if(h&2&&!ue(a.src,i=s[1].avatar_url)&&f(a,"src",i),h&2&&k!==(k=s[1].login+"")&&J(K,k),h&2&&L!==(L=s[1].bio+"")&&J(N,L),h&2&&y!==(y=s[1].public_repos+"")&&J(T,y),h&2&&M!==(M=s[1].followers+"")&&J(G,M),h&1){g=ve(s[0]);let r;for(r=0;r<g.length;r+=1){const H=he(s,g,r);l[r]?l[r].p(H,h):(l[r]=_e(H),l[r].c(),l[r].m(P,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=g.length}},d(s){s&&(c(e),c(Z),c(P)),De(l,s)}}}function Ce(p){let e,a="Loading....";return{c(){e=n("p"),e.textContent=a,this.h()},l(i){e=o(i,"P",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1ddi0pk"&&(e.textContent=a),this.h()},h(){f(e,"class","z-20 text-middle text-4xl text-amber-50")},m(i,D){ae(i,e,D)},p:ie,d(i){i&&c(e)}}}function _e(p){let e,a,i,D,_=p[4].name+"",d,u,v,w=(p[4].description??"No description!")+"",k,K,V,E,q,te="Main Language",F,L,N=(p[4].language??"Unknown")+"",Q,z,C,U,le="Created On",A,y,T=new Date(p[4].created_at).toLocaleDateString()+"",X,S,I,Y,$,j,M=p[4].stargazers_count+"",G,Z,P;return{c(){e=n("a"),a=n("div"),i=n("span"),D=x(),d=W(_),u=x(),v=n("div"),k=W(w),K=x(),V=n("div"),E=n("div"),q=n("div"),q.textContent=te,F=x(),L=n("div"),Q=W(N),z=x(),C=n("div"),U=n("div"),U.textContent=le,A=x(),y=n("div"),X=W(T),S=x(),I=n("div"),Y=n("span"),$=x(),j=n("div"),G=W(M),Z=x(),this.h()},l(g){e=o(g,"A",{class:!0,href:!0,target:!0});var l=m(e);a=o(l,"DIV",{class:!0});var s=m(a);i=o(s,"SPAN",{class:!0}),m(i).forEach(c),D=b(s),d=B(s,_),s.forEach(c),u=b(l),v=o(l,"DIV",{class:!0});var h=m(v);k=B(h,w),h.forEach(c),K=b(l),V=o(l,"DIV",{class:!0});var r=m(V);E=o(r,"DIV",{class:!0});var H=m(E);q=o(H,"DIV",{"data-svelte-h":!0}),ee(q)!=="svelte-quw9rb"&&(q.textContent=te),F=b(H),L=o(H,"DIV",{});var se=m(L);Q=B(se,N),se.forEach(c),H.forEach(c),z=b(r),C=o(r,"DIV",{class:!0});var O=m(C);U=o(O,"DIV",{"data-svelte-h":!0}),ee(U)!=="svelte-1b4uwaz"&&(U.textContent=le),A=b(O),y=o(O,"DIV",{});var re=m(y);X=B(re,T),re.forEach(c),O.forEach(c),S=b(r),I=o(r,"DIV",{class:!0});var R=m(I);Y=o(R,"SPAN",{class:!0}),m(Y).forEach(c),$=b(R),j=o(R,"DIV",{});var ne=m(j);G=B(ne,M),ne.forEach(c),R.forEach(c),r.forEach(c),Z=b(l),l.forEach(c),this.h()},h(){f(i,"class","icon-[carbon--branch] text-green-500"),f(a,"class","text-left text-2xl text-white"),f(v,"class","min-h-20 text-left"),f(E,"class","flex flex-col"),f(C,"class","flex flex-col"),f(Y,"class","icon-[carbon--star-filled]"),f(I,"class","flex flex-col"),f(V,"class","flex justify-around"),f(e,"class","max-w-[500px] flex flex-col gap-3 rounded-xl border-2 border-neutral-800 p-4 bg-slate-950 hover:scale-110 hover:border-rose-400 transition-all text-wrap text-emerald-50"),f(e,"href",P=p[4].html_url),f(e,"target","_blank")},m(g,l){ae(g,e,l),t(e,a),t(a,i),t(a,D),t(a,d),t(e,u),t(e,v),t(v,k),t(e,K),t(e,V),t(V,E),t(E,q),t(E,F),t(E,L),t(L,Q),t(V,z),t(V,C),t(C,U),t(C,A),t(C,y),t(y,X),t(V,S),t(V,I),t(I,Y),t(I,$),t(I,j),t(j,G),t(e,Z)},p(g,l){l&1&&_!==(_=g[4].name+"")&&J(d,_),l&1&&w!==(w=(g[4].description??"No description!")+"")&&J(k,w),l&1&&N!==(N=(g[4].language??"Unknown")+"")&&J(Q,N),l&1&&T!==(T=new Date(g[4].created_at).toLocaleDateString()+"")&&J(X,T),l&1&&M!==(M=g[4].stargazers_count+"")&&J(G,M),l&1&&P!==(P=g[4].html_url)&&f(e,"href",P)},d(g){g&&c(e)}}}function Ie(p){let e,a,i;function D(u,v){return u[1]?Ee:Ce}let _=D(p),d=_(p);return{c(){e=n("div"),a=n("div"),i=x(),d.c(),this.h()},l(u){e=o(u,"DIV",{class:!0});var v=m(e);a=o(v,"DIV",{class:!0}),m(a).forEach(c),i=b(v),d.l(v),v.forEach(c),this.h()},h(){f(a,"class","z-10 fixed inset-0 m-auto w-full h-full bg-[url('$lib/assets/Sprinkle.svg')] opacity-30"),f(e,"class","min-h-[100vh] min-w-[100vw] max-w-[100vw] bg-slate-950 flex justify-center gap-32 p-28")},m(u,v){ae(u,e,v),t(e,a),t(e,i),d.m(e,null)},p(u,[v]){_===(_=D(u))&&d?d.p(u,v):(d.d(1),d=_(u),d&&(d.c(),d.m(e,null)))},i:ie,o:ie,d(u){u&&c(e),d.d()}}}function Ve(p,e,a){let i,D=null,_=null;de(async()=>{console.log("WTF");let u,v;u=await fetch("https://api.github.com/users/bforbiggy/repos"),v=await u.json(),a(0,D=v.filter(w=>!w.fork).sort((w,k)=>k.stargazers_count-w.stargazers_count||k.size-w.size)),u=await fetch("https://api.github.com/users/bforbiggy"),v=await u.json(),a(1,_=v)});const d=me("menu");return ge(p,d,u=>a(3,i=u)),de(()=>{fe(d,i.icons=!0,i)}),xe(()=>{fe(d,i.icons=!1,i)}),[D,_,d]}class Se extends be{constructor(e){super(),we(this,e,Ve,Ie,pe,{})}}export{Se as component};