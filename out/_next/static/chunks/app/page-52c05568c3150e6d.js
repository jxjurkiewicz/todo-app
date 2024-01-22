(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2117:function(e,t,r){Promise.resolve().then(r.bind(r,9650))},9650:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),a=r(2265);function o(){return(0,n.jsxs)("header",{className:"max-w-max mx-auto mb-10",children:[(0,n.jsx)("h1",{className:"text-7xl font-kanit text-center tracking-wide text-blue-950",children:"To-do App"}),(0,n.jsx)("p",{className:"text-right italic font-light",children:"plan your day efficiency"})]})}var s=r(9172);function i(e){let{text:t,onDelete:r}=e;return(0,n.jsxs)("div",{className:"task w-full rounded-md shadow-xl py-2 px-4 mb-4 flex justify-between items-center",children:[(0,n.jsx)("div",{children:t}),(0,n.jsx)("button",{onClick:r,className:"cursor-pointer rounded-lg p-3 bg-red-600",children:(0,n.jsx)(s.lp8,{className:"w-5 h-5"})})]})}var c=r(4932),l=e=>{let{onAdd:t}=e,[r,o]=(0,a.useState)(""),[s,i]=(0,a.useState)(!1),[l,u]=(0,a.useState)();return(0,n.jsxs)("form",{id:"add-form",onSubmit:e=>{if(e.preventDefault(),!r){alert("You can't add empty task!");return}t({id:Math.floor(1e5*Math.random())+1,text:r,priority:s}),o(""),i(!1)},children:[(0,n.jsxs)("div",{className:"flex gap-4 mb-5",children:[(0,n.jsx)("input",{id:"inputTask",value:r,onChange:e=>{o(e.target.value)},className:"border-2 border-black border-opacity-30 rounded-xl w-[92%] p-4 shadow-lg",type:"text",placeholder:"Add your new task..."}),(0,n.jsx)("button",{type:"submit",className:"w-[8%] border-2 border-green-600 cursor-pointer flex justify-center items-center rounded-xl hover:bg-green-600 shadow-md",children:(0,n.jsx)(c.xcL,{className:"icon-add w-10 h-10 text-green-600"})})]}),(0,n.jsxs)("div",{className:"flex justify-between mb-10",children:[(0,n.jsx)("div",{children:"Set Date:"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("h2",{children:"Priority"}),(0,n.jsx)("input",{checked:s,onChange:()=>i(!s),type:"checkbox"})]})]})]})},u=()=>{let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{(async()=>{t(await r())})()},[]);let r=async()=>{let e=await fetch("https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json");return await e.json()},s=async e=>{await fetch("https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t(await r())},c=async n=>{let a=Object.keys(e).find(t=>e[t].id===n);a&&await fetch("https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks/".concat(a,".json"),{method:"DELETE"}),t(await r())};return(0,n.jsxs)("div",{className:"bg-white p-5 max-w-3xl mx-auto rounded-lg min-h-52 shadow-xl",children:[(0,n.jsx)(o,{}),(0,n.jsx)(l,{onAdd:s}),Object.values(e).reverse().map((e,t)=>(0,n.jsx)(i,{text:e.text,id:e.id,onDelete:()=>c(e.id)},t))]})}},622:function(e,t,r){"use strict";var n=r(2265),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},3118:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[706,699,971,938,744],function(){return e(e.s=2117)}),_N_E=e.O()}]);