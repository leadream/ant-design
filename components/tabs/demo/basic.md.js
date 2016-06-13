webpackJsonp([101,358],{712:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(47),s(46)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[["p","\u9ed8\u8ba4\u9009\u4e2d\u7b2c\u4e00\u9879\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/tabs/demo/basic.md",id:"components-tabs-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >callback</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >defaultActiveKey</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>callback<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}var a=e["default"].TabPane;return c["default"].createElement(e["default"],{defaultActiveKey:"1",onChange:n},c["default"].createElement(a,{tab:"\u9009\u9879\u5361\u4e00",key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),c["default"].createElement(a,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9"),c["default"].createElement(a,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09\u5185\u5bb9"))}}}});