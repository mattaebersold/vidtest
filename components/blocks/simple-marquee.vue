<!-- Simple text over a white background -->

<template lang='pug'>

section.simple-marquee

	cloak-visual.bg(
		sizes='100vw'
		:image='block.bg'
		object-fit='cover')

	div
		cloak-visual.logo(
			sizes='300px'
			:image='block.logo')

		//- Optional list of buttons
		.buttons(v-if='block.buttons.length'): btn-craft(
			v-for='button in block.buttons' :key='button.id'
			:button='button')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props: block: Object

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.simple-marquee

	// Put text on a dark background
	background black
	color white
	position relative

	width 100vw
	height 100vh
	overflow hidden
	flex-center()

	// Make it look centered _after_ the header
	&:before
		content ''
		display block

		// adjust height when header changes
		+when-desktop-header()
			height header-h
		+when-mobile-header()
			height mobile-header-h

	// Add internal spacing
	fluid-space padding-v, 'l'

	// Center text
	text-align center

.bg
	expand()
	width 100vw
	height 100vh
	z-index 1

::v-deep
	.vv-wrapper, .vv-picture, img
		height 100%

.logo
	position relative
	z-index 2

// Optional buttons
.buttons

	position relative
	z-index 3

	// Push away from copy
	&:not(:first-child)
		fluid-space margin-top, 's'

</style>
