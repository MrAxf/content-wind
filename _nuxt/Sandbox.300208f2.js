import v from"./CodeGroupTabs.6b32d2da.js";import{d as x,aa as g,r as n,o as h,b as r,c as l,W as S,N as c,f as y,l as k}from"./entry.bd302786.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=g(),a={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(a).map(t=>({label:t})),d=n(-1),b=n(),s=n(""),o=n(""),_=t=>{o.value=t,s.value=e.src||a[o.value](),localStorage.setItem("docus_sandbox",t)},f=t=>{d.value=t,_(u[t].label)};return h(()=>{o.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||a[o.value](),d.value=Object.keys(a).indexOf(o.value)}),(t,I)=>{const m=v;return r(),l("div",$,[i.src?y("",!0):(r(),S(m,{key:0,ref_key:"tabs",ref:b,"active-tab-index":c(d),tabs:c(u),"onUpdate:activeTabIndex":f},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const O=k(C,[["__scopeId","data-v-59227f5f"]]);export{O as default};
