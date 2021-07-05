import '../css/common.css';
import '../css/04-videos.css';

// const videos = [
//   {
//     videoId: 234307160,
//     title: '"No Spain - No Gain" - PCR GRAVIER Bikepacking Adventure',
//   },
//   {
//     videoId: 235618360,
//     title: 'Take Every Wave: Laird in VR',
//   },
//   {
//     videoId: 236787722,
//     title: 'Life Coach',
//   },
//   {
//     videoId: 238552159,
//     title: 'Bobby Brown - Roots Lead to Water',
//   },
//   {
//     videoId: 236203659,
//     title: 'NINE TILL NOW - a portrait about Marco Lufen',
//   },
//   {
//     videoId: 236436605,
//     title: 'REI Presents: Follow Through',
//   },
// ];

// const defaultVideo = {
//   ...videos[0],
//   currentTime: 0,
// };

// const selectedVideo =
//   JSON.parse(localStorage.getItem('selectedVideo')) || defaultVideo;

// const player = new Vimeo.Player(document.querySelector('.js-video-container'), {
//   id: selectedVideo.videoId,
//   width: 640,
// });
// player.setCurrentTime(selectedVideo.currentTime);

// document
//   .querySelector('.js-videos')
//   .insertAdjacentHTML(
//     'beforeend',
//     videos.map(v => `<div data-video="${v.videoId}">${v.title}</div>`).join('')
//   );

// document.querySelector('.js-videos').addEventListener('click', e => {
//   selectedVideo.videoId = e.target.dataset.video;
//   selectedVideo.currentTime = 0;
//   localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
//   player.loadVideo(selectedVideo.videoId);
// });

// player.on('timeupdate', ({ seconds }) => {
//   selectedVideo.currentTime = seconds;
//   localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
// });
