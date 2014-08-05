# Meet Me

Client-side app for the Meet Me App.

## Generation (with Grunt.js)

    $ git init

    $ npm update npm -g
    $ npm install grunt-cli -g
    $ npm init
    # modify generated package.json
    $ npm install grunt --save-dev
    # create .gitignore and add node_modules

    $ npm install grunt-contrib-uglify --save-dev
    # create src folder with js files
    # create Gruntfile
    $ grunt # minified js files are generated

    $ npm install grunt-contrib-sass --save-dev
    # create sass files
    # update Gruntfile
    $ grunt # css files are generated
