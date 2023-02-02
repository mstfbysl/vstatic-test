import{a3 as M,a5 as N,k,aO as O,D as I,aJ as j,K as J,p as a,aa as W,a2 as L,y as X,bu as G,bv as S,aI as H,o as d,b as D,w as s,bf as Y,bk as R,q as l,bb as Z,bw as T,A as b,m,bi as ee,a0 as P,c as _,F as w,a as A,z as F,x as C,n as z,a1 as E,b8 as K,bd as te,be as ae}from"./index.c8a89d08.js";import{d as se}from"./VTextField.cd55fb22.js";import{V as Q}from"./VBtn.4996e44c.js";import{f as le,V as re}from"./VDivider.62b9e177.js";import{V as q,d as oe,a as U,b as ne}from"./VList.25b3d238.js";import{V as ie,a as ce}from"./VRow.8ecb1ab0.js";import{m as ue,V as de,u as pe,f as fe,b as he}from"./scopeId.6622ad8a.js";import"./index.5035e379.js";const ve=M()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ue({origin:"center center",scrollStrategy:"block",transition:{component:de},zIndex:2400})},emits:{"update:modelValue":i=>!0},setup(i,g){let{slots:r}=g;const y=N(i,"modelValue"),{scopeId:B}=pe(),c=k();function u(p){var n,o;const f=p.relatedTarget,h=p.target;if(f!==h&&(n=c.value)!=null&&n.contentEl&&(o=c.value)!=null&&o.globalTop&&![document,c.value.contentEl].includes(h)&&!c.value.contentEl.contains(h)){const V=[...c.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!V.length)return;const $=V[0],e=V[V.length-1];f===$?e.focus():$.focus()}}return O&&I(()=>y.value&&i.retainFocus,p=>{p?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),I(y,async p=>{if(await j(),p){var n;(n=c.value.contentEl)==null||n.focus({preventScroll:!0})}else{var o;(o=c.value.activatorEl)==null||o.focus({preventScroll:!0})}}),J(()=>{const[p]=fe(i);return a(he,L({ref:c,class:["v-dialog",{"v-dialog--fullscreen":i.fullscreen,"v-dialog--scrollable":i.scrollable}]},p,{modelValue:y.value,"onUpdate:modelValue":n=>y.value=n,"aria-role":"dialog","aria-modal":"true",activatorProps:L({"aria-haspopup":"dialog","aria-expanded":String(y.value)},i.activatorProps)},B),{activator:r.activator,default:function(){for(var n,o=arguments.length,f=new Array(o),h=0;h<o;h++)f[h]=arguments[h];return a(W,{root:!0},{default:()=>[(n=r.default)==null?void 0:n.call(r,...f)]})}})}),le({},c)}});const me=i=>(te("data-v-dd687002"),i=i(),ae(),i),ge={class:"d-flex align-center"},ye={class:"h-100"},be={class:"text-xs text-disabled text-uppercase"},_e={class:"h-100"},Ve={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},xe={class:"text-h6 my-3"},Se={key:0,class:"mt-8"},ke=me(()=>m("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),De=["onClick"],we={class:"text-sm"},Ce={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(i,{emit:g}){const r=i,{ctrl_k:y,meta_k:B}=G(),c=k(),u=k(structuredClone(S(r.searchQuery))),p=k(),n=k(structuredClone(S(r.isDialogVisible))),o=k(structuredClone(S(r.searchResults)));I(r,()=>{n.value=structuredClone(S(r.isDialogVisible)),o.value=structuredClone(S(r.searchResults)),u.value=structuredClone(S(r.searchQuery))}),I([y,B],()=>{n.value=!0,g("update:isDialogVisible",!0)});const f=()=>{g("update:isDialogVisible",!1),g("update:searchQuery","")};H(()=>{u.value.length||(o.value=[])});const h=e=>{var v,t;e.key==="ArrowDown"?(e.preventDefault(),(v=c.value)==null||v.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(t=c.value)==null||t.focus("prev"))},V=e=>{g("update:isDialogVisible",e),g("update:searchQuery","")},$=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,v)=>(d(),D(ve,{"max-width":"600","model-value":l(n),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":V,onKeyup:T(f,["esc"])},{default:s(()=>[a(Y,{height:"100%",width:"100%",class:"position-relative"},{default:s(()=>[a(R,{class:"pt-1",style:{"max-height":"65px"}},{default:s(()=>[a(se,{ref_key:"refSearchInput",ref:p,modelValue:l(u),"onUpdate:modelValue":[v[0]||(v[0]=t=>Z(u)?u.value=t:null),v[1]||(v[1]=t=>e.$emit("update:searchQuery",l(u)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:T(f,["esc"]),onKeydown:h},{"prepend-inner":s(()=>[a(Q,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:s(()=>[a(b,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":s(()=>[m("div",ge,[m("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:f}," [esc] "),a(Q,{icon:"",variant:"text",color:"default",size:"x-small",onClick:f},{default:s(()=>[a(b,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(re),a(l(ee),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:s(()=>[P(a(l(q),{ref_key:"refSearchList",ref:c,density:"compact",class:"app-bar-search-list"},{default:s(()=>[(d(!0),_(w,null,A(l(o),t=>(d(),_(w,{key:t.title},["header"in t?(d(),D(l(oe),{key:0,class:"text-disabled"},{default:s(()=>[F(C($(t.title)),1)]),_:2},1024)):z(e.$slots,"searchResult",{key:1,item:t},()=>[a(l(U),{link:"",onClick:x=>e.$emit("itemSelected",t)},{prepend:s(()=>[a(b,{size:"20",icon:t.icon,class:"me-3"},null,8,["icon"])]),append:s(()=>[a(b,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:s(()=>[a(ne,null,{default:s(()=>[F(C(t.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[E,l(u).length&&!!l(o).length]]),P(m("div",ye,[z(e.$slots,"suggestions",{},()=>[a(R,{class:"app-bar-search-suggestions h-100 pa-10"},{default:s(()=>[r.suggestions?(d(),D(ie,{key:0,class:"gap-y-4"},{default:s(()=>[(d(!0),_(w,null,A(r.suggestions,t=>(d(),D(ce,{key:t.title,cols:"12",sm:"6",class:"ps-6"},{default:s(()=>[m("p",be,C(t.title),1),a(l(q),{class:"card-list"},{default:s(()=>[(d(!0),_(w,null,A(t.content,x=>(d(),D(l(U),{key:x.title,link:"",title:x.title,class:"app-bar-search-suggestion",onClick:$e=>e.$emit("itemSelected",x)},{prepend:s(()=>[a(b,{icon:x.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):K("",!0)]),_:1})],!0)],512),[[E,!!l(o)&&!l(u)]]),P(m("div",_e,[z(e.$slots,"noData",{},()=>[a(R,{class:"h-100"},{default:s(()=>[m("div",Ve,[a(b,{size:"75",icon:"tabler-file-x"}),m("h6",xe,' No Result For "'+C(l(u))+'" ',1),r.noDataSuggestion?(d(),_("div",Se,[ke,(d(!0),_(w,null,A(r.noDataSuggestion,t=>(d(),_("h6",{key:t.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:x=>e.$emit("itemSelected",t)},[a(b,{size:"20",icon:t.icon,class:"me-3"},null,8,["icon"]),m("span",we,C(t.title),1)],8,De))),128))])):K("",!0)])]),_:1})],!0)],512),[[E,!l(o).length&&l(u).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}},Te=X(Ce,[["__scopeId","data-v-dd687002"]]);export{Te as default};
