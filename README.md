# «MI Music» - a music guide
On the Home page you can find information about live dates, watch videos of popular songs, read the latest news. In "Being Social" section you can find more about project to leaf through posts from social media.

## Technology stack and techniques used in project:
	* HTML5 CSS3 Javascript
	* Gulp taskrunner
	* Sass (mixins, nesting, variables)
	* Various PostCSS plugins
	* BEM methodology
	* CSS Grid Layout
	* Clipping in CSS and SVG
	* CSS Animation
	* «Smart» Iframe
	* Form validation
	* Responsive Web Design approach

## What is done:
### Pages implemented:
> [Home page](https://gorodetskaya-mariia.github.io/MI-Music/build/)<br> 

Rest pages, tablet and mobile versions are in progress.

### Project overview:

- CSS Animations were used for a beautiful animation not only buttons, but also social icons, menu items, input labels («Sign Up» section).
- SVG Animation of a button for openning and closing a menu is achieved by changing the stroke-dasharray parameter using keyframes so the paths of svg transform.
- Clip-path CSS property was used not only to create different edge angles butting up against one another in sections like «Header» and «Being Social», but also to create 
decorative circles.
- The SVG «clipPath» element helps to use the «path» element as a clipping path. The paths of SVG were wrapped into «clipPath» with «id». The id was used to connect SVG and a section where I want to use «clipPath» (sections «Live Dates» and «News»).
- SVG «text» can be displayed using a custom font. It was used to display a name of one album «Alone» in the section «Listen to MIMUSIC». The width of the text was set to be the same as the width of the image, using the textLength attribute, and positioned the text using the x and y coordinates.
- When you leaf through posts from social media («Being Social») or click on titles of news («News») you can see animations which were achieved through adding classes with different animations to active elements.
- «Smart» Iframe is a method which was used to add videos from «youtube». Video are not located on page, only urls to them in a tag «a». So, by clicking on every image in a section «Listen to MIMUSIC» an «iframe» is created in DOM with url which was stored in the tag «a».
- Simple validation in «Sign Up» section was done by small script and properties of tags from HTML5.
- CSS Grid Layout was used to display popular songs in the section «Listen to MIMUSIC».
- Responsive Web Design is achieved through flexboxes, grids and media expressions.
- About Gulp taskrunner: A local Browsersync server with auto-refresh is used for developing process. Gulp is subscribed to changes in *.js / *.sass / *.html files and if any of them changes, it launches pipe tasks that perform optimizations, transpile from .sass to .css, minify and concatenate scripts and style sheets. In the prod .css styles, the necessary vendor prefixes are automatically applied.
<!-- - Every image is a responsive image — image that works well on devices with widely differing screen sizes and resolutions. This way the browser can choose the image that best fits the current view and/or device. I used <picture> element to add more flexibility when specifying image resources.  -->
