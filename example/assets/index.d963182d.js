import"./animate.193f5b76.js";import{t}from"./format.c53ae1e3.js";import{m as e,M as l,k as s,j as o,D as a,d as r,o as n,c as i,f as c,n as d,l as p}from"./vendor.e458434b.js";var u=r({name:"MdTag",props:{size:{type:String,default:"large"},shape:{type:String,default:"square"},sharp:{type:String,default:""},type:{type:String,default:"ghost"},fillColor:{type:String,default:""},fontWeight:{type:String,default:"normal"},fontColor:{type:String,default:""}},setup(r){const{sizeStyle:n,computedClass:i,tagRef:c,colorStyle:d}=(r=>{const n=e(null),i=l({}),c=s((()=>{const{size:t,shape:e,type:l,fontWeight:s}=r;return["default",`size-${t}`,`shape-${e}`,`type-${l}`,`font-weight-${s}`]})),d=s((()=>{const t={},{fillColor:e,type:l,fontColor:s}=r;return"fill"===l&&e&&(t.background=e),s&&("ghost"===l&&(t.borderColor=s),t.color=s),t}));return o((()=>{a((()=>{var e;const{shape:l,sharp:s}=r;if("circle"===l){const l=((null==(e=n.value)?void 0:e.offsetHeight)||20)/2+"px";if(i.paddingLeft=l,i.paddingRight=l,i.borderRadius=l,s){const e=t(`border-${s}-radius`);i[e]=0}}}))})),{sizeStyle:i,computedClass:c,tagRef:n,colorStyle:d}})(r);return{sizeStyle:n,computedClass:i,tagRef:c,colorStyle:d}}});const f={ref:"tagRef",class:"md-tag"},g={class:"quarter-content"};u.render=function(t,e,l,s,o,a){return n(),i("div",f,["quarter"===t.shape?(n(),i("div",{key:0,class:t.computedClass},[c("div",g,[d(t.$slots,"default")]),c("div",{class:"quarter-bg",style:t.colorStyle},null,4)],2)):"coupon"===t.shape?(n(),i("div",{key:1,class:t.computedClass},[c("div",{class:"coupon-container",style:t.colorStyle},["coupon"===t.shape?(n(),i("div",{key:0,class:"left-coupon",style:{background:t.fillColor?"radial-gradient(circle at left, transparent 33%, "+t.fillColor+" 33%)":""}},null,4)):p("",!0),d(t.$slots,"default"),"coupon"===t.shape?(n(),i("div",{key:1,class:"right-coupon",style:{background:t.fillColor?"radial-gradient(circle at right, transparent 33%, "+t.fillColor+" 33%)":""}},null,4)):p("",!0)],4)],2)):(n(),i("div",{key:2,class:t.computedClass,style:[t.colorStyle,t.sizeStyle]},[d(t.$slots,"default")],6))],512)},u.install=t=>{t.component(u.name,u)};export{u as _};
