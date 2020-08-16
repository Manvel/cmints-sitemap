const init = () =>
{
  const langaugeSelectors = document.querySelectorAll("select.languageSelector");
  for (const langaugeSelector of langaugeSelectors)
  {
    langaugeSelector.addEventListener("change", () =>
    {
      const path = [];
      const {page, root} = langaugeSelector.dataset;
      if (root)
        path.push(root.replace("/", ""));
      if (langaugeSelector.value != "en")
        path.push(langaugeSelector.value);
      path.push(page);
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;
      const port = ":" + window.location.port;
      window.location.href = `${protocol}//${hostname}${port}/${path.join("/")}`;
    });
  }
}

module.exports.init = init;
