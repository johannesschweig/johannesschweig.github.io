#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
# copy index.html for routes
# rm -r phoenix greenbox querybuilder codesnippets knimehub legal
mkdir phoenix greenbox querybuilder codesnippets knimehub mechanics thesis legal about scenariomanager
cp index.html phoenix
cp index.html greenbox
cp index.html querybuilder
cp index.html codesnippets
cp index.html knimehub
cp index.html mechanics
cp index.html scenariomanager
cp index.html thesis
cp index.html about
cp index.html legal
# copy README.md over
cp ../README.md ./
# create CNAME file to prevent overwritten custom domain on deploy
# see https://github.com/tschaub/gh-pages/issues/213
echo "johannesschweig.de" >> CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:johannesschweig/johannesschweig.github.io.git main

cd -
