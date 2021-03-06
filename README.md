# «MI Music» - a music guide
On the Home page you can find information about live dates, watch videos of popular songs, read the latest news. In "Being Social" section you can find more about the project to leaf through posts from social media.

## Technology stack and techniques used in project:
	* HTML5 CSS3 Javascript
	* Gulp taskrunner
	* Sass (mixins, nesting, variables)
	* Various PostCSS plugins
	* BEM methodology
	* CSS Grid Layout
	* Clipping in CSS and SVG
	* CSS, SVG and JavaScript Animations
	* «Smart» Iframe
	* Form validation
	* Responsive Web Design approach
	* Responsive Images, lazy loading, Vanilla-lazyload.js

## What is done:
### Pages implemented:
> [Home page](https://gorodetskaya-mariia.github.io/MI-Music/build/)<br> 

### Project overview:

- CSS Animations have been used for a beautiful animation not only buttons, but also social icons, menu items, input labels («Sign Up» section).
- SVG Animation of a button for opening and closing a menu has been achieved by changing the stroke-dasharray parameter using keyframes so the paths of SVG transform.
- Clip-path CSS property has been used not only to create different edge angles butting up against one another in sections like «Header» and «Being Social», but also to create decorative circles.
- The SVG «clipPath» element helps to use the «path» element as a clipping path. The paths of SVG have been wrapped into «clipPath» with «id». The id has been used to connect SVG and a section where I want to use «clipPath» (sections «Live Dates» and «News»).
- SVG «text» can be displayed using a custom font. It was used to display a name of one album «Alone» in the section «Listen to MIMUSIC». The width of the text was set to be the same as the width of the image, using the textLength attribute, and positioned the text using the x and y coordinates.
- When you leaf through posts from social media («Being Social») or click on titles of news («News») you can see JS Animations which have been achieved through adding classes with different animations to active elements.
- «Smart» Iframe is a method which has been used to add videos from «youtube». Video are not located on page, only urls to them in a tag «a». So, by clicking on every image in a section «Listen to MIMUSIC» an «iframe» is created in DOM with url which was stored in the tag «a». It helps not only to increase loading speed of pages, but also to save the internet traffic of users.
- Simple validation in «Sign Up» section has been done by a small script and properties of tags from HTML5.
- CSS Grid Layout has been used to display popular songs in the section «Listen to MIMUSIC».
- Responsive Web Design has been achieved through flexboxes, grids and media expressions.
- About Gulp taskrunner: A local Browsersync server with auto-refresh is used for developing process. Gulp is subscribed to changes in *.js / *.sass / *.html files and if any of them changes, it launches pipe tasks that perform optimizations, transpile from .sass to .css, minify and concatenate scripts and style sheets. In the prod .css styles, the necessary vendor prefixes are automatically applied.
- A loading attribute of «img» has been used to avoid loading offscreen images on the page. The loading attribute allows a browser to defer loading offscreen images until users scroll near them. If loading is not supported, a fallback («vanilla-lazyload» - a lazy loading library) is loaded and initiated it. An attribute loading="lazy" is a way to indicate to «vanilla-lazyload» which images should be lazily-loaded.
<!-- - Every image is a responsive image — image that works well on devices with widely differing screen sizes and resolutions. This way the browser can choose the image that best fits the current view and/or device. I used <picture> element to add more flexibility when specifying image resources.  -->
