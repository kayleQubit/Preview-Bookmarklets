javascript: (function () {
  var rememberPreview = function (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + ((minutes && 30) * 60 * 1000));
    document.cookie = "qubit_explorer=1; expires=" + date.toGMTString() + "; path=/;";
  };
  rememberPreview();
})();

