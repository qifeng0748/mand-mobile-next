import{_ as e}from"./animate.193f5b76.js";import{d as t,r as l,o as s,c as d,f as i,n as a,l as o,t as r,g as n}from"./vendor.e458434b.js";var m=t({name:"MdCellItem",components:{MdIcon:e},props:{title:{type:[String,Number],default:""},brief:{type:[String,Number],default:""},addon:{type:String,default:""},arrow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}}});const c={key:0,class:"md-cell-item-left"},f={key:1,class:"md-cell-item-content"},b={key:0,class:"md-cell-item-title"},p={key:1,class:"md-cell-item-brief"},y={key:2,class:"md-cell-item-right"},u={key:0,class:"md-cell-item-children"};m.render=function(e,t,m,g,v,$){const h=l("md-icon");return s(),d("div",{class:["md-cell-item",{"is-disabled":e.disabled,"no-border":e.noBorder}]},[i("div",{class:["md-cell-item-body",{multilines:!!e.brief}]},[e.$slots.left?(s(),d("div",c,[a(e.$slots,"left")])):o("",!0),e.title||e.brief||e.$slots.default?(s(),d("div",f,[e.title?(s(),d("p",b,r(e.title),1)):o("",!0),e.brief?(s(),d("p",p,r(e.brief),1)):o("",!0),a(e.$slots,"default")])):o("",!0),e.arrow||e.addon||e.$slots.right?(s(),d("div",y,[a(e.$slots,"right",{},(()=>[n(r(e.addon),1)])),e.arrow?(s(),d(h,{key:0,name:"arrow-right",size:"md"})):o("",!0)])):o("",!0)],2),e.$slots.children?(s(),d("div",u,[a(e.$slots,"children")])):o("",!0)],2)},m.install=e=>{e.component(m.name,m)};export{m as _};
