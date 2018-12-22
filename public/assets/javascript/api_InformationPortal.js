$(document).ready(function(){

  function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.iextrading.com/1.0/stock/";

    // Grab text the user typed into the search input, add to the queryParams object
    var tickerValue = $("#search-term0")
      .val()
      .trim();


    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + tickerValue + "/batch?types=quote,news,chart&range=1m&last=1");
    return queryURL + tickerValue + "/batch?types=quote,news,chart&range=1m&last=1";
  };

  $("#run-Financial-Asset-search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();

    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();

    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);

      var headline = response.news[0].headline;

      var h1 = $("<h1>").text(headline);

      $(".header").append(h1);

      var time = response.news[0].datetime;

      var p1 = $("<p>").text(time);

      $(".time").append(p1);

      var source = response.news[0].source;

      var p2 = $("<p>").text(source);

      $(".source").append(p2);

      var url = response.news[0].url;

      var a = $("#url").attr("href",url);

      console.log(a)

      $(".urlDiv").append(a);

        var ctx = document.getElementById('myChart1');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [response.chart[0].date, response.chart[1].date, response.chart[2].date, response.chart[3].date, response.chart[4].date, response.chart[5].date, response.chart[6].date,response.chart[7].date,response.chart[8].date,response.chart[9].date,response.chart[10].date,response.chart[11].date,response.chart[12].date,response.chart[13].date,response.chart[14].date,response.chart[15].date,response.chart[16].date,response.chart[17].date,response.chart[18].date,response.chart[19].date,response.chart[20].date,response.chart[21].date],
                datasets: [{
                    label: response.quote.companyName,
                    backgroundColor: '#918a24',
                    borderColor: '#918a24',
                    data: [response.chart[0].close, response.chart[1].close, response.chart[2].close, response.chart[3].close, response.chart[4].close, response.chart[5].close, response.chart[6].close,response.chart[7].close,response.chart[8].close,response.chart[9].close,response.chart[10].close,response.chart[11].close,response.chart[12].close,response.chart[13].close,response.chart[14].close,response.chart[15].close,response.chart[16].close,response.chart[17].close,response.chart[18].close,response.chart[19].close,response.chart[20].close,response.chart[21].close],
                }]
            },
        
            // Configuration options go here
            options: {}
        });
      //
      // console.log(response.news[0].datetime);
      // console.log(response.news[0].headline);
      // console.log(response.news[0].image);
      //
      // var newsArticleHeadLine = ("<h1>");
      // $(".page-header").append(response.news[0].headline);
      //
      // var newsArticleImage = $("<img>");
      // newsArticleImage.attr("src",response.news[0].image);
      // $("#image").append(newsArticleImage);
      //
      // console.log(response.news[0].related);
      // console.log(response.news[0].source);
      // console.log(response.news[0].url);
    })
  });
//
//   var ticker = $("#searchFinancialAsset");
//   ticker.focus();
//   tickerValue = ticker.val()
//   console.log(tickerValue);
//
//   var queryURL = "https://api.iextrading.com/1.0" + "/stock/" + tickerValue + "/batch?types=quote,news,chart&range=1m&last=1"
//
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   }).then(function(response) {
//       console.log(response);
//   });
// //
});




