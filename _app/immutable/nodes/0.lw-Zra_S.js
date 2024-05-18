import{s as V,q as re,n as B,r as te,u as G,c as D,v as j,w as oe,x as ce,y as ue,z as ie,A as K}from"../chunks/scheduler.Cno5W6jL.js";import{S as R,i as X,e as d,c as h,a as b,d as i,l as m,g as k,z as A,s as w,v as se,f as E,w as le,h as $,x as ae,p as H,n as I,A as fe,y as ne,t as me,b as _e}from"../chunks/index.CkWWA75-.js";import{e as Q}from"../chunks/each.D6YF6ztN.js";import{b as pe,w as W}from"../chunks/entry.B6zDF1Oz.js";import{p as de}from"../chunks/stores.BhiQ5UzX.js";const he=!0,Be=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"})),be=""+new URL("../assets/bgm.Df0XfbhG.mp3",import.meta.url).href;function ge(o){let e,l,s=!0,c,n;return{c(){e=d("audio"),this.h()},l(t){e=h(t,"AUDIO",{src:!0}),b(e).forEach(i),this.h()},h(){re(e.src,l=be)||m(e,"src",l),e.loop=!0},m(t,a){k(t,e,a),c||(n=[A(e,"play",o[1]),A(e,"pause",o[1])],c=!0)},p(t,[a]){a&1&&s!==(s=t[0])&&e[s?"pause":"play"]()},i:B,o:B,d(t){t&&i(e),c=!1,te(n)}}}function $e(o,e,l){let s=!0;G("bgm").subscribe(t=>{l(0,s=!t)});function n(){s=this.paused,l(0,s)}return[s,n]}class ke extends R{constructor(e){super(),X(this,e,$e,ge,V,{})}}function Z(o,e,l){const s=o.slice();s[8]=e[l];const c=s[8].url==s[2].route.id;return s[9]=c,s}function ye(o){let e;return{c(){e=d("span"),this.h()},l(l){e=h(l,"SPAN",{class:!0,style:!0}),b(e).forEach(i),this.h()},h(){m(e,"class","icon-[tabler--music-off] "+L),m(e,"style",P)},m(l,s){k(l,e,s)},p:B,d(l){l&&i(e)}}}function ve(o){let e;return{c(){e=d("span"),this.h()},l(l){e=h(l,"SPAN",{class:!0,style:!0}),b(e).forEach(i),this.h()},h(){m(e,"class","icon-[tabler--music] "+L),m(e,"style",P)},m(l,s){k(l,e,s)},p:B,d(l){l&&i(e)}}}function ee(o){let e,l=o[8].name+"",s,c,n;return{c(){e=d("a"),s=me(l),c=w(),this.h()},l(t){e=h(t,"A",{class:!0,href:!0});var a=b(e);s=_e(a,l),c=E(a),a.forEach(i),this.h()},h(){m(e,"class",n="text-center rounded-md "+(o[9]&&"bg-gradient-to-r from-transparent via-pink-700 to-transparent")+" p-2 mr-16"),m(e,"href",pe+"	"+o[8].url)},m(t,a){k(t,e,a),$(e,s),$(e,c)},p(t,a){a&4&&n!==(n="text-center rounded-md "+(t[9]&&"bg-gradient-to-r from-transparent via-pink-700 to-transparent")+" p-2 mr-16")&&m(e,"class",n)},d(t){t&&i(e)}}}function xe(o){let e,l,s,c,n,t,a,y,v,N,g,O,x,S,C,Y;function F(r,f){return r[1]?ve:ye}let U=F(o),p=U(o),M=Q([{url:"/",name:"Home"},{url:"/links",name:"Links"}]),_=[];for(let r=0;r<2;r+=1)_[r]=ee(Z(o,M,r));return x=new ke({}),{c(){e=d("div"),l=d("button"),s=d("span"),c=w(),n=d("button"),p.c(),t=w(),a=d("nav"),y=d("button"),v=d("span"),N=w();for(let r=0;r<2;r+=1)_[r].c();O=w(),se(x.$$.fragment),this.h()},l(r){e=h(r,"DIV",{class:!0});var f=b(e);l=h(f,"BUTTON",{});var u=b(l);s=h(u,"SPAN",{class:!0,style:!0}),b(s).forEach(i),u.forEach(i),c=E(f),n=h(f,"BUTTON",{});var T=b(n);p.l(T),T.forEach(i),f.forEach(i),t=E(r),a=h(r,"NAV",{class:!0});var z=b(a);y=h(z,"BUTTON",{class:!0});var J=b(y);v=h(J,"SPAN",{class:!0,style:!0}),b(v).forEach(i),J.forEach(i),N=E(z);for(let q=0;q<2;q+=1)_[q].l(z);z.forEach(i),O=E(r),le(x.$$.fragment,r),this.h()},h(){m(s,"class","icon-[tabler--menu-2] "+L),m(s,"style",P),m(e,"class","fixed z-50 top-2 left-2 h-4"),m(v,"class","icon-[ri--close-fill] "+L),m(v,"style",P),m(y,"class","ml-auto w-12 h-auto"),m(a,"class",g="z-50 fixed bg-slate-900 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[600px] flex flex-col p-6 text-white text-2xl font-semibold "+(o[0]?"translate-x-0":"-translate-x-full")+" transition-transform")},m(r,f){k(r,e,f),$(e,l),$(l,s),$(e,c),$(e,n),p.m(n,null),k(r,t,f),k(r,a,f),$(a,y),$(y,v),$(a,N);for(let u=0;u<2;u+=1)_[u]&&_[u].m(a,null);k(r,O,f),ae(x,r,f),S=!0,C||(Y=[A(l,"click",o[5]),A(n,"click",o[6]),A(y,"click",o[7])],C=!0)},p(r,[f]){if(U===(U=F(r))&&p?p.p(r,f):(p.d(1),p=U(r),p&&(p.c(),p.m(n,null))),f&4){M=Q([{url:"/",name:"Home"},{url:"/links",name:"Links"}]);let u;for(u=0;u<2;u+=1){const T=Z(r,M,u);_[u]?_[u].p(T,f):(_[u]=ee(T),_[u].c(),_[u].m(a,null))}for(;u<2;u+=1)_[u].d(1)}(!S||f&1&&g!==(g="z-50 fixed bg-slate-900 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[600px] flex flex-col p-6 text-white text-2xl font-semibold "+(r[0]?"translate-x-0":"-translate-x-full")+" transition-transform"))&&m(a,"class",g)},i(r){S||(H(x.$$.fragment,r),S=!0)},o(r){I(x.$$.fragment,r),S=!1},d(r){r&&(i(e),i(t),i(a),i(O)),p.d(),fe(_,r),ne(x,r),C=!1,te(Y)}}}const L="w-9 h-9 stroke-neutral-200 fill-neutral-200",P="color: white;";function we(o,e,l){let s,c,n;D(o,de,g=>l(2,n=g));const t=G("menu");D(o,t,g=>l(0,s=g));const a=G("bgm");return D(o,a,g=>l(1,c=g)),[s,c,n,t,a,()=>j(t,s=!0,s),()=>j(a,c=!c,c),()=>j(t,s=!1,s)]}class Ee extends R{constructor(e){super(),X(this,e,we,xe,V,{})}}function Se(o){let e,l,s;e=new Ee({});const c=o[1].default,n=oe(c,o,o[0],null);return{c(){se(e.$$.fragment),l=w(),n&&n.c()},l(t){le(e.$$.fragment,t),l=E(t),n&&n.l(t)},m(t,a){ae(e,t,a),k(t,l,a),n&&n.m(t,a),s=!0},p(t,[a]){n&&n.p&&(!s||a&1)&&ce(n,c,t,t[0],s?ie(c,t[0],a,null):ue(t[0]),null)},i(t){s||(H(e.$$.fragment,t),H(n,t),s=!0)},o(t){I(e.$$.fragment,t),I(n,t),s=!1},d(t){t&&i(l),ne(e,t),n&&n.d(t)}}}function Te(o,e,l){let{$$slots:s={},$$scope:c}=e;const n=W(!1);K("menu",n);const t=W(!1);return K("bgm",t),o.$$set=a=>{"$$scope"in a&&l(0,c=a.$$scope)},[c,s]}class Le extends R{constructor(e){super(),X(this,e,Te,Se,V,{})}}export{Le as component,Be as universal};
