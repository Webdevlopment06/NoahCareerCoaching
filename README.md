# Setup Instructions

## Installation

```bash
npm i
```

## Running the Development Server

```bash
npm run dev
```

> **Note:** Make sure you are in the project folder before running these commands.

## Romes Notes:

### ISSUES:
- A lot of the fonts are wrong for some reason, I think there are some imports somewhere that are messing with them. However, This not really an issue and more of just a change. The site still looks and works fine with this.
- the images are broken in the deployment for some reason
- some files still use in line styles instead of bootstrap
- some of the career pages hero-bgs are kind of odd and low resolution
- trades, technology, science, and law are still using the old career page look
- Education uses the business images for the learn more dropdowns
- Healthcare and Hospitality use the finance images for the learn more dropdowns
- all of the image refs in science and trades do not have images


### CHANGES:
- The state content is in a component, so it keeps the size of the page down.
- I added some new icons to explore, they are all from flaticon.com
- The Navbar is position absolute and there is some javascript to make each page 
- The Navbar page you are on is indicated in blue.
- images in now organized simlarly to how the pages are.

### IDEAS:
- We could add dark mode, but its not at all necessary.

### DOING (first priority anyway) 
cleaning code and styles
