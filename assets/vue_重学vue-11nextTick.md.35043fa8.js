import{_ as n,c as s,o as a,a as t}from"./app.d95e124d.js";const y='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/\u91CD\u5B66vue-11nextTick.md","lastUpdated":1664437294106}',p={},o=t(`<blockquote><p>\u6211\u4EEC\u64CD\u4F5Cref\uFF0C\u5C31\u8981\u770B\u770BnextTick</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">addText</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// 2 &#39;1&#39;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// 2 2</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;h1 @click=&quot;addText&quot;&gt;{{count}}&lt;/h1&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
