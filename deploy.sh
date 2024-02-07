#!/usr/bin/env sh

# abort on errors
set -e

cd dist && cp index.html 404.html && cd .. 

git subtree push --prefix dist origin gh-pages
