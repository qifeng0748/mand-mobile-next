var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,s=(e,l)=>{for(var t in l||(l={}))n.call(l,t)&&i(e,t,l[t]);if(o)for(var t of o(l))a.call(l,t)&&i(e,t,l[t]);return e},c=(e,o)=>l(e,t(o));import{_ as d,a as r}from"./index.526a3d9f.js";import"./index.bdcd66c5.js";import{_ as u}from"./index.c1fbb89d.js";import{u as m}from"./show.9202fefa.js";import{_ as p}from"./animate.193f5b76.js";import{U as v,b as x,H as f,S as b}from"./constants.3b37bb64.js";import{m as h,k as S,B as g,d as y,r as V,o as k,c as C,w as H,n as j,f as _,R as w,p as T,v as z,u as O,t as U,F as B,h as $,i as A}from"./vendor.e458434b.js";import{_ as P}from"./index.77616ce1.js";import{a as D,_ as M}from"./index.2cbb209b.js";import"./index.8c492a89.js";import{c as I}from"./index.bc519576.js";import"./index.c5cb78ff.js";import"./index.d494cdd6.js";import"./index.001b8168.js";import"./click-outside.1f2ddb52.js";import"./index.d7112b05.js";import"./index.0698aebd.js";import"./function.b7cba7b9.js";u.install=e=>{e.component(u.name,u)};const N={modelValue:{type:[Number,String,Array],default:""},visible:{type:Boolean,default:!1},data:{type:Array,default:()=>[]},defaultValue:{default:""},isCheck:{type:Boolean,default:!1},maxHeight:{type:[Number,String],default:"40vh"},minHeight:{type:[Number,String],default:"auto"},cancelText:{type:String,default:""},iconPosition:{type:String,default:"right"},multi:{type:Boolean,default:!1},hideTitleBar:{type:Boolean,default:!1},title:{type:String,default:""},describe:{type:String,default:""},okText:{type:String,default:""},maskClosable:{type:Boolean,default:!0},icon:{type:String,default:"checked"},iconInverse:{type:String,default:"check"},iconDisabled:{type:String,default:"check-disabled"},iconSvg:{type:Boolean,default:!1},iconSize:{type:String,default:"md"}},F=(e,{emit:l})=>{const t=h(null),o=h(void 0),{popupShow:n,onHide:a,onShow:i,hide:s}=m(e,l),{innerValue:c,onCancel:d,onSelect:r}=function(e,l){const t=e=>{l(v,e.value),l("select",e)},o=()=>{l("cancel")};return{innerValue:h(e.modelValue),onSelect:t,onCancel:o}}(e,l),u=S((()=>""!==e.okText));return g(c,(t=>{u.value||Array.isArray(e.modelValue)?!u.value&&Array.isArray(e.modelValue)&&(l(v,t),s()):(r(e.data.find((e=>e.value===t))),s())})),{content:o,scroller:t,popupShow:n,directHide:()=>{u.value||s()},onHide:()=>{a(),c.value=e.modelValue},onShow:()=>{var e;i(),null==(e=t.value)||e.resetScroller()},confirmHandler:()=>{Array.isArray(e.modelValue)?e.modelValue.length>0&&(l("confirm"),l(v,c.value),s()):""!==e.modelValue&&(l("confirm"),l(v,c.value),s())},cancelHandler:()=>{d(),s()},innerValue:c}};var L=y({name:"MdSelector",components:{MdPopup:d,MdPopupTitleBar:r,MdRadioList:P,MdCheckList:u},props:N,emits:["cancel","confirm","select",v,x,f,b],setup(e,l){const{popupShow:t,directHide:o,onHide:n,onShow:a,cancelHandler:i,confirmHandler:s,innerValue:c,scroller:d,content:r}=F(e,l);return{popupShow:t,directHide:o,onHide:n,onShow:a,cancelHandler:i,confirmHandler:s,innerValue:c,scroller:d,content:r}}});L.render=function(e,l,t,o,n,a){const i=V("md-popup-title-bar"),s=V("md-radio-list"),c=V("md-check-list"),d=V("md-popup");return k(),C(d,{modelValue:e.popupShow,"onUpdate:modelValue":l[6]||(l[6]=l=>e.popupShow=l),class:["md-selector",{"is-normal":!e.isCheck,"is-check":e.isCheck}],position:"bottom","mask-closable":e.maskClosable,"prevent-scroll":!0,"prevent-scroll-exclude":e.content,onHide:e.onHide,onShow:e.onShow},{default:H((()=>[j(e.$slots,"title",{},(()=>[T(_(i,{title:e.title,describe:e.describe,"ok-text":e.okText,"cancel-text":e.cancelText,"only-close":!e.isCheck&&""===e.okText&&!e.cancelText,onConfirm:e.confirmHandler,onCancel:e.cancelHandler},null,8,["title","describe","ok-text","cancel-text","only-close","onConfirm","onCancel"]),[[z,!e.hideTitleBar||""!==e.okText]])])),_("div",{ref:"content",class:"md-selector-container",style:{maxHeight:`${e.maxHeight}`,minHeight:`${e.minHeight}`},onTouchstart:l[3]||(l[3]=w((()=>{}),["stop"])),onTouchmove:l[4]||(l[4]=w((()=>{}),["stop"])),onTouchend:l[5]||(l[5]=w((()=>{}),["stop"]))},[j(e.$slots,"header"),Array.isArray(e.innerValue)?(k(),C(c,{key:1,modelValue:e.innerValue,"onUpdate:modelValue":l[2]||(l[2]=l=>e.innerValue=l),class:"md-selector-list",options:e.data,"is-slot-scope":!!e.$slots.default,icon:e.icon,"icon-disabled":e.iconDisabled,"icon-inverse":e.iconInverse,"icon-position":e.iconPosition,"icon-size":e.iconSize,"icon-svg":e.iconSvg},{default:H((({option:l,index:t,selected:o})=>[j(e.$slots,"default",{option:l,index:t,selected:o})])),_:1},8,["modelValue","options","is-slot-scope","icon","icon-disabled","icon-inverse","icon-position","icon-size","icon-svg"])):(k(),C(s,{key:0,modelValue:e.innerValue,"onUpdate:modelValue":[l[1]||(l[1]=l=>e.innerValue=l),e.directHide],class:"md-selector-list",options:e.data,"is-slot-scope":!!e.$slots.default,icon:e.icon,"icon-disabled":e.iconDisabled,"icon-inverse":e.iconInverse,"icon-position":e.iconPosition,"icon-size":e.iconSize,"icon-svg":e.iconSvg},{default:H((({option:l,index:t,selected:o})=>[j(e.$slots,"default",{option:l,index:t,selected:o})])),_:1},8,["modelValue","options","is-slot-scope","icon","icon-disabled","icon-inverse","icon-position","icon-size","icon-svg","onUpdate:modelValue"])),j(e.$slots,"footer")],36)])),_:3},8,["modelValue","class","mask-closable","prevent-scroll-exclude","onHide","onShow"])},L.install=e=>{e.component(L.name,L)};const R={class:"\n      md-example-child\n      md-example-child-selector\n      md-example-child-selector-0\n    "};var E=y(c(s({},{name:"SelectorDemo",title:"基本"}),{expose:[],setup(e){const l=h([{value:"1",text:"选项一"},{value:"2",text:"选项二"},{value:"3",text:"选项三"},{value:"4",text:"选项四"},{value:"5",text:"选项五"},{value:"6",text:"选项六"},{value:"7",text:"选项七"},{value:"8",text:"选项八"},{value:"9",text:"选项九"},{value:"10",text:"选项十"}]),t=h(!1),o=()=>t.value=!0,n=h("3"),a=e=>{console.log(e)},i=()=>{console.log("hide")};return(e,s)=>(k(),C("div",R,[_(O(D),null,{default:H((()=>[_(O(M),{title:"普通模式",content:n.value,arrow:"",solid:"",onClick:o},null,8,["content"])])),_:1}),_(O(L),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),visible:t.value,"onUpdate:visible":s[2]||(s[2]=e=>t.value=e),data:l.value,"max-height":"320px",title:"普通模式",onSelect:a,onHide:i},null,8,["modelValue","visible","data"])]))}})),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const G={class:"\n      md-example-child\n      md-example-child-selector\n      md-example-child-selector-1\n    "},J=_("div",{class:"selector-footer"},"Header Slot",-1),K={class:"selector-item-left"},Q={class:"selector-item-content"},W=_("div",{class:"selector-footer"},"Footer Slot",-1);var X=y(c(s({},{name:"SelectorDemo",title:"自定义"}),{expose:[],setup(e){const l=h([{value:"A",text:"选项一",describe:"使用slot-scope"},{value:"B",text:"选项二",describe:"使用slot-scope"},{value:"C",text:"选项三",describe:"使用slot-scope",disabled:!0},{value:"D",text:"选项四",describe:"使用slot-scope"}]),t=h(!1),o=()=>t.value=!0,n=h("B"),a=e=>{console.log(e)},i=()=>{console.log("hide")};return(e,s)=>(k(),C("div",G,[_(O(D),null,{default:H((()=>[_(O(M),{title:"自定义",content:n.value,arrow:"",solid:"",onClick:o},null,8,["content"])])),_:1}),_(O(L),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),visible:t.value,"onUpdate:visible":s[2]||(s[2]=e=>t.value=e),class:"md-example-child-selector-1",data:l.value,"hide-title-bar":"","is-check":"","icon-size":"lg",onSelect:a,onHide:i},{header:H((()=>[J])),default:H((({option:e,index:l,selected:t})=>[_("div",{class:["selector-item-body",{disabled:e.disabled,selected:t}]},[_("div",K,[_("span",{class:"holder",textContent:U(e.value)},null,8,["textContent"])]),_("div",Q,[_("p",{class:"selector-item-title",textContent:U(e.text)},null,8,["textContent"]),_("p",{class:"selector-item-brief",textContent:U(`${e.describe}-${l}`)},null,8,["textContent"])]),_(O(p),{name:t?"checked":"check",size:"lg"},null,8,["name"])],2)])),footer:H((()=>[W])),_:1},8,["modelValue","visible","data"])]))}})),Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Z={class:"\n      md-example-child\n      md-example-child-selector\n      md-example-child-selector-0\n    "};var ee=y(c(s({},{name:"SelectorDemo",title:"确认模式"}),{expose:[],setup(e){const l=h([{value:"1",text:"选项一"},{value:"2",text:"选项二"},{value:"3",text:"选项三"},{value:"4",text:"选项四"},{value:"5",text:"选项五"}]),t=h(!1),o=()=>t.value=!0,n=h("3"),a=e=>{console.log(e)},i=()=>{console.log("hide")},s=()=>{console.log("confirm")};return(e,c)=>(k(),C("div",Z,[_(O(D),null,{default:H((()=>[_(O(M),{title:"确认模式",content:n.value,arrow:"",solid:"",onClick:o},null,8,["content"])])),_:1}),_(O(L),{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),visible:t.value,"onUpdate:visible":c[2]||(c[2]=e=>t.value=e),data:l.value,title:"确认模式","ok-text":"确认","cancel-text":"取消",onConfirm:s,onSelect:a,onHide:i},null,8,["modelValue","visible","data"])]))}})),le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const te={class:"\n      md-example-child\n      md-example-child-selector\n      md-example-child-selector-0\n    "};var oe=y(c(s({},{name:"SelectorDemo",title:"多选模式"}),{expose:[],setup(e){const l=h([{value:"1",text:"选项一"},{value:"2",text:"选项二"},{value:"3",text:"选项三"},{value:"4",text:"选项四"},{value:"5",text:"选项五"}]),t=h(!1),o=()=>t.value=!0,n=h(["3"]),a=e=>{console.log(e)},i=()=>{console.log("hide")},s=()=>{console.log("confirm")};return(e,c)=>(k(),C("div",te,[_(O(D),null,{default:H((()=>[_(O(M),{title:"多选模式",content:n.value.toString(),arrow:"",solid:"",onClick:o},null,8,["content"])])),_:1}),_(O(L),{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),visible:t.value,"onUpdate:visible":c[2]||(c[2]=e=>t.value=e),data:l.value,title:"多选模式","ok-text":"确认","cancel-text":"取消",onConfirm:s,onSelect:a,onHide:i},null,8,["modelValue","visible","data"])]))}}));const ne={"./demo0.vue":q,"./demo1.vue":Y,"./demo2.vue":le,"./demo3.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe})};var ae=I("Selector",Object.entries(ne).map((e=>e[1].default)));const ie={class:"md-nav"},se=_("p",{class:"name"},"Selector",-1),ce=_("p",{class:"name-zh"},"列表选择器",-1),de={class:"md-example selector"},re={class:"md-example-content"};ae.render=function(e,l,t,o,n,a){const i=V("md-icon");return k(),C(B,null,[_("div",ie,[_("p",{class:"home",onClick:l[1]||(l[1]=l=>e.$router.push("/"))},[_(i,{name:"home",size:"lg"})]),se,ce]),_("div",de,[(k(!0),C(B,null,$(e.demos,((e,l)=>(k(),C("section",{key:l,class:"md-example-section"},[_("div",{class:"md-example-title",textContent:U(e.title)},null,8,["textContent"]),_("div",{class:"md-example-describe",textContent:U(e.describe)},null,8,["textContent"]),_("div",re,[(k(),C(A(e)))])])))),128))])],64)};export default ae;
