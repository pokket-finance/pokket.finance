(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8019],{374:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(7294);function o(e,r,o,c){void 0===o&&(o=t.g),void 0===c&&(c={});var s=(0,n.useRef)(),a=c.capture,i=c.passive,u=c.once;(0,n.useEffect)((function(){s.current=r}),[r]),(0,n.useEffect)((function(){if(o&&o.addEventListener){var r=function(e){return s.current(e)},t={capture:a,passive:i,once:u};return o.addEventListener(e,r,t),function(){o.removeEventListener(e,r,t)}}}),[e,o,a,i,u])}},7283:function(e,r,t){"use strict";t.d(r,{fv:function(){return y},hW:function(){return m},am:function(){return h},AZ:function(){return j}});var n=t(5893),o=t(6265),c=t(4121),s=t(8347),a=t(7294),i=t(8117),u=t(4184),l=t.n(u),f=t(2161),p=t(6684);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=i.ZP.div.withConfig({displayName:"Input__InputContainer",componentId:"sc-1kl4ydl-0"})(["transition:all 150ms cubic-bezier(0.4,0,0.2,1);"]),m=i.ZP.span.withConfig({displayName:"Input__ErrorLabel",componentId:"sc-1kl4ydl-1"})(["left:0;bottom:-1.5rem;transition:opacity 150ms cubic-bezier(0.4,0,0.2,1);"]),h=i.ZP.input.withConfig({displayName:"Input__InputComponent",componentId:"sc-1kl4ydl-2"})([""]),v=i.ZP.span.withConfig({displayName:"Input__ShowPassword",componentId:"sc-1kl4ydl-3"})(["top:50%;right:2rem;transform:translateY(-50%);transition:opacity 150ms cubic-bezier(0.4,0,0.2,1);",":focus ~ &{opacity:1;}",":not(:placeholder-shown) ~ &{opacity:1;}"],h,h),g=(0,i.iv)(["color:#939295;transform:translate(-12.5%,-5%) scale(0.75);"]),j=i.ZP.label.withConfig({displayName:"Input__InputLabel",componentId:"sc-1kl4ydl-4"})(["transform:translateY(50%);transition:all 150ms cubic-bezier(0.4,0,0.2,1);",":focus + &{","}",":not(:placeholder-shown) + &{","}"],h,g,h,g);function O(e,r){var t=e.id,o=e.type,i=e.label,u=e.error,d=e.disabled,g=e.required,O=e.className,x=e.autoFocus,w=e.placeholder,P=(0,s.Z)(e,["id","type","label","error","disabled","required","className","autoFocus","placeholder"]),N=(0,p.t)(r),k=(0,c.Z)(N,2),C=k[0],Z=k[1],E=(0,a.useCallback)((function(){C.current.focus()}),[]),D=(0,f.$G)("common").t;(0,a.useEffect)((function(){x&&C.current.focus()}),[]);var S=(0,a.useState)(!1),_=S[0],I=S[1],R=(0,a.useMemo)((function(){return"password"!==o?o:_?"text":"password"}),[o,_]),q=(0,a.useCallback)((function(e){e.stopPropagation(),I((function(e){return!e}))}),[]);return(0,n.jsxs)(y,{className:l()("px-4 py-2 relative flex flex-col-reverse border border-solid rounded cursor-text select-none",d&&["cursor-not-allowed","bg-gray-100"],u?"border-error":"border-gray-200",O),onClick:E,children:[(0,n.jsx)(h,b({className:"w-full outline-none bg-transparent",id:t,ref:Z,type:R,required:g,disabled:d,placeholder:null!==w&&void 0!==w?w:" "},P)),i&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(j,{className:l()("relative text-base",d?["cursor-not-allowed","text-gray-700"]:["cursor-text","text-black"]),htmlFor:t,children:[i,g&&(0,n.jsx)("span",{className:"absolute text-xs text-red-600",children:"*"})]}),(0,n.jsx)(m,{className:l()("ml-4 md:ml-2 text-error",u?"opacity-100":"opacity-0"),children:u})]}),(0,n.jsx)(v,{className:l()("absolute text-sm text-gray cursor-pointer opacity-0",d?"cursor-not-allowed":"cursor-pointer",{invisible:"password"!==o}),inputType:o,onClick:d?void 0:q,children:D(_?"hide":"show")})]})}r.ZP=a.forwardRef(O)},5943:function(e,r,t){"use strict";var n=t(6265),o=t(5893),c=t(8347),s=t(1922),a=t(6859);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.show,t=e.close,n=e.children,i=e.className,l=(0,c.Z)(e,["show","close","children","className"]);return(0,o.jsx)(s.M,{children:r&&(0,o.jsx)(a.Z,{style:{backgroundColor:"rgba(10, 0, 55, 0.7)"},className:"fixed top-0 left-0 w-screen h-screen pb-16 overflow-y-auto bg-indigo-900 z-50",onClick:t,children:(0,o.jsx)("div",u(u({className:i,onClick:function(e){return e.stopPropagation()}},l),{},{children:n}))})})}},1954:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(5893),o=t(7294),c=t(8117),s=t(4184),a=t.n(s),i=t(1163),u=t(6989),l=t(2874),f=t(374),p=t(6486),d=t(9690),b=(0,p.debounce)((function(){(0,l.dx)()}),3e3),y=function(){var e=(0,i.useRouter)();(0,f.Z)("click",(function(){(0,d.nr)()?b():e.push("/login?loggedExpired=true")}))},m=c.ZP.div.withConfig({displayName:"Page__Container",componentId:"sc-1ogegnc-0"})(["transition:background 150ms cubic-bezier(0.4,0,0.2,1);"]);var h=function(e){var r=e.className,t=e.children,c=(0,o.useContext)(u.N),s=(0,i.useRouter)().pathname.split("/")[1];return"account"!==s&&"savings"!==s&&"dashboard"!==s&&"wallet"!==s||y(),(0,n.jsx)(m,{className:a()("w-screen flex flex-col",r),style:{backgroundColor:c.bgColor,minHeight:"calc(100vh - 62px)"},children:t})}},2404:function(e,r,t){"use strict";t.d(r,{o:function(){return s}});var n=t(1163),o=t(7294),c=t(7509);function s(){var e=(0,n.useRouter)(),r=(0,c.f)();(0,o.useEffect)((function(){r&&e.push("string"===typeof e.query.next?e.query.next:"/dashboard")}),[r,e])}},9889:function(e,r,t){"use strict";t.d(r,{E:function(){return o}});var n=t(7294);function o(){var e=(0,n.useRef)();return(0,n.useEffect)((function(){return e.current=new AbortController,function(){return e.current.abort()}}),[]),e}},6684:function(e,r,t){"use strict";t.d(r,{t:function(){return o}});var n=t(7294);function o(e){var r=(0,n.useRef)(),t=(0,n.useCallback)((function(t){r.current=t,e&&("function"===typeof e?e(t):"object"===typeof e&&(e.current=t))}),[e]);return[r,t]}},6989:function(e,r,t){"use strict";t.d(r,{N:function(){return u},f:function(){return l}});var n=t(5893),o=t(6265),c=t(7294);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i={bgColor:"#110e22",primaryColor:"#110e22"},u=(0,c.createContext)(i);function l(e){var r=e.value,t=void 0===r?{}:r,o=e.children;return(0,n.jsx)(u.Provider,{value:a(a({},i),t),children:o})}},3198:function(e,r,t){"use strict";t.d(r,{Z:function(){return C}});var n=t(6265),o=t(5893),c=t(8347),s=t(7294),a=t(4121),i=t(4184),u=t.n(i),l=t(2161),f=t(6684),p=t(3119),d=t(7283);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=function(e){return(0,o.jsxs)("svg",y(y({},e),{},{children:[(0,o.jsx)("path",{d:"M256 0c-6.013 0-10.894 4.88-10.894 10.894 0 6.013 4.88 10.894 10.894 10.894 129.144 0 234.213 105.069 234.213 234.213S385.144 490.213 256 490.213 21.787 385.144 21.787 256c0-78.254 38.917-151.024 104.105-194.658 4.995-3.35 6.335-10.115 2.99-15.115-3.344-4.995-10.109-6.34-15.115-2.99C42.534 90.924 0 170.463 0 256c0 141.159 114.841 256 256 256s256-114.841 256-256S397.159 0 256 0z"}),(0,o.jsx)("path",{d:"M130.723 27.234H38.672c-6.013 0-10.894 4.88-10.894 10.894 0 6.013 4.88 10.894 10.894 10.894h81.157v81.702c0 6.013 4.88 10.894 10.894 10.894 6.013 0 10.894-4.88 10.894-10.894V38.128c0-6.014-4.88-10.894-10.894-10.894z"})]}))};function h(e,r){var t=e.id,n=e.error,i=e.image,b=e.loading,h=e.disabled,v=e.required,g=e.className,j=e.refresh,O=(0,c.Z)(e,["id","error","image","loading","disabled","required","className","refresh"]),x=(0,f.t)(r),w=(0,a.Z)(x,2),P=w[0],N=w[1],k=(0,s.useCallback)((function(){var e;null===(e=P.current)||void 0===e||e.focus()}),[]),C=(0,l.$G)("common").t,Z=h||b;return(0,o.jsxs)(d.fv,{className:u()("flex flex-row justify-between border border-solid rounded cursor-text select-none",Z&&["cursor-not-allowed","bg-gray-200"],n?"border-error":"border-gray-200",g),onClick:k,children:[(0,o.jsxs)(d.fv,{className:"px-4 py-2 relative flex flex-col-reverse",children:[(0,o.jsx)(d.hW,{className:u()("ml-2 absolute text-xs text-error",n?"opacity-100":"opacity-0"),children:n}),(0,o.jsx)(d.am,y({type:"text",className:"w-full outline-none bg-transparent",autoComplete:"off",id:t,ref:N,required:v,disabled:Z,placeholder:" "},O)),(0,o.jsxs)(d.AZ,{className:u()("relative text-base",h?["cursor-not-allowed","text-gray-700"]:["cursor-text","text-black"]),htmlFor:t,children:[C("captcha"),v&&(0,o.jsx)("span",{className:"absolute text-xs text-red-600",children:"*"})]})]}),(0,o.jsx)("div",{className:"flex flex-col justify-center items-center bg-gray-100 w-40",children:b?(0,o.jsx)("div",{className:"flex justify-between items-center",children:(0,o.jsx)(p.Z,{color:"#2601cf",className:"w-40 h-4"})}):(0,o.jsxs)("div",{className:"flex justify-between items-center",children:[(0,o.jsx)(m,{className:"cursor-pointer w-4 h-4 text-indigo mx-2 mr-4",onClick:j}),(0,o.jsx)("img",{className:"w-20",src:i,alt:"Captcha"})]})})]})}m.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var v=s.forwardRef(h),g=t(809),j=t.n(g),O=t(2447),x=t(2874),w=t(9889);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r){var t=e.captchaRef,n=(0,c.Z)(e,["captchaRef"]),a=function(e){var r=(0,s.useState)(null),t=r[0],n=r[1],o=(0,s.useState)(null),c=o[0],a=o[1],i=(0,s.useState)(!1),u=i[0],l=i[1],f=(0,w.E)(),p=(0,s.useCallback)((0,O.Z)(j().mark((function e(){var r,t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(null),a(null),l(!0),e.prev=3,e.next=6,(0,x.el)(f.current);case 6:r=e.sent,t=r.captchaImage,n(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),a(e.t0.message);case 14:return e.prev=14,l(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])}))),[]);return(0,s.useEffect)((function(){p()}),[]),(0,s.useEffect)((function(){e&&(e.current={refresh:p})}),[e]),{image:t,error:c,loading:u,refresh:p}}(t);return(0,o.jsx)(v,N(N(N({},a),n),{},{ref:r}))}var C=(0,s.forwardRef)(k)}}]);