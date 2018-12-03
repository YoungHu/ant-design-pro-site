webpackJsonp([6],{1054:function(n,a,s){n.exports={basic:s(1444),vertical:s(1445)}},1251:function(n,a){n.exports={descriptionList:"descriptionList___2p6p9",title:"title___k0R5t",term:"term___1k1RQ",detail:"detail___1VfQ5",small:"small___lEgMv",large:"large___u1COe",vertical:"vertical___2AmR2"}},1255:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(s(1329)),e=o(s(1330));function o(n){return n&&n.__esModule?n:{default:n}}t.default.Description=e.default,a.default=t.default},1329:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=l(s(1)),o=l(s(261)),p=s(36),c=l(s(1251));function l(n){return n&&n.__esModule?n:{default:n}}function r(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}a.default=function(n){var a,s=n.className,l=n.title,i=n.col,u=void 0===i?3:i,k=n.layout,d=void 0===k?"horizontal":k,f=n.gutter,m=void 0===f?32:f,h=n.children,g=n.size,v=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}(n,["className","title","col","layout","gutter","children","size"]),b=(0,o.default)(c.default.descriptionList,c.default[d],s,(r(a={},c.default.small,"small"===g),r(a,c.default.large,"large"===g),a)),w=u>4?4:u;return e.default.createElement("div",t({className:b},v),l?e.default.createElement("div",{className:c.default.title},l):null,e.default.createElement(p.Row,{gutter:m},e.default.Children.map(h,function(n){return n?e.default.cloneElement(n,{column:w}):n})))}},1330:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=r(s(1)),o=r(s(396)),p=s(36),c=r(s(1251)),l=r(s(1331));function r(n){return n&&n.__esModule?n:{default:n}}var i=function(n){var a=n.term,s=n.column,o=n.children,r=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}(n,["term","column","children"]);return e.default.createElement(p.Col,t({},l.default[s],r),a&&e.default.createElement("div",{className:c.default.term},a),null!==o&&void 0!==o&&e.default.createElement("div",{className:c.default.detail},o))};i.defaultProps={term:""},i.propTypes={term:o.default.node},a.default=i},1331:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}}},1444:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u63cf\u8ff0\u5217\u8868\u3002"]],"en-US":[["p","Basic DescriptionList."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"scaffold/src/components/DescriptionList/demo/basic.md",id:"scaffold-src-components-DescriptionList-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DescriptionList <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/DescriptionList\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Description <span class="token punctuation">}</span> <span class="token operator">=</span> DescriptionList<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DescriptionList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DescriptionList</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(13),function(n){return n&&n.__esModule?n:{default:n}}(s(1255)));var t=a.default.Description;return n.createElement(a.default,{size:"large",title:"title"},n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."),n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."),n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."))}}},1445:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5782\u76f4\u5e03\u5c40\u3002"]],"en-US":[["p","Vertical layout."]]},meta:{order:1,title:{"zh-CN":"\u5782\u76f4\u578b","en-US":"Vertical"},filename:"scaffold/src/components/DescriptionList/demo/vertical.md",id:"scaffold-src-components-DescriptionList-demo-vertical"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DescriptionList <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/DescriptionList\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Description <span class="token punctuation">}</span> <span class="token operator">=</span> DescriptionList<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DescriptionList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      A free<span class="token punctuation">,</span> open source<span class="token punctuation">,</span> cross<span class="token operator">-</span>platform<span class="token punctuation">,</span>\n      graphical web browser developed by the\n      Mozilla Corporation and hundreds <span class="token keyword">of</span>\n      volunteers<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DescriptionList</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(13),function(n){return n&&n.__esModule?n:{default:n}}(s(1255)));var t=a.default.Description;return n.createElement(a.default,{size:"large",title:"title",layout:"vertical"},n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."),n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."),n.createElement(t,{term:"Firefox"},"A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers."))}}}});