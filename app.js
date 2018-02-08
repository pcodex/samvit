const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

// Set up your count and search parameters
/*
const params = {
  q: '#elonmusk',  
  result_type: 'recent',
  lang: 'en'
}*/

const mytweet ={
  status:'Watch out for the cool new Android app from out stable'  
}

T.post('statuses/update', mytweet, (err, response) => {
  
        if(err){
           return console.log('Post failed : '+err[0].message);
        }
      const username = response.user.name;
      const followerscnt = response.followers_count;
      //const favoritedTweetId = response.id_str;
      console.log(`Your name:`+username);
      console.log(`Your follower count:`+followerscnt);
    });

/*
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
           return console.log('Retweet failed : '+err[0].message);
        }
      const username = response.user.screen_name;
      //const favoritedTweetId = response.id_str;
      console.log(`Retweeted: https://twitter.com/${username}`);
    });
  
});
*/


      
  

