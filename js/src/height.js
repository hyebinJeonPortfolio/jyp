//height.js

(function($){
var snsListA = $('#snsList').children('li').children('a');
var snsListP = snsListA.find('p');
var snsListH = snsListA.height();
// console.log(snsListH);

snsListP.css({'lineHeight':snsListH+'px'});


//innerBox
function lh(){
var innerBox = $('#innerBox')
var innerBox_h2 = innerBox.children('h2');
var innerBoxH = innerBox.height();

innerBox_h2.css({'lineHeight':innerBoxH+'px'});
}
lh();
$(window).on('resize',function(){
  lh();
});


//artistList
function artistlh(){
var artistList = $('#contentWrap').children('ul').children('li');
var artistListP = artistList.find('p');
var artistListH = artistList.height();

artistListP.css({'lineHeight':artistListH+'px'});}
artistlh();
$(window).on('resize',function(){
  artistlh();
});


})(this.jQuery);