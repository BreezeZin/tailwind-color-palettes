# Tailwind CSS color palettes

Select from a list of custom color palettes to copy into your [Tailwind CSS](https://tailwindcss.com) config file.

## Editor

Visual Studio Code

### Plugins

- prettier
- stylelint
- tailwind css intellisense
- editorconfig

## Gatsby

gatsby develop - build & watch for changes
gatsby build - create production build
gatsby serve - test production build locally

## Colors

colors.js contains all the palette colors
if there is more than 9 colors you can add a key called "alternatives" to the color object which is an array of the hex values
this will allow the color picker to show the extra swatches when you edit a color

the color name will be generated from the key
(e.g. the first color object inside red will be "red-1")
tailwind will generate all of the color classes from colors.js

# TODO:

- add more colors
- browers testing
