var assetsEl   = document.querySelector('#assets');
var controlsEl = document.querySelector('#controls');
var downloadEl = document.querySelector('#download');
var deselectAllEl = document.querySelector('#deselectAll');
var selectAllEl = document.querySelector('#selectAll');

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "grabAssets") {
    var data = request.source;

    var assets = new AssetsView({
      el: assetsEl, collection: data
    }).render()

    controlsEl.classList.remove('hide');

    downloadEl.addEventListener('click', function(){
      assets.selectedUri().map(function(uri){
        chrome.downloads.download({url: uri}, function(id) {
        });
      });
    });

    deselectAllEl.addEventListener('click', function(){
      assets.deselectAll();
    });

    selectAllEl.addEventListener('click', function(){
      assets.selectAll();
    });
  }
});

function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: "src/injected.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
