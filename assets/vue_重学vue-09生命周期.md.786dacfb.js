import{_ as n,c as s,o as a,a as t}from"./app.d95e124d.js";const f='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/\u91CD\u5B66vue-09\u751F\u547D\u5468\u671F.md","lastUpdated":1664437294106}',p={},o=t(`<blockquote><p>\u6709\u4E86\u7EC4\u4EF6\u7684\u57FA\u7840\uFF0C\u6211\u4EEC\u77E5\u9053\u6211\u4EEC\u7684UI\u5C31\u662F\u6709\u7EC4\u4EF6\u642D\u5EFA\u8D77\u6765\uFF0C\u7531\u4E00\u4E2A\u6839\u7EC4\u4EF6+\u5404\u79CD\u7EC4\u4EF6\u7EC4\u6210</p><p>\u6BCF\u4E2A\u7EC4\u4EF6\u4F1A\u6709\u81EA\u5DF1\u7684\u751F\u547D\u5468\u671F\uFF0C\u800C\u5404\u79CD\u7EC4\u4EF6\u7EC4\u5408\u8D77\u6765\u7684\u751F\u547D\u5468\u671F\u4F1A\u6709\u70B9\u7ED5\uFF0C\u6240\u4EE5\u8981\u6765\u634B\u4E00\u4E0B \u5982\u679C\u5199render\u51FD\u6570\u7684\u8BDD\uFF0C\u9700\u8981\u601D\u8003\u4E00\u4E0B\uFF0C\u8FD9\u4E2Arender\u51FD\u6570\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u89E6\u53D1\uFF0C\u5E73\u65F6\u5199template\u65F6\u5E76\u4E0D\u4F1A\u6CE8\u610F\u5230\u8FD9\u70B9 \u5B9E\u9645\u4E0A\u662F\u6574\u4E2A\u7EC4\u4EF6\u7684\u6570\u636E(prop\u3001data)\u53D1\u751F\u53D8\u5316\u90FD\u4F1A\u89E6\u53D1render\uFF0C\u4E5F\u5C31\u662Fupdate\u7684\u751F\u547D\u5468\u671F</p></blockquote><p>\u7236\u5B50\u9010\u6E10mounted\uFF0Cdestroy\u987A\u5E8F\uFF0C\u6211\u4EEC\u628A\u7EC4\u4EF6\u521B\u5EFA\u5F53\u6210\u4E00\u4E2A\u4E2A\u6570\u7EC4\u9879\uFF0C\u5E76\u4E14\u4F1A\u8FDB\u51FA\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u5C31\u662F\u6808 \u5148\u8FDB\u540E\u51FA</p><p>\u7236\u7EC4\u4EF6\u89E6\u53D1update\u751F\u547D\u5468\u671F(render)\uFF0C\u4F1A\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684update\u5417\uFF1F</p><p>react\u4F1A\uFF0C\u90A3\u4E48vue\u662F\u600E\u4E48\u505A\u5230\u7684\u5462</p><hr><p>\u77E5\u9053\u5404\u79CD\u751F\u547D\u5468\u671F\u7684\u4F5C\u7528\u4E4B\u540E\uFF0C\u6211\u4EEC\u53CD\u8FC7\u6765\u601D\u8003\u4E00\u4E0B\u751F\u547D\u5468\u671F\u7684\u672C\u8D28\u662F\u4EC0\u4E48 \u6211\u4EEC\u90FD\u77E5\u9053\u751F\u547D\u5468\u671F\u4E5F\u53EB\u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u7279\u5B9A\u65F6\u673A\u629B\u51FA\u6765\u8C03\u7528 \u8FD9\u4E48\u4E00\u60F3\uFF0C\u94A9\u5B50\u51FD\u6570\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u88AB\u653E\u51FA\u6765\u81EA\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570\u5427 \u6211\u4EEC\u7528js\u5B9E\u73B0\u4E00\u4E0B</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Vue</span><span class="token punctuation">{</span>
  <span class="token function">constor</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      config<span class="token punctuation">.</span><span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u94A9\u5B50\u51FD\u65701&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre></div>`,7),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{f as __pageData,m as default};
