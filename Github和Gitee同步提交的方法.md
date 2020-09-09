# Github和Gitee同步提交的方法

## 前言

有时候我们需要把项目提交到远程仓库，如GitHub、Gitee(码云)、coding等等，但一个个的提交方式实在是太慢了，而且这繁琐的操作在未来，依旧需要自己手动一个个的进行提交。

那有什么办法可以同时(同步)提交多个仓库呢？

## 内容

1. 在项目目录找到.git隐藏文件夹

2. `vi` or `vim` 打开编辑 `.git > config`

修改如下

```javascript

[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[remote "origin"]
        url = https://github.com/hzh100/blogs
        url = https://gitee.com/hzh100/blogs
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        merge = refs/heads/master

````

最后重新push即可，如果Gitee(码云)仓库有过提交，使用此方法第一次提交请使用强行提交，避免抱错

```js
git push -f origin master

```