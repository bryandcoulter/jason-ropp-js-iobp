# Banno Onboarding Project

## Description

This app allows you to create and edit user profiles, each of which have an ID, Name, Number, and Email Address.

To create a new user, click the 'Create User' tab and fill out the form. Users will be added to the users list, which you can view by clicking the 'User List' tab. To see the details of the user, just hover over the user card.

## how to use

Not currently compatible with firefox

### NPM Scripts
    To serve the app (also runs ux-lint):

        `$ yarn start` then open https://localhost:1820 in the browser.

        This lints, builds, and serves the project

    To see a list of available scripts [or a single script]: 
    
        `$ yarn run help [filter scripts]`

    To lint (UX-Lint)

        `$ yarn lint`

    To build a local example of the bundled file structure that webpack-dev-server uses

        `$ yarn build`


## dependencies

### Local Storage

  The app database uses your browsers local storage. Clearing your browsers cache will delete that database of users.

### @Banno/Polymer

### Webpack-Dev-Server

  Webpack-dev-server wraps around webpack, bundling and serving the files. 

  The bundling and serving happens together on `$ yarn start`

  #### To Build File Structure Locally

  You will not see the bundled folder locally when using webpack-dev-server. 

  If you want to bundle the files locally to see how they will be organized in webpack-dev-server, run `$ yarn build` which fires `webpack` and builds the file locally. 
  
  To view the bundled files from the server:

  `localhost:1820/localhost:8080/webpack-dev-server` in your browser.
  

  ##### Notes

  The locally built files are not the exact files that are served. This is just an example of the file organization that webpack-dev-server builds on the server.

### UX-Lint

  Banno's lint packages for linting files. The .editorconfig file is set up to match Banno's styleguide

### Yarn 
  
  Used for running scripts instead of npm
