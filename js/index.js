var template = {
  colors: ["#222", "#fd2722", "#ff962c", "#a3d446", "#3a2726", "#ffce45"],
  branch: {
    lineWidth: 10,
    spacingX: 50,
    labelRotation: 0
  },
  commit: {
    spacingY: -80,
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
  author: ""
});



// Start
var master = gitgraph.branch("joanllenas");
master.commit({ message: "HEAD" });


// 2019
var year = master.branch("2019");
year.commit({ message: "End of 2019" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

articles.commit({
  message: "Dec 26, 2019",
  detailId: "safer-code-with-container-types"
});

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();



// 2018
var year = master.branch("2018");
year.commit({ message: "End of 2018" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

articles.commit({
  message: "Dec 23, 2018",
  detailId: "decoding-json-with-typescript"
});
github.commit({ message: "Dec 21, 2018", detailId: "ts-data-json" });
github.commit({ message: "Dec 17, 2018", detailId: "ngx-remotedata" });
github.commit({ message: "Sep 25, 2018", detailId: "ts-data-either" });
articles.commit({
  message: "Jul 18, 2018",
  detailId: "Controlled-number-input-with-Floats-in-Elm"
});
github.commit({ message: "Mar 11, 2018", detailId: "ts-data-maybe" });
articles.commit({
  message: "Feb 12, 2018",
  detailId: "slaying-a-ui-antipattern-with-angular"
});
articles.commit({
  message: "Jan 6, 2018",
  detailId: "un-sorbo-de-tea-introduccion-a-elm-ii"
});
articles.commit({
  message: "Jan 5, 2018",
  detailId: "un-sorbo-de-tea-introduccion-a-elm-i"
});

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();


// 2017
var year = master.branch("2017");
year.commit({ message: "End of 2017" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

github.commit({ message: "May 21, 2017", detailId: "ngx-date-fns" });
github.commit({ message: "Apr 7, 2017", detailId: "elm-blog" });
articles.commit({
  message: "Mar 5, 2017",
  detailId: "yet-another-typeScript-introduction"
});
github.commit({ message: "Feb 9, 2017", detailId: "flex-layout" });

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();


// 2016
var year = master.branch("2016");
year.commit({ message: "End of 2016" });
var articles = year.branch("Article");
var github = year.branch("GitHub");

github.commit({ message: "Sep 14, 2016", detailId: "videogular2" });
github.commit({ message: "Aug 21, 2016", detailId: "7guis-elm" });
github.commit({ message: "Mar 22, 2016", detailId: "7guis-react" });

articles.merge(year).delete();
github.merge(year).delete();
year.merge(master).delete();


// End
master.commit("Start");

setTimeout( function(){
  window.scrollTo();
}, 1000);
