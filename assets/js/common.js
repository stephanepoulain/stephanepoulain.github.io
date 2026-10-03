$(document).ready(function () {
  // add toggle functionality to the abstract, bibtex and video buttons of publications (_layouts/bib.liquid):
  // each <button aria-controls="..."> opens/closes its panel, closes the entry's other panels, and keeps aria-expanded in sync
  $(".links > button[aria-controls]").click(function () {
    var $button = $(this);
    var $panel = $(document.getElementById($button.attr("aria-controls")));
    var opening = !$panel.hasClass("open");
    $button.siblings("button[aria-controls]").each(function () {
      $(document.getElementById($(this).attr("aria-controls"))).removeClass("open");
      $(this).attr("aria-expanded", "false");
    });
    $panel.toggleClass("open", opening);
    $button.attr("aria-expanded", opening ? "true" : "false");
  });
  // MDB's Waves ripple is attached to every .btn; keep it off links and the publication toggle buttons
  $("a, .links > button[aria-controls]").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });
});
