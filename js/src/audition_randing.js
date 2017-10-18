//audition_randing.js

(function($){

  $(window).on('resize',function(){  
    location.reload();
    $(window).scrollTop(0);
   });

  var introOff = $('.intro').offset().top;
  var centerAuditionOff = $('#centerAudition').offset().top;
  var onlineAuditionOff = $('#onlineAudition').offset().top;
  var applyOff = $('#apply').offset().top;
  var faqOff = $('#faq').offset().top;

  $(window).on('scroll',function(e){
      e.preventDefault();
      var winOffset = $(this).scrollTop();

      if(winOffset>=introOff-700){
        $('.intro').removeClass('default');
      };

      if(winOffset>=centerAuditionOff-550){
        $('#centerAudition').removeClass('default');
      };

      if(winOffset>=onlineAuditionOff-550){
        $('#onlineAudition').removeClass('default');
      };

      if(winOffset>=applyOff-550){
        $('#apply').removeClass('default');
      };

      if(winOffset>=faqOff-600){
        $('#faq').removeClass('default');
      };
  });//on
})(this.jQuery);