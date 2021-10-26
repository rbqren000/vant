import{A as _,a,b as u}from"./index.f3664880.js";import{c as g,e as j,u as I}from"./use-translate.0e71ed3e.js";import{n as k,u as A,w as h}from"./with-install.50e547fb.js";import{r as E,u as F}from"./use-route.2644a9f9.js";import{B as y,I as D}from"./index.8ab27c81.js";import{u as w}from"./useParent.fa48ddd0.js";import{z as p,e as n,r as P,o as v,a as S,w as c,A as t,F as N}from"./vue-libs.4d090e76.js";import{T as f}from"./function-call.4a2ede85.js";import"./useChildren.e93f4c15.js";import"./use-expose.9282c2d4.js";import"./index.834fc7f9.js";import"./constant.bdedcaa1.js";import"./index.19e95024.js";import"./mount-component.86c3a9cb.js";import"./index.b86b64af.js";import"./interceptor.eaf1d646.js";import"./use-touch.66e4202e.js";import"./index.4a4661ca.js";import"./utils.39620306.js";import"./index.cbbbdc40.js";import"./use-lazy-render.a4eed0b1.js";import"./on-popup-reopen.8d8043ad.js";import"./index.19403714.js";const[T,m]=g("action-bar-icon"),z=j({},E,{dot:Boolean,text:String,icon:String,color:String,badge:k,iconClass:A,iconPrefix:String});var R=p({name:T,props:z,setup(r,{slots:o}){const i=F();w(_);const s=()=>{const{dot:d,badge:x,icon:l,color:b,iconClass:B,iconPrefix:C}=r;return o.icon?n(y,{dot:d,content:x,class:m("icon")},{default:o.icon}):n(D,{tag:"div",dot:d,name:l,badge:x,color:b,class:[m("icon"),B],classPrefix:C},null)};return()=>n("div",{role:"button",class:m(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}});const e=h(R);const it=p({setup(r){const o=I({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>f(o("clickIcon")),s=()=>f(o("clickButton"));return(d,x)=>{const l=P("demo-block");return v(),S(N,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{it as default};
