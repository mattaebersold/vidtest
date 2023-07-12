<!-- Simple text over a white background -->

<template lang='pug'>

section.simple-marquee

	video(autoplay muted)
		source(:src='block.video' type="video/mp4")

	div
		h1 {{ block.title }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props: block: Object

	computed:
		video: -> [
			landscape: [
				mimeType: "video/mp4"
				url: @block.video
			]
		]

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

h1
	position relative
	z-index 2
	font-size 100px
	color magenta

// Optional buttons
.buttons

	position relative
	z-index 3

	// Push away from copy
	&:not(:first-child)
		fluid-space margin-top, 's'

video
	position absolute
	z-index 0
	object-fit cover
	width 100%
	height 100%
	top 50%
	left 50%
	transform translate(-50%, -50%)

</style>
