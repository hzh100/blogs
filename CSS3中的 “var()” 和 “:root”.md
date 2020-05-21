# CSS3中的 “var()” 和 “:root”

<a herf="https://blog.csdn.net/qq_37595946/article/details/84531311" target="_blank">原文链接</a>

<img src="./images/001.jpg" style="max-width: 500px">

原来这些仅仅是自定义的css属性，在需要的时候可以使用var()函数引用
关于var()函数的作用和使用方法，参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)

var()
var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

:root
:root是一个伪类，表示文档根元素，非IE及ie8及以上浏览器都支持，在:root中声明相当于全局属性，只要当前页面引用了:root segment所在文件，都可以使用var()来引用

eg:

```css

:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}

```

<img src="./images/002.jpg" style="max-width: 500px">