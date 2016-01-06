var message = document.querySelector('#message');

// chrome.browserAction.setBadgeText({
//   text: "YO"
// })

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "grabAssets") {
    var data = request.source;
    console.log("debug", data);
  }
});

function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: "injected.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
