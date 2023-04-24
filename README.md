### Filmable Markup project ###

Markup project created by figma design.

Demo link [url](https://dubisoft-solutions.github.io/filmable-markup/ "Demo project link")

RTL version: [url](https://dubisoft-solutions.github.io/filmable-markup/?rtl=true "Demo rtl project link")

## Project structure ##

*src* directory contains source files, like styles, js, and html. Once project is compiled, the *dist* directory will be created and it should be used for the production project.

### Install nodeenv ###

**nodeenv** used to isolate the node versions on the system 

    pip3 install nodeenv

Create a virtualenv with the 18 nod version

    nodeenv -n 18.12.1 env

Active it 

    . env/bin/activate

### How to start the dev server for development? ###

    npm ci
    npm run dev


### How to build the assets? ###

    npm run build

