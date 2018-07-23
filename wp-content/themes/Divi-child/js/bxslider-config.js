jQuery(document).ready(function($) {

  function changeSlideTools(slide) {
    var projectTools = {
      0: {
        tools: ['wordpress', 'lifterlms', 'paypal']
      },
      1: {
        tools: ['wordpress', 'woocommerce', 'stripe']
      }
    };

    console.log('this project tools are ' + projectTools.slide.tools);
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
