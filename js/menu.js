function initializeMenu() {
  var posOpts = {
    position: {
      my: "left top",
      at: "center bottom"
    }
  };

  $('.main-navigation').menu(posOpts);
  var childLists = $('.main-navigation > li.ui-menu-item > ul');
  $.each(childLists, function(index, childList) {
    $(childList)
      .parent('li.ui-menu-item')
      .addClass('ui-menu-parent');
  });
}

$('document').ready(function() {
  initializeMenu();
});
