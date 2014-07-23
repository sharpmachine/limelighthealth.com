'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

        // let us know if our JS is sound
        jshint: {
          options: {
            "asi"      : true,
            "browser"  : true,
            "eqeqeq"   : false,
            "eqnull"   : true,
            "es3"      : true,
            "expr"     : true,
            "jquery"   : true,
            "latedef"  : true,
            "laxbreak" : true,
            "nonbsp"   : true,
            "strict"   : true,
            "undef"    : true,
            "unused"   : true
          },
          all: [
          'Gruntfile.js',
          'themes/bootstrap/js/*.js',
          'themes/bootstrap/js/vendor/*.js'
          ]
        },

        // concatenation and minification all in one
        uglify: {
          dist: {
            files: {
              'themes/bootstrap/js/plugins.min.js': [
              'themes/bootstrap/js/transition.js',
              'themes/bootstrap/js/alert.js',
              'themes/bootstrap/js/button.js',
              'themes/bootstrap/js/carousel.js',
              'themes/bootstrap/js/collapse.js',
              'themes/bootstrap/js/dropdown.js',
              'themes/bootstrap/js/modal.js',
              'themes/bootstrap/js/tooltip.js',
              'themes/bootstrap/js/popover.js',
              'themes/bootstrap/js/scrollspy.js',
              'themes/bootstrap/js/tab.js',
              'themes/bootstrap/js/affix.js'
              ],
              'themes/bootstrap/js/scripts.min.js': [
              'themes/bootstrap/js/scripts.js'
              ]
            }
          }
        },

        less: {
          development: {
            options: {
              paths: ["less"],
              yuicompress: true,
              cleancss: true
            },
            files: {
              "themes/bootstrap/css/bootstrap.css": "themes/bootstrap/less/bootstrap.less"
            }
          }
        },

        // watch our project for changes
        watch: {
          less: {
            files: ["themes/bootstrap/less/*"],
            tasks: ["less"],
          },
          js: {
            files: [
            'themes/bootstrap/js/scripts.js',
            'themes/bootstrap/js/vendor/*.js'
            ],
            tasks: ['uglify']
          },
          livereload: {
            files: [
            'themes/bootstrap/css/*.css',
            'themes/bootstrap/js/scripts.min.js',
            'themes/bootstrap/index.html',
            'content/*.md',
            'content/*/*.md',
            'content/*/*/*.md',
            'content/*.html'
            ],
            options: {
              livereload: true
            }
          }
        },

        imagemin: {
          png: {
            options: {
              optimizationLevel: 7
            },
            files: [
            {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'themes/bootstrap/img/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. themes/bootstrap/img/
                  dest: 'themes/bootstrap/img/',
                  ext: '.png'
                }
                ]
              },
              jpg: {
                options: {
                  progressive: true
                },
                files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'themes/bootstrap/img/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. themes/bootstrap/img/
                  dest: 'themes/bootstrap/img/',
                  ext: '.jpg'
                }
                ]
              }
            }
          });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // register task
    grunt.registerTask('imageopt', ['imagemin']); // execute on both .png and .jpg
    grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
    grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
    grunt.registerTask('default', [
      // 'jshint',
      'uglify',
      'watch'
      ]);

  };