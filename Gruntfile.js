module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['public'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'public/'
          }
        ]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('build', [
      'clean',
      'copy'
  	]);

};
