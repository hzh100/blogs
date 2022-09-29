import{_ as a,c as e,o as s,a as n}from"./app.d95e124d.js";const u='{"title":"\u6240\u6709\u5728 packages/  \u5B50\u76EE\u5F55\u4E0B\u7684 package","description":"","frontmatter":{},"headers":[],"relativePath":"jiagou/monorepo.md","lastUpdated":1664421231352}',p={},o=n(`<p>monorepo \u662F\u4EE3\u7801\u7BA1\u7406\u65B9\u5F0F\u7684\u4E00\u79CD\uFF0C\u548C\u6211\u4EEC\u73B0\u5728\u5E38\u7528\u7684\u591A\u4ED3\u5E93\u7BA1\u7406\u4E00\u6837</p><p>\u6BD4\u5982\u591A\u4E2A\u524D\u7AEF\u5DE5\u7A0B\u9700\u8981\u5171\u7528\u4E00\u5957\u516C\u5171\u7EC4\u4EF6\u5E93\uFF0C\u5C31\u4F1A\u628A\u516C\u5171\u7EC4\u4EF6\u5E93\u5355\u72EC\u4F5C\u4E3A\u4E00\u4E2A\u4ED3\u5E93\u7BA1\u7406\uFF0C\u5E76\u901A\u8FC7npm\u79C1\u6709\u5E93\u53D1\u5E03\u5171\u7528</p><p>\u4F7F\u7528 pnpm \u81EA\u5E26\u7684 workspace \u5B9E\u73B0 monorepo \u5373\u53EF</p><p>\u628A\u4EE5\u524D\u4E00\u4E2A\u524D\u7AEF\u5DE5\u7A0B\u7684\u601D\u7EF4\u8F6C\u53D8\u8FC7\u6765 \u5982\u4E00\u4E2A\u524D\u7AEF\u5DE5\u7A0B\u5305\u62EC\u4E1A\u52A1\u9875\u9762\u7EC4\u4EF6\u3001\u516C\u5171\u4E1A\u52A1\u7EC4\u4EF6\u3001\u516C\u5171\u57FA\u7840\u7EC4\u4EF6\u3001\u516C\u5171\u65B9\u6CD5 \u8FD9\u4E9B\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u5C0Fpackage\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5355\u72EC\u6253\u5305\u653E\u5230\u522B\u7684\u5730\u65B9\u7528</p><p>\u5F53\u51FA\u73B0\u591A\u4E2A\u524D\u7AEF\u5DE5\u7A0B\u65F6\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E86</p><p>\u6240\u4EE5\u4EE5\u540E\u7684demo\u5DE5\u7A0B\u4E5F\u53EF\u4EE5\u76F4\u63A5 monorepo \u7BA1\u7406\uFF0C\u867D\u7136\u6CA1\u6709\u591A\u4E2A\u5DE5\u7A0B\u4F53\u73B0\u4E0D\u51FA\u6765\u4F5C\u7528 \u6BD4\u5982vue\u56E2\u961F\u7684 SFC\u3001router\u3001pinal \u5C31\u4ECEvue\u6846\u67B6\u72EC\u7ACB\u51FA\u6765\u4E86</p><p>\u56E0\u6B64\u8FD9\u91CC\u63CF\u8FF0\u4E00\u4E0B\u521B\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u7684\u6B65\u9AA4</p><ol><li>\u65B0\u5EFA\u76EE\u5F55 anBoom</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> init -y
</code></pre></div><ol start="2"><li><p>\u65B0\u5EFA\u76EE\u5F55 anBoom/packages</p></li><li><p>\u65B0\u5EFA workspace \u914D\u7F6E\u6587\u4EF6 pnpm-workspace.yaml</p></li></ol><div class="language-bash"><pre><code>packages:
  <span class="token comment"># \u6240\u6709\u5728 packages/  \u5B50\u76EE\u5F55\u4E0B\u7684 package</span>
  - <span class="token string">&#39;packages/**&#39;</span>
  <span class="token comment"># \u4E0D\u5305\u62EC\u5728 test \u6587\u4EF6\u5939\u4E0B\u7684 package</span>
  - <span class="token string">&#39;!**/test/**&#39;</span>
</code></pre></div><ol start="4"><li>\u521B\u5EFA node \u811A\u672C, \u4E00\u952E\u521B\u5EFA\u5B50\u5305</li></ol><div class="language-mjs"><pre><code>import { promises } from &#39;fs&#39;
import path from &#39;path&#39;
import util from &#39;util&#39;
import { exec } from &#39;child_process&#39;

const execAsync = util.promisify(exec)
const [prefix, dirString] = process.argv[2].split(&#39;.&#39;)
let dirs = dirString.split(&#39;|&#39;)
const pkg = &#39;packages&#39;

;(async () =&gt; {
  await promises.mkdir(pkg)
  dirs.forEach(async (i) =&gt; {
     const absPath = path.resolve(pkg, i)
     await promises.mkdir(absPath)
     const packageJson = path.resolve(absPath, &#39;package.json&#39;)
     await execAsync(&#39;pnpm init&#39;, { cwd: absPath })
     let file = await promises.readFile(packageJson, { encoding: &#39;utf-8&#39; })
     const fileJson = JSON.parse(file)
     fileJson.name = \`\${prefix}/\${fileJson.name}\`
     await promises.writeFile(packageJson, JSON.stringify(fileJson, null, 4))
  })
})()
</code></pre></div><ol start="5"><li>\u6267\u884Cnode\u811A\u672C\u521B\u5EFA\u5B50\u5305</li></ol><div class="language-bash"><pre><code><span class="token function">node</span> createPackages.mjs <span class="token string">&quot;@monorepo.components|utils|h5|pc-innermanage|\u5B98\u7F51|server&quot;</span>
</code></pre></div><ol start="6"><li>\u5B89\u88C5\u5168\u5C40\u4F9D\u8D56</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> i typescript vite eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -w -D
</code></pre></div><ul><li><p>\u6839\u76EE\u5F55\u521B\u5EFA .eslintrc tsconfig.json \u914D\u7F6E\u6587\u4EF6 \u5B50\u5305\u4F7F\u7528../\u53D6\u4ED3\u5E93\u7684\u914D\u7F6E</p></li><li></li><li><p>\u5B89\u88C5\u5C40\u90E8\u4F9D\u8D56</p></li></ul><div class="language-bash"><pre><code><span class="token function">pnpm</span> i axios --filter @anBoom/utils
</code></pre></div><p>\u6CE8\u610F\u8FD9\u91CC\u6307\u5B9A\u5B50\u5305\uFF0C\u7528\u5B50\u5305 package.json \u91CC\u7684 name \u6765\u6307\u5B9A\uFF0C\u800C\u4E0D\u662F\u76EE\u5F55</p><p>--filter \u8FD8\u53EF\u7528\u4E8E\u6279\u91CF\u6267\u884C\u5B50\u5305\u7684\u811A\u672C</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> --filter<span class="token operator">=</span>@qftjs/* run build
</code></pre></div><ol start="7"><li>\b\u5B50\u5305\u4E4B\u95F4\u76F8\u4E92\u5F15\u7528</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> i @anBoom/package2 -r --filter @anBoom/package1
</code></pre></div><p>package1 \u4E2D \u5F15\u5165 package2</p><p>\u66F4\u65B0\u5B50\u5305\uFF0C\u5728\u8FD0\u884C publish ,\u4F1A\u81EA\u52A8\u66F4\u65B0\u5F15\u7528\u65B9\u7684\u4F9D\u8D56\u914D\u7F6E</p><ol start="8"><li>\u5B9E\u73B0 cli \u7528\u4E8E\u5176\u4ED6\u5B50\u5305\u5F15\u5165\u4F7F\u7528</li><li></li></ol><p>\u8FD9\u4E9B\u6B65\u9AA4\u62BD\u6210\u811A\u624B\u67B6\uFF1F</p>`,28),i=[o];function t(c,l,r,d,m,g){return s(),e("div",null,i)}var f=a(p,[["render",t]]);export{u as __pageData,f as default};
