(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{33741:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var r=e(85893),i=e(41664),a=e(44306),o=e.n(a);function s(n){var t=n.post;n.prefix;return(0,r.jsx)(i.default,{href:"/blog/".concat(t.slug),passHref:!0,children:(0,r.jsx)("div",{className:o().container,children:(0,r.jsxs)("div",{className:o().detail,children:[(0,r.jsx)("h3",{children:t.title}),(0,r.jsx)("p",{children:t.excerpt}),(0,r.jsx)("div",{children:t.date})]})})})}},32449:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return d},default:function(){return _}});var r=e(85893),i=e(67294),a=e(26199),o=e.n(a),s=e(33741);function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=e(82430),f=e.n(l);function p(n){var t=n.posts,e=n.selected,i=n.filter,a=["All"].concat(u(Array.from(new Set(t.map((function(n){return n.tag})))))),o=function(n){return"All"===n?t.length:t.filter((function(t){return t.tag===n})).length};return(0,r.jsx)("ul",{className:f().tagsWrapper,children:a.map((function(n,t){return(0,r.jsxs)("li",{className:n===e?f().selectedTag:"",onClick:function(){i(n)},children:[n," (",o(n),")"]},t)}))})}var d=!0;function _(n){var t=n.posts,e=n.prefix,a=(0,i.useState)(t),c=a[0],u=a[1],l=(0,i.useState)(!0),f=l[0],d=l[1],_=(0,i.useState)("All"),m=_[0],g=_[1];return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)("div",{className:o().menuIcon,children:(0,r.jsx)("img",{src:e+"images/menu.svg",onClick:function(){d(!f)},alt:"menu"})}),!f&&(0,r.jsx)(p,{posts:t,selected:m,filter:function(n){g(n),u("All"===n?t:t.filter((function(t){return t.tag===n})))}}),(0,r.jsx)("div",{className:o().postsWrapper,children:c.map((function(n,t){return(0,r.jsx)(s.Z,{post:n,prefix:e},t)}))})]})}},88091:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(32449)}])},44306:function(n){n.exports={container:"post_card_container__UhzDn",img:"post_card_img__X1SlI",detail:"post_card_detail__2vn9C"}},82430:function(n){n.exports={tagsWrapper:"tag_list_tagsWrapper__2Ffoa",selectedTag:"tag_list_selectedTag__3O13h"}},26199:function(n){n.exports={container:"blog_container__4Vikx",menuIcon:"blog_menuIcon__1Rmdk",postsWrapper:"blog_postsWrapper__3MpCa"}}},function(n){n.O(0,[774,888,179],(function(){return t=88091,n(n.s=t);var t}));var t=n.O();_N_E=t}]);