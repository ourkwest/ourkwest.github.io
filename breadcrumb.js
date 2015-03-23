
(function() {

    function rootNamify(name, rootName) {
        return name === "." ? rootName : name;
    }

    function breadcrumbify(rootName) {
        var newInnerHtml = "";
        var els = document.getElementsByClassName("breadcrumb");
        for (var j = 0; j < els.length; j++) {
            var bits = els[j].innerHTML.split("/");
            newInnerHtml = rootNamify(bits[bits.length - 1], rootName);
            var link = "..";
            for (var i = bits.length - 2; i >= 0; i--) {
                newInnerHtml = "<a href=\"" + link + "\">" + rootNamify(bits[i], rootName) + "</a> / " + newInnerHtml;
                link += "/..";
            }
            els[j].innerHTML = newInnerHtml;
        }
    }

    breadcrumbify("peterwestmacott.github.io");

}());
