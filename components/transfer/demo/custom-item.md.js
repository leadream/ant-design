webpackJsonp([67,358],{746:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(115),a(114)),o=t(p),c=(a(9),a(7)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u4e00\u4e2a Transfer Item\uff0c\u53ef\u7528\u4e8e\u6e32\u67d3\u590d\u6742\u6570\u636e\u3002"]],meta:{order:3,title:"\u81ea\u5b9a\u4e49\u6e32\u67d3\u884c\u6570\u636e",filename:"components/transfer/demo/custom-item.md",id:"components-transfer-demo-custom-item"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Transfer<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      mockData<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      targetKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> targetKeys <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> mockData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >20</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n        title<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u7684\u63cf\u8ff0`</span></span><span class="token punctuation" >,</span>\n        chosen<span class="token punctuation" >:</span> Math<span class="token punctuation" >.</span><span class="token function" >random</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >*</span> <span class="token number" >2</span> <span class="token operator" >></span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>chosen<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        targetKeys<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      mockData<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> mockData<span class="token punctuation" >,</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>targetKeys<span class="token punctuation" >,</span> direction<span class="token punctuation" >,</span> moveKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>targetKeys<span class="token punctuation" >,</span> direction<span class="token punctuation" >,</span> moveKeys<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >renderItem</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> customLabel <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>custom-item<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#5FBC29\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apple<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> <span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span> <span class="token operator" >-</span> <span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>android<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      label<span class="token punctuation" >:</span> customLabel<span class="token punctuation" >,</span>  <span class="token comment" spellcheck="true">// for displayed item</span>\n      value<span class="token punctuation" >:</span> item<span class="token punctuation" >.</span>title<span class="token punctuation" >,</span>   <span class="token comment" spellcheck="true">// for title and filter matching</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Transfer</span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mockData<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >listStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n          width<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span>\n          height<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >targetKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>targetKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>renderItem<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"App",getInitialState:function(){return{mockData:[],targetKeys:[]}},componentDidMount:function(){this.getMock()},getMock:function(){for(var n=[],s=[],a=0;20>a;a++){var t={key:a,title:"\u5185\u5bb9"+(a+1),description:"\u5185\u5bb9"+(a+1)+"\u7684\u63cf\u8ff0",chosen:2*Math.random()>1};t.chosen&&n.push(t.key),s.push(t)}this.setState({mockData:s,targetKeys:n})},handleChange:function(n,s,a){console.log(n,s,a),this.setState({targetKeys:n})},renderItem:function(n){var s=l["default"].createElement("div",{className:"custom-item",style:{color:"#5FBC29"}},l["default"].createElement(e["default"],{type:"apple"})," ",n.title," - ",n.description," ",l["default"].createElement(e["default"],{type:"android"}));return{label:s,value:n.title}},render:function(){return l["default"].createElement(o["default"],{dataSource:this.state.mockData,listStyle:{width:300,height:300},targetKeys:this.state.targetKeys,onChange:this.handleChange,render:this.renderItem})}});return l["default"].createElement(n,null)}}}});