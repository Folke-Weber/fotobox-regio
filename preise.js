/* Fotobox-Regio – zentrale Preise
   Nur hier ändern. Die Seiten lesen ihre sichtbaren Preisangaben aus dieser Datei. */
window.FOTOBOX_PREISE = {
  privat: {
    fotobox400: 299,
    greenscreen400: 399,
    greenscreen800: 599,
    retro400: 799,
    wohnwagen400: 690,
    fullhouse800: 999
  },
  business: {
    standard400: 490,
    standard800: 590,
    retro400: 890,
    retro800: 990,
    wohnwagen400: 890,
    wohnwagen800: 990,
    fullhouse800: 999
  }
};

(function () {
  function get(path) {
    var parts = path.split(".");
    var v = window.FOTOBOX_PREISE;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return null;
      v = v[parts[i]];
    }
    return v;
  }
  function applyPrices() {
    document.querySelectorAll("[data-price-key]").forEach(function (el) {
      var value = get(el.getAttribute("data-price-key"));
      if (value != null) el.textContent = value + " €";
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPrices);
  } else {
    applyPrices();
  }
})();
