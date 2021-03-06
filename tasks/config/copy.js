/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			},
			{ '.tmp/public/linker/js/d3.min.js': './node_modules/d3/d3.min.js' },
			{ '.tmp/public/linker/js/jquery.min.js': './node_modules/jquery/dist/jquery.min.js' },
			{ '.tmp/public/linker/js/jquery-ui.js': './node_modules/jquery-ui/jquery-ui.js' },
			{ '.tmp/public/styles/jquery.ui.datepicker.css': './node_modules/jquery-ui/themes/base/jquery.ui.datepicker.css'}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
