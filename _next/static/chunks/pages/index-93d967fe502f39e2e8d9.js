(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8215:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(7294);var i=n(1664),s=n(3439),a=n.n(s),r=n(5893);function o(t){var e=t.post;return(0,r.jsx)("div",{className:a().container,children:(0,r.jsx)(i.default,{href:"/".concat(e.slug),children:(0,r.jsxs)("a",{children:[(0,r.jsxs)("div",{className:a().header,children:[(0,r.jsx)("span",{className:a().date,children:e.date}),(0,r.jsx)("span",{className:a().tagWrapper,children:e.tag.map((function(t,e){return(0,r.jsxs)("span",{className:a().tag,children:["#",t]},e)}))})]}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsx)("p",{children:e.excerpt})]})})})}var c=n(6123),h=n.n(c);function u(t){var e=t.posts;return(0,r.jsx)("div",{className:h().container,children:e.map((function(t,e){return(0,r.jsx)(o,{post:t},e)}))})}},6837:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return S},default:function(){return k}});var i=n(6586);var s=n(6988);function a(t){return function(t){if(Array.isArray(t))return(0,i.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,s.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=n(7294),o=n(4956),c=n.n(o);function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var d=function(){function t(e,n,i,s){h(this,t),this.x=i,this.y=s,this.fixedY=s,this.speed=.05,this.cur=e,this.max=n}return l(t,[{key:"update",value:function(){this.cur+=this.speed,this.y=this.fixedY+Math.sin(this.cur)*this.max}}]),t}(),f=function(){function t(){h(this,t)}return l(t,[{key:"resize",value:function(t,e){this.stageWidth=t,this.stageHeight=e,this.boatHeight=.5*e,this.boatWidth=this.boatHeight,this.centerX=t/2,this.centerY=e-50-this.boatHeight,this.init()}},{key:"init",value:function(){this.point=new d(0,5,this.stageWidth/7,this.centerY)}},{key:"draw",value:function(t){t.beginPath(),t.fillStyle="#000FFF",this.point.update();var e=new Image;e.src="images/boat.svg",t.drawImage(e,this.point.x,this.point.y,this.boatWidth,this.boatHeight),t.fill(),t.closePath()}}]),t}(),_=function(){function t(e,n,i){h(this,t),this.index=e,this.totalPoints=n,this.color=i,this.points=[]}return l(t,[{key:"resize",value:function(t,e){this.stageWidth=t,this.stageHeight=e,this.centerX=t/2,this.centerY=e-70,this.pointGap=this.stageWidth/(this.totalPoints-1),this.init()}},{key:"init",value:function(){this.points=[];for(var t=0;t<this.totalPoints;t++){var e=new d(this.index+t,20*Math.random(),this.pointGap*t,this.centerY);this.points[t]=e}}},{key:"draw",value:function(t){t.beginPath(),t.fillStyle=this.color;var e=this.points[0].x,n=this.points[0].y;t.moveTo(e,n);for(var i=0;i<this.totalPoints;i++){i<this.totalPoints&&this.points[i].update();var s=(e+this.points[i].x)/2,a=(n+this.points[i].y)/2;t.quadraticCurveTo(e,n,s,a),e=this.points[i].x,n=this.points[i].y}t.lineTo(e,n),t.lineTo(this.stageWidth,this.stageHeight),t.lineTo(this.points[0].x,this.stageHeight),t.fill(),t.closePath()}}]),t}(),g=function(){function t(){h(this,t),this.totalWaves=3,this.totalPoints=20,this.color=["rgba(0,199,235,0.2)","rgba(0,146,199,0.2)","rgba(0,87,158,0.2)"],this.waves=[];for(var e=0;e<this.totalWaves;e++){var n=new _(e,this.totalPoints,this.color[e]);this.waves[e]=n}}return l(t,[{key:"resize",value:function(t,e){for(var n=0;n<this.totalWaves;n++){this.waves[n].resize(t,e)}}},{key:"draw",value:function(t){for(var e=0;e<this.totalWaves;e++){this.waves[e].draw(t)}}}]),t}(),p=function(){function t(e){h(this,t),this.canvas=e.current,this.ctx=this.canvas.getContext("2d"),this.waveGroup=new g,this.boat=new f,this.resize(),requestAnimationFrame(this.animate.bind(this))}return l(t,[{key:"resize",value:function(){this.stageWidth=2*this.canvas.offsetWidth,this.stageHeight=2*this.canvas.offsetHeight,this.canvas.width=this.stageWidth,this.canvas.height=this.stageHeight,this.waveGroup.resize(this.stageWidth,this.stageHeight),this.boat.resize(this.stageWidth,this.stageHeight)}},{key:"animate",value:function(t){this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight),this.boat.draw(this.ctx),this.waveGroup.draw(this.ctx),requestAnimationFrame(this.animate.bind(this))}}]),t}(),v=n(9008),x=n(8215),m=n(4184),y=n.n(m),b=n(660),w=n.n(b),j=n(5893);function N(t){var e=t.tag,n=t.selected,i=t.setSelected,s=t.numberByTag,o=(0,r.useState)(!1),c=o[0],h=o[1];return(0,j.jsx)("li",{className:w().container,onClick:function(){!function(){if(c)h(!1),i(n.filter((function(t){return t!=e})));else{h(!0);var t=a(n);t.push(e),i(t)}}()},children:(0,j.jsxs)("span",{className:c?w().active:w().inactive,children:[e," (",s(e),") ",c&&"x"]})})}function W(t){var e=t.posts,n=t.selected,i=t.setSelected,s=t.numberByTag,o=(0,r.useState)(!1),c=o[0],h=o[1],u=[];function l(){scrollY>450?h(!0):h(!1)}return e.forEach((function(t){u=[].concat(a(u),a(t.tag))})),u=Array.from(new Set(u)).sort(),(0,r.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}})),(0,j.jsxs)("ul",{className:c?y().fixedContainer:y().container,children:[(0,j.jsx)("p",{className:y().subject,children:"Tag"}),u.map((function(t,e){return(0,j.jsx)(N,{tag:t,selected:n,setSelected:i,numberByTag:s},e)}))]})}var S=!0;function k(t){var e=t.posts,n=t.isDark,i=(0,r.useRef)(null);(0,r.useEffect)((function(){new p(i)}),[]);var s=(0,r.useState)(e),o=s[0],h=s[1],u=(0,r.useState)([]),l=u[0],d=u[1],f=function(t,e){return t.filter((function(t){return t.tag.indexOf(e)>-1}))},_=function(t){return f(e,t).length};return(0,r.useEffect)((function(){if(0===l.length)h(e);else{var t=a(e);l.forEach((function(e){t=f(t,e)})),h(t)}}),[l]),(0,j.jsxs)("div",{className:c().container,children:[(0,j.jsxs)(v.default,{children:[(0,j.jsx)("title",{children:"WayneChoi.dev"}),(0,j.jsx)("meta",{name:"author",content:"Wayne Choi"}),(0,j.jsx)("meta",{name:"description",content:"Tech blog of Wayne Choi."}),(0,j.jsx)("meta",{name:"keywords",content:"javascript, react, frontend, developer"})]}),(0,j.jsx)("div",{className:c().canvas_wrapper,children:(0,j.jsx)("canvas",{ref:i,className:"".concat(c().canvas," ").concat(n?c().night:c().day)})}),(0,j.jsx)("p",{className:c().bonVoyage,children:"Bon Voyage!"}),(0,j.jsx)("div",{className:c().mobileTag,children:(0,j.jsx)(W,{posts:e,selected:l,setSelected:d,numberByTag:_})}),(0,j.jsxs)("div",{className:c().blogContainer,children:[(0,j.jsx)("div",{className:c().postList,children:o.length>0?(0,j.jsx)(x.Z,{posts:o}):(0,j.jsxs)("p",{className:c().noFound,children:["No result found",(0,j.jsx)("br",{}),"Please set tags again"]})}),(0,j.jsx)("div",{className:c().tag,children:(0,j.jsx)(W,{posts:e,selected:l,setSelected:d,numberByTag:_})})]})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6837)}])},3439:function(t){t.exports={container:"post_card_container__UhzDn",header:"post_card_header__1GD9J",date:"post_card_date__3I7F-",tagWrapper:"post_card_tagWrapper__1x75t",tag:"post_card_tag__t8NSx"}},6123:function(t){t.exports={container:"post_list_container__31KG5"}},4184:function(t){t.exports={container:"tag_list_container__pMW4g",fixedContainer:"tag_list_fixedContainer__EUhKB",subject:"tag_list_subject__2rFwQ"}},660:function(t){t.exports={container:"tag_list_item_container__1KmRN",active:"tag_list_item_active__2yqE3",inactive:"tag_list_item_inactive__36OPE"}},4956:function(t){t.exports={container:"index_container__3XRMM",bonVoyage:"index_bonVoyage__pk6or",canvas_wrapper:"index_canvas_wrapper__zpAzd",canvas:"index_canvas__BH3sG",night:"index_night__1s3nI",day:"index_day__2DUu_",blogContainer:"index_blogContainer__2S86w",noFound:"index_noFound__K6yW2",postList:"index_postList__ue-YK",tag:"index_tag__1nG4O",mobileTag:"index_mobileTag__3RS75"}},9008:function(t,e,n){t.exports=n(639)},6586:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,{Z:function(){return i}})},6988:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(6586);function s(t,e){if(t){if("string"===typeof t)return(0,i.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.Z)(t,e):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);