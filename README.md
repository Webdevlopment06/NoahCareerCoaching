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
- trades is still using the old career page look
- I found where some images in the career pages are and because of the image sorting it can't find them I need to fix that.

### CHANGES:
- The state content is in a component, so it keeps the size of the page down.
- I added some new icons to explore, they are all from flaticon.com
- The Navbar is position absolute and there is some javascript to make each page 
- The Navbar page you are on is indicated in blue.
- images in now organized simlarly to how the pages are, with 2 other folders, one for unused imgs with no references, and one for imgs with refs but that do not appear in the website
- the services pages all use a css animation gradient for the top

### IDEAS:
- We could add dark mode, but its not at all necessary.

### DOING (first priority anyway) 
fixing images in career pages
