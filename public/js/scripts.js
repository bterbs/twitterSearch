$(document).ready(function() {
  console.log('The DOM is ready, B.')

  $('search-btn').on('click', () => {
    //let formData = $('#search-box').val();
    //getTweets(formData);
    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    console.log('you clicked the search button!');
  });

})
