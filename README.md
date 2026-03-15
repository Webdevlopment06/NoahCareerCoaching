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
- the footer has some links that do not work and send you to 404s (they are placholders)
- the find your path button in the career pages does not go anywhere
- the style css is big and files are long in general (i am trying to make more components, but it is turning out ot be more difficult than I thought) I have been slowly making the style css bigger so I am thinking of ways to split it into multiple files
- when you navigate to a new page sometimes it scrolls from a random spot on the page to the top for some reason
- while in a career page the nav highlight is on resouces but not a subpage



### CHANGES:
- The state content is in a component, so it keeps the size of the page down.
- I added some new icons to explore, they are all from flaticon.com
- The Navbar is position absolute and there is some javascript to make each page 
- The Navbar page you are on is indicated in blue.
- images are now organized simlarly to how the pages are.
- Made a component for the cards in the career pages.

### IDEAS:
- We could add dark mode, but its not at all necessary.
- We could put similar pages into a component template and then have all the data for each page in json to reduce duplicate code and file size
- mobile optimizations
-  add actual stories to the stories page instead of fake placeholders
- spitting the style.css file

### DOING (first priority anyway) 
css animations and making the site feel better and more responsive
