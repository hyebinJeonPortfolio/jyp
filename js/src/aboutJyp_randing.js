//aboutjyp_randing.js

(function($){

  $(window).on('resize',function(){  
    location.reload();
    $(window).scrollTop(0);
   });

  var jypInfoOffset = $('#jypInfo').offset().top;
  var contactUsOffset = $('#contactUs').offset().top;
  var organizationOffset = $('#organization').offset().top;
 var top = 850;
  $(window).on('scroll',function(e){
      e.preventDefault();
      var winOffset = $(this).scrollTop();

      if(winOffset>=jypInfoOffset-top){
        $('#jypInfo').removeClass('default');
      };

      if(winOffset>=contactUsOffset-top){
        $('#contactUs').removeClass('default');
      };

      if(winOffset>=organizationOffset-top){
        $('#organization').removeClass('default');
      };
  });//on
})(this.jQuery);