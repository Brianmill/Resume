var aud = document.getElementById("ASong").children[0];
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
  }

  $(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });