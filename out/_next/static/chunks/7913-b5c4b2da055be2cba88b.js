(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7913],{6416:function(t,r,e){"use strict";e.d(r,{Z:function(){return b}});var n=e(9013),a=e(3882);function o(t,r){(0,a.Z)(2,arguments);var e=(0,n.Z)(t),o=(0,n.Z)(r),i=e.getTime()-o.getTime();return i<0?-1:i>0?1:i}function i(t,r){(0,a.Z)(2,arguments);var e=(0,n.Z)(t),o=(0,n.Z)(r),i=e.getFullYear()-o.getFullYear(),u=e.getMonth()-o.getMonth();return 12*i+u}function u(t){(0,a.Z)(1,arguments);var r=(0,n.Z)(t);return r.setHours(23,59,59,999),r}function s(t){(0,a.Z)(1,arguments);var r=(0,n.Z)(t),e=r.getMonth();return r.setFullYear(r.getFullYear(),e+1,0),r.setHours(23,59,59,999),r}function f(t){(0,a.Z)(1,arguments);var r=(0,n.Z)(t);return u(r).getTime()===s(r).getTime()}function c(t,r){(0,a.Z)(2,arguments);var e,u=(0,n.Z)(t),s=(0,n.Z)(r),c=o(u,s),l=Math.abs(i(u,s));if(l<1)e=0;else{1===u.getMonth()&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-c*l);var m=o(u,s)===-c;f((0,n.Z)(t))&&1===l&&1===o(t,s)&&(m=!1),e=c*(l-Number(m))}return 0===e?0:e}function l(t,r){(0,a.Z)(2,arguments);var e=(0,n.Z)(t),o=(0,n.Z)(r);return e.getTime()-o.getTime()}function m(t,r){(0,a.Z)(2,arguments);var e=l(t,r)/1e3;return e>0?Math.floor(e):Math.ceil(e)}var Z=e(4958),h=e(2149);function v(t){return(0,h.Z)({},t)}var D=e(4262),d=1440,M=43200;function g(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.Z)(2,arguments);var i=e.locale||Z.Z;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=o(t,r);if(isNaN(u))throw new RangeError("Invalid time value");var s,f,l=v(e);l.addSuffix=Boolean(e.addSuffix),l.comparison=u,u>0?(s=(0,n.Z)(r),f=(0,n.Z)(t)):(s=(0,n.Z)(t),f=(0,n.Z)(r));var h,g=m(f,s),b=((0,D.Z)(f)-(0,D.Z)(s))/1e3,y=Math.round((g-b)/60);if(y<2)return e.includeSeconds?g<5?i.formatDistance("lessThanXSeconds",5,l):g<10?i.formatDistance("lessThanXSeconds",10,l):g<20?i.formatDistance("lessThanXSeconds",20,l):g<40?i.formatDistance("halfAMinute",null,l):g<60?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",1,l):0===y?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",y,l);if(y<45)return i.formatDistance("xMinutes",y,l);if(y<90)return i.formatDistance("aboutXHours",1,l);if(y<d){var T=Math.round(y/60);return i.formatDistance("aboutXHours",T,l)}if(y<2520)return i.formatDistance("xDays",1,l);if(y<M){var X=Math.round(y/d);return i.formatDistance("xDays",X,l)}if(y<86400)return h=Math.round(y/M),i.formatDistance("aboutXMonths",h,l);if((h=c(f,s))<12){var p=Math.round(y/M);return i.formatDistance("xMonths",p,l)}var w=h%12,S=Math.floor(h/12);return w<3?i.formatDistance("aboutXYears",S,l):w<9?i.formatDistance("overXYears",S,l):i.formatDistance("almostXYears",S+1,l)}function b(t,r){return(0,a.Z)(1,arguments),g(t,Date.now(),r)}},9999:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(5093);var a=e(355);function o(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);