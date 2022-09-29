import{_ as n,c as s,o as a,a as t}from"./app.d95e124d.js";const f='{"title":"node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F","slug":"node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F"}],"relativePath":"jiagou/\u81EA\u52A8\u751F\u6210\u6309\u9700\u5BFC\u51FA\u76EE\u5F55.md","lastUpdated":1664437294091}',p={},o=t(`<p>\u53C2\u8003\u65E5\u671Fjs\u5E93<a href="https://github.com/date-fns/date-fns/blob/master/src/index.ts" target="_blank" rel="noopener noreferrer">date-fns\u7684github</a> \u5BFC\u51FA\u7684\u5165\u53E3\u6587\u4EF6\u662F\u7531\u811A\u672C\u751F\u6210\u7684</p><p>\u5C01\u88C5\u5DE5\u5177\u5E93\u6216\u662F\u7EC4\u4EF6\u5E93\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8FFD\u6C42\u6309\u9700\u5BFC\u51FA\u6309\u9700\u5BFC\u5165\uFF0C\u652F\u6301tree-shaking\u7684esm\u6A21\u5F0F \u5173\u4E8Eesm\u5982\u4F55\u652F\u6301tree-shaking\uFF0C\u53E6\u5916\u8BB2TODO:</p><p>\u{1F447} \u5BFC\u51FA\u7684\u6587\u4EF6\u5185\u5BB9\u9700\u8981\u662F\u8FD9\u79CD\u8BED\u53E5</p><div class="language-js"><pre><code><span class="token comment">// This file is generated automatically by \`scripts/build/indices.ts\`. </span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./add/index&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> addBusinessDays <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./addBusinessDays/index&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> addDays <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./addDays/index&#39;</span>
<span class="token comment">// ...</span>
</code></pre></div><h2 id="node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F" tabindex="-1">node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F <a class="header-anchor" href="#node\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cts\uFF0C\u5982\u4F55\u5728node\u73AF\u5883\u4F7F\u7528ts\uFF1F" aria-hidden="true">#</a></h2><p>\u8BA9node\u76F4\u63A5\u8FD0\u884Cts</p><div class="language-ts"><pre><code><span class="token hashbang comment">#!/usr/bin/env yarn ts-node</span>

<span class="token comment">/**
 * @file
 * The script generates index files for submodules.
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> writeFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs/promises&#39;</span> <span class="token comment">//  TODO: node\u5185\u7F6E\u6A21\u5757promises\uFF1F</span>
<span class="token keyword">import</span> getFileList <span class="token keyword">from</span> <span class="token string">&#39;../_lib/getFileList&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">File</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span>
  fullPath<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F20\u5165\u76EE\u5F55\u4FE1\u606F\u751F\u6210\u6587\u4EF6\u5185\u5BB9</span>
<span class="token keyword">function</span> <span class="token function">generateIndex</span><span class="token punctuation">(</span>
  files<span class="token operator">:</span> File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6839\u636E\u76EE\u5F55\u4FE1\u606F\u5199\u5165js\u8BED\u53E5</span>
  <span class="token keyword">const</span> lines <span class="token operator">=</span> files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">export { default as </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> } from &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index&#39;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>

  <span class="token comment">// \u6DFB\u52A0\u6CE8\u91CA\u548C\u6362\u884C</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">// This file is generated automatically by \\\`scripts/build/indices.ts\\\`.

</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lines<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ACB\u5373\u6267\u884C\u51FD\u6570</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u751F\u6210\u76EE\u5F55\u4FE1\u606F</span>
  <span class="token keyword">const</span> fileList <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;src/index.ts&#39;</span><span class="token punctuation">,</span> <span class="token function">generateIndex</span><span class="token punctuation">(</span>fileList<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u{1F447} \u6839\u636Esrc\u6587\u4EF6\u5939\u751F\u6210\u76EE\u5F55\u4FE1\u606F</p><div class="language-js"><pre><code><span class="token comment">// lib/getFileList</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span> <span class="token comment">// promisify\u628Anode\u5185\u7F6E\u6A21\u5757\u65B9\u6CD5\u8F6C\u4E3Apromise...\u7528node\u540C\u6B65\u65B9\u6CD5\u4E0D\u5C31\u884C\u4E86\u5417..</span>

<span class="token keyword">const</span> exists <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>exists<span class="token punctuation">)</span>
<span class="token keyword">const</span> readDir <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>readdir<span class="token punctuation">)</span>

<span class="token keyword">const</span> ignorePattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^_|\\.</span><span class="token regex-delimiter">/</span></span> <span class="token comment">// can&#39;t start with \`_\` or have a \`.\` in it</span>
<span class="token keyword">const</span> ignoredDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;locale&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;constants&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> srcPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readDir</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">)</span>

  <span class="token comment">// \u6839\u636E\u76EE\u5F55\u751F\u6210\u8DEF\u5F84\u4FE1\u606F</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    files
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
        <span class="token comment">// \u8FC7\u6EE4\u5FFD\u7565\u76EE\u5F55</span>
        <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>ignorePattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>ignoredDirs<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B58\u5728ts\u5C31\u4F7F\u7528ts\uFF0C\u5426\u5219\u8F93\u5165js\u7684\u76EE\u5F55</span>
        <span class="token keyword">const</span> isTs <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> file<span class="token punctuation">,</span> <span class="token string">&#39;index.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> file<span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">fullPath</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./src/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>isTs <span class="token operator">?</span> <span class="token string">&#39;ts&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> getFileList
</code></pre></div><p>\u751F\u6210\u7EC4\u4EF6\u5E93\u76EE\u5F55\u540C\u7406\u5982\u{1F447} TODO:</p>`,10),e=[o];function c(l,i,u,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
