// Click-to-play video functionality
// Every .webm video gets a wrapper and a round play overlay. Clicking/tapping the video toggles play/pause.
// The overlay is a real <button> (pointer-events: none in CSS, so mouse clicks fall through to the wrapper),
// which makes the toggle keyboard-operable: Tab to it, Enter/Space plays or pauses (WCAG 2.1.1 / 2.2.2).
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video[src$=".webm"]');
  const PLAY_ICON = '▶';
  const PAUSE_ICON = '❚❚';

  videos.forEach(function(video) {
    // Get width attribute if it exists
    const widthAttr = video.getAttribute('width');

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'video-wrapper';

    // If the video has a width attribute, apply it to the wrapper
    if (widthAttr) {
      wrapper.style.width = widthAttr.includes('%') || widthAttr.includes('px') ? widthAttr : widthAttr + 'px';
      // Remove width from video so it fills the wrapper
      video.removeAttribute('width');
      video.style.width = '100%';
    }

    // Create play/pause button overlay (looks exactly like the former <div> overlay)
    const playButton = document.createElement('button');
    playButton.type = 'button';
    playButton.className = 'video-play-overlay';
    playButton.textContent = PLAY_ICON;
    playButton.setAttribute('aria-label', 'Play video');
    // Neutralise native button chrome; the .video-play-overlay CSS supplies the look
    playButton.style.border = '0';
    playButton.style.padding = '0';
    playButton.style.margin = '0';
    playButton.style.webkitAppearance = 'none';
    playButton.style.appearance = 'none';
    playButton.style.fontFamily = 'inherit';
    playButton.style.lineHeight = 'inherit';
    // Show/hide instantly as before (CSS has `transition: all`), keep the hover grow animation
    playButton.style.transition = 'background 0.3s ease, transform 0.3s ease';

    // Set up the wrapper
    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);
    wrapper.appendChild(playButton);

    video.style.cursor = 'pointer';

    // While playing the overlay is hidden, as before, but stays focusable so keyboard users can pause:
    // when it has keyboard focus it shows a pause icon.
    function sync() {
      const playing = !video.paused && !video.ended;
      playButton.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
      playButton.textContent = playing ? PAUSE_ICON : PLAY_ICON;
      playButton.style.opacity = !playing || document.activeElement === playButton ? '' : '0';
    }

    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
    playButton.addEventListener('focus', sync);
    playButton.addEventListener('blur', sync);

    // Click handler (mouse/touch on the video, or Enter/Space on the button, which bubbles here)
    wrapper.addEventListener('click', function() {
      if (video.paused) {
        const p = video.play();
        if (p && p.catch) p.catch(function() {});
      } else {
        video.pause();
      }
    });
  });
});
