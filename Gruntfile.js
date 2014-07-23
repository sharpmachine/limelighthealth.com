'use strict';
module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    "jshint" : "grunt-contrib-jshint",
    "uglify" : "grunt-contrib-uglify",
    "watch" : "grunt-contrib-watch",
    "less" : "grunt-contrib-less",
    "newer" : "grunt-newer",
    "notify" : "grunt-notify",
    "imagemin" : "grunt-contrib-imagemin"
  });

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
          'themes/flat-ui/js/*.js',
          'themes/flat-ui/js/vendor/*.js'
          ]
        },

        // concatenation and minification all in one
        uglify: {
          dist: {
            files: {
              'themes/flat-ui/js/plugins.min.js': [
              'themes/flat-ui/bootstrap/js/transition.js',
              'themes/flat-ui/bootstrap/js/alert.js',
              'themes/flat-ui/bootstrap/js/button.js',
              'themes/flat-ui/bootstrap/js/carousel.js',
              'themes/flat-ui/bootstrap/js/collapse.js',
              'themes/flat-ui/bootstrap/js/dropdown.js',
              'themes/flat-ui/bootstrap/js/modal.js',
              'themes/flat-ui/bootstrap/js/tooltip.js',
              'themes/flat-ui/bootstrap/js/popover.js',
              'themes/flat-ui/bootstrap/js/scrollspy.js',
              'themes/flat-ui/bootstrap/js/tab.js',
              'themes/flat-ui/bootstrap/js/affix.js'
              ],
              'themes/flat-ui/js/scripts.min.js': [
              'themes/flat-ui/js/scripts.js'
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
              "themes/flat-ui/css/flat-ui.css": "themes/flat-ui/less/flat-ui.less"
            }
          },
          production: {
            options: {
              paths: ["less"],
              yuicompress: true,
              cleancss: true
            },
            files: {
              "themes/flat-ui/bootstrap/css/bootstrap.css": "themes/flat-ui/bootstrap/less/bootstrap.less"
            }
          }
        },

        // watch our project for changes
        watch: {
          less: {
            files: ["themes/flat-ui/less/*",
            "themes/flat-ui/bootstrap/less/*"],
            tasks: ["less:development"],
          },
          js: {
            files: [
            'themes/flat-ui/js/scripts.js'
            ],
            tasks: ['uglify']
          },
          livereload: {
            files: [
            'themes/flat-ui/css/*.css',
            'themes/flat-ui/js/scripts.min.js',
            'themes/flat-ui/index.html',
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
                  cwd: 'themes/flat-ui/img/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. themes/flat-ui/img/
                  dest: 'themes/flat-ui/img/',
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
                  cwd: 'themes/flat-ui/img/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. themes/flat-ui/img/
                  dest: 'themes/flat-ui/img/',
                  ext: '.jpg'
                }
                ]
              }
            }
          });

    // load tasks
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-notify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');

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