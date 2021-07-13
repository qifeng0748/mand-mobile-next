var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))r.call(a,t)&&n(e,t,a[t]);return e},d=(e,o)=>a(e,t(o));import{_ as m}from"./animate.193f5b76.js";import{i,_ as u}from"./index.582e30a7.js";import{_ as p}from"./index.f2ab4af5.js";import{f as c,g as b,E as f,U as v,D as g}from"./constants.3b37bb64.js";import{m as x,k as U,B as _,j,d as h,r as y,o as V,c as M,f as O,w as S,l as C,u as z,F as E,h as I,t as P,i as w}from"./vendor.e458434b.js";import{T as D}from"./index.d69c9f5b.js";import{c as T}from"./index.bc519576.js";import"./function.b7cba7b9.js";import"./index.8c95a9c2.js";import"./core.esm.e5e53058.js";import"./index.d963182d.js";import"./format.c53ae1e3.js";import"./index.c5cb78ff.js";import"./use-create.fec9f911.js";import"./index.526a3d9f.js";const k=d(s({},i),{modelValue:{type:Array,default:()=>[]},deletable:{type:Boolean,default:()=>!0}});var L=h({name:"MdImageUploader",components:{MdImageReader:u,MdIcon:m,MdImageViewer:p},props:k,emits:[c,b,f,v,g],setup(e,a){const{isOverMaxCount:t,dataList:o,onUploadComplete:l,onUploadError:r,onUploadSelect:n}=((e,{emit:a})=>{const t=x([]),o=U((()=>!!e.maxAmount&&e.modelValue.length>=e.maxAmount));return _((()=>e.modelValue),(e=>{t.value=e})),j((()=>{t.value=e.modelValue})),{isOverMaxCount:o,dataList:t,onUploadComplete:e=>{const o=t.value.push(e);a(b,e),a(v,o)},onUploadError:e=>{a(f,e)},onUploadSelect:e=>{a(c,e)}}})(e,a);return{dataList:o,isOverMaxCount:t,onUploadComplete:l,onUploadError:r,onUploadSelect:n}}});const A={class:"md-image-uploader"},q={class:"md-image-list-box"},B=O("p",{class:"info"},"添加图片",-1);L.render=function(e,a,t,o,l,r){const n=y("md-image-reader"),s=y("md-icon"),d=y("md-image-viewer");return V(),M("div",A,[O("div",q,[O(d,{list:e.dataList,"onUpdate:list":a[1]||(a[1]=a=>e.dataList=a),deletable:e.deletable},{default:S((()=>[e.isOverMaxCount?C("",!0):(V(),M("div",{key:0,class:["md-image-item add",{disabled:e.disabled}]},[O(n,{disabled:e.disabled,accept:e.accept,"max-size":e.maxSize,"max-amount":e.maxAmount,"is-multiple":e.isMultiple,capture:e.isCameraOnly,multiple:e.isMultiple,onSelect:e.onUploadSelect,onComplete:e.onUploadComplete,onError:e.onUploadError},null,8,["disabled","accept","max-size","max-amount","is-multiple","capture","multiple","onSelect","onComplete","onError"]),O(s,{name:"camera",size:"md",color:"#CCC"}),B],2))])),_:1},8,["list","deletable"])])])},L.install=e=>{e.component(L.name,L)};var F=h(d(s({},{name:"ImageUploaderDemo",title:"基本"}),{expose:[],setup(e){const a=x([{dataUrl:"//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a"},{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=()=>{},o=e=>{D.info(e.errorMsg||"上传失败")};return(e,l)=>(V(),M("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"max-size":500,onComplete:t,onError:o},null,8,["modelValue"])]))}})),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});var $=h(d(s({},{name:"ImageUploaderDemo",title:"禁止添加"}),{expose:[],setup(e){const a=x([{dataUrl:"//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a"}]),t=()=>{};return(e,o)=>(V(),M("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),"max-size":500,disabled:"",onSelect:t},null,8,["modelValue"])]))}})),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});var H=h(d(s({},{name:"ImageUploaderDemo",title:"最多上传3张数, 且限制最大500kb"}),{expose:[],setup(e){const a=x([{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=e=>{D.info(e.errorMsg||"上传失败")};return(e,o)=>(V(),M("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),"max-amount":3,size:500,onError:t},null,8,["modelValue"])]))}})),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});var K=h(d(s({},{name:"ImageUploaderDemo",title:"一次选择多张"}),{expose:[],setup(e){const a=x([{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=e=>{D.info(e.errorMsg||"上传失败")};return(e,o)=>(V(),M("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),"is-multiple":!0,"max-amount":4,onError:t},null,8,["modelValue"])]))}})),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});var Q=h(d(s({},{name:"ImageUploaderDemo",title:"仅限png图片类型"}),{expose:[],setup(e){const a=x([{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=x(["png"]),o=e=>{D.info(e.errorMsg||"上传失败")};return(e,l)=>(V(),M("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),accept:t.value,onError:o},null,8,["modelValue","accept"])]))}})),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});var X=h(d(s({},{name:"ImageUploaderDemo",title:"压缩图片"}),{expose:[],setup(e){const a=x([{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=x([{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),o=x({width:800,height:800,quality:.8}),l=x({width:400,height:400,quality:.3}),r=e=>{D.info(e.errorMsg||"上传失败")};return(e,n)=>(V(),M(E,null,[O("div",null,[O(z(L),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),"is-multiple":!0,"is-processor":!0,"processor-option":o.value,onError:r},null,8,["modelValue","processor-option"])]),O("div",null,[O(z(L),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),"is-multiple":!0,"is-processor":!0,"processor-option":l.value,onError:r},null,8,["modelValue","processor-option"])])],64))}}));const Y={"./demo0.vue":R,"./demo1.vue":G,"./demo2.vue":J,"./demo3.vue":N,"./demo4.vue":W,"./demo5.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X})};var Z=T("ImageUploader",Object.entries(Y).map((e=>e[1].default)));const ee={class:"md-nav"},ae=O("p",{class:"name"},"ImageUploader",-1),te=O("p",{class:"name-zh"},"图片选择器",-1),oe={class:"md-example image-uploader"},le={class:"md-example-content"};Z.render=function(e,a,t,o,l,r){const n=y("md-icon");return V(),M(E,null,[O("div",ee,[O("p",{class:"home",onClick:a[1]||(a[1]=a=>e.$router.push("/"))},[O(n,{name:"home",size:"lg"})]),ae,te]),O("div",oe,[(V(!0),M(E,null,I(e.demos,((e,a)=>(V(),M("section",{key:a,class:"md-example-section"},[O("div",{class:"md-example-title",textContent:P(e.title)},null,8,["textContent"]),O("div",{class:"md-example-describe",textContent:P(e.describe)},null,8,["textContent"]),O("div",le,[(V(),M(w(e)))])])))),128))])],64)};export default Z;
