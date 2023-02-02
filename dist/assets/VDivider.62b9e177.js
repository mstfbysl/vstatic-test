import{I as p,O as w,an as x,Q as b,R as y,a7 as R,ax as v,K as O,p as P}from"./index.c8a89d08.js";class d{constructor(i){let{x:s,y:o,width:n,height:r}=i;this.x=s,this.y=o,this.width=n,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function S(t,i){return{x:{before:Math.max(0,i.left-t.left),after:Math.max(0,t.right-i.right)},y:{before:Math.max(0,i.top-t.top),after:Math.max(0,t.bottom-i.bottom)}}}function C(t){const i=t.getBoundingClientRect(),s=getComputedStyle(t),o=s.transform;if(o){let n,r,a,e,c;if(o.startsWith("matrix3d("))n=o.slice(9,-1).split(/, /),r=+n[0],a=+n[5],e=+n[12],c=+n[13];else if(o.startsWith("matrix("))n=o.slice(7,-1).split(/, /),r=+n[0],a=+n[3],e=+n[4],c=+n[5];else return new d(i);const l=s.transformOrigin,f=i.x-e-(1-r)*parseFloat(l),u=i.y-c-(1-a)*parseFloat(l.slice(l.indexOf(" ")+1)),h=r?i.width/r:t.offsetWidth+1,m=a?i.height/a:t.offsetHeight+1;return new d({x:f,y:u,width:h,height:m})}else return new d(i)}function W(t,i,s){if(typeof t.animate>"u")return{finished:Promise.resolve()};const o=t.animate(i,s);return typeof o.finished>"u"&&(o.finished=new Promise(n=>{o.onfinish=()=>{n(o)}})),o}const B="cubic-bezier(0.4, 0, 0.2, 1)",T="cubic-bezier(0.0, 0, 0.2, 1)",V="cubic-bezier(0.4, 0, 1, 1)",g=Symbol("Forwarded refs");function z(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t[g]=s,new Proxy(t,{get(n,r){if(Reflect.has(n,r))return Reflect.get(n,r);for(const a of s)if(a.value&&Reflect.has(a.value,r)){const e=Reflect.get(a.value,r);return typeof e=="function"?e.bind(a.value):e}},getOwnPropertyDescriptor(n,r){const a=Reflect.getOwnPropertyDescriptor(n,r);if(a)return a;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const e of s){if(!e.value)continue;const c=Reflect.getOwnPropertyDescriptor(e.value,r);if(c)return c;if("_"in e.value&&"setupState"in e.value._){const l=Reflect.getOwnPropertyDescriptor(e.value._.setupState,r);if(l)return l}}for(const e of s){let c=e.value&&Object.getPrototypeOf(e.value);for(;c;){const l=Reflect.getOwnPropertyDescriptor(c,r);if(l)return l;c=Object.getPrototypeOf(c)}}for(const e of s){const c=e.value&&e.value[g];if(!c)continue;const l=c.slice();for(;l.length;){const f=l.shift(),u=Reflect.getOwnPropertyDescriptor(f.value,r);if(u)return u;const h=f.value&&f.value[g];h&&l.push(...h)}}}}})}const M=p({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...w()},setup(t,i){let{attrs:s}=i;const{themeClasses:o}=x(t),{backgroundColorClasses:n,backgroundColorStyles:r}=b(y(t,"color")),a=R(()=>{const e={};return t.length&&(e[t.vertical?"maxHeight":"maxWidth"]=v(t.length)),t.thickness&&(e[t.vertical?"borderRightWidth":"borderTopWidth"]=v(t.thickness)),e});return O(()=>P("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},o.value,n.value],style:[a.value,r.value],"aria-orientation":!s.role||s.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${s.role||"separator"}`},null)),{}}});export{d as B,M as V,W as a,V as b,T as d,z as f,S as g,C as n,B as s};
