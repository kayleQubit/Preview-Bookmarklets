javascript: (function () {
  var id = prompt("Please enter variation ID");
  var rememberPreview = function (minutes) {
    minutes = minutes || 15;
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    document.cookie = "smartserve_preview=true; expires=" + date.toGMTString() + "; path=/";
    document.cookie = "etcForceCreative=[" + id + "]; expires=" + date.toUTCString() + "; path=/";
  };
  rememberPreview();
})();

