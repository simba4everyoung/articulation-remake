module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*', './package.json').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Server
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: 'true'
                }
            }
        },

        // Grunt Watch
        watch: {
            options: {
                atBegin: true,
                livereload: true
            },
            html: {
                files: [
                    '*.html',
                    'app/*/*/*.html'
                ],
                tasks: ['jshint', 'concat:myjs']                
            },
            css: {
                files: [
                    'css/sass/*.scss',
                    'css/sass/*/*.scss',
                    'css/sass/*/*/*.scss'
                ],
                tasks: ['sass', 'postcss']
            },
            js: {
                files: [
                    'js/main/*.js',
                    'app/*.js',
                    'app/*/*.js',
                    'app/*/*/*.js'
                ],
                tasks: ['jshint', 'concat:myjs'],
            },
            svg: {
                files: ['img/svg-icons/*.svg'],
                tasks: ['svgstore']
            }
            
        },

        // Task - JSLint, JSHint
        jshint: {
            all: [
                'js/main/*.js',
                'app/*.js',
                'app/*/*.js',
                'app/*/*/*.js'
            ]       
        },

        // Task - Compile SASS
        sass: {
            options: {
                sourceMap: false
            },
            pathways:{
                files: {
                    'css/styles.css': 'css/sass/styles.scss'
                }
            }
        },

        // Task - PostCSS
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 4 versions', 'ie >= 9']
                    })/*,
                    require('cssnano')({
                        zindex: false
                    })*/
                ]
            },
            dev: {
                src: ['css/styles.css']                
            }
        },

        // Task - Merge Scripts
        concat: {
            myjs: {
                src: [
                    'js/*/*.js',
                    'app/*.js',
                    'app/*/*.js',
                    'app/*/*/*.js'
                ],
                dest: 'js/main.js',
            },
            vendor: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-ui/jquery-ui.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/bootstrap/js/modal.js',
                    'bower_components/jQuery.mmenu/dist/js/jquery.mmenu.all.min.js'
                ],
                dest: 'js/vendor.js',
                nonull: true
            },
            vendorScss: {
                src: [
                    'bower_components/normalize.css/normalize.css',
                ],
                dest: 'sass/base/_vendor.scss',
                nonull: true
            }

        },


        // Task - Minify JS
        uglify: {
            vendor: {
                files: {
                    'js/vendor.js': ['js/vendor.js']
                },
                options: {
                    preserveComments: false
                }
            },
            main: {
                files: {
                    'js/main.js': ['js/main.js']
                },
                options: {
                    preserveComments: false,
                }
            }
        },

        // Task - Create SVG Sprite
        svgstore: {
            options: {
                svg: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    style: 'display: none;',
                    viewBox: '0 0 500 500',
                    x: '0px',
                    y: '0px'
                },
                includeTitleElement: false,
                includedemo: false,
                preserveDescElement: false,
                cleanup: true
            },
            default: {
                files: {
                    'img/assets.svg': ['img/svg-icons/*.svg']
                }
            }
        },


        // Optimize Images
        tinypng: {
            options: {
                apiKey: 'WviIBTyJZApaenxxG9tg2xRHgxiASssI'
            },
            compressAssets: {
                expand: true,
                src: 'img/assets/watch-video.png',
                dest: 'temp/',
                ext: '.min.png'
            }
        }

    }); // grunt.initConfig()

    grunt.registerTask('default', []);
    grunt.registerTask('start', ['connect', 'watch']);
};
