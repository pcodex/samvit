const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

// Set up your count and search parameters
const params = {
  q: '#elonmusk',  
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, (err, data, response) => {
  
    // If there is no error, proceed
    if(err){      
      return console.log(err);
    }  
    console.log(data.statuses[0].id_str);
  
    const tweetsId = data.statuses[0].id_str;    
    T.post('statuses/retweet/:id', tweetsId, (err, response) => {
  
        if(err){
           return console.log('Retweet failed : '+err);
        }
      const username = response.user.screen_name;
      //const favoritedTweetId = response.id_str;
      console.log(`Retweeted: https://twitter.com/${username}`);
    });
  
});



      
  

