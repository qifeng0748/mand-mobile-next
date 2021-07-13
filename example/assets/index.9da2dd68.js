var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))o.call(t,l)&&s(e,l,t[l]);return e},d=(e,a)=>t(e,l(a));import{d as i,o as m,c,l as u,f as p,F as v,h as f,n as b,m as k,u as y,j as h,w as g,r as x,t as S,i as w}from"./vendor.e458434b.js";import{a as _}from"./index.2cbb209b.js";import{_ as j}from"./index.d494cdd6.js";import{c as O}from"./index.bc519576.js";import"./animate.193f5b76.js";const z={loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},row:{type:Number,default:3},title:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:"40%"},rowWidth:{type:[Number,String,Array],default:"100%"},avatarSize:{type:String,default:"md"}};var W=i({name:"MdSkeleton",props:z,setup:e=>r({},(e=>{const t=e=>"number"==typeof e;return{getRowWidth:l=>{const a=e.rowWidth;if(e&&Array.isArray(a)){const e=a[l];return t(e)?`${e}%`:e}return a?t(a)?`${a}%`:a:"100%"},getTitleWidth:()=>{const l=e.titleWidth;return l?t(l)?`${l}%`:l:"40%"}}})(e))});const C={key:0,class:"md-skeleton"},T={class:"md-skeleton-content"},P={key:1};W.render=function(e,t,l,a,n,o){return e.loading?(m(),c("div",C,[e.avatar?(m(),c("div",{key:0,class:{"md-skeleton-avatar":!0,"md-skeleton-avatar-large":"lg"===e.avatarSize,"md-skeleton-avatar-small":"sm"===e.avatarSize}},null,2)):u("",!0),p("div",T,[e.title?(m(),c("h4",{key:0,class:"md-skeleton-title",style:{width:e.getTitleWidth()}},null,4)):u("",!0),(m(!0),c(v,null,f(e.row,(t=>(m(),c("div",{key:t,class:"md-skeleton-row",style:{width:t===e.row?"60%":e.getRowWidth(t-1)}},null,4)))),128))])])):(m(),c("div",P,[b(e.$slots,"default")]))},W.install=e=>{e.component(W.name,W)};const $={class:"\n      md-example-child\n      md-example-child-skeleton\n      md-example-child-skeleton-0\n    "};var D=i(d(r({},{name:"SkeletonDemo",title:"基础"}),{expose:[],setup(e){const t=k(!0);return(e,l)=>(m(),c("div",$,[p(y(W),{title:"",loading:t.value},null,8,["loading"])]))}})),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const A={class:"\n      md-example-child\n      md-example-child-skeleton\n      md-example-child-skeleton-1\n    "};var B=i(d(r({},{name:"SkeletonDemo",title:"组合骨架",titleEnUS:"Combined skeleton"}),{expose:[],setup:e=>(e,t)=>(m(),c("div",A,[p(y(W),{avatar:"",title:""})]))})),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const E={class:"\n      md-example-child\n      md-example-child-skeleton\n      md-example-child-skeleton-0\n    "},R=p("span",{class:"holder"},null,-1),F=p("span",{class:"holder"},null,-1);var I=i(d(r({},{name:"SkeletonDemo",title:"3s后加载完成"}),{expose:[],setup(e){const t=k(!0);return h((()=>{t.value=!0,setTimeout((()=>{t.value=!1}),3e3)})),(e,l)=>(m(),c("div",E,[p(y(_),null,{default:g((()=>[p(y(W),{avatar:"",title:"",loading:t.value,row:2,class:"skeleton-item"},{default:g((()=>[p(y(j),{title:"交通银行",brief:"展示摘要描述",addon:"附加文案",arrow:""},{left:g((()=>[R])),_:1})])),_:1},8,["loading"]),p(y(W),{avatar:"",title:"",loading:t.value,row:2,class:"skeleton-item"},{default:g((()=>[p(y(j),{title:"招商银行",brief:"展示摘要描述",addon:"附加文案",arrow:""},{left:g((()=>[F])),_:1})])),_:1},8,["loading"])])),_:1})]))}}));const U={"./demo0.vue":M,"./demo1.vue":N,"./demo2.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I})};var q=O("Skeleton",Object.entries(U).map((e=>e[1].default)));const G={class:"md-nav"},H=p("p",{class:"name"},"Skeleton",-1),J=p("p",{class:"name-zh"},"骨架屏",-1),K={class:"md-example skeleton"},L={class:"md-example-content"};q.render=function(e,t,l,a,n,o){const s=x("md-icon");return m(),c(v,null,[p("div",G,[p("p",{class:"home",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[p(s,{name:"home",size:"lg"})]),H,J]),p("div",K,[(m(!0),c(v,null,f(e.demos,((e,t)=>(m(),c("section",{key:t,class:"md-example-section"},[p("div",{class:"md-example-title",textContent:S(e.title)},null,8,["textContent"]),p("div",{class:"md-example-describe",textContent:S(e.describe)},null,8,["textContent"]),p("div",L,[(m(),c(w(e)))])])))),128))])],64)};export default q;
