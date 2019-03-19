window.onload = function() {
  var defTop = document.getElementById("def-top");
  defTop.outerHTML = wet.builder.top({
    lngLinks: [
      {
        lang: "fr",
        href: "#",
        text: "N/A"
      }
    ],
    breadcrumbs: [
      {
        title: "Home",
        href: "https://www.canada.ca/en/"
      },
      {
        title: "ESDC",
        href: "https://www.canada.ca/en/employment-social-development.html"
      }
    ]
  });

  var defPreFooter = document.getElementById("def-preFooter");
  defPreFooter.outerHTML = wet.builder.preFooter({
    dateModified: "2019-03-19",
    versionIdentifier: "0.2.0",
    showFeedback: false
  });

  var defFooter = document.getElementById("def-footer");
  defFooter.outerHTML = wet.builder.footer({
    contactLinks: [
      {
        href: "https://github.com/esdc-devx/AppHub/issues"
      }
    ]
  });
};
