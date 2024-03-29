function newAceEditor(i){
    var textEl = 'textarea[id=code' + i + ']'    
    var editor = ace.edit("aceeditor" + i);
    var texteditor = $(textEl).hide();
    editor.setTheme("ace/theme/tomorrow");
    editor.setFontSize(14);
    editor.getSession().setMode("ace/mode/r");
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setWrapLimitRange();
    editor.getSession().setTabSize(2);
    editor.getSession().setFoldStyle('markbegin');  
    editor.getSession().setFoldStyle('markbegin');
    editor.getSession().setValue(texteditor.val());
    editor.getSession().on('change', function(e){
      texteditor.val(editor.getSession().getValue());
      texteditor.change();
    });
    texteditor.onchange = function() {
        texteditor.select();
    };
    return(editor);
};

// to debug
function setupCell(i) {
  var myEditor = newAceEditor(i);
  $("#clear" + i).click(function(e){
    
    e.preventDefault();
    $("#result" + i).html("");
    console.log($('#run' + i).data('val'))
    Shiny.unbindAll();
    console.log($('#run' + i).data('val'))
    $("#run" + i).data('val', null);
    console.log($('#run' + i).data('val'))
    Shiny.bindAll();
    console.log($('#run' + i).data('val'))
  })
  return(myEditor);
};

/*
function setupCells(){
  var ACECELLS = []  
  $('div.opencpu').each(function(i){
    ACECELLS[i+1] = setupCell(i+1)
  });
};
*/

function setupCells(){
  var ACECELLS = []  
  $('textarea.knitCode').each(function(i){
    // $(this).attr('id', 'code' + (i + 1))
    ACECELLS[i+1] = setupCell(i+1)
  });
};

function runAll(){
  $('.action-button').click();
}

function setupCellBehaviors(){
  
  // show hint modal
  $("div.opencpu a.hint").click(function(e){
    e.preventDefault();
    bootbox.alert($(this).attr('data-hint'))
    $('.bootbox').find('pre code').each(function(i, e) {hljs.highlightBlock(e)});
    MathJax.Hub.Typeset();
  })
  
  $("div.opencpu a.btn").tooltip({'placement': 'bottom'})
  
  // show check modal
  $(".knitTest").click(function(){
    bootbox.alert('Feature to check code is not implemented yet!')
  });
}


$(document).ready(function(){
  setupCellBehaviors()
  setupCells()
});