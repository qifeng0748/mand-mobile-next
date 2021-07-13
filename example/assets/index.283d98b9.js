var e=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(n,l,o)=>l in n?e(n,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[l]=o,c=(e,n)=>{for(var l in n||(n={}))t.call(n,l)&&i(e,l,n[l]);if(o)for(var l of o(n))a.call(n,l)&&i(e,l,n[l]);return e},s=(e,o)=>n(e,l(o));import"./animate.193f5b76.js";import{c as d}from"./use-create.fec9f911.js";import{n as r}from"./function.b7cba7b9.js";import{t as u}from"./index.0698aebd.js";import{_ as p}from"./index.526a3d9f.js";import{u as m}from"./show.9202fefa.js";import{U as v,b as h,H as b,S as x,C as f}from"./constants.3b37bb64.js";import{k as S,d as y,r as w,o as _,c as j,w as H,f as g,t as C,l as k,F as I,h as O,m as V,u as P,g as T,i as M}from"./vendor.e458434b.js";import{_ as A}from"./index.b0a6d8b3.js";import{c as U}from"./index.bc519576.js";import"./index.c5cb78ff.js";import"./index.3bf53a37.js";const z={modelValue:{type:[String,Number],default:""},visible:{type:Boolean,default:!1},title:{type:String,default:""},options:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:-1},invalidIndex:{type:Number,default:-1},cancelText:{type:String,default:u("md.action_sheet.cancel")}};var D=y({name:"MdActionSheet",components:{MdPopup:p},props:z,emits:[v,h,b,x,"cancel",f],setup(e,n){const{hideSheet:l,cancelHandler:o,onHide:t,onShow:a,popupShow:i,currentIndex:c,onSelect:s}=((e,{emit:n})=>{const{popupShow:l,onHide:o,onShow:t,hide:a}=m(e,n),i=S((()=>e.options.findIndex((n=>n.value===e.modelValue))));return{hideSheet:a,cancelHandler:()=>{n("cancel"),a()},onHide:o,onShow:t,popupShow:l,currentIndex:i,onSelect:l=>{e.options.findIndex((e=>e.value===l.value))!==e.invalidIndex&&(n(v,l.value),n(f,l),a())}}})(e,n);return{hideSheet:l,cancelHandler:o,onHide:t,onShow:a,popupShow:i,currentIndex:c,onSelect:s}}});const N={class:"md-action-sheet-content"},L={key:0,class:"md-action-sheet-header"},B={class:"md-action-sheet-list"},E={class:"md-action-sheet-item-wrapper"};D.render=function(e,n,l,o,t,a){const i=w("md-popup");return _(),j(i,{modelValue:e.popupShow,"onUpdate:modelValue":n[2]||(n[2]=n=>e.popupShow=n),class:"md-action-sheet",position:"bottom","prevent-scroll":"",onShow:e.onShow,onHide:e.onHide},{default:H((()=>[g("div",N,[e.title?(_(),j("div",L,C(e.title),1)):k("",!0),g("ul",B,[(_(!0),j(I,null,O(e.options,((n,l)=>(_(),j("li",{key:l,class:{active:l===e.currentIndex,disabled:l===e.invalidIndex,"md-action-sheet-item":!0},onClick:l=>e.onSelect(n)},[g("div",E,[g("div",{class:"md-action-sheet-item-section",innerHTML:n.text||n.label},null,8,["innerHTML"])])],10,["onClick"])))),128)),g("li",{class:"md-action-sheet-cancel",onClick:n[1]||(n[1]=(...n)=>e.cancelHandler&&e.cancelHandler(...n))},C(e.cancelText),1)])])])),_:1},8,["modelValue","onShow","onHide"])};D._instance=null,D._show=null,D.create=function({modelValue:e="",title:n="",options:l=[],invalidIndex:o=-1,cancelText:t=u("md.action_sheet.cancel"),maxHeight:a=400,onShow:i=r,onHide:c=r,onCancel:s=r,onSelect:p=r,onMaskClick:m=r}={}){var v,h,b,x;const f={modelValue:e,title:n,options:l,invalidIndex:o,cancelText:t,maxHeight:a,onShow:i,onHide:c,onCancel:s,onChange:p,"onUpdate:visible":m};if(D._show=()=>{var e;return null==(e=D._instance)?void 0:e.component.proxy.updateProps({visible:!0})},D._instance)return D._instance.component.proxy.updateProps(f),null==(v=D._show)||v.call(D),D._instance.component.proxy;const S=D._instance=d(D,f);if(null==(h=D._show)||h.call(D),null==(b=null==S?void 0:S.component)?void 0:b.proxy){const e=S.component.proxy.remove;S.component.proxy.remove=(...n)=>{var l;null==e||e.apply(null==(l=S.component)?void 0:l.proxy,n),D._instance=null}}return null==(x=null==S?void 0:S.component)?void 0:x.proxy};const F=D;F.install=e=>{e.component(F.name,F)};const $={class:"md-example-child md-example-child-action-sheet"},q=T("唤起动作面板");var G=y(s(c({},{name:"ActionSheetDemo",title:"基本"}),{expose:[],setup(e){const n=V(!1),l=V([{label:"选项1",value:0},{label:"选项2",value:1},{label:"选项3",value:2}]),o=V("");return(e,t)=>(_(),j("div",$,[g(P(A),{onClick:t[1]||(t[1]=e=>n.value=!n.value)},{default:H((()=>[q])),_:1}),g(P(F),{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),visible:n.value,"onUpdate:visible":t[3]||(t[3]=e=>n.value=e),title:"操作说明的标题","invalid-index":2,"cancel-text":"cancel",options:l.value},null,8,["modelValue","visible","options"])]))}})),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const K={class:"md-example-child md-example-child-action-sheet"},Q=T("唤起动作面板");var R=y(s(c({},{name:"ActionSheetDemo",title:"单例模式"}),{expose:[],setup(e){const n=V(""),l=()=>{const e=F.create({title:"操作说明的标题",options:[{label:"选项1",value:0},{label:"选项2",value:1},{label:"选项3",value:2}],modelValue:n.value,invalidIndex:2,cancelText:"取消",onCancel:()=>{var n;null==(n=null==e?void 0:e.updateProps)||n.call(e,{visible:!1})},onSelect:l=>{var o;console.log("click",l),n.value=l.value,null==(o=null==e?void 0:e.updateProps)||o.call(e,{visible:!1,modelValue:n.value})},onHide:()=>{var n;console.log("hide"),null==(n=null==e?void 0:e.remove)||n.call(e)},onMaskClick:()=>{var n;null==(n=null==e?void 0:e.updateProps)||n.call(e,{visible:!1})}})};return(e,n)=>(_(),j("div",K,[g(P(A),{onClick:l},{default:H((()=>[Q])),_:1})]))}}));const W={"./demo0.vue":J,"./demo1.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R})};var X=U("ActionSheet",Object.entries(W).map((e=>e[1].default)));const Y={class:"md-nav"},Z=g("p",{class:"name"},"ActionSheet",-1),ee=g("p",{class:"name-zh"},"动作面板",-1),ne={class:"md-example action-sheet"},le={class:"md-example-content"};X.render=function(e,n,l,o,t,a){const i=w("md-icon");return _(),j(I,null,[g("div",Y,[g("p",{class:"home",onClick:n[1]||(n[1]=n=>e.$router.push("/"))},[g(i,{name:"home",size:"lg"})]),Z,ee]),g("div",ne,[(_(!0),j(I,null,O(e.demos,((e,n)=>(_(),j("section",{key:n,class:"md-example-section"},[g("div",{class:"md-example-title",textContent:C(e.title)},null,8,["textContent"]),g("div",{class:"md-example-describe",textContent:C(e.describe)},null,8,["textContent"]),g("div",le,[(_(),j(M(e)))])])))),128))])],64)};export default X;
