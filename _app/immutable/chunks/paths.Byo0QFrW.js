import{n as b,s as _}from"./scheduler.CarYPnzl.js";const e=[];function d(n,l=b){let i;const o=new Set;function r(t){if(_(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(n))}function p(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,u)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:p}}var f;const g=((f=globalThis.__sveltekit_cn3p14)==null?void 0:f.base)??"/sveltekit-github-pages";var a;const k=((a=globalThis.__sveltekit_cn3p14)==null?void 0:a.assets)??g;export{k as a,g as b,d as w};