webpackJsonp([55,358],{758:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(61),a(60)),o=t(p),e=(a(6),a(5)),c=t(e),u=(a(9),a(7)),l=t(u),i=(a(53),a(52)),k=t(i),r=a(1),f=t(r),d=a(2);t(d);n.exports={content:[["p","\u7ecf\u5178\u6b3e\u5f0f\uff0c\u7528\u6237\u70b9\u51fb\u6309\u94ae\u5f39\u51fa\u6587\u4ef6\u9009\u62e9\u6846\u3002"]],meta:{order:0,title:"\u70b9\u51fb\u4e0a\u4f20",filename:"components/upload/demo/basic.md",id:"components-upload-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> message<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'file\'</span><span class="token punctuation" >,</span>\n  action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n  headers<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    authorization<span class="token punctuation" >:</span> <span class="token string" >\'authorization-text\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >!==</span> <span class="token string" >\'uploading\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >,</span> info<span class="token punctuation" >.</span>fileList<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >===</span> <span class="token string" >\'done\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      message<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>name<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u4e0a\u4f20\u6210\u529f\u3002`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >===</span> <span class="token string" >\'error\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      message<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>name<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u4e0a\u4f20\u5931\u8d25\u3002`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={name:"file",action:"/upload.do",headers:{authorization:"authorization-text"},onChange:function(n){"uploading"!==n.file.status&&console.log(n.file,n.fileList),"done"===n.file.status?k["default"].success(n.file.name+" \u4e0a\u4f20\u6210\u529f\u3002"):"error"===n.file.status&&k["default"].error(n.file.name+" \u4e0a\u4f20\u5931\u8d25\u3002")}};return f["default"].createElement(o["default"],n,f["default"].createElement(c["default"],{type:"ghost"},f["default"].createElement(l["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}}}});