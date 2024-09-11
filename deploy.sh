#white!/usr/bin/env sh

# abort on errors
set -e

# copy index.html, so the router can handle routes
cd dist && cp index.html 404.html

# add CNAME for custom domain
echo "johannesschweig.de" >> CNAME
cd ..

git add .
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
