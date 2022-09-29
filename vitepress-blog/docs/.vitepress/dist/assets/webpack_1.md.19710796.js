import{_ as e,c as o,o as c,a as d}from"./app.d95e124d.js";const b='{"title":"\u5404\u79CDcssloader\u7684\u4F5C\u7528","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5404\u79CDcssloader\u7684\u4F5C\u7528","slug":"\u5404\u79CDcssloader\u7684\u4F5C\u7528"}],"relativePath":"webpack/1.md","lastUpdated":1664421231379}',s={},p=d('<p>\u91CD\u65B0\u5B66\u4E60webpack,\u65E8\u5728\u7406\u89E3\u8FD0\u884Cwebpack\uFF0C\u662F\u600E\u4E48\u7F16\u8BD1\u76EE\u5F55\u4E0B\u7684\u5404\u79CD\u6587\u4EF6\u7684,\u5982\u4F55\u505A\u5230\u63A5\u5165\u5404\u79CDlaoder\u548Cplugin</p><p>\u5728\u91CD\u65B0\u5B66\u4E60\u4E4B\u524D\u8FD8\u662F\u8981\u660E\u786Ewebpack\u7684\u6982\u5FF5\uFF0Cwebpack\u662F\u4E2A\u6A21\u5757\u6253\u5305\u5DE5\u5177</p><p>\u6A21\u5757\u5316\u7F16\u7A0B\u50AC\u751F\u4E86\u6253\u5305\u5DE5\u5177\u7684\u4EA7\u751F</p><p>\u5B89\u88C5 <code>webpack-cli</code> , \u662F\u4E3A\u4E86\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884Cwebpack <code>node_modules/.bin</code> \u76EE\u5F55\u4E0B\u7684\u4F9D\u8D56\u4E0D\u5C31\u662F\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u901A\u8FC7 <code>npx</code> \u6765\u8FD0\u884C\u4E86\u5417\uFF1F \u4E5F\u5C31webpack\u4F9D\u8D56\u4E0D\u4F1A\u9ED8\u8BA4\u653E\u5230.bin\u4E2D,\u800C\u662F\u5355\u72EC\u901A\u8FC7\u4E00\u4E2A <code>webpack-cli</code>\u7684\u4F9D\u8D56\u6765\u652F\u6301\u547D\u4EE4\u884C\u8FD0\u884C\uFF1F</p><p>\u4ECE <code>webpack-cli</code> \u4F9D\u8D56\u7684\u4F5C\u7528\u53EF\u4EE5\u5F97\u51FA\uFF1A\u5982\u679C\u9879\u76EE\u901A\u8FC7\u4E00\u4E2Ajs\u811A\u672C\u8FD0\u884Cwebpack\u6253\u5305,\u5219\u4E0D\u9700\u8981\u5B89\u88C5\u8BE5\u4F9D\u8D56</p><blockquote><p>\u5C0Ftips: \u5982\u679C\u8981\u7814\u7A76\u6253\u5305\u540E\u7684js\u4EE3\u7801\uFF0C\u53EF\u4EE5\u628Abuild\u9636\u6BB5\u7684mode\u73AF\u5883\u914D\u7F6E\u6210dev\uFF0C\u8BA9\u6253\u5305\u540E\u4EE3\u7801\u4E0D\u88AB\u538B\u7F29\u548C\u6DF7\u6DC6</p></blockquote><hr><h3 id="\u5404\u79CDcssloader\u7684\u4F5C\u7528" tabindex="-1">\u5404\u79CDcssloader\u7684\u4F5C\u7528 <a class="header-anchor" href="#\u5404\u79CDcssloader\u7684\u4F5C\u7528" aria-hidden="true">#</a></h3><ul><li>style-loader: \u628A\u5904\u7406\u540E\u7684css\u6587\u4EF6\u5185\u5BB9\u63D2\u5165\u5230<code>html</code>\u7684<code>head</code>\u4E2D</li><li>css-loader: \u5904\u7406css\u4E2D\u7684\u6A21\u5757\u5316,\u5982<code>\u80CC\u666F\u56FE</code>\u548C<code>@import css</code>\u7684\u64CD\u4F5C</li><li>sass-loader: \u9884\u5904\u7406\u5668\u6837\u5F0F\u8BED\u6CD5\u7684\u89E3\u6790\u5668</li><li>post-loader: \b\u7C7B\u4F3Cbabel\u5BF9js\u7684\u4F5C\u7528,\u901A\u8FC7\u7ED9\u6837\u5F0F\u5C5E\u6027\u6DFB\u52A0\u524D\u7F00\u6765\u517C\u5BB9\u5404\u79CD\u9AD8\u4F4E\u7248\u672C\u7684\u6D4F\u89C8\u5668</li></ul><p>\u{1F446} \u63D0\u5230\u7684css-loader \u5904\u7406css\u4E2D\u7684\u6A21\u5757\u5316, \u662Fcss\u4E2D\u8D44\u6E90\u7684\u6A21\u5757\u5316, \u5F53\u5728js\u4E2D\u5F15\u5165css\u5E76\u4E14\u60F3\u8981\u6A21\u5757\u5316(\u5C40\u90E8\u6837\u5F0F\u4E92\u4E0D\u5F71\u54CD)\u5C31\u662F\u4E0D\u540C\u7684\u6982\u5FF5\u4E86 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">css-modules - github</a>\u7684\u6982\u5FF5</p><blockquote><p>CSS\u7684\u89C4\u5219\u90FD\u662F\u5168\u5C40\u7684\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u7EC4\u4EF6\u7684\u6837\u5F0F\u89C4\u5219\uFF0C\u90FD\u5BF9\u6574\u4E2A\u9875\u9762\u6709\u6548\u3002 \u4EA7\u751F\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u552F\u4E00\u65B9\u6CD5\uFF0C\u5C31\u662F\u4F7F\u7528\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684class\u7684\u540D\u5B57\uFF0C\u4E0D\u4F1A\u4E0E\u5176\u4ED6\u9009\u62E9\u5668\u91CD\u540D\u3002\u8FD9\u5C31\u662F CSS Modules \u7684\u505A\u6CD5\u3002</p></blockquote><p><a href="https://vue-loader.vuejs.org/zh/guide/css-modules.html" target="_blank" rel="noopener noreferrer">css-modules - vue</a></p><p><img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220206220430.png" alt=""><img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220206213958.png" alt=""><code>css-loader</code>\u63D0\u4F9B\u6B64\u529F\u80FD\u914D\u7F6E\u9879,\u53EF\u4EE5\u8BA9css\u7684<code>className</code>\u88AB\u7F16\u8BD1\u6210<code>hash</code>\u552F\u4E00\u503C,<code>css-loader</code>\u9488\u5BF9\u8FD9\u4E00\u529F\u80FD\u8FD8\u6709\u66F4\u591A\u914D\u7F6E\u9879,\u5982\u81EA\u5B9A\u4E49\u7F16\u8BD1\u540E\u7684<code>className</code>\u4E0D\u81F3\u4E8E\u662F\u4E00\u5927\u6BB5\u5F88\u4E11\u7684<code>hash</code>,\u8BE6\u7EC6\u770B<a href="https://www.ruanyifeng.com/blog/2016/06/css_modules.html" target="_blank" rel="noopener noreferrer">css modules - \u962E\u4E00\u5CF0</a></p><blockquote><p>\u611F\u89C9\u5728<code>react</code>\u4E2D\u7528\u5F97\u66F4\u591A\uFF0C<code>vue2</code>\u4E2D\u7528<code>render</code>\u5199<code>jsx</code>\u7684<code>js\u6587\u4EF6</code>\u53EF\u80FD\u4E5F\u9700\u8981\u7528\u5230 \u4F46\u662F\u5230<code>vue3</code>\u4E4B\u540E\u90FD\u662F<code>.vue</code>\u6587\u4EF6\u4E2D\u5199<code>jsx</code>?</p></blockquote><hr><blockquote><p><code>plugin</code>\u7C7B\u4F3C\u751F\u547D\u5468\u671F,\u5982<code>htmlWebpackPlugin</code>\u5728\u6253\u5305\u7ED3\u675F\u65F6\u751F\u6210\u4E00\u4E2Ahtml\u6587\u4EF6\u5E76\u5F15\u5165\u51FA\u53E3js \u6240\u4EE5\u7F16\u5199<code>plugin</code>\u914D\u7F6E\u6570\u7EC4\u65F6\u5E76\u4E0D\u9700\u8981\u5728\u610F\u7F16\u5199\u987A\u5E8F\uFF0C<code>plugin</code>\u6267\u884C\u65F6\u673A\u53D6\u51B3\u4E8E<code>plugin</code>\u81EA\u8EAB\uFF0C\u53EF\u4EE5\u53BB\u5177\u4F53\u7684<code>plugin</code>\u7684\u6587\u6863\u4E2D\u67E5\u770B</p></blockquote><hr><p>sourceMap\u662F\u5982\u4F55\u5728\u8FD0\u884C\u6253\u5305\u540E\u4EE3\u7801\u8FD8\u80FD\u5B9A\u4F4D\u5230\u6E90\u4EE3\u7801\u4F4D\u7F6E\u7684</p><p>\u914D\u7F6E<code>devTool</code>\u4E3A<code>source-map</code>\u65F6, \u6253\u5305\u540E\u8D44\u6E90\u4F1A\u591A\u4E00\u4E2A<code>.map</code>\u6587\u4EF6\u6620\u5C04\u6253\u5305\u540E\u4EE3\u7801\u548C\u6E90\u4EE3\u7801 \u800C<code>devTool</code>\u6539\u4E3A<code>inline-source-map</code>, \u6253\u5305\u540E\u8D44\u6E90\u4E0D\u4F1A\u591A\u6587\u4EF6\uFF0C\u800C\u662F\u591A\u4E00\u6BB5\u6CE8\u91CA\u4EE3\u7801\u5728\u6253\u5305\u540E\u4EE3\u7801\u6700\u672B\u7AEF\uFF0C\u8FD9\u6BB5\u6CE8\u91CA\u5C31\u662F<code>base64</code>\u540E\u7684<code>.map</code>\u6587\u4EF6\u5185\u5BB9</p><blockquote><p>eval\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u914D\u7F6E\u4E3A eval, \u8FD9\u8DDF.map\u6548\u679C\u4E00\u6837\u80FD\u5B9A\u4F4D\u5230\u6E90\u4EE3\u7801\u7684\u4F4D\u7F6E\uFF0C\u4F46\u662F\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u539F\u7406\u4E0D\u662F\u901A\u8FC7.map\u6216\u8005\u6CE8\u91CA\u7684base64\u6765\u5B9A\u4F4D\uFF0C\u800C\u662F\u5728 sourceURL=webpack://...</p></blockquote><hr><p>webpack-dev-server \u4E3A\u4EC0\u4E48\u4E0D\u50CFbuild\u4E00\u6837\u751F\u6210\u4E00\u4E2Adist, \u56E0\u4E3A\u7535\u8111\u8BFB\u5199\u6587\u4EF6\u6BD4\u8D77\u4FEE\u6539\u5185\u5B58\u8981\u66F4\u8017\u6027\u80FD,\u56E0\u4E3A\u4E3A\u4E86\u63D0\u5347\u9891\u7E41\u4FEE\u6539\u6587\u4EF6\u7684\u7F16\u8BD1\u901F\u5EA6,dev\u9636\u6BB5\u4F1A\u628A\u8D44\u6E90\u751F\u6210\u5230\u5185\u5B58\u4E2D</p><p>webpack5\u4E4B\u540E\u53EF\u4EE5\u901A\u8FC7\u5730\u5740\u62FC\u63A5dev-server\u5728\u6D4F\u89C8\u5668\u67E5\u770B\u5185\u5B58\u4E2D\u7684\u6253\u5305\u540E\u76EE\u5F55\u60C5\u51B5</p><hr><p>\u70ED\u66F4\u65B0 \u5728\u4E1A\u52A1\u4EE3\u7801\u91CC\u5176\u5B9E\u9700\u8981\u5199\u4E00\u6BB5webpack\u70ED\u66F4\u65B0\u4EE3\u7801 <img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220206232544.png" alt=""></p><p>\u4F46\u662F\u5F88\u591Aloader\u4F1A\u5E2E\u5FD9\u6CE8\u5165\u5B9E\u73B0\uFF0C\u5C31\u4E0D\u7528\u624B\u5199\uFF0C\u5982css-loader\u548Cvue-loader\uFF0C\u53EA\u8981\u5F00\u542Fdevserver\u7684\u70ED\u66F4\u65B0\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5C40\u90E8\u70ED\u66F4\u65B0(\u5982\u679C\u6CA1\u6709loader\u7684\u652F\u6301,\u5F00\u542F\u540E\u8FD8\u8981\u624B\u5199\u4E00\u6BB5\u70ED\u66F4\u65B0\u7684\u4EE3\u7801)</p><blockquote><p>react \u5219\u662F\u9760babel\u7684\u9884\u8BBEpreset\u5B9E\u73B0\u7684\u6CE8\u5165\u70ED\u66F4\u65B0\u4EE3\u7801</p></blockquote><p><strong>\u70ED\u66F4\u65B0\u539F\u7406\uFF1A</strong></p><hr><p>treeShaking</p><p>webpack\u80FD\u8BA9<code>CommonJs</code>\u652F\u6301<code>treeShaking</code>\u5417\uFF1F\u600E\u4E48\u5B9E\u73B0\uFF1F</p><p>\u5F00\u542F<code>treeShaking</code>\u540E\u4F1A\u6447\u6389\u6CA1\u6709\u4F7F\u7528\u7684\u8D44\u6E90\u5185\u5BB9\uFF0C\u800C\u6709\u4E9B\u8D44\u6E90\u662F\u4E0D\u629B\u51FA\u5185\u5BB9\u6216\u662F\u6302\u8F7D\u5230\u5168\u5C40\u53D8\u91CF\u4E0A\u7684,\u5C31\u4F1A\u88AB\u6447\u6389, \u800C\u6211\u4EEC\u60F3\u8981\u4FDD\u7559\u65F6\u914D\u7F6E <code>sideEffects</code> \u5982\u5728js\u4E2D\u5F15\u5165css \u5C31\u4F1A\u88AB\u6447\u6389 <code>sideEffects: [&quot;*.css&quot;]</code></p><p>prod\u9636\u6BB5\u81EA\u52A8\u5F00\u542F<code>treeShaking</code>, dev\u9636\u6BB5\u4E3A\u4E86\u9891\u7E41\u4FEE\u6539\u7684\u7F16\u8BD1\u901F\u5EA6\u548C<code>sourceMap</code>\u7684\u6620\u5C04\u5173\u7CFB\u4F1A\u9ED8\u8BA4\u5173\u95ED<code>treeShaking</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u8BA9dev\u9636\u6BB5\u5F00\u542F<code>treeShaking</code>\uFF0C\u67E5\u770B\u6253\u5305\u540E\u4EE3\u7801\u5982\u4E0B\uFF0Cdev\u9636\u6BB5\u5373\u4F7F\u5F00\u542F<code>treeShaking</code>\u4E5F\u4E0D\u4F1A\u6447\u6389\u4EE3\u7801\u800C\u662F\u6CE8\u91CA\u63D0\u793A\u53EA\u7528\u5230\u4E86\u54EA\u4E9B\u5185\u5BB9 <img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220206234433.png" alt=""></p><p>\u7406\u89E3chunk\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u914D\u7F6Ewebpack\uFF0C\u56E0\u4E3Awebpack\u5F88\u591A\u5173\u952E\u503Ckey\u7528\u4E86chunks \u6BD4\u5982code spliting \u4E2D\u7684minChunks \u6700\u5C0F\u4F7F\u7528\u6B21\u6570\uFF1A\u6307\u7684\u662F\u6253\u5305\u540E\u7684\u6BCF\u4E2Ajs\u6587\u4EF6\u5BF9\u76EE\u6807\u7684\u4F7F\u7528\u6B21\u6570\uFF0C\u5E76\u4E0D\u662F\u6E90\u4EE3\u7801\u4E2D\u7684js\u6587\u4EF6\u4F7F\u7528\u6B21\u6570</p><hr><p><img src="https://kingan-md-img.oss-cn-guangzhou.aliyuncs.com/blog/20220207210553.png" alt=""> \u89C6\u9891\u6F0F\u4E86\u8FD9\u4E2A\u4E9B\u90E8\u5206</p><hr><p>webpack\u6253\u5305\u901F\u5EA6\u4F18\u5316 \u628A\u7B2C\u4E09\u65B9\u8D44\u6E90\u5E93\u53EA\u6253\u5305\u4E00\u6B21\uFF0C\u540E\u7EED\u90FD\u4E0D\u7528\u518D\u5BF9\u7B2C\u4E09\u65B9\u8D44\u6E90\u8FDB\u884C\u6253\u5305</p><ol><li>\u624B\u52A8\u6253\u5305\u6216\u662F\u4F7F\u7528\u5B98\u65B9CDN\uFF0C\u5728\u6A21\u677Fhtml\u4E0A\u5199\u6B7B\u5F15\u5165</li><li>\u4F7F\u7528DDLplugin,\u624B\u52A8\u8FD0\u884C\u4E00\u6B21\u6253\u5305\u7B2C\u4E09\u65B9\u8D44\u6E90\u3002\u518D\u6253\u5305\u5DE5\u7A0B\u65F6\u8DF3\u8FC7\u6253\u5305\u7B2C\u4E09\u65B9\u8D44\u6E90\uFF0C\u76F4\u63A5\u53BB\u6253\u5305\u540E\u7B2C\u4E09\u65B9\u8D44\u6E90\u4E2D\u5F15\u5165(\u8FD8\u662F\u8981\u63D2\u5165\u5230html\u4E2D,\u53EA\u4E0D\u8FC7\u8282\u7701\u4E86\u4ECEnode_modules\u6253\u5305\u8D44\u6E90\u7684\u6B65\u9AA4)</li></ol><p>ddlPlugin \u8DDF CDN\u6BD4 ddlPlugin \u8DDF \u624B\u52A8\u5199loadResource(&#39;./swiper.min.js&#39;)\u6BD4</p><hr><p>webpack\u7F16\u5199loader\uFF0C\u5BF9\u7740\u6587\u6863\u5E76\u4E0D\u662F\u5F88\u96BE\u5199,\u5C31\u662F\u6839\u636Ewebpack\u63D0\u4F9B\u7684\u53C2\u6570\u64CD\u4F5C\u6570\u636E</p><p>\u91CD\u70B9\u8981\u5B66\u7684\u662Fwebpack\u7684\u5E95\u5C42\u5982\u4F55\u652F\u6301loader\u7684</p><hr><hr><p>\u8BB2\u89E3webpack\u539F\u7406\u7684\u89C6\u9891</p><ul><li><p>\u6536\u96C6js\u7684\u4F9D\u8D56\u5173\u7CFB\u6210\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61(\u4E0D\u4F7F\u7528\u9012\u5F52\u800C\u662F\u961F\u5217)</p></li><li><p>\u904D\u5386\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u6570\u7EC4,\u7528\u7ACB\u5373\u6267\u884Cjs\u6CE8\u5165require\u7B49\u53C2\u6570\u5B9E\u73B0\u6D4F\u89C8\u5668\u652F\u6301CMD(\u53C2\u8003\u624B\u5199CommonJs)</p></li><li><p>\u7ACB\u5373\u6267\u884C\u51FD\u6570\u662F\u7528\u5B57\u7B26\u4E32\u5199\u6210\u7684\uFF0C\u6700\u7EC8\u5199\u5165\u4E00\u4E2Ajs\u6587\u4EF6\u4E2D</p></li><li><p>\u6269\u5C55\u4E2D\u95F4\u652F\u6301loader\u7684\u8C03\u7528</p></li><li><p>\u52A0\u5165babel loader</p></li></ul><p>\u4ECE\u{1F446}\u770B\uFF0Cwebpack\u628A\u5F88\u591A\u529F\u80FD\u90FD\u901A\u8FC7loader\u548Cplugin\u5F00\u653E\u51FA\u53BB\u4E86\uFF0C\u81EA\u8EAB\u53EA\u5B9E\u73B0\u8BA9\u6D4F\u89C8\u5668\u652F\u6301CJS\u7684\u6A21\u5757\u5316\u800C\u5DF2,\u4E3A\u4EC0\u4E48\u4F1A\u8FD9\u4E48\u91CD\u5462(\u56E0\u4E3A\u5DE5\u7A0B\u5E9E\u5927,\u4F9D\u8D56\u6587\u4EF6\u591A\uFF1F)</p>',48),a=[p];function l(r,t,i,n,u,g){return c(),o("div",null,a)}var m=e(s,[["render",l]]);export{b as __pageData,m as default};
