

(function () {
    var css, old = null,
    fm = dqs('form'),
    h = dqs('head');
    containerWidth = dqs('#containerwidth'), 
    containerHeight = dqs('#containerheight'),
    bgpx = dqs('#bgposx'),
    bgpy = dqs('#bgposy'),
    bgsize = dqs('#bgsize'),
    bgRsize = dqs('input[name=bgSize]'),
    bgRsizeX = dqs('#bgsizepx');
    bgRsizeY = dqs('#bgsizepy');


fm.addEventListener('input', function(ev) {
  changevalues();
  ev.preventDefault();
}, false);


fm.addEventListener('click', function(ev) {
  if (ev.target.id === 'bgsize' || ev.target.id === 'fl') {
    var d = ev.target.parentNode.parentNode.querySelector('div');
    d.className = ev.target.checked ? '' : 'hide';
  }
 var f = dqs('#bgSizeXY');
  if (ev.target.id === 'sizeValue') {
   
    f.className = ev.target.checked ? '' : 'hide';
  }
  /*else {
    f.className = 'hide';
  }*/
}, false);

fm.addEventListener('change', function(ev) {
  changevalues();
  ev.preventDefault();
}, false);

/*fm.addEventListener('submit', function(ev) {
  changevalues();
  ev.preventDefault();
}, false); */


changevalues();




function changevalues() {
  css = ''+
  '#container {\n'+
  '  background-color:blue;'+
  '  position:relative;'+
  '  top: 10px;'+
  '  left: 10px;'+
  '  width:' + containerWidth.value  + 'px;'+
  '  height:' + containerHeight.value  + 'px;'+
  '  background-image: url(bg.jpg);'+
  '  background-position:'+ bgpx.value + '% ' + bgpy.value +'% ;'+
  '  \n}\n';
  if (bgsize.checked) {
      if(bgRsize){
        if(bgRsize.value === "cover") {
          css += '' + '#container{background-size:cover}';
        }
        else if(bgRsize.value === "contain") {
          css += '' + '#container{background-size:contain}';
        }
        else {
          css += '' + '#container{background-size:'+ bgRsizeX.value +'% ' + bgRsizeY.value + '%}';
        }
      }
  } else {
    css += '' + '#container{background-size:auto auto}';
  }
   if (old) {
    old.parentNode.removeChild(old);
  }
  var s = document.createElement('style');
  s.innerHTML = css;
  old = s;
  h.appendChild(s);
}

function dqs(str) { 
  return document.querySelector(str);
}
})();