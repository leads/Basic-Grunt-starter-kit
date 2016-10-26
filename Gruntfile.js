module.exports = function (grunt) {
	grunt.initConfig({
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'css/*.css',
						'scripts/*.js',
						'*.html'
					]
				},
				options: {
					port: 8000,
					watchTask: true,
					server: './'
				}
			}
		},
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'css/app.css': 'css/app.scss'
	            }
			}
        },
		htmllint: {
			all: ['**/*.htm', '**/*.html', '!node_modules/**']
		},
		jshint: {
			src: ['Gruntfile.js', 'scripts/**/*.js', '!node_modules/**'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				},
				ignores: []
			}
		},
		watch: {
			html : {
				files: ['**/*.htm', '**/*.html'],
				tasks: ['htmllint:all']
			},
			css : {
				files: ['**/*.scss'],
				tasks: ['sass']
			},
			scripts : {
				files: ['**/*.js'],
				tasks: ['jshint']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['browserSync', 'watch']);
};
