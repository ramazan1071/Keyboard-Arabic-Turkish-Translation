function alpha(item) {
    var input = document.conversion.saisie;
   
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    }
    else {
        input.value += item;
        input.focus();
    }
}