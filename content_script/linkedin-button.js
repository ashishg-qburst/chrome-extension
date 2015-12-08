//
// Inject Email Hunter button on Linkedin profile
//
function injectLinkedinButton() {
  var icon = chrome.extension.getURL('shared/img/icon48_white.png');

  if (isSalesNavigator()) {
    $(".profile-actions").prepend('<button style="margin: 0 10px 0 0;" class="eh_linkedin_button eh_linked_connected"><img src="' + icon + '">Email Hunter</button>');
  } else if(isRecruiter()) {
    $(".profile-actions").prepend('<button style="margin: 0 10px 0 0;" class="eh_linkedin_button eh_linkedin_button_small eh_linked_connected"><img src="' + icon + '">Email Hunter</button>');
  }
  else {
    $(".profile-aux .profile-actions").prepend('<button style="margin: 5px 5px 5px 0;" class="eh_linkedin_button eh_linked_connected"><img src="' + icon + '">Email Hunter</button>');
  }
}


//
// Start JS injection
//
chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      injectLinkedinButton();

      // Open popup on Linkedin profile
      $(".eh_linkedin_button").click(function() {
        launchPopup();
      });
    }
  }, 10);
});
