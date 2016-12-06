document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('alert');
  checkPageButton.addEventListener('click', function() {
	
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
				console.log(response.farewell);
			});
		});
  
  }, false);
	
}, false);