var clipboard;
! function () {
    "use strict";
    jQuery(document).ready(function () {
        document.querySelectorAll("pre span.escape").forEach(function (e, n) {
            e.classList.contains("escape");
            for (var r = 1 / 0, t = e.innerText.replace(/^\n/, "").trimRight().split("\n"), c = 0; c < t.length; c++) t[c].trim() && (r = Math.min(t[c].search(/\S/), r));
            for (var i = [], c = 0; c < t.length; c++) i.push(t[c].replace(new RegExp("^ {" + r + "}", "g"), ""));
            e.innerText = i.join("\n")
        }), document.querySelectorAll("pre span.escape").forEach(function (e) {
            hljs.highlightBlock(e)
        })
    })
}(), window.ClipboardJS && (clipboard = new ClipboardJS(".btn-copy-clipboard", {
    target: function (e) {
        e = e.closest(".tab-pane.active");
        return el = e.querySelector(".html.escape")
    }
})).on("success", function (e) {
    var n = e.trigger.innerHTML;
    e.trigger.innerHTML = "Copied", setTimeout(function () {
        e.trigger.innerHTML = n
    }, 3e3), e.clearSelection()
});