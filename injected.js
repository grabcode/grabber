var grabAssets = function(doc){
  var images = [];
  // doc.querySelectorAll('.js-img-list img:not([src=""])');
  return {
    images: images
  };
}

chrome.runtime.sendMessage({
  action: "grabAssets",
  source: grabAssets(document)
});
