
(function() {

    function pickQuote() {
        quotes = [
          "Great minds like a think.",
          "The only thing more predictable than the passage of time, is people's ability to be surprised by it.",
          "Hex and Bugs and Sausage Rolls!",
          "If you're not cynical then you're not paying attention.",
          "If a tree falls in a forest and no amateur philosophers contemplate it, does it cause a fruitless discussion of semantics?",
          "Running all servers in UGT since this morning.",
          "🎶...up above the world so high, fusing hydrogen nuclei...🎶",
          "It's bad luck to be superstitious.",
          "The soundest surround-sound sounds around abound, in my abode.",
          "I stole the scapegoat!",
          "Remember that you are unique. Just like everyone else."
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function setQuote() {
        var el = document.getElementById("quotebox");
        el.innerText = pickQuote();
    }

    setQuote();

}());
