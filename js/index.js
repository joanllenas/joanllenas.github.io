var template = {
  colors: ["#222", "#fd2722", "#ff962c", "#a3d446", "#3a2726", "#ffce45"],
  branch: {
    lineWidth: 10,
    spacingX: 50,
    labelRotation: 0
  },
  commit: {
    spacingY: -50,
    dot: {
      size: 14
    },
    message: {
      font: "normal 8pt monospace"
    }
  }
};

var gitgraph = new GitGraph({
  template: template,
  author: "",
  orientation: "vertical-reverse"
});



// Start
var master = gitgraph.branch("devFlow");
master.commit({ message: "Start" });

// 2016
var year = master.branch("2016");
year.commit({ message: "Start" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

github.commit({ message: "Mar 22, 2016", detailId: "7guis-react" });
github.commit({ message: "Aug 21, 2016", detailId: "7guis-elm" });
github.commit({ message: "Sep 14, 2016", detailId: "videogular2" });

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();

// 2017
var year = master.branch("2017");
year.commit({ message: "Start" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

github.commit({ message: "Feb 9, 2017", detailId: "flex-layout" });
articles.commit({
  message: "Mar 5, 2017",
  detailId: "yet-another-typeScript-introduction"
});
github.commit({ message: "Apr 7, 2017", detailId: "elm-blog" });
github.commit({ message: "May 21, 2017", detailId: "ngx-date-fns" });

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();

// 2018
var year = master.branch("2018");
year.commit({ message: "Start" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

articles.commit({
  message: "Jan 5, 2018",
  detailId: "un-sorbo-de-tea-introduccion-a-elm-i"
});
articles.commit({
  message: "Jan 6, 2018",
  detailId: "un-sorbo-de-tea-introduccion-a-elm-ii"
});
articles.commit({
  message: "Feb 12, 2018",
  detailId: "slaying-a-ui-antipattern-with-angular"
});
github.commit({ message: "Mar 11, 2018", detailId: "ts-data-maybe" });

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();

// End
master.commit("HEAD");

setTimeout( function(){
  window.scrollTo();
}, 1000);