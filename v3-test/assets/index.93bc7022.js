import{c as j}from"./use-translate.3147781c.js";import{n as S,t as h,m as V,w as y}from"./with-install.6d6d29d8.js";import{F as A}from"./constant.bdedcaa1.js";import{u as C}from"./use-expose.89c20f56.js";import{z as T,e as x}from"./vue-libs.4d090e76.js";import{u as M}from"./useChildren.e93f4c15.js";const[N,k]=j("form"),I={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:S,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:h,validateTrigger:V("onBlur"),showErrorMessage:h,errorMessageAlign:String};var O=T({name:N,props:I,emits:["submit","failed"],setup(r,{emit:c,slots:a}){const{children:i,linkChildren:p}=M(A),l=e=>e?i.filter(t=>e.includes(t.name)):i,g=e=>new Promise((t,n)=>{const o=[];l(e).reduce((P,E)=>P.then(()=>{if(!o.length)return E.validate().then(m=>{m&&o.push(m)})}),Promise.resolve()).then(()=>{o.length?n(o):t()})}),v=e=>new Promise((t,n)=>{const o=l(e);Promise.all(o.map(s=>s.validate())).then(s=>{s=s.filter(Boolean),s.length?n(s):t()})}),b=e=>{const t=i.find(n=>n.name===e);return t?new Promise((n,o)=>{t.validate().then(s=>{s?o(s):n()})}):Promise.reject()},d=e=>typeof e=="string"?b(e):r.validateFirst?g(e):v(e),F=e=>{typeof e=="string"&&(e=[e]),l(e).forEach(n=>{n.resetValidation()})},u=(e,t)=>{i.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},w=()=>i.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),f=()=>{const e=w();d().then(()=>c("submit",e)).catch(t=>{c("failed",{values:e,errors:t}),r.scrollToError&&t[0].name&&u(t[0].name)})},B=e=>{e.preventDefault(),f()};return p({props:r}),C({submit:f,validate:d,scrollToField:u,resetValidation:F}),()=>{var e;return x("form",{class:k(),onSubmit:B},[(e=a.default)==null?void 0:e.call(a)])}}});const W=y(O);export{W as F};