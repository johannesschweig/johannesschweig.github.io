#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist
# copy index.html for routes
rm -r phoenix greenbox querybuilder codesnippets knimehub legal
mkdir phoenix greenbox querybuilder codesnippets knimehub  legal
cp index.html phoenix
cp index.html greenbox
cp index.html querybuilder
cp index.html codesnippets
cp index.html knimehub
cp index.html legal
# copy README.md over
cp ../README.md ./

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:johannesschweig/johannesschweig.github.io.git master

cd -
