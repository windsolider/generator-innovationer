let generators = require('yeoman-generator');
let fs = require('fs');
let path = require('path');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	prompting: function() {
		let questions = [
			{
				type: 'input',
				name: 'projectName',
				message: '输入项目名称',
				default: this.app.name
			}
		];
		return this.prompt(questions).then(function(answers) {
			for (let item in answers) {
				answers.hasOwnProperty(item) && (this[item] = answers[item]);
			}
		}.bind(this));
	},
	writing: function() {
		this.copy('gulpfile.js', 'gulpfile.js');
	},
	end: function() {

	}
}); 