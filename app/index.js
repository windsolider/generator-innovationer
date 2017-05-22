let generators = require('yeoman-generator');
let fs = require('fs');
let path = require('path');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	prompting: function() {
	},
	writing: function() {
		this.copy('gulpfile.js', 'gulpfile.js');
	},
	end: function() {

	}
}); 