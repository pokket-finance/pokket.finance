(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7673],{5958:function(n,t,e){"use strict";var r=e(5893),i=e(8117),o=i.ZP.div.withConfig({displayName:"TabMenu__MenuContainer",componentId:"sc-wnbsuj-0"})(["display:flex;border-radius:5px 5px 0 0;border:1px solid #1f193e;border-bottom:0;"]),u=i.ZP.div.withConfig({displayName:"TabMenu__MenuItem",componentId:"sc-wnbsuj-1"})(["color:",";background-color:",";width:calc(","%);text-align:center;padding:20px 0;font-size:14px;cursor:pointer;border-left:1px solid #1f193e;text-transform:capitalize;&:first-child{border-left:0;}h3{font-weight:900;}@media only screen and (max-width:768px){h3{font-weight:normal;}}"],(function(n){return n.color}),(function(n){return n.background}),(function(n){return 100/n.count}));t.Z=function(n){var t=n.menu,e=n.tab,i=n.setTab;return(0,r.jsx)(o,{children:t.map((function(n){return(0,r.jsxs)(u,{count:t.length,onClick:function(){return i(n.id)},color:e===n.id?"white":"#9287CA",background:e===n.id&&"#1f193e",children:[(0,r.jsx)("h3",{children:n.menu}),(0,r.jsxs)("p",{children:[" ",n.title]})]},n.id)}))})}},1609:function(n,t,e){"use strict";e.d(t,{T:function(){return u},a:function(){return a}});var r=e(4047),i=e(2700),o=e(6265),u=function(n){return Array.from(new Set(n).values())},a=function(){function n(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];(0,r.Z)(this,n),(0,o.Z)(this,"data",void 0),this.data=Array.from(arguments)}return(0,i.Z)(n,[{key:"pushWithPosition",value:function(n){var t=this,e=n.items,r=n.positions,i=0;return 0===e.length||0===r.length?this.data:e.length>r.length?(console.error("param positions of class List is not enough!"),null):(e.forEach((function(n,o){var u=r[o]+i;t.data.splice(u,0,e[o]),++i})),this)}},{key:"pushOut",value:function(n,t){return this.data.splice(n,t),this}}]),n}()},4245:function(n,t,e){"use strict";e.d(t,{s:function(){return o},p:function(){return u}});var r=e(6514),i=e(5460);function o(n){return(0,r.Z)(n,"dd/MM/yyyy HH:mm:ss",new Date)}function u(n,t){return(0,i.Z)(o(n),t||"dd MMM yyyy")}},8237:function(n,t,e){"use strict";e.d(t,{T:function(){return i},gq:function(){return o},uH:function(){return u},SZ:function(){return a}});var r=e(3776),i=function(n,t){var e=new r.Decimal(n).add(new r.Decimal(t)).toFixed();return parseFloat(e)},o=function(n,t){var e=new r.Decimal(n).sub(new r.Decimal(t)).toFixed();return parseFloat(e)},u=function(n,t){var e=new r.Decimal(n).mul(new r.Decimal(t)).toFixed();return parseFloat(e)},a=function(n,t){var e=new r.Decimal(n).div(new r.Decimal(t)).toFixed();return parseFloat(e)}},3739:function(n,t,e){"use strict";e.d(t,{n:function(){return i}});var r=e(5745);function i(n,t,e){switch(n){case r.kv.TokenToCollateral:return"Token Structured Saving";case r.kv.CollateralToToken:return e?"".concat(e," Structured Saving"):"Stablecoin Structured Saving";case r.kv.Lending:return"".concat(t," Days Simple Saving");default:return null}}},521:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/savings/new",function(){return e(4454)}])}},function(n){n.O(0,[3662,8437,7313,2672,2283,1317,399,3898,7662,4454,9774,2888,179],(function(){return t=521,n(n.s=t);var t}));var t=n.O();_N_E=t}]);