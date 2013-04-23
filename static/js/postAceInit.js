exports.postAceInit = function(){
  /* on click */
  $('#options-visual_slider').on('click', function() {
    if($('#options-visual_slider').is(':checked')) {
      visual_slider.enable(); // enables line visual_sliderping
   } else {
      $('#options-visual_slider').attr('checked',false);
      visual_slider.disable(); // disables line visual_sliderping
    }
  });
  if($('#options-visual_slider').is(':checked')) {
    visual_slider.enable();
  } else {
    visual_slider.disable();
  }

  var urlContainsvisual_sliderTrue = (visual_slider.getParam("visual_slider") == "true"); // if the url param is set
   if(urlContainsvisual_sliderTrue){
    $('#options-visual_slider').attr('checked','checked');
    visual_slider.enable();
  }else if (visual_slider.getParam("visual_slider") == "false"){
    $('#options-visual_slider').attr('checked',false);
    visual_slider.disable();
  }
}
