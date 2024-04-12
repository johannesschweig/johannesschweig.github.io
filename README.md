# Portfolio website
This is my portfolio website using Vue.js and GridCSS, deployed on github pages. I made this to learn Vue.js and create a nice portfolio website for me as a UX Designer from the ground up.

## Getting Started
Clone this repository. There are three branches:
- main: the vue source code of the latest version of the website
- gh-pages: the deployed files for github pages as a git subtree
- develop: branch for new features, eventually merged into vueapp
- old_app: an old version of the website written in pure HTML, CSS, JavaScript, jQuery and Bootstrap.


### Prerequisites

You need `nodejs` and `npm`.

### Running the dev setup

Run `npm i` to install the dependencies, then `npm run dev` to start a development server on `localhost:8080`. Open your browser at `localhost:8080`.

## Linting & Tests

Linting is done with `npm run lint`. Tests are located in `tests/unit`. Run them with `npm run unit`.

## Deployment

If you want to build the files necessary for github pages, run `deploy.sh` in the branch `vueapp`.

## Credits

**Built with:**
* [GridCSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - like Bootstrap only newer, more versatile and features less css styles you don't necessarily need
* [Vue.js](https://vuejs.org/) - a JavaScript Framework similar to React or Angular
