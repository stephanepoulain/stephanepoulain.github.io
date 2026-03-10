// Click-to-play video functionality
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video[src$=".webm"]');
  
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
    
    // Create play button overlay
    const playButton = document.createElement('div');
    playButton.className = 'video-play-overlay';
    playButton.innerHTML = '▶';
    
    // Set up the wrapper
    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);
    wrapper.appendChild(playButton);
    
    video.style.cursor = 'pointer';
    
    // Show/hide play button based on video state
    video.addEventListener('play', function() {
      playButton.style.display = 'none';
    });
    
    video.addEventListener('pause', function() {
      playButton.style.display = 'flex';
    });
    
    video.addEventListener('ended', function() {
      playButton.style.display = 'flex';
    });
    
    // Click handler
    wrapper.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});
