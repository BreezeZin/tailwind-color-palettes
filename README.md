# Tailwind CSS color palettes

Select from a list of custom color palettes to copy into your [Tailwind CSS](https://tailwindcss.com) config file.

[https://breezezin.github.io/tailwind-color-palettes/](https://breezezin.github.io/tailwind-color-palettes/)

## Editor

Visual Studio Code

### Plugins

- prettier
- stylelint
- tailwind css intellisense
- editorconfig

## Gatsby

build & watch for changes:

`gatsby develop`

create production build:

`gatsby build`

test production build locally:

`gatsby serve`

## Colors

colors.js contains all the palette colors

If there is more than 9 colors you can add a key called "alternatives" to the color object which is an array of the hex values. This will allow the color picker to show the extra swatches when you edit a color.

the color name will be generated from the key
(e.g. the first color object inside red will be "red-1")
tailwind will generate all of the color classes from colors.js

# TODO:

- add more colors
- browers testing
