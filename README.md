# Website Notes

## Rome's Notes

### MY IDEAS:

Adding dark mode and theme detection

Might want to merge one of the branches into main soon because they both have placeholders for each page (the github deployment is full of 404's)

The style.css is HUGE. we should split it into multiple files.

Because the navbar is fixed we could get rid of the back to top button but it is still useful on big pages


### PROBLEMS:
the back to top button is not very noticable so you end up scrolling to the top manually anyways

Text on the Logo looks really small in the favicon.ico.

hospitality.html uses the image from buisnessmanegmnt.html at the bottom

some career pages do not have images and image placeholders used in general

the back to top button can be clicked when it is invisible at the top (minor issue)

in the branches, because we are inserting the styles from a script, there is one frame while loading where you can see the unstyled page (a simple fix would be to just put the styles back in the head, but i'm too stubborn)

We could use some more comments in some of the pages, particularly the career pages

### NOTEABLE CHANGES FROM MAIN:
There is a javascript file that inserts all the stuff every file will need, so the head stuff, the nav, the backtotop button, and the bootstrap link on the bottom. now the head just needs the title and the import of that script.

because of the change in file structure, I use absolute links to avoid issues with navigation.

I wrapped all of the main content of every page in a main tag, I also got rid of the `<!-- content stars here -->`'s.(yes it was misspelled like that in every comment)

There is a new file called favicon.ico, its just a copy of ncc4.png that gets automatically inserted as the favicon.

all of the colors in style.css are now tied to vars at the top of the file, you can edit all of the colors of things at once this way.

The navbar is now fixed position at the top with some space inserted via style.css

## Tri's notes
Added a new hero image for resources/trades because it was blurry. The free source of the image used is [here](https://www.pexels.com/photo/photo-of-a-welder-at-work-4007300/). Feel free to replace if needed. Just found this one to fill in the blurry image spot