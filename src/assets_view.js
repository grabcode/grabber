function AssetsView(params) {
  this.el = params.el;
  this.collection = params.collection;

  return this;
}

AssetsView.prototype.render = function(){
  this.el.innerHTML = this.collection.reduce(function(memo, uri){

    memo += "<div class='img-wrapper selected'>"
    + "<img height='120' src='"+uri+"' />"
    + "</div>";

    return memo;
  }, "");

  var els = this.el.querySelectorAll('.img-wrapper')
  forEach(els, function(){
    this.addEventListener('click', function(){
      if(this.classList.contains('selected')){
        this.classList.remove('selected');
      }else{
        this.classList.add('selected');
      }

    })
  });

  return this;
}

AssetsView.prototype.selectedUri = function(){
  var els = this.el.querySelectorAll('.img-wrapper.selected img');
  var selected = [];
  forEach(els, function(){
    selected.push(this.src);
  });
  return selected;
}

AssetsView.prototype.selectAll = function(){
  var els = this.el.querySelectorAll('.img-wrapper');
  forEach(els, function(){
    this.classList.add('selected')
  });
  return this;
}

AssetsView.prototype.deselectAll = function(){
  var els = this.el.querySelectorAll('.img-wrapper.selected');
  forEach(els, function(){
    this.classList.remove('selected')
  });
  return this;
}
