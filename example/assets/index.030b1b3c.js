var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;import{_ as r}from"./index.88b34826.js";import{d,m,c as u,f as c,u as i,o as p,r as b,F as v,h as f,t as x,i as h}from"./vendor.e458434b.js";import{c as j}from"./index.bc519576.js";import"./animate.193f5b76.js";import"./constants.3b37bb64.js";const V={class:"\n      md-example-child\n      md-example-child-switch\n      md-example-child-switch-0\n    "},O=c("br",null,null,-1),w=c("br",null,null,-1),y=c("br",null,null,-1);var g,S=d((g=((e,l)=>{for(var t in l||(l={}))n.call(l,t)&&s(e,t,l[t]);if(a)for(var t of a(l))o.call(l,t)&&s(e,t,l[t]);return e})({},{name:"SwitchDemo",title:"基本"}),l(g,t({expose:[],setup(e){const l=m(!1),t=m(!0),a=m(!0),n=m(!1);return(e,o)=>(p(),u("div",V,[c(i(r),{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e)},null,8,["modelValue"]),O,c(i(r),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e)},null,8,["modelValue"]),w,c(i(r),{modelValue:a.value,"onUpdate:modelValue":o[3]||(o[3]=e=>a.value=e),disabled:""},null,8,["modelValue"]),y,c(i(r),{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=e=>n.value=e),disabled:""},null,8,["modelValue"])]))}}))));const C={"./demo0.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S})};var P=j("Switch",Object.entries(C).map((e=>e[1].default)));const _={class:"md-nav"},U=c("p",{class:"name"},"Switch",-1),z=c("p",{class:"name-zh"},"开关",-1),k={class:"md-example switch"},D={class:"md-example-content"};P.render=function(e,l,t,a,n,o){const s=b("md-icon");return p(),u(v,null,[c("div",_,[c("p",{class:"home",onClick:l[1]||(l[1]=l=>e.$router.push("/"))},[c(s,{name:"home",size:"lg"})]),U,z]),c("div",k,[(p(!0),u(v,null,f(e.demos,((e,l)=>(p(),u("section",{key:l,class:"md-example-section"},[c("div",{class:"md-example-title",textContent:x(e.title)},null,8,["textContent"]),c("div",{class:"md-example-describe",textContent:x(e.describe)},null,8,["textContent"]),c("div",D,[(p(),u(h(e)))])])))),128))])],64)};export default P;
