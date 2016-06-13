webpackJsonp([210,358],{601:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(38),s(37)),o=t(p),e=(s(6),s(5)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p",["code","1.0"]," \u4e4b\u540e\uff0cModal \u7684 ",["code","align"]," \u5c5e\u6027\u88ab\u79fb\u9664\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",["code","style.top"]," \u6216\u914d\u5408\u5176\u4ed6\u6837\u5f0f\u6765\u8bbe\u7f6e\u5bf9\u8bdd\u6846\u4f4d\u7f6e\u3002"]],meta:{order:7,title:"\u81ea\u5b9a\u4e49\u4f4d\u7f6e",filename:"components/modal/demo/position.md",id:"components-modal-demo-position"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      modal1Visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      modal2Visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >setModal1Visible</span><span class="token punctuation" >(</span>modal1Visible<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> modal1Visible <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >setModal2Visible</span><span class="token punctuation" >(</span>modal2Visible<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> modal2Visible <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal1Visible</span><span class="token punctuation" >(</span><span class="token boolean" >true</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u8ddd\u79bb\u9876\u90e8 20px \u7684\u5bf9\u8bdd\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8ddd\u79bb\u9876\u90e8</span> <span class="token attr-name" >20px</span> <span class="token attr-name" >\u7684\u5bf9\u8bdd\u6846"</span>\n          <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> top<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>modal1Visible<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onOk</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal1Visible</span><span class="token punctuation" >(</span><span class="token boolean" >false</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal1Visible</span><span class="token punctuation" >(</span><span class="token boolean" >false</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal2Visible</span><span class="token punctuation" >(</span><span class="token boolean" >true</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u5782\u76f4\u5c45\u4e2d\u7684\u5bf9\u8bdd\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5782\u76f4\u5c45\u4e2d\u7684\u5bf9\u8bdd\u6846<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >wrapClassName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>vertical-center-modal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>modal2Visible<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onOk</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal2Visible</span><span class="token punctuation" >(</span><span class="token boolean" >false</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setModal2Visible</span><span class="token punctuation" >(</span><span class="token boolean" >false</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"App",getInitialState:function(){return{modal1Visible:!1,modal2Visible:!1}},setModal1Visible:function(n){this.setState({modal1Visible:n})},setModal2Visible:function(n){this.setState({modal2Visible:n})},render:function(){var n=this;return u["default"].createElement("div",null,u["default"].createElement(c["default"],{type:"primary",onClick:function(){return n.setModal1Visible(!0)}},"\u663e\u793a\u8ddd\u79bb\u9876\u90e8 20px \u7684\u5bf9\u8bdd\u6846"),u["default"].createElement(o["default"],{title:"\u8ddd\u79bb\u9876\u90e8 20px \u7684\u5bf9\u8bdd\u6846",style:{top:20},visible:this.state.modal1Visible,onOk:function(){return n.setModal1Visible(!1)},onCancel:function(){return n.setModal1Visible(!1)}},u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9"),u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9"),u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9")),u["default"].createElement(c["default"],{type:"primary",onClick:function(){return n.setModal2Visible(!0)}},"\u663e\u793a\u5782\u76f4\u5c45\u4e2d\u7684\u5bf9\u8bdd\u6846"),u["default"].createElement(o["default"],{title:"\u5782\u76f4\u5c45\u4e2d\u7684\u5bf9\u8bdd\u6846",wrapClassName:"vertical-center-modal",visible:this.state.modal2Visible,onOk:function(){return n.setModal2Visible(!1)},onCancel:function(){return n.setModal2Visible(!1)}},u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9"),u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9"),u["default"].createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9")))}});return u["default"].createElement(n,null)},style:"/* \u4f7f\u7528 css \u6280\u5de7\u6765\u52a8\u6001\u8bbe\u7f6e\u7684\u5bf9\u8bdd\u6846\u4f4d\u7f6e */\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vertical-center-modal .ant-modal {\n  top: 0;\n}",highlightedStyle:'<span class="token comment" spellcheck="true">/* \u4f7f\u7528 css \u6280\u5de7\u6765\u52a8\u6001\u8bbe\u7f6e\u7684\u5bf9\u8bdd\u6846\u4f4d\u7f6e */</span>\n<span class="token selector" ><span class="token class" >.vertical-center-modal</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >justify-content</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.vertical-center-modal</span> <span class="token class" >.ant-modal</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >top</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});