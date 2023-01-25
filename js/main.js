function resizeMe() {
  var win = $(this),
    w = win.width(),
    h = win.height();
  if (h > w) {
    $("body").css({
      "background-attachment": "fixed",
      "background-size": "90% 50%",
    });
  } else {
    $("body").css({
      "background-attachment": "fixed",
      "background-size": "90% 90%",
    });
  }
}

$(function () {
  resizeMe();

  // onResize... set square
  window.resizeEvt;
  $(window).resize(function () {
    clearTimeout(window.resizeEvt);
    window.resizeEvt = setTimeout(function () {
      resizeMe();
    }, 100);
  });
});
