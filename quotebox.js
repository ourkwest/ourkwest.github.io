
(function() {

    function pickQuote() {
        quotes = [
          "a",
          "bb"
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function setQuote() {
        var el = document.getElementById("quotebox");
        el.innerText = pickQuote();
    }

    setQuote();

}());
