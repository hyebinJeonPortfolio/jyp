// bgGradient.js

(function($) {
  function viewH(){
  var bulk     = $('#wrap').append('<div class="default"></div>');
  var wrapDefault = $('.default');
  var adBanner    = $('#adBanner').outerHeight(true);
  var newsWrap    = $('#newsWrap').outerHeight(true);
  var artistWrap  = $('#artistWrap').outerHeight(true);
  var fixedBanner = $('#fixedBanner').outerHeight(true);
  var snsWrap     = $('#snsWrap').outerHeight(true);
  var topBtn      = $('#topButton').outerHeight(true);
  var footBox     = $('#footBox').outerHeight(true);
  var mainHeight  = adBanner + newsWrap + artistWrap + fixedBanner + snsWrap + topBtn + footBox;
  // console.log(mainHeight);
  wrapDefault.css({width:'100%', height:mainHeight, position:'absolute', top:0, left:0, zIndex:-100, backgroundImage:'linear-gradient(60deg, #fff 60%, #0cf)'});
}
  viewH();

$(window).on('resize',function(){
  viewH()
});

})(this.jQuery);