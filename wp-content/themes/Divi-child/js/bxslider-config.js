jQuery(document).ready(function($) {

  function changeSlideTools(slide) {
    var tools;
    var templateDirectory = php.templateURL;

    switch(slide) {
      case 0:
        tools = ['wordpress', 'lifterlms', 'activecampaign'];
      break;

      case 1:
        tools = ['wordpress', 'woocommerce', 'paypal'];
      break;
    }

    $( ".tool1, .tool2, .tool3" ).fadeOut( "slow", function() {
      $('.tool1').attr("src", templateDirectory + '/' + tools[0] + '.png');
      $('.tool2').attr("src", templateDirectory + '/' + tools[1] + '.png');
      $('.tool3').attr("src", templateDirectory + '/' + tools[2] + '.png');

      $( ".tool1, .tool2, .tool3" ).fadeIn("slow", function(){
        console.log('change complete ' + templateDirectory + '/' + tools[0] + '.png')
      });
    });


  }

  $('.slider').bxSlider({
    pager: false,
    onSlideBefore: function() {
      console.log('current slide is ' + this.getCurrentSlide());
      var currentSlide = this.getCurrentSlide();
      changeSlideTools(currentSlide);
    },
    /*projectTools: {
      0: {
        tools: ['wordpress', 'lifterlms', 'paypal']
      },
      1: {
        tools: ['wordpress', 'woocommerce', 'stripe']
      }
    }*/
  });


});
