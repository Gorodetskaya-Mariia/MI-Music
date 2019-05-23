//create iframe instead of link for video
function findVideos() {
  let videos = document.querySelectorAll('.albums__item');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.albums__link');
	let button = video.querySelector('.albums__button');
	let id = parseMediaURL(link);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
    video.appendChild(iframe);
    video.classList.add('albums__item--enabled');
	});

	link.removeAttribute('href');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i;
  let url = media.href;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('albums__item-video');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
