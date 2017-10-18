//auditionHeight.js

(function($){
var fieldLi = $('.field').children('li');
var fieldLiH = fieldLi.height();
var fieldP = fieldLi.children('p');

var i = 100;

fieldP.css({'lineHeight':fieldLiH+i+'px'});
//fieldLi

var applywayLi = $('.applyway').children('li');
var applywayH = applywayLi.height();
var applywayP = applywayLi.children('p');

applywayP.css({'lineHeight':applywayH+i+'px'});


//applywayLi
})(this.jQuery);

