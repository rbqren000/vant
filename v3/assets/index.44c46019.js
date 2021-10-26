import{c as _,f as x,u as h}from"./use-translate.0e71ed3e.js";import{t as k,n as m,w as C}from"./with-install.50e547fb.js";import{z as g,B as y,e,C as b,r as S,o as B,a as j,w as p,A as t,d as w,F as P}from"./vue-libs.4d090e76.js";import{B as f}from"./index.834fc7f9.js";import"./constant.bdedcaa1.js";import"./use-route.2644a9f9.js";import"./index.8ab27c81.js";import"./index.19e95024.js";const[F,v]=_("progress"),W={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:k,pivotColor:String,trackColor:String,strokeWidth:m,percentage:{type:m,default:0,validator:a=>a>=0&&a<=100}};var E=g({name:F,props:W,setup(a){const o=y(()=>a.inactive?void 0:a.color),r=()=>{const{textColor:c,pivotText:i,pivotColor:u,percentage:n}=a,d=i!=null?i:`${n}%`;if(a.showPivot&&d){const s={color:c,left:`${+n}%`,transform:`translate(-${+n}%,-50%)`,background:u||o.value};return e("span",{style:s,class:v("pivot",{inactive:a.inactive})},[d])}};return()=>{const{trackColor:c,percentage:i,strokeWidth:u}=a,n={background:c,height:x(u)},d={background:o.value,transform:`scaleX(${+i/100})`};return e("div",{class:v(),style:n},[e("span",{class:v("portion",{inactive:a.inactive}),style:d},null),r()])}}});const l=C(E);const z={style:{"margin-top":"15px"}},X=g({setup(a){const o=h({"zh-CN":{title2:"\u7F6E\u7070",title3:"\u6837\u5F0F\u5B9A\u5236",strokeWidth:"\u7EBF\u6761\u7C97\u7EC6",transition:"\u8FC7\u6E21\u6548\u679C"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),r=b(50),c=n=>Math.min(Math.max(n,0),100),i=()=>{r.value=c(r.value+20)},u=()=>{r.value=c(r.value-20)};return(n,d)=>{const s=S("demo-block");return B(),j(P,null,[e(s,{title:t(o)("basicUsage")},{default:p(()=>[e(t(l),{percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("strokeWidth")},{default:p(()=>[e(t(l),{percentage:50,"stroke-width":"8"})]),_:1},8,["title"]),e(s,{title:t(o)("title2")},{default:p(()=>[e(t(l),{inactive:"",percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("title3")},{default:p(()=>[e(t(l),{color:"#f2826a",percentage:25,"pivot-text":t(o)("orange")},null,8,["pivot-text"]),e(t(l),{color:"#ee0a24",percentage:50,"pivot-text":t(o)("red")},null,8,["pivot-text"]),e(t(l),{percentage:75,"pivot-text":t(o)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])]),_:1},8,["title"]),e(s,{title:t(o)("transition")},{default:p(()=>[e(t(l),{percentage:r.value},null,8,["percentage"]),w("div",z,[e(t(f),{text:t(o)("add"),type:"primary",size:"small",onClick:i},null,8,["text"]),e(t(f),{text:t(o)("decrease"),type:"danger",size:"small",onClick:u},null,8,["text"])])]),_:1},8,["title"])],64)}}});export{X as default};
