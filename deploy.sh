#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'

# 部署到 https://github.com/Lilybon/Bored.prj.git 分支為 gh-pages
git push -f https://github.com/Lilybon/Bored.prj.git master:gh-pages

cd -