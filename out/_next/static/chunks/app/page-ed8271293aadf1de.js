(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2117:function(e,t,r){Promise.resolve().then(r.bind(r,8721))},8721:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),s=r(2265);function a(){return(0,n.jsx)("header",{children:(0,n.jsx)("h1",{className:"text-7xl font-kanit font-semibold text-center tracking-wide mb-10",children:"To-do App"})})}function o(e){let{text:t}=e;return(0,n.jsx)("div",{className:"w-full bg-gray-400 p-4 mb-4",children:t})}var l=()=>{let[e,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{(async()=>{t(await r())})()},[]);let r=async()=>{let e=await fetch("https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json");return await e.json()};return(0,n.jsxs)("div",{className:"bg-white p-5 max-w-3xl mx-auto rounded-lg min-h-52",children:[(0,n.jsx)(a,{}),(0,n.jsxs)("div",{className:"flex gap-4 mb-10",children:[(0,n.jsx)("input",{className:"border border-black w-[92%] p-4",type:"text",placeholder:"Add your new task..."}),(0,n.jsx)("button",{className:"w-[8%] border border-black",children:"+"})]}),e.map(e=>(0,n.jsx)(o,{text:e.text},e.id))]})}},622:function(e,t,r){"use strict";var n=r(2265),s=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},i=null,u=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:u,props:c,_owner:o.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=2117)}),_N_E=e.O()}]);