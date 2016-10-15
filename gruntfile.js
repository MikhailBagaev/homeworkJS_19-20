module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   concat: {
   options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
   },
   dist: {
    // the files to concatenate
        src: ['js/src/*.js'],
    // the location of the resulting JS file
        dest: 'js/dist/script.min.js'
   }
   },
   uglify: {
    dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
    }
   },
   sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
   watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['sass'],
    }
  }
});

  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};