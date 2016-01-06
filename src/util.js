function forEach(els, cb){
  for (i = 0, l=els.length; i < l; ++i) {
    cb.call(els[i], els);
  }
}
