export default {

	modules: [

		// Cloak modules
		'@cloak-app/boilerplate',
		'@cloak-app/copy',
		'@cloak-app/visual',

		// Other modules
		'@nuxt/content',
	],

	// Cloak settings
	cloak: {
		boilerplate: {
			siteName: 'vidtest',
			// polyfills: ['default']
		},
	},


	// Always show logs (doesn't work from within module)
	build: { quiet: false },

}
