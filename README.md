# NoahCareerCoaching

Website Notes(imma put them here so its more visible)

MY IDEAS:
I have a chrome flag that makes every website dark mode, so now that I see what the website actually is I realize we might need some color changes and to make some things more visible

Adding dark mode and theme detection

Might want me to merge into main soon because my branch has placeholders for each page (the github deployment is full of 404's)


PROBLEMS:
Text on the Logo looks really small, especially in the favicon.

The hero in index.html has a small itty bitty blue bar on the left, as if someone didn't crop it all the way

VScode is telling me that the style.css has 7 errors because there are placeholders in it, also it is really big. we should look into some way of making it smaller and more readable.

the back to top button can be clicked when it is invisible at the top (minor issue)


NOTEABLE CHANGES FROM MAIN:
There is a javascript file that inserts all the stuff every file will need, so the head stuff, the nav, the backtotop button, and the bootstrap link on the bottom. now the head just needs the title and the import of that script.

because of the change in file structure, I use absolute links to avoid issues with navigation.

I wrapped all of the main content of every page in a main tag, I also got rid of the `<!-- content stars here -->`'s.(yes it was misspelled like that in every comment)

There is a new file called favicon.ico, its just a copy of ncc4.png that gets automatically inserted as the favicon.

all of the colors in style.css are now tied to vars at the top of the file, you can edit all of the colors of things at once this way.

## Tri's notes
Added a new hero image for resources/trades because it was blurry. The free source of the image used is [here](https://www.pexels.com/photo/photo-of-a-welder-at-work-4007300/). Feel free to replace if needed. Just found this one to fill in the blurry image spot.