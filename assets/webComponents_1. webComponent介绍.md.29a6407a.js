import{_ as n,c as s,o as a,a as t}from"./app.d95e124d.js";const m='{"title":"\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6Web Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6Web Components","slug":"\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6web-components"},{"level":2,"title":"web Components\u4F18\u70B9","slug":"web-components\u4F18\u70B9"},{"level":2,"title":"Web Components \u793A\u4F8B","slug":"web-components-\u793A\u4F8B"},{"level":2,"title":"HTML Imports(\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03)","slug":"html-imports-\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03"}],"relativePath":"webComponents/1. webComponent\u4ECB\u7ECD.md","lastUpdated":1664437294106}',p={},o=t(`<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components - MDN</a></p><h2 id="\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6web-components" tabindex="-1">\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6Web Components <a class="header-anchor" href="#\u6846\u67B6\u7EC4\u4EF6\u4E0E\u539F\u751F\u7EC4\u4EF6web-components" aria-hidden="true">#</a></h2><p>\u4E0D\u4F7F\u7528\u524D\u7AEF\u6846\u67B6\uFF0C\u6211\u4EEC\u9700\u8981\u9762\u4E34\u7F3A\u5C11</p><ul><li>\u826F\u597D\u7684\u751F\u6001</li><li>\u6570\u636E\u9A71\u52A8\u89C6\u56FE</li><li>\u6A21\u5757\u5316</li><li>\u7EC4\u4EF6\u5316</li><li>\u7B49\u7B49\u7684\u95EE\u9898</li></ul><p>\u4F46\u662F\u5B98\u65B9\u73B0\u5728\u5176\u5B9E\u5DF2\u7ECF\u652F\u6301\u539F\u751F\u7684\u6A21\u5757\u5316\u4E86 <code>ES Module</code> \u800C\u7EC4\u4EF6\u5316\uFF0C\u5B98\u65B9\u4E5F\u63A8\u51FA\u4E86 <code>Web Components</code></p><p>\u6211\u4EEC\u518D\u6765\u770B\u770B\u6846\u67B6\u91CC\u7684\u7EC4\u4EF6\u5316 \u5982 <code>vue</code> \u652F\u6301\u6211\u4EEC\u5F00\u53D1\u8FC7\u7A0B\u7F16\u5199 <code>&lt;my-button&gt;</code> \u7684\u6807\u7B7E\uFF0C\u5BF9\u5E94\u8FD9\u4E00\u4E2AUI\u7EC4\u4EF6 \u4F46\u662F\u5728\u8FD0\u884C\u65F6\u8FD9\u4E2A <code>&lt;my-button&gt;</code> \u662F\u6253\u5305\u540E\u88AB\u7F16\u8BD1\u6210\u666E\u901A\u7684 <code>&lt;div&gt;</code> \u6807\u7B7E\u6765\u6E32\u67D3\u7684</p><p>\u800C\u539F\u751F\u7684 <code>Web Components</code> \u5219\u662F\u6D4F\u89C8\u5668\u5728\u8FD0\u884C\u65F6\u771F\u6B63\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u7684 <code>&lt;my-button&gt;</code> \u6765\u8FDB\u884C\u6E32\u67D3\u7684</p><hr><blockquote><p>\u601D\u80031\u{1F914}\uFF1A</p><p>\u6846\u67B6\u4E2D\u7684\u7EC4\u4EF6\u88AB\u7F16\u8BD1\u6210div\u8BA9\u6D4F\u89C8\u5668\u8FD0\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7C7B\u6BD4\u5176\u4ED6\u7684\u573A\u666F</p><p>\u5982\uFF1A <em>css\u9884\u5904\u7406\u5668</em> (<code>scss</code>\u3001<code>less</code>)\uFF0C\u91CC\u7684\u53D8\u91CF\u7684\u6982\u5FF5\uFF0C\u662F\u901A\u8FC7\u7F16\u8BD1\u65F6\u628A\u771F\u5B9E\u53D8\u91CF\u503C\u66FF\u6362\u5230\u53D8\u91CF\u5F15\u7528\u7684\u5730\u65B9\uFF0C\u5230\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\u662F\u771F\u6B63\u7684\u503C\u800C\u4E0D\u662F\u53D8\u91CF \u800Ccss\u539F\u751F\u540E\u6765\u63A8\u51FA\u7684\u53D8\u91CF\u624D\u662F\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\u771F\u6B63\u7684\u53D8\u91CF</p></blockquote><blockquote><p><code>css\u9884\u5904\u7406\u5668\u53D8\u91CF</code>\u4E0E<code>\u539F\u751Fcss\u53D8\u91CF</code>\u7684\u533A\u522B:</p><ul><li><code>scss</code>\u7B49\u9884\u5904\u7406\u5668\u7684\u53D8\u91CF\u901A\u8FC7\u7F16\u8BD1\u5B9E\u73B0\u7684\u539F\u7406\uFF0C\u5BFC\u81F4\u6211\u4EEC\u5E76\u4E0D\u80FD\u5728\u8FD0\u884C\u65F6\u6D4F\u89C8\u5668js\u4E2D\u64CD\u4F5C <code>scss</code> \u7684\u53D8\u91CF</li><li>\u7F16\u8BD1\u540E\u7684scss\u53D8\u91CF\u5C31\u4E0D\u518D\u662F\u53D8\u91CF\u4E86</li><li>\u800C\u539F\u751Fcss\u53D8\u91CF\uFF0C\u53EF\u4EE5\u88AB\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\u7684js\u64CD\u4F5C\uFF0C\u5E76\u4E14\u5F15\u7528\u7684\u5730\u65B9\u5C31\u80FD\u66F4\u65B0\u53D8\u91CF\u503C</li></ul></blockquote><hr><blockquote><p>\u601D\u80032\u{1F914}\uFF1A \u539F\u751F\u5438\u6536\u6846\u67B6\u7684\u8BBE\u8BA1\u662F\u5F88\u5E38\u89C1\u7684\u60C5\u51B5 \u5982 <code>jQuery</code> \u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00\u5FEB\u6377\u9009\u62E9dom\u7684 <code>$()</code>\uFF0C\u88AB\u5B98\u65B9\u7684<code>querySelector()</code>\u548C<code>querySelectorAll()</code>\u6240\u66FF\u4EE3</p></blockquote><blockquote><p><code>vue</code> \u548C <code>react</code> \uFF0C\u76EE\u524D\u5B98\u65B9\u6587\u6863\u4E2D\u90FD\u6709\u4F7F\u7528 <code>Web Components</code> \u7684\u4ECB\u7ECD \u6BD5\u7ADF\u6846\u67B6\u63D0\u4F9B\u7684<code>\u6570\u636E\u9A71\u52A8\u89C6\u56FE</code>\u548C<code>\u7EC4\u4EF6\u901A\u4FE1</code>\u548C<code>\u590D\u6742\u903B\u8F91</code>\u548C<code>\u590D\u7528</code>\uFF0C\u7528\u6765\u5F00\u53D1\u7EC4\u4EF6\u624D\u662F\u66F4\u65B9\u4FBF\u7684\uFF0C\u6240\u4EE5\u53EA\u7528 <code>Web Components</code> \u6765\u4E00\u628A\u68AD\u54C8\uFF0C\u8FD8\u662F\u4E0D\u65B9\u4FBF \u76F8\u53CD\uFF0C\u914D\u5408\u7740\u6846\u67B6\u4F7F\u7528\u8FBE\u5230\u4E92\u8865\u7684\u6548\u679C\u624D\u662F\u76EE\u524D\u6700\u9999\u7684</p></blockquote><hr><h2 id="web-components\u4F18\u70B9" tabindex="-1">web Components\u4F18\u70B9 <a class="header-anchor" href="#web-components\u4F18\u70B9" aria-hidden="true">#</a></h2><p>\u800C\u539F\u751F\u7EC4\u4EF6\u5316\u6700\u5927\u7684\u597D\u5904\u5728\u4E8E\u5B83\u662F\u8131\u79BB\u6846\u67B6\u7684\uFF0C\u5373\u539F\u751F\u7EC4\u4EF6\u5373\u53EF\u5728 <code>vue</code> \u4E2D\u4F7F\u7528\u4E5F\u53EF\u4EE5\u5728 <code>react</code> \u4E2D\u4F7F\u7528</p><p><a href="https://zhuanlan.zhihu.com/p/475779606" target="_blank" rel="noopener noreferrer">web components \u5B8C\u6574\u4F18\u70B9 -\u963F\u91CC\u5DF4\u5DF4\u5927\u6DD8\u5B9D\u6280\u672F</a></p><p>\u4ECE\u4F5C\u7528\u4E0A\u770B\uFF0C\u662F\u7EC4\u4EF6</p><p>\u4ECE\u7279\u6027\u4E0A\u770B\uFF0C\u50CFiframe</p><h2 id="web-components-\u793A\u4F8B" tabindex="-1">Web Components \u793A\u4F8B <a class="header-anchor" href="#web-components-\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>open-shadow</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>I have an open shadow root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>open-shadow</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;open-shadow&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">class</span> <span class="token class-name">extends</span> HTMLElement <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> pElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      pElem<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> shadowRoot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;open&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      shadowRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>pElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9664\u4E86\u7528js\u6765\u521B\u5EFA <code>Web Components</code>\uFF0C\u8FD8\u53EF\u4EE5\u7528<code>html</code>\u6765\u521B\u5EFA\uFF0C\u8FD9\u6837\u7684\u5199\u6CD5\u4F1A\u8DDF <code>vue</code> \u7684 <a href="https://vuejs.org/api/sfc-spec.html" target="_blank" rel="noopener noreferrer">SFC</a> \u6587\u4EF6\u975E\u5E38\u76F8\u50CF \u5982\u{1F447}</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>import<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-p</span><span class="token punctuation">&gt;</span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span>currentScript<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>content

customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;my-p&#39;</span><span class="token punctuation">,</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> HTMLElement <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;open&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u{1F446} \u53EF\u4EE5\u770B\u5230\u8FD9\u4E2Ahtml\u6587\u4EF6\u548Cvue2\u7684\u5199\u6CD5\u5F88\u50CF\uFF0C\u4F46\u662Fstyle\u6807\u7B7E\u6CA1\u6709\u751F\u6548(FIXME: )\uFF0C\u53EF\u80FD\u5E9F\u5F03\u4E86\uFF1F</p><p>\u8FD9\u91CC\u7684 <code>Web Components</code> \u5E76\u4E0D\u662F\u4E00\u79CD<strong>\u5355\u4E00\u7684\u6280\u672F</strong>\uFF0C\u800C\u662F<strong>4\u79CD\u6280\u672F</strong></p><ul><li><code>HTML Imports</code> (\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03)</li><li><code>HTML templates</code></li><li><code>Custom Elements</code></li><li><code>Shadow DOM</code></li></ul><h2 id="html-imports-\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03" tabindex="-1">HTML Imports(\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03) <a class="header-anchor" href="#html-imports-\u8C37\u6B4C79\u4EE5\u4E0A\u5E9F\u5F03" aria-hidden="true">#</a></h2><p><code>&lt;link rel=&quot;import&quot; href=&quot;xxx.html&quot;&gt;</code> \u5176\u5B9E\u662F\u4E00\u79CDhtml\u7684\u6A21\u5757\u5316</p>`,30),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
