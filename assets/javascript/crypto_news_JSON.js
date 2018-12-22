
$(document).ready(function(){
    function buildQueryURL() {
        // queryURL is the url we'll use to query the API
        var queryURL = "https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=98f730ce8f06425db25761ccfec0cdcf";
    
        // Logging the URL so we have access to it for troubleshooting
        console.log("---------------\nURL: " + queryURL + "\n---------------");
        console.log(queryURL)
        return queryURL
      };
    
      $("#run-Crypto-Currency-search").on("click", function(event) {
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

            //First Article 
            
            var headline = response.articles[0].title;
            
            var h1 = $("<h1>").text(headline);

            $(".header1").append(h1);

            var time = response.articles[0].publishedAt;

            var p1 = $("<p>").text(time);

            $(".time1").append(p1);

            var source = response.articles[0].source[0];

            var p2 = $("<p>").text(source);

            $(".source1").append(p2);

            var url = response.articles[0].url;

            var a = $("#url1").attr("href",url);

            $(".urlDiv1").append(a);

            //Second Article

            var headline1 = response.articles[1].title;
            
            var h2 = $("<h1>").text(headline1);

            $(".header2").append(h2);

            var time1 = response.articles[1].publishedAt;

            var p2 = $("<p>").text(time1);

            $(".time2").append(p2);

            var source1 = response.articles[1].source[0];

            var p3 = $("<p>").text(source1);

            $(".source2").append(p2);

            var url1 = response.articles[1].url;

            var a1 = $("#url2").attr("href",url);

            $(".urlDiv2").append(a1);

            //Third Article 

            var headline2 = response.articles[2].title;
            
            var h3 = $("<h1>").text(headline2);

            $(".header3").append(h3);

            var time3 = response.articles[2].publishedAt;

            var p4 = $("<p>").text(time3);

            $(".time3").append(p4);

            var source2 = response.articles[2].source[0];

            var p5 = $("<p>").text(source2);

            $(".source3").append(p5);

            var url = response.articles[0].url;

            var a = $("#url3").attr("href",url);

            $(".urlDiv3").append(a);
    
        })
    });

});
