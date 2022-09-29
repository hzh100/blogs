import{_ as n,c as s,o as a,a as p}from"./app.d95e124d.js";const y='{"title":"umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs","description":"","frontmatter":{},"headers":[{"level":2,"title":"umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs","slug":"umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs"},{"level":2,"title":"umd-\u624B\u52A8\u6309\u9700\u52A0\u8F7D","slug":"umd-\u624B\u52A8\u6309\u9700\u52A0\u8F7D"},{"level":2,"title":"ESM-\u7EC4\u4EF6\u5E93\u6253\u5305\u7EAFjs","slug":"esm-\u7EC4\u4EF6\u5E93\u6253\u5305\u7EAFjs"},{"level":2,"title":"excemple","slug":"excemple"}],"relativePath":"jiagou/\u642D\u5EFA\u7EC4\u4EF6\u5E93.md","lastUpdated":1664421231355}',t={},o=p(`<p>\u4E0D\u540C\u4E8Ejs\u5E93\u7684\u6253\u5305\u642D\u5EFA \u7EC4\u4EF6\u5E93\u8FD8\u9700\u8981\u6253\u5305\u51FAcss\uFF0C\u56E0\u6B64\u5355\u72EC\u8BB2</p><p>\u7EC4\u4EF6\u5E93\u5BF9\u5916\u662F\u7F16\u8BD1\u540E(\u5916\u90E8\u5E94\u7528\u914D\u7F6Eloader\u4E0D\u7F16\u8BD1)\u8FD8\u662F\u7F16\u8BD1\u524D(\u8DDF\u5916\u90E8\u5E94\u7528\u4E00\u8D77\u7F16\u8BD1)</p><p>\u5982\u679C\u662F\u7F16\u8BD1\u540E\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u8131\u79BB\u6280\u672F\u6808\u5417\uFF1F</p><p>\u6211\u4EEC\u5148\u6765\u5927\u6982\u770B\u4E00\u4E0B\u5E02\u9762\u4E0A\u7EC4\u4EF6\u5E93\u642D\u5EFA\u7684\u65B9\u5F0F</p><h2 id="umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs" tabindex="-1">umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs <a class="header-anchor" href="#umd-\u7EC4\u4EF6\u5E93\u6253\u5305\u4EA7\u7269\u662F\u7EAFjs" aria-hidden="true">#</a></h2><ol><li>\u6253\u5305\u7EC4\u4EF6\u5E93\u4E0D\u62BD\u79BBcss\uFF0C\u901A\u8FC7js\u52A8\u6001\u63D2\u5165css\uFF0C\u7EC4\u4EF6\u5E93\u4EA7\u7269\u4F1A\u662Fjs \u7EC4\u4EF6\u5E93\u5165\u53E3\u6587\u4EF6</li></ol><div class="language-js"><pre><code><span class="token comment">//  src/index.js</span>
<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&quot;./components/Hello.vue&quot;</span>

<span class="token comment">// \u5916\u90E8\u7684Vue.use(MyLib)\u4F1A\u6267\u884C\u8BE5\u65B9\u6CD5\uFF0C\u5B8C\u6210\u7EC4\u4EF6\u7684\u5168\u5C40\u6CE8\u518C\u3002</span>
<span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Hello<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Hello<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u8FC7\`script\`\u6807\u7B7E\u5F15\u5165\u7684\u60C5\u51B5\uFF0C\u5728\u7EC4\u4EF6\u5185\u90E8\u5B8C\u6210\u7EC4\u4EF6\u6CE8\u518C\u3002</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>window <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> install
</code></pre></div><p>\u{1F446} \u6253\u5305\u6210umd\u540E \u652F\u6301</p><ol><li>webpack \u5DE5\u7A0B <code>import</code> \u5E76 <code>vue.use()</code></li><li>html\u76F4\u63A5 <code>&lt;script src=&quot;&quot;&gt;</code></li></ol><p>\u{1F446} \u8FD9\u79CD\u53EA\u6253\u5305js\u7684\u5F62\u5F0F\u5176\u5B9E\u548C\u6253\u5305\u666E\u901Ajs\u5DE5\u5177\u5E93\u4E00\u6837\uFF0C\u4E0D\u8FC7\u662F\u6253\u5305\u914D\u7F6E\u9700\u8981\u652F\u6301css\u548Cvue</p><p>webpack.config.js</p><div class="language-js"><pre><code><span class="token comment">//webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;/dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-ui.js&#39;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u7528\u5230\u7684\u6A21\u5757\u5B9A\u4E49\u89C4\u8303</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;myUi&#39;</span><span class="token punctuation">,</span>   <span class="token comment">//\u5E93\u7684\u540D\u5B57</span>
    <span class="token literal-property property">libraryExport</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externals</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u6709\u5F53libraryTarget: &#39;umd&#39;\u65F6\uFF0C\u624D\u53EF\u4EE5\u914D\u7F6E\u5982\u4E0A\u90A3\u6837\u7684\u5305\u542B { root, amd, commonjs\uFF0C... } \u7684\u5BF9\u8C61\uFF0C\u5176\u5B83\u7684libraryTarget\u7684\u503C\u4E0D\u80FD\u8FD9\u6837\u914D\u7F6E\u3002</span>
    <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>   <span class="token comment">//\u901A\u8FC7 script \u6807\u7B7E\u5F15\u5165\uFF0C\u6B64\u65F6\u5168\u5C40\u53D8\u91CF\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u7684\u662F Vue</span>
      <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u53EF\u4EE5\u5C06vue\u4F5C\u4E3A\u4E00\u4E2A CommonJS \u6A21\u5757\u8BBF\u95EE</span>
      <span class="token literal-property property">commonjs2</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u548C\u4E0A\u9762\u7684\u7C7B\u4F3C\uFF0C\u4F46\u5BFC\u51FA\u7684\u662F module.exports.default</span>
      <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span>   <span class="token comment">//\u7C7B\u4F3C\u4E8E commonjs\uFF0C\u4F46\u4F7F\u7528 AMD \u6A21\u5757\u7CFB\u7EDF</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u7EC4\u4EF6\u5E93\u548C\u5F15\u7528\u65B9\u5171\u540C\u7684\u5916\u90E8\u8D44\u6E90\u5E93\uFF0C\u7531\u5F15\u7528\u65B9\u63D0\u4F9B\uFF0C\u7EC4\u4EF6\u5E93\u4E0D\u6253\u5305\u8FDB\u53BB\uFF0C\u5982vue\u3001lodash</p><p>\u6253\u5305\u7ED3\u679C\u4F1A\u662Fumd\u7684\u7ED3\u6784\uFF0C\u53C2\u8003<a href="./\u4ECE0\u52301\u6784\u5EFA\u7B26\u5408\u6807\u51C6\u7684\u516C\u5171\u5E93.html">\u4ECE0\u52301\u6784\u5EFA\u7B26\u5408\u6807\u51C6\u7684\u516C\u5171\u5E93</a></p><div class="language-js"><pre><code><span class="token comment">//\u5B98\u65B9\u793A\u4F8B\u3002 &#39;MyUi&#39;\u5C31\u662Flibrary\u4E2D\u5B9A\u4E49\u7684\u5E93\u540D\u79F0\uFF0C \u5BF9\u5E94\u6211\u4EEC\u81EA\u5DF1demo\u4E2D\u7684myUi\u3002</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">webpackUniversalModuleDefinition</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> module <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// Commonjs</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
  <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span>
  <span class="token comment">// AMD</span>
    <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>           
  <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// ESM???</span>
    exports<span class="token punctuation">[</span><span class="token string">&#39;MyUi&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">else</span>
  <span class="token comment">// window</span>
    root<span class="token punctuation">[</span><span class="token string">&#39;MyUi&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">?</span> self <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> _entry_return_<span class="token punctuation">;</span> <span class="token comment">// \u6B64\u6A21\u5757\u8FD4\u56DE\u503C\uFF0C\u662F\u5165\u53E3 chunk \u8FD4\u56DE\u7684\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="umd-\u624B\u52A8\u6309\u9700\u52A0\u8F7D" tabindex="-1">umd-\u624B\u52A8\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#umd-\u624B\u52A8\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h2><p>\u5BFC\u51FA\u6587\u4EF6\u4E5F\u662F\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u4E00\u70B9\u90FD\u4E0D\u7B26\u5408es6 \u6A21\u5757\u5316\u65B9\u5F0F\u3002\u6309\u7167\u4E0A\u9762\u90A3\u6837\u7684\u914D\u7F6E\u662F\u6CA1\u6709\u529E\u6CD5\u6309\u9700\u52A0\u8F7D\u7684\u3002</p><p>\u6709\u5F88\u591A\u5E93\u4E3A\u4E86\u6309\u9700\u5F15\u7528\uFF0C\u628A\u6253\u5305\u811A\u672C\u505A\u6210\u591A\u5165\u53E3\u6253\u5305\u7684\u5F62\u5F0F\uFF0C\u5B9E\u73B0\u5355\u4E2A\u7EC4\u4EF6\u4E00\u4EFDjs\uFF0C\u7136\u540E\u901A\u8FC7\u6587\u4EF6\u8DEF\u5F84\u8FDB\u884C\u5F15\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;echarts/lib/chart/pie&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;echarts/lib/component/title&#39;</span>
</code></pre></div><p>\u8FD9\u6837\u5199\u4E0D\u80FD\u4E00\u6B21\u5F15\u5165\u591A\u4E2A\u7EC4\u4EF6\uFF0C\u4E5F\u4E0D\u591F\u4F18\u96C5\u3002element-ui\u5C31\u4E13\u95E8\u5F00\u53D1\u4E86babel\u63D2\u4EF6babel-plugin-component\uFF0C\u4F7F\u6211\u4EEC\u80FD\u50CF\u4E0B\u9762\u8FD9\u6837\u6309\u9700\u5F15\u5165\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Select<span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&#39;hello&#39;</span><span class="token operator">:</span> <span class="token string">&#39;./src/components/Hello/index.js&#39;</span><span class="token punctuation">,</span>
   <span class="token string-property property">&#39;test&#39;</span><span class="token operator">:</span> <span class="token string">&#39;./src/components/Test/index.js&#39;</span><span class="token punctuation">,</span>
   <span class="token string-property property">&#39;my-ui&#39;</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;/lib&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryExport</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externals</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u6709\u5F53libraryTarget: &#39;umd&#39;\u65F6\uFF0C\u624D\u53EF\u4EE5\u914D\u7F6E\u5982\u4E0A\u90A3\u6837\u7684\u5305\u542B { root, amd, commonjs\uFF0C... } \u7684\u5BF9\u8C61\uFF0C\u5176\u5B83\u7684libraryTarget\u7684\u503C\u4E0D\u80FD\u8FD9\u6837\u914D\u7F6E\u3002</span>
    <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>   <span class="token comment">//\u901A\u8FC7 script \u6807\u7B7E\u5F15\u5165\uFF0C\u6B64\u65F6\u5168\u5C40\u53D8\u91CF\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u7684\u662F Vue</span>
      <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u53EF\u4EE5\u5C06vue\u4F5C\u4E3A\u4E00\u4E2A CommonJS \u6A21\u5757\u8BBF\u95EE</span>
      <span class="token literal-property property">commonjs2</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u548C\u4E0A\u9762\u7684\u7C7B\u4F3C\uFF0C\u4F46\u5BFC\u51FA\u7684\u662F module.exports.default</span>
      <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span>   <span class="token comment">//\u7C7B\u4F3C\u4E8E commonjs\uFF0C\u4F46\u4F7F\u7528 AMD \u6A21\u5757\u7CFB\u7EDF</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>webpack\u62BD\u79BBcss <code>style-loader</code> \u66FF\u6362\u4E3A <code>mini-css-extract-plugin</code><img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220828222715.png" alt="webpack\u62BD\u79BBcss"></p><p>\u914D\u7F6E\u793A\u4F8B\u5DE5\u7A0B\u7684babel</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-ui&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;styleLibrary&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib-style&quot;</span><span class="token punctuation">,</span> <span class="token comment">// same with styleLibraryName</span>
          <span class="token string-property property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// if theme package has a base.css</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="esm-\u7EC4\u4EF6\u5E93\u6253\u5305\u7EAFjs" tabindex="-1">ESM-\u7EC4\u4EF6\u5E93\u6253\u5305\u7EAFjs <a class="header-anchor" href="#esm-\u7EC4\u4EF6\u5E93\u6253\u5305\u7EAFjs" aria-hidden="true">#</a></h2><p>\u4F7F\u7528rollup <a href="https://segmentfault.com/a/1190000042001908?utm_source=sf-backlinks" target="_blank" rel="noopener noreferrer">rollup\u4ECE\u5165\u95E8\u5230\u6253\u5305\u4E00\u4E2A\u6309\u9700\u52A0\u8F7D\u7684\u7EC4\u4EF6\u5E93</a></p><p>rollup.config.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-babel&#39;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-commonjs&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-vue&#39;</span>
<span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">&#39;autoprefixer&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E00\u4E2A\u5165\u53E3\u6253\u5305\u51FA\u591A\u79CD\u4EA7\u7269</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// umd\u4EA7\u7269</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;./dist/my-lib-umd.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;myLib&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// esm\u4EA7\u7269</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;./dist/my-lib-es.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// cjs\u4EA7\u7269</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;./dist/my-lib-cjs.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;node_modules/**&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// vue\u7F16\u8BD1\u914D\u7F6E</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">postcssPlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// TODO: css\u62BD\u79BB\u914D\u7F6E</span>
    <span class="token comment">// rollup\u81EA\u8EAB\u4E0D\u652F\u6301cjs\u8BED\u6CD5(\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u5C3D\u91CF\u4E0D\u4F7F\u7528cjs\uFF0C\u5916\u90E8\u5E93\u5219\u6CA1\u529E\u6CD5)\uFF0C\u9700\u8981\u63D2\u4EF6\u652F\u6301</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//\u5916\u90E8\u5E93\uFF0C \u4F7F\u7528&#39;umd&#39;\u6587\u4EF6\u65F6\u9700\u8981\u5148\u5F15\u5165\u8FD9\u4E2A\u5916\u90E8\u5E93</span>
    <span class="token string">&#39;vue&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>package.json</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/my-lib-cjs.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/my-lib-es.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="excemple" tabindex="-1">excemple <a class="header-anchor" href="#excemple" aria-hidden="true">#</a></h2><p>\u5199\u793A\u4F8B\u8C03\u8BD5\u9875\u9762\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7npm link\u6765\u76F4\u63A5\u5F15\u5165\u8D44\u6E90\uFF0C\u800C\u4E0D\u9700\u8981\u5148\u5199\u6210<code>./dist/xx</code></p><p>\u9996\u5148\u5728\u7EC4\u4EF6\u5E93 <code>package.json</code>(\u914D\u7F6E\u597Dmain\u6307\u5411\u6253\u5305\u540E\u8DEF\u5F84) \u76EE\u5F55\u4E0B\u521D\u59CB\u5316link <code>npm link</code></p><p>\u518D\u518Dexcemle\u5DE5\u7A0B\u4E0B <code>npm link my-ui</code> package.json\u4E2D\u5B9A\u4E49\u7684&quot;name&quot;: &quot;my-lib&quot;</p><p>\u70ED\u66F4\u65B0\u95EE\u9898\uFF0C\u5F15\u5165\u7684\u90FD\u662F\u6253\u5305\u540E\u7684\u5E93\uFF0C\u4FEE\u6539\u6E90\u7801\u4E0D\u4F1A\u5B9E\u65F6\u7F16\u8BD1\uFF0C\u56E0\u6B64\u6CA1\u6709\u70ED\u66F4\u65B0\u6548\u679C</p>`,36),e=[o];function c(l,r,u,k,i,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{y as __pageData,g as default};
