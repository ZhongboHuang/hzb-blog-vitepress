#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 意思为将master构建后的代码合并到github-pages分支上，然后在github-pages分支上部署~
git push -f https://github.com/ZhongboHuang/hzb-blog-vitepress.git master:github-pages
