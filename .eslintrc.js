// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: "standard",
	// required to lint *.vue files
	plugins: ["html"],
	// add your custom rules here
	rules: {
		"no-new": 0,
		quotes: [0, "double"],
		"space-before-function-paren": [0, "never"],
		semi: 0,
		"indent": 0,
		"no-tabs": 0,
		// allow paren-less arrow functions
		"arrow-parens": 0,
		// allow async-await
		"generator-star-spacing": 0,
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
	}
};
