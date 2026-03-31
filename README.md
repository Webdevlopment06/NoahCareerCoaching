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
- the footer has some links that do not work and send you to 404s (they are placholders) privacy and terms do not need to be pages though
- FILES ARE BIGGGGGGGGGGG I dont know why but every file is super long, its getting harder and harder to actually read them. I might add a bunch of comments but I think the best solution is putting all of the text into json and then having reusable components for similar structures.
- I think there is css that we do not need anymore because of site changes


### CHANGES FROM MAIN:
- The state content is in a component, so it keeps the size of the page down.
- I added some new icons to explore, they are all from flaticon.com
- The Navbar is position absolute and there is some javascript to make each page 
- The Navbar page you are on is indicated in blue.
- images are now organized simlarly to how the pages are.
- Made a component for the cards in the career pages.
- Put animation related styles into /styles/animations.css
- Split the style.css file into multiple files in the new styles folder
- Made a component for the career pages


### IDEAS:
- We could add the career pages to the navbar somehow
- I have been looking at ESlint, it could help keep the code clean and bug free without much added in the way of packages
- We could add dark mode, but its not at all necessary.
- We could put similar pages into components to reduce file size
- mobile optimizations
-  add actual stories to the stories page instead of fake placeholders
- have the odd footer links play an animation on the nav items they relate to
- the css no longer uses vars for colors so I should add that back


### DOING (first priority anyway) 
- nothing I guess? I'm unsure on where to go from here, there are no website breaking bugs and it looks good. what else am I supposed to do?
