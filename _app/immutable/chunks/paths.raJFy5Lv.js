import{n as c,s as _}from"./scheduler.CarYPnzl.js";const e=[];function q(i,a=c){let n;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function g(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=a(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:g}}var f;const h=((f=globalThis.__sveltekit_gyjsql)==null?void 0:f.base)??"/sveltekit-github-pages";var l;const d=((l=globalThis.__sveltekit_gyjsql)==null?void 0:l.assets)??h;export{d as a,h as b,q as w};
