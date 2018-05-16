# Banno Onboarding Project

## Description
This app allows you to create and edit user profiles, each of which have an ID, Name, Number, and Email Address.

## how to use

### NPM Scripts
    To serve the app (also runs ux-lint):

        `$ yarn start` then open https://localhost:1820 in the browser.

        This lints, builds, and serves the project

    To see a list of available scripts [or a single script]: 
    
        `$ yarn run help [filter scripts]`

    To lint (UX-Lint)

        `$ yarn lint`


## dependencies

### @Banno/Polymer

### Webpack-Dev-Server

  Webpack-dev-server wraps around webpack, bundling and serving the files. 

  The bundling and serving happens together on `$ yarn start` or `$ yarn build`

  The includes webpack, and webpack-cli.

  #### Note

  You will not see the bundled folder locally. 

### UX-Lint

  Banno's lint packages for linting files. The .editorconfig file is set up to match Banno's styleguide

### Yarn 
  
  Used for running scripts instead of npm
