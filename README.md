# Website Notes

## Rome's Notes

### MY IDEAS:

Adding dark mode and theme detection

adding a footer with contact info and customer service, etc.

### PROBLEMS:
the back to top button is not very noticable so you end up scrolling to the top manually anyways

hospitality.html uses the image from buisnessmanegmnt.html at the bottom

some career pages do not have images and image placeholders used in general

in this branch, because we are inserting the styles from a script, there is one frame while loading where you can see the unstyled page (a simple fix would be to just put the styles back in the head, but i'm too stubborn.) This is not a problem in the react version.

We could use some more comments in some of the pages, particularly the career pages

some of the new pages are broken here because of the new structure (like they are in main)

main is broken because the new structure was only partly implemented

### NOTEABLE CHANGES FROM MAIN:
There is a javascript file that inserts all the stuff every file will need, so the head stuff, the nav, the backtotop button, and the bootstrap link on the bottom. now the head just needs the title and the import of that script.

because of the change in file structure, I use absolute links to avoid issues with navigation.

I wrapped all of the main content of every page in a main tag, I also got rid of the `<!-- content stars here -->`'s.(yes it was misspelled like that in every comment)

There is a new file called favicon.ico, its just a cropped copy of ncc4.png that gets automatically inserted as the favicon (the icon in the browser tab).

all of the colors in style.css are now tied to vars at the top of the file, you can edit all of the colors of things at once this way.

The navbar is now fixed position at the top with some space inserted via style.css

the state page logic is contained within a script, significatly reducing its size

## Tri's notes
Added a new hero image for resources/trades because it was blurry. The free source of the image used is [here](https://www.pexels.com/photo/photo-of-a-welder-at-work-4007300/). Feel free to replace if needed. Just found this one to fill in the blurry image spot