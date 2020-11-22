$('#tocButton').click(() => {
  $('#toc').toggle();
});

var visual_slider = {

  enable() {
    $('#toc').show().css('width', '180px');
    $('#editorcontainer').css('right', '200px');
    $('#editorcontainer').css('width', 'auto');
  },

  disable() {
    $('#toc').hide();
    $('#editorcontainer').css('width', '100%');
  },

  // Find Tags

  findTags() {
    const toc = {};
    // below is VERY slow
    const divs = $('iframe[name="ace_outer"]').contents().find('iframe').contents().find('#innerdocbody').children('div');
    $(divs).each(function () {
      let tag = '' || $(this).context.firstChild.nodeName;
      tag = tag.toLowerCase();
      if (tag == 'h1' || tag == 'h2' || tag == 'h3') {
        const newY = `${$(this).context.offsetTop}px`;
        const linkText = $(this).text(); // get the text for the link
        const focusId = $(this).parent()[0].id; // get the id of the link
        const tagType = tag;
        // lazy programmer is lazy
        const TOCString = `<a class='tocItem toc${tagType}' data-class='toc${tagType}' onClick="visual_slider.scroll('${newY}');" data-offset='${newY}'>${linkText}</a>`;
        $('#tocItems').append(TOCString);
      }
    });
  },


  // get HTML
  getPadHTML() {
    if ($('#options-toc').is(':checked')) {
      $('#tocItems').html('');
      visual_slider.findTags();
    }
  },

  update() {
    visual_slider.getPadHTML();
  },

  scroll(newY) {
    const $outerdoc = $('iframe[name="ace_outer"]').contents().find('#outerdocbody');
    const $outerdocHTML = $('iframe[name="ace_outer"]').contents().find('#outerdocbody').parent();
    $outerdoc.scrollTop(newY); // works in Chrome not FF
    $outerdoc.animate({scrollTop: newY});
    $outerdocHTML.animate({scrollTop: newY}); // needed for FF
  },
  getParam(sname) {
    let params = location.search.substr(location.search.indexOf('?') + 1);
    let sval = '';
    params = params.split('&');
    // split param and value into individual pieces
    for (let i = 0; i < params.length; i++) {
      temp = params[i].split('=');
      if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
  },

};
