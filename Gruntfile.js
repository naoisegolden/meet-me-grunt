'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/main.min.js'
      }
    },
    sass: {
      dist: {
        files: {
         'build/main.css':'sass/main.scss'
        }
      }
    }
  });

  // Load the plugin that generates css from sass.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
};