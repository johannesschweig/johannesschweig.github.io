# Portfolio website
My portfolio website using Vue.js, GridCSS and Tailwindcss, deployed on github pages. 

## Getting Started
Clone this repository. Relevant branch:
- main: the vue source code of the latest version of the website


### Prerequisites

You need `nodejs` and `npm`.

### Running the dev setup

Run `npm i` to install the dependencies, then `npm run dev` to start a development server on `localhost:5173`. Open your browser at `localhost:5173`.

### Deployment
Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`): every push to `main` builds the site and deploys it directly to GitHub Pages using the native Pages deployment (no `gh-pages` branch involved). It also pushes the build to Surge as a mirror.
