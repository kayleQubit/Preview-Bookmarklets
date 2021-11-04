javascript: (function () {
  var id = prompt("Please enter placement ID");
  var content = confirm('Do you want to preview Content?') ? "SAMPLE" : "NULL";
  var rememberPreview = function (minutes) {
    var previewSettings = '{"preview":true,"remember":true,"placementId":["' + id + '"],"mode":["' + content + '"],"experiences":["none"]}'
    minutes = minutes || 15
    var previewCookie = encodeURIComponent(previewSettings)
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    document.cookie = "qb_opts=" + previewCookie + "; expires=" + date.toGMTString() + "; path=/;";
  };
  rememberPreview();
})();

