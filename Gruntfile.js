module.exports = function(grunt) {
	grunt.initConfig({
		bower_concat: {
			all: {
				dest: {
					'js': 'src/main/webapp/js/vendor/bower.js',
					'css': 'src/main/webapp/css/vendor/bower.css',
					'eot': 'src/main/webapp/fonts/glyphicons-halflings-regular.eot',
					'svg': 'src/main/webapp/fonts/glyphicons-halflings-regular.svg',
					'ttf': 'src/main/webapp/fonts/glyphicons-halflings-regular.ttf',
					'woff': 'src/main/webapp/fonts/glyphicons-halflings-regular.woff',
					'woff2': 'src/main/webapp/fonts/glyphicons-halflings-regular.woff2'
				},
				mainFiles: {
				      'bootswatch-dist': ['js/bootstrap.js', 'css/bootstrap.css', 'fonts/glyphicons-halflings-regular.eot',
				      'fonts/glyphicons-halflings-regular.svg', 'fonts/glyphicons-halflings-regular.ttf',
				      'fonts/glyphicons-halflings-regular.woff', 'fonts/glyphicons-halflings-regular.woff2']				   
				},
				exclude: ['font-awesome']
			}
		}
	});
	grunt.loadNpmTasks('grunt-bower-concat');
}
