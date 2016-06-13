webpackJsonp([112,358],{701:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(23),s(22)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u65b9\u4fbf\u4e00\u9875\u5185\u5c55\u793a\u5927\u91cf\u6570\u636e\u3002"],["p","\u9700\u8981\u6307\u5b9a column \u7684 ",["code","width"]," \u5c5e\u6027\uff0c\u5426\u5219\u5217\u5934\u548c\u5185\u5bb9\u53ef\u80fd\u4e0d\u5bf9\u9f50\u3002"]],meta:{order:16,title:"\u56fa\u5b9a\u8868\u5934",filename:"components/table/demo/fixed-header.md",id:"components-table-demo-fixed-header"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token number" >150</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token number" >150</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >100</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  data<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u674e\u5927\u5634</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u53f7`</span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >pagination</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> pageSize<span class="token punctuation" >:</span> <span class="token number" >50</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >scroll</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> y<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){for(var n=[{title:"\u59d3\u540d",dataIndex:"name",width:150},{title:"\u5e74\u9f84",dataIndex:"age",width:150},{title:"\u4f4f\u5740",dataIndex:"address"}],a=[],s=0;100>s;s++)a.push({key:s,name:"\u674e\u5927\u5634"+s,age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed"+s+"\u53f7"});return e["default"].createElement(o["default"],{columns:n,dataSource:a,pagination:{pageSize:50},scroll:{y:240}})}}}});