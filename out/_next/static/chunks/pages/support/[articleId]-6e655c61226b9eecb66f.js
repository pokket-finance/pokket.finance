(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6586],{8222:function(e,t,n){"use strict";var r=n(1253),i=n(2122),o=n(7294),a=(n(5697),n(6010)),l=n(5565),c=n(3871),s=n(9693),d=n(106),u=n(462),p=o.forwardRef((function(e,t){var n,l,s=e.align,p=void 0===s?"inherit":s,h=e.classes,f=e.className,x=e.component,m=e.padding,g=e.scope,b=e.size,y=e.sortDirection,v=e.variant,w=(0,r.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=o.useContext(d.Z),E=o.useContext(u.Z),I=E&&"head"===E.variant;x?(l=x,n=I?"columnheader":"cell"):l=I?"th":"td";var Z=g;!Z&&I&&(Z="col");var C=m||(j&&j.padding?j.padding:"normal"),A=b||(j&&j.size?j.size:"medium"),_=v||E&&E.variant,N=null;return y&&(N="asc"===y?"ascending":"descending"),o.createElement(l,(0,i.Z)({ref:t,className:(0,a.Z)(h.root,h[_],f,"inherit"!==p&&h["align".concat((0,c.Z)(p))],"normal"!==C&&h["padding".concat((0,c.Z)(C))],"medium"!==A&&h["size".concat((0,c.Z)(A))],"head"===_&&j&&j.stickyHeader&&h.stickyHeader),"aria-sort":N,role:n,scope:Z},w))}));t.Z=(0,l.Z)((function(e){return{root:(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},106:function(e,t,n){"use strict";var r=n(7294).createContext();t.Z=r},462:function(e,t,n){"use strict";var r=n(7294).createContext();t.Z=r},3090:function(e,t,n){"use strict";n.d(t,{W:function(){return c},G:function(){return d}});var r=n(809),i=n.n(r),o=n(2447),a=n(9690),l=n(5917);function c(e){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/Account/getWalletActiveHistory",{signal:null===t||void 0===t?void 0:t.signal,credentials:"include",headers:{Authorization:"Bearer ".concat(null===(n=(0,a.nr)())||void 0===n?void 0:n.token),"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:if(0===(o=e.sent).errorCode){e.next=8;break}throw new l.H(o);case 8:return e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/Product/withdrawFeeLimit",{signal:null===t||void 0===t?void 0:t.signal,credentials:"include",headers:{Authorization:"Bearer ".concat(null===(n=(0,a.nr)())||void 0===n?void 0:n.token),"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:if(0===(o=e.sent).errorCode){e.next=8;break}throw new l.H(o);case 8:return e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7885:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),i=n(7294),o=n(1163),a=n(8117),l=n(340),c=n(1664),s=n(3788),d=n(1913),u=(0,a.ZP)(l.OK).withConfig({displayName:"SupportTab__TabItem",componentId:"sc-fv4k0h-0"})(["text-align:center;color:#9085c7;font-size:20px;transition:all 0.1s ease-in-out;position:relative;bottom:-1px;outline:0;cursor:pointer;height:75px;margin:0 30px;a{dispaly:block;height:100%;width:100%;display:flex;justify-content:center;align-items:center;}b{display:block;line-height:16px;}&:hover{color:#fff;}&:before{display:none;content:'';width:40px;height:1px;background-color:white;position:absolute;bottom:0;left:calc(50% - 20px);}@media only screen and (max-width:768px){white-space:pre-line;font-size:14px;cursor:pointer;text-align:left;height:50px;margin:0 5px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&:before{left:0;width:100%;}}@media (max-width:321px){text-align:center;}"]);function p(){var e=(0,o.useRouter)(),t=(0,i.useMemo)((function(){return s.w0.findIndex((function(t){return t.link===e.asPath}))}),[e.asPath]);return(0,r.jsx)(d.Xl,{defaultIndex:t,children:(0,r.jsx)(d.tw,{children:s.w0.map((function(e){var t=e.link,n=e.title,i=e.key;return(0,r.jsx)(u,{children:(0,r.jsx)(c.default,{href:t,shallow:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("b",{children:n})})})},i)}))})})}},1913:function(e,t,n){"use strict";n.d(t,{Xl:function(){return E},tw:function(){return I},ZP:function(){return P}});var r=n(5893),i=n(1664),o=n(8117),a=n(1749),l=n(7294),c=n(1163),s=n(340),d=n(2161),u=(n(7508),n(5820)),p=n(6265),h=n(6253),f=n(5007),x=n(4508),m=n(3788),g=n(7509),b=n(6198),y=n(9555);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.selectedProduct,n=e.btnColor,o=(0,g.f)(),c=(0,b.O)({selectedProduct:t}),s=c.amount,d=c.handleAmountChange,u=c.sourceSelect,p=c.sourceSelectData,v=c.targetSelect,j=c.targetSelectData,E=c.rates,I=c.expiryDate,Z=c.expectedReturn,C=(0,l.useMemo)((function(){var e;return null===(e=m.bQ.find((function(e){return e.key===t})))||void 0===e?void 0:e.color}),[t]);return(0,r.jsx)(y.Q,{children:(0,r.jsx)(x.l9,{children:(0,r.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,r.jsx)(a.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(x.L1,{children:(0,r.jsx)(f.ZP,{options:p.choices,getOptionLabel:function(e){return e.label},onChange:function(e,t){u.setValue(t.value)},disableClearable:!0,renderInput:function(e){return(0,r.jsx)(h.Z,w(w({variant:"outlined"},e),{},{label:p.label,style:{color:"#9287ca"}}))}})})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(x.L1,{children:(0,r.jsx)(f.ZP,{options:j.choices,getOptionLabel:function(e){return e.label},onChange:function(e,t){v.setValue(t.value)},disableClearable:!0,renderInput:function(e){return(0,r.jsx)(h.Z,w(w({variant:"outlined"},e),{},{label:j.label,style:{color:"#9287ca"}}))}})})}),(0,r.jsx)(a.Z,{item:!0,xs:12,children:(0,r.jsxs)(x.gb,{children:[(0,r.jsx)("p",{children:"lending"===t?"Lending amount":"Saving amount"}),(0,r.jsx)("input",{type:"number",step:"any",value:s,onChange:d})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:6,lg:6,children:(0,r.jsxs)(x.HY,{children:[(0,r.jsx)("p",{children:"Expected Return"}),Z&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:Z.expected}),"lending"!==t&&(0,r.jsxs)("h3",{children:["or"," ",(0,r.jsx)("span",{color:C,children:Z.converted})]})]})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:6,lg:6,children:(0,r.jsxs)(x.mk,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"lending"===t?"Interest Rate":"Weekly Interest Rate"}),E&&(0,r.jsxs)("h3",{children:[E.weeklyRate," (",E.annlyRate," APY)"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Expiry"}),(0,r.jsx)("h3",{children:I})]})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,children:(0,r.jsx)(i.default,{href:o?"/savings/new":"/login",children:(0,r.jsx)("a",{children:(0,r.jsx)(x.uH,{className:n,children:"Start earning now"})})})})]})})})},E=(0,o.ZP)(s.mQ).withConfig({displayName:"AssetCalculator__TabContainer",componentId:"sc-vlas3z-0"})(["width:100%;box-sizing:border-box;.react-tabs__tab-panel{height:100%;width:100%;padding:104px 0px;color:#fff;@media only screen and (max-width:768px){padding:50px 0;}}.react-tabs__tab--selected{color:#fff;border-radius:0;background-color:transparent;transition:all 0.1s ease-in-out;&:before{display:block;}}"]),I=(0,o.ZP)(s.td).withConfig({displayName:"AssetCalculator__TabLists",componentId:"sc-vlas3z-1"})(["width:100%;display:flex;justify-content:center;border-bottom:solid 1px #2c2551;@media only screen and (max-width:768px){justify-content:space-between;}"]),Z=(0,o.ZP)(s.OK).withConfig({displayName:"AssetCalculator__TabItem",componentId:"sc-vlas3z-2"})(["padding:30px;text-align:center;color:#9085c7;font-size:20px;transition:all 0.1s ease-in-out;position:relative;bottom:-1px;outline:0;cursor:pointer;b{display:block;line-height:16px;}&:hover{color:#fff;}&:before{display:none;content:'';width:40px;height:1px;background-color:white;position:absolute;bottom:0;left:calc(50% - 20px);}@media only screen and (max-width:768px){padding:15px 5px;white-space:pre-line;font-size:14px;cursor:pointer;text-align:left;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&:before{left:0;width:100%;}}@media (max-width:321px){text-align:center;}"]),C=o.ZP.div.withConfig({displayName:"AssetCalculator__TabText",componentId:"sc-vlas3z-3"})(["h3{font-size:60px;line-height:70px;font-weight:300;b{font-weight:bold;}}span{margin-top:20px;font-size:18px;color:#9287ca;display:inline-block;}@media only screen and (max-width:768px){h3{font-size:30px;line-height:41px;}span{font-size:16px;text-align:justify;}}"]),A=o.ZP.div.withConfig({displayName:"AssetCalculator__ButtonGroup",componentId:"sc-vlas3z-4"})(["width:100%;margin:48px 0 30px 0;display:flex;@media only screen and (max-width:768px){flex-wrap:wrap;}"]),_=(0,o.ZP)(u.Z).withConfig({displayName:"AssetCalculator__SeeMore",componentId:"sc-vlas3z-5"})(["width:40%;font-size:20px;padding:19px;border-radius:3px;margin-right:30px;font-weight:bold;&:last-child{margin-right:0;}@media (max-width:1280px){width:100%;font-size:16px;padding:20px 0;margin-bottom:20px;span{width:100%;margin:0;}}@media only screen and (max-width:768px){padding:21px 0;font-size:18px;line-height:18px;&:first-child{margin-right:0;}&:last-child{margin-bottom:0;}}"]),N=function(e){switch(e.type){case"lending":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)("b",{children:"Simply HODL "}),(0,r.jsx)("br",{})," and Earn"]}),(0,r.jsx)("span",{children:"No need to worry about the constant changes in cryptocurrency prices. With the POKKET Straight Lending product, you can earn interest on your own terms with your favorite assets like BTC, ETH, LINK, BNB, USDC and USDT. Choose whether to gain interest on your assets on 14, 30, or 90-day basis, and get paid in the crypto you\u2019re HODLing."})]});case"token":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)("b",{children:"New Way to Earn"}),(0,r.jsx)("br",{})," Higher Yield"]}),(0,r.jsx)("span",{children:"Our crypto Structured Saving product is unlike any other on the crypto market, with the potential to earn high interest on wide range of crypto assets, from Bitcoin to Ethereum, and many altcoins and DeFi coins. When the markets are more volatile, you can earn higher interest rates in exchange for price fluctuations. It\u2019s a high yield crypto savings account with an options twist."})]});case"stablecoin":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)("b",{children:"Earn While"}),(0,r.jsx)("br",{})," You Wait"]}),(0,r.jsx)("span",{children:"Want to earn interest on stablecoins while waiting to buy cryptos when it goes down? Then our Stablecoin Structured Saving product is for you. The interest is earned depending on the target asset price volatility, and your stablecoins are automatically converted when the crypto price declines more than the threshold price."})]});default:return(0,r.jsx)(r.Fragment,{})}};var P=function(){var e=(0,c.useRouter)(),t=(0,l.useMemo)((function(){return m.bQ.findIndex((function(t){return t.key===e.query.name}))}),[e.asPath]),n=(0,d.$G)("common").t;return(0,r.jsxs)(E,{defaultIndex:t,children:[(0,r.jsx)(I,{children:m.bQ.map((function(e){var t=e.key,o=e.link,a=e.title,l=e.subtitle;return(0,r.jsx)(Z,{children:(0,r.jsx)(i.default,{href:o,shallow:!0,children:(0,r.jsxs)("a",{children:[(0,r.jsx)("b",{children:n(a)}),n(l)]})})},t)}))}),(0,r.jsx)(s.x4,{children:(0,r.jsxs)(a.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:5,children:(0,r.jsxs)(C,{children:[(0,r.jsx)(N,{type:"lending"}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.default,{href:"/faq/how-does-it-work",passHref:!0,children:(0,r.jsx)(_,{as:"a",className:"bg-indigo text-white text-center",children:"Learn More"})}),(0,r.jsx)(i.default,{href:"/earn-crypto-bonus",passHref:!0,children:(0,r.jsx)(_,{as:"a",className:"bg-white text-indigo text-center",children:"Earn Bonus"})})]})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:6,children:(0,r.jsx)(j,{selectedProduct:"lending",btnColor:"bg-indigo"})})]})}),(0,r.jsx)(s.x4,{children:(0,r.jsxs)(a.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:5,children:(0,r.jsxs)(C,{children:[(0,r.jsx)(N,{type:"token"}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.default,{href:"/faq/how-does-it-work",passHref:!0,children:(0,r.jsx)(_,{className:"bg-purple-750 text-white",children:"Learn More"})}),(0,r.jsx)(i.default,{href:"/earn-crypto-bonus",passHref:!0,children:(0,r.jsx)(_,{className:"bg-white text-purple-750",children:"Earn Bonus"})})]})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:6,children:(0,r.jsx)(j,{selectedProduct:"token",btnColor:"bg-purple-750"})})]})}),(0,r.jsx)(s.x4,{children:(0,r.jsxs)(a.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:5,children:(0,r.jsxs)(C,{children:[(0,r.jsx)(N,{type:"stablecoin"}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.default,{href:"/faq/how-does-it-work",passHref:!0,children:(0,r.jsx)(_,{className:"bg-purple-650 text-white",children:"Learn More"})}),(0,r.jsx)(i.default,{href:"/earn-crypto-bonus",passHref:!0,children:(0,r.jsx)(_,{className:"bg-white text-green-100",children:"Earn Bonus"})})]})]})}),(0,r.jsx)(a.Z,{item:!0,xs:12,md:12,lg:6,children:(0,r.jsx)(j,{selectedProduct:"stablecoin",btnColor:"bg-purple-650"})})]})})]})}},5077:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return We},default:function(){return Qe}});var r=n(5893),i=n(1664),o=n(5723),a=n(8117),l=n(7294),c=n(1163),s=n(8906);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?v(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function e(t){var n=this,r=t.expanded,i=void 0===r?[]:r,o=t.allowMultipleExpanded,a=void 0!==o&&o,l=t.allowZeroExpanded,c=void 0!==l&&l;d(this,e),h(this,"expanded",void 0),h(this,"allowMultipleExpanded",void 0),h(this,"allowZeroExpanded",void 0),h(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(I(n.expanded),[e]):[e]})})),h(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),h(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),h(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),h(this,"getHeadingAttributes",(function(){return{role:"heading"}})),h(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),i=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":i,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),h(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),h(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),h(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=i,this.allowMultipleExpanded=a,this.allowZeroExpanded=c},_=(0,l.createContext)(null),N=function(e){m(n,e);var t=j(n);function n(){var e;d(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return h(v(e=t.call.apply(t,[this].concat(i))),"state",new A({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),h(v(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),h(v(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),h(v(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),h(v(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),h(v(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),h(v(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return p(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return(0,l.createElement)(_.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(l.PureComponent);h(N,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var P,k=function(e){m(n,e);var t=j(n);function n(){var e;d(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return h(v(e=t.call.apply(t,[this].concat(i))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return p(n,[{key:"render",value:function(){return(0,l.createElement)(_.Consumer,null,this.renderChildren)}}]),n}(l.PureComponent),O=function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,i=e.allowZeroExpanded,o=e.onChange,a=e.preExpanded,c=y(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return(0,l.createElement)(N,{preExpanded:a,allowMultipleExpanded:r,allowZeroExpanded:i,onChange:o},(0,l.createElement)("div",f({"data-accordion-component":"Accordion",className:n},c)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(P||(P={}));var S=P,z=0;var T=/[\u0009\u000a\u000c\u000d\u0020]/g;function D(e){return""!==e&&!T.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var H=(0,l.createContext)(null),M=function(e){var t=e.children,n=e.uuid,r=e.accordionContext,i=e.dangerouslySetExpanded,o=function(){r.toggleExpanded(n)},a=function(e){var r=null!==i&&void 0!==i?i:e.isItemExpanded(n),a=e.isItemDisabled(n),c=e.getPanelAttributes(n,i),s=e.getHeadingAttributes(n),d=e.getButtonAttributes(n,i);return(0,l.createElement)(H.Provider,{value:{uuid:n,expanded:r,disabled:a,toggleExpanded:o,panelAttributes:c,headingAttributes:s,buttonAttributes:d}},t)};return(0,l.createElement)(k,null,a)},R=function(e){return(0,l.createElement)(k,null,(function(t){return(0,l.createElement)(M,f({},e,{accordionContext:t}))}))},B=function(e){var t=e.children,n=function(e){return e?t(e):null};return(0,l.createElement)(H.Consumer,null,n)},L=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,r=e.className,i=void 0===r?"accordion__item":r,o=e.activeClassName,a=y(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),c=E((0,l.useState)(function(){var e=z;return z+=1,"raa-".concat(e)}()),1)[0],s=t||c,d=function(e){var t=e.expanded&&o?o:i;return(0,l.createElement)("div",f({"data-accordion-component":"AccordionItem",className:t},a))};return D(s),a.id&&D(a.id),(0,l.createElement)(R,{uuid:s,dangerouslySetExpanded:n},(0,l.createElement)(B,null,d))};function q(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:q(e.parentElement))}function F(e){var t=q(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}L.displayName=S.AccordionItem;var W="End",Q="Enter",$="Home",K=" ",G="Spacebar",U="ArrowUp",V="ArrowDown",X="ArrowLeft",Y="ArrowRight",J=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,i=y(e,["toggleExpanded","className"]);return i.id&&D(i.id),(0,l.createElement)("div",f({className:r},i,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==Q&&n!==K&&n!==G||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case $:e.preventDefault(),function(e){var t=(F(e)||[])[0];t&&t.focus()}(e.target);break;case W:e.preventDefault(),function(e){var t=F(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case X:case U:e.preventDefault(),function(e){var t=F(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case Y:case V:e.preventDefault(),function(e){var t=F(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},ee=function(e){return(0,l.createElement)(B,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return(0,l.createElement)(J,f({toggleExpanded:n},e,r))}))},te=function(e){m(n,e);var t=j(n);function n(){var e;d(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return h(v(e=t.call.apply(t,[this].concat(i))),"ref",void 0),h(v(e),"setRef",(function(t){e.ref=t})),e}return p(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return(0,l.createElement)("div",f({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(l.PureComponent);h(te,"defaultProps",{className:"accordion__heading","aria-level":3});var ne=function(e){return(0,l.createElement)(B,null,(function(t){var n=t.headingAttributes;return e.id&&D(e.id),(0,l.createElement)(te,f({},e,n))}))};ne.displayName=S.AccordionItemHeading;var re=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,i=y(e,["className","id"]),o=function(e){var t=e.panelAttributes;return r&&D(r),(0,l.createElement)("div",f({"data-accordion-component":"AccordionItemPanel",className:n},i,t))};return(0,l.createElement)(B,null,o)},ie=n(2122),oe=n(1253),ae=(n(5697),n(6010)),le=n(5565),ce=l.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?"div":i,a=(0,oe.Z)(e,["classes","className","component"]);return l.createElement(o,(0,ie.Z)({ref:t,className:(0,ae.Z)(n.root,r)},a))})),se=(0,le.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(ce),de=n(106),ue="table",pe=l.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?ue:i,a=e.padding,c=void 0===a?"normal":a,s=e.size,d=void 0===s?"medium":s,u=e.stickyHeader,p=void 0!==u&&u,h=(0,oe.Z)(e,["classes","className","component","padding","size","stickyHeader"]),f=l.useMemo((function(){return{padding:c,size:d,stickyHeader:p}}),[c,d,p]);return l.createElement(de.Z.Provider,{value:f},l.createElement(o,(0,ie.Z)({role:o===ue?null:"table",ref:t,className:(0,ae.Z)(n.root,r,p&&n.stickyHeader)},h)))})),he=(0,le.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,ie.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(pe),fe=n(462),xe={variant:"head"},me="thead",ge=l.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?me:i,a=(0,oe.Z)(e,["classes","className","component"]);return l.createElement(fe.Z.Provider,{value:xe},l.createElement(o,(0,ie.Z)({className:(0,ae.Z)(n.root,r),ref:t,role:o===me?null:"rowgroup"},a)))})),be=(0,le.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(ge),ye=n(9693),ve=l.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?"tr":i,a=e.hover,c=void 0!==a&&a,s=e.selected,d=void 0!==s&&s,u=(0,oe.Z)(e,["classes","className","component","hover","selected"]),p=l.useContext(fe.Z);return l.createElement(o,(0,ie.Z)({ref:t,className:(0,ae.Z)(n.root,r,p&&{head:n.head,footer:n.footer}[p.variant],c&&n.hover,d&&n.selected),role:"tr"===o?null:"row"},u))})),we=(0,le.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,ye.Fq)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(ve),je={variant:"body"},Ee="tbody",Ie=l.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?Ee:i,a=(0,oe.Z)(e,["classes","className","component"]);return l.createElement(fe.Z.Provider,{value:je},l.createElement(o,(0,ie.Z)({className:(0,ae.Z)(n.root,r),ref:t,role:o===Ee?null:"rowgroup"},a)))})),Ze=(0,le.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(Ie),Ce=n(9895),Ae=n(8222),_e=(n(2007),n(2792)),Ne=n(6197),Pe=n(3898),ke=n(3090),Oe=n(7885),Se=a.ZP.div.withConfig({displayName:"articleId__Content",componentId:"sc-1fo35qw-0"})(["width:100%;display:flex;justify-content:space-between;font-family:'Roboto',sans-serif;.MuiTableContainer-root{background-color:transparent;}.MuiTableCell-root{color:#9287ca;border-color:#2c2551;}.MuiTableCell-head{color:#fff;}@media only screen and (max-width:768px){display:block;}"]),ze=a.ZP.div.withConfig({displayName:"articleId__SideBar",componentId:"sc-1fo35qw-1"})(["width:25%;min-width:200px;.dropdown{display:none;}@media only screen and (max-width:768px){.dropdown{display:block;border:1px solid #2c2551;color:white;padding:10px 15px;border-radius:3px;font-size:14px;.button{display:flex;align-items:center;justify-content:space-between;}svg{width:24px;height:12px;fill:#9287ca;transition:all 0.3s;transform:",";}.content{height:",";overflow-y:hidden;}}width:100%;min-width:100%;}"],(function(e){return e.faqShow&&"rotate(180deg)"}),(function(e){return e.faqShow?"auto":0})),Te=a.ZP.div.withConfig({displayName:"articleId__Item",componentId:"sc-1fo35qw-2"})(["span{color:#0a0037;font-size:14px;line-height:50px;font-weight:bold;}&:hover{span{color:#2601cf;font-weight:bold;}}& > span{color:#0a0037;font-size:14px;font-weight:700;line-height:50px;}"]),De=a.ZP.div.withConfig({displayName:"articleId__Menu",componentId:"sc-1fo35qw-3"})(["@media only screen and (max-width:768px){display:none;}"]),He=a.ZP.div.withConfig({displayName:"articleId__Sub",componentId:"sc-1fo35qw-4"})(["padding-left:5px;"]),Me=a.ZP.div.withConfig({displayName:"articleId__SubMenu",componentId:"sc-1fo35qw-5"})(["color:#0a0037;font-size:12px;margin-bottom:10px;&:hover{color:#2601cf;}"]),Re=a.ZP.div.withConfig({displayName:"articleId__HelpContent",componentId:"sc-1fo35qw-6"})(["width:100%;padding-left:10%;padding-bottom:50px;@media only screen and (max-width:768px){padding-left:0;padding-bottom:0;}"]),Be=a.ZP.div.withConfig({displayName:"articleId__BreadCrumbs",componentId:"sc-1fo35qw-7"})(["color:white;font-size:12px;line-height:18px;margin-bottom:49px;padding:32px 0 32px 0;border-bottom:solid 1px #eeeef2;"]),Le=a.ZP.h3.withConfig({displayName:"articleId__Title",componentId:"sc-1fo35qw-8"})(["color:white;font-size:20px;font-weight:700;line-height:23px;"]),qe=a.ZP.div.withConfig({displayName:"articleId__Desc",componentId:"sc-1fo35qw-9"})(["font-size:14px;line-height:25px;"]);function Fe(){var e,t=(0,o.ZP)("feeLimits",ke.G).data;return(0,r.jsx)(se,{component:Ce.Z,children:(0,r.jsxs)(he,{size:"small","aria-label":"fee table",children:[(0,r.jsx)(be,{children:(0,r.jsxs)(we,{children:[(0,r.jsx)(Ae.Z,{align:"left",children:"Token"}),(0,r.jsx)(Ae.Z,{align:"center",children:"Network"}),(0,r.jsx)(Ae.Z,{align:"center",children:"Fee"})]})}),(0,r.jsx)(Ze,{children:null===t||void 0===t||null===(e=t.sort((function(e,t){var n=e.description,r=t.description;return n.localeCompare(r)})))||void 0===e?void 0:e.map((function(e){return(0,r.jsxs)(we,{children:[(0,r.jsx)(Ae.Z,{component:"th",scope:"row",align:"left",children:"".concat(e.symbol," ").concat(e.description)}),(0,r.jsx)(Ae.Z,{align:"center",children:e.coinContractName}),(0,r.jsx)(Ae.Z,{align:"center",children:e.fee})]},"".concat(e.symbol,"|").concat(e.coinContractName))}))})]})})}var We=!0,Qe=function(e){var t,n=e.faqs,o=e.article,a=e.category,d=(0,l.useState)(!1),u=d[0],p=d[1],h=(0,c.useRouter)(),f=function(){return(0,r.jsx)(O,{className:"border-none pt-4",preExpanded:[a.id.toString()],children:n.map((function(e){var t;return(0,r.jsxs)(L,{className:"border-none mt-2",uuid:e.id.toString(),children:[(0,r.jsx)(ne,{children:(0,r.jsx)(ee,{className:"py-2 outline-none border-none",children:(0,r.jsx)("span",{className:"font-bold text-indigo-900 text-nav cursor-pointer",children:(0,r.jsx)("div",{className:"text-white cursor-pointer",children:"en"===h.locale?e.category.category_en:e.category.category_zh})})})}),(0,r.jsx)(re,{className:"border-none",children:(0,r.jsx)(Te,{children:(0,r.jsx)(He,{className:"my-4",children:null===e||void 0===e||null===(t=e.list)||void 0===t?void 0:t.map((function(e){var t;return(0,r.jsx)(Me,{children:(0,r.jsx)(i.default,{href:"/faq/".concat(e.id),children:(0,r.jsx)("a",{className:"".concat((null===h||void 0===h||null===(t=h.query)||void 0===t?void 0:t.articleId)===e.id?"text-white":"text-purple-300"," inline-block hover:text-white"),onClick:function(){return p(!1)},children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:"en"===h.locale?e.title.title_en:e.title.title_zh}})})})},e.id)}))})})})]},e.id)}))})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_e.ZP,{}),(0,r.jsx)(Pe.Container,{style:{borderBottom:"1px solid #2c2551 "},children:(0,r.jsx)(Oe.Z,{})}),(0,r.jsx)(Pe.Container,{children:(0,r.jsx)("div",{className:"w-full m-auto py-10",style:{borderBottom:"1px solid #2c2551 "},children:(0,r.jsxs)(Se,{children:[(0,r.jsxs)(ze,{faqShow:u,children:[(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsxs)("div",{className:"button",onClick:function(){return p(!u)},children:["All FAQ ",(0,r.jsx)(s.Q,{src:"/assets/arrow.svg"})]}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)(f,{})})]}),(0,r.jsx)(De,{children:(0,r.jsx)(f,{})})]}),(0,r.jsxs)(Re,{children:[(0,r.jsxs)(Be,{children:[(0,r.jsx)("span",{className:"text-purple-300",children:"FAQ"}),(0,r.jsx)("b",{className:"px-2 text-purple-300",children:"/"}),(0,r.jsx)("span",{children:"en"===h.locale?a.category.category_en:a.category.category_zh}),(0,r.jsx)("b",{className:"px-2",children:"/"}),(0,r.jsx)("span",{children:"en"===h.locale?o.title.title_en:o.title.title_zh})]}),(0,r.jsx)(Le,{children:"en"===h.locale?o.title.title_en:o.title.title_zh}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(qe,{className:"text-purple-300",dangerouslySetInnerHTML:{__html:"en"===h.locale?o.content.content_en:o.content.content_zh}}),"crypto-savings-fees"===(null===h||void 0===h||null===(t=h.query)||void 0===t?void 0:t.articleId)&&(0,r.jsx)(Fe,{})]})]})})}),(0,r.jsx)(Ne.Z,{})]})}},7592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/support/[articleId]",function(){return n(5077)}])},2007:function(){},7508:function(){}},function(e){e.O(0,[8437,7313,9077,340,399,3898,9774,2888,179],(function(){return t=7592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);