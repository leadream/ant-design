webpackJsonp([164,358],{647:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(13),s(18)),o=t(p),e=(s(33),s(32)),c=t(e),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u5782\u76f4\u7684 RadioGroup\uff0c\u914d\u5408\u66f4\u591a\u8f93\u5165\u6846\u9009\u9879\u3002"]],meta:{order:2,title:"RadioGroup \u5782\u76f4",filename:"components/radio/demo/radiogroup-more.md",id:"components-radio-demo-radiogroup-more"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Radio<span class="token punctuation" >,</span> Input <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioGroup <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'radio checked\'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> radioStyle <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      display<span class="token punctuation" >:</span> <span class="token string" >\'block\'</span><span class="token punctuation" >,</span>\n      height<span class="token punctuation" >:</span> <span class="token string" >\'30px\'</span><span class="token punctuation" >,</span>\n      lineHeight<span class="token punctuation" >:</span> <span class="token string" >\'30px\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>radioStyle<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Option A<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>radioStyle<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Option B<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>radioStyle<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>c<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Option C<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>radioStyle<span class="token punctuation" >}</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>d<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          More<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >4</span> <span class="token operator" >?</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span> <span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].Group,a=l["default"].createClass({displayName:"App",getInitialState:function(){return{value:1}},onChange:function(n){console.log("radio checked",n.target.value),this.setState({value:n.target.value})},render:function(){var a={display:"block",height:"30px",lineHeight:"30px"};return l["default"].createElement(n,{onChange:this.onChange,value:this.state.value},l["default"].createElement(c["default"],{style:a,key:"a",value:1},"Option A"),l["default"].createElement(c["default"],{style:a,key:"b",value:2},"Option B"),l["default"].createElement(c["default"],{style:a,key:"c",value:3},"Option C"),l["default"].createElement(c["default"],{style:a,key:"d",value:4},"More...",4===this.state.value?l["default"].createElement(o["default"],{style:{width:100,marginLeft:10}}):null))}});return l["default"].createElement(a,null)}}}});