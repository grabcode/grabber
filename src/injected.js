var grabImages = function(doc) {
  var images   = [],
      imagesEl = doc.querySelectorAll(config.selector);

  for (i = 0, l=imagesEl.length; i < l; ++i) {
    images.push(imagesEl[i].src);
  }

  return images;
}

var grabAssets = function(doc){
  return grabImages(doc); //chain grabXX with .concat(grabXX())
}

chrome.runtime.sendMessage({
  action: "grabAssets",
  source: grabAssets(document)
});
