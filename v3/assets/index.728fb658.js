import{c as W,y as E,i as P,u as M}from"./use-translate.0e71ed3e.js";import{c as B,w as V}from"./with-install.50e547fb.js";import{z as F,C as y,D as q,x as z,j as L,v as U,e as t,r as $,o as O,a as X,w as r,A as e,h as b,t as w,F as G}from"./vue-libs.4d090e76.js";import{u as H}from"./use-expose.9282c2d4.js";import{o as J}from"./on-popup-reopen.8d8043ad.js";import{I as C}from"./index.8ab27c81.js";import{o as K,u as Q}from"./index.4a4661ca.js";import{r as Y,d as A}from"./utils.39620306.js";import{S as Z,a as _}from"./index.60bb85cf.js";import"./use-touch.66e4202e.js";import"./useChildren.e93f4c15.js";import"./useParent.fa48ddd0.js";const[ee,m]=W("notice-bar"),te={text:String,mode:String,color:String,delay:B(1),speed:B(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var oe=F({name:ee,props:te,emits:["close","replay"],setup(l,{emit:o,slots:c}){let i=0,a=0,v;const x=y(),h=y(),n=q({show:!0,offset:0,duration:0}),T=()=>{if(c["left-icon"])return c["left-icon"]();if(l.leftIcon)return t(C,{class:m("left-icon"),name:l.leftIcon},null)},j=()=>{if(l.mode==="closeable")return"cross";if(l.mode==="link")return"arrow"},D=s=>{l.mode==="closeable"&&(n.show=!1,o("close",s))},k=()=>{if(c["right-icon"])return c["right-icon"]();const s=j();if(s)return t(C,{name:s,class:m("right-icon"),onClick:D},null)},I=()=>{n.offset=i,n.duration=0,Y(()=>{A(()=>{n.offset=-a,n.duration=(a+i)/+l.speed,o("replay")})})},R=()=>{const s=l.scrollable===!1&&!l.wrapable,d={transform:n.offset?`translateX(${n.offset}px)`:"",transitionDuration:`${n.duration}s`};return t("div",{ref:x,role:"marquee",class:m("wrap")},[t("div",{ref:h,style:d,class:[m("content"),{"van-ellipsis":s}],onTransitionend:I},[c.default?c.default():l.text])])},f=()=>{const{delay:s,speed:d,scrollable:p}=l,N=P(s)?+s*1e3:0;i=0,a=0,n.offset=0,n.duration=0,clearTimeout(v),v=setTimeout(()=>{if(!x.value||!h.value||p===!1)return;const g=E(x).width,S=E(h).width;(p||S>g)&&A(()=>{i=g,a=S,n.offset=-a,n.duration=a/+d})},N)};return J(f),K(f),Q("pageshow",f),H({reset:f}),z(()=>[l.text,l.scrollable],f),()=>{const{color:s,wrapable:d,background:p}=l;return L(t("div",{role:"alert",class:m({wrapable:d}),style:{color:s,background:p}},[T(),R(),k()]),[[U,n.show]])}}});const u=V(oe);const xe=F({setup(l){const o=M({"zh-CN":{text:"\u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002",mode:"\u901A\u77E5\u680F\u6A21\u5F0F",content:"\u5185\u5BB9",wrapable:"\u591A\u884C\u5C55\u793A",shortText:"\u6280\u672F\u662F\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002",scrollable:"\u6EDA\u52A8\u64AD\u653E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",verticalScroll:"\u5782\u76F4\u6EDA\u52A8"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll"}});return(c,i)=>{const a=$("demo-block");return O(),X(G,null,[t(a,{title:e(o)("basicUsage")},{default:r(()=>[t(e(u),{text:e(o)("text"),scrollable:"","left-icon":"volume-o"},null,8,["text"])]),_:1},8,["title"]),t(a,{title:e(o)("scrollable")},{default:r(()=>[t(e(u),{scrollable:"",text:e(o)("shortText")},null,8,["text"]),t(e(u),{scrollable:!1,text:e(o)("text")},null,8,["text"])]),_:1},8,["title"]),t(a,{title:e(o)("wrapable")},{default:r(()=>[t(e(u),{wrapable:"",scrollable:!1,text:e(o)("text")},null,8,["text"])]),_:1},8,["title"]),t(a,{title:e(o)("mode")},{default:r(()=>[t(e(u),{mode:"closeable",text:e(o)("shortText")},null,8,["text"]),t(e(u),{mode:"link",text:e(o)("shortText")},null,8,["text"])]),_:1},8,["title"]),t(a,{title:e(o)("customStyle")},{default:r(()=>[t(e(u),{text:e(o)("shortText"),color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"},null,8,["text"])]),_:1},8,["title"]),t(a,{title:e(o)("verticalScroll")},{default:r(()=>[t(e(u),{"left-icon":"volume-o",scrollable:!1},{default:r(()=>[t(e(Z),{vertical:"",class:"notice-swipe",autoplay:3e3,"show-indicators":!1},{default:r(()=>[t(e(_),null,{default:r(()=>[b(w(e(o)("content"))+" 1",1)]),_:1}),t(e(_),null,{default:r(()=>[b(w(e(o)("content"))+" 2",1)]),_:1}),t(e(_),null,{default:r(()=>[b(w(e(o)("content"))+" 3",1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])],64)}}});export{xe as default};
