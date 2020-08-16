let root = "";

if (process.argv.includes("--deploy"))
  root = "/cmints-multi-lang-starter"; // Github Pages root

const templateData =
{
  site: {
    root,
    title: "CMintS Starter", // See "layouts/_head.ejs"
    navigation: [
      {
        title: "CMintS",
        link: "https://cmints.io/"
      },
      {
        id: "nav-tutorial",
        link: "https://cmints.io/quick-start"
      },
      {
        id: "nav-github",
        link: "https://github.com/cmints/multi-lang-starter"
      }
    ]
  }
};

module.exports = {root, templateData};
