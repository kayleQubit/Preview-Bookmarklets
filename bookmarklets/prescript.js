javascript: (function () {
  var rememberPreview = function (minutes) {
    var previewSettings = '{"preview":true,"remember":true}'
    var previewCookie = encodeURIComponent(previewSettings)
    var date = new Date();
    date.setTime(date.getTime() + ((minutes && 30) * 60 * 1000));
    document.cookie = "qb_experiences=none; expires=" + date.toGMTString() + "; path=/;";
    document.cookie = "qb_pre=1; expires=" + date.toGMTString() + "; path=/;";
    document.cookie = "qb_opts=" + previewCookie + "; expires=" + date.toGMTString() + "; path=/;";
  };
  rememberPreview();
})();

