var CryptoNewsAPI = require('crypto-news-api').default

const Api = new CryptoNewsAPI('ef472118f77a42d01051b5c7ce5ec0a9')

const ProxyApi = new CryptoNewsAPI('ef472118f77a42d01051b5c7ce5ec0a9', 'http://cryptocontrol_proxy/api/v1/public')

Api.enableSentiment()

Api.getTopNews()
    .then(function (articles) { 
        console.log(articles[0].title);
        console.log(articles[0].publishedAt);
        console.log(articles[0].sourceDomain);
        console.log(articles[0].url);
    })
    .catch(function (error) { console.log(error) })
