webpackJsonp([350,358],{457:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(65),s(64)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:[["p","\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u5173\u95ed\u8b66\u544a\u63d0\u793a\u3002"]],meta:{order:2,title:"\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a",filename:"components/alert/demo/closable.md",id:"components-alert-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> onClose <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >,</span> <span class="token string" >\'\u6211\u8981\u88ab\u5173\u95ed\u5566\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >closable</span>\n    <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >closable</span>\n    <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){console.log(n,"\u6211\u8981\u88ab\u5173\u95ed\u5566\uff01")};return c["default"].createElement("div",null,c["default"].createElement(o["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",type:"warning",closable:!0,onClose:n}),c["default"].createElement(o["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",description:"\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"error",closable:!0,onClose:n}))}}}});