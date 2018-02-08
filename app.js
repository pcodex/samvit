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

const mytweet0 ={
  status:'The sun never sets at Samvit'  
}

const mytweet1 ={
  status:'Working hard on the #UXDesign for a client website'  
}

const mytweet2 ={
  status:'Getting into the nuts and bolts of #Multithreading with #cplusplus'  
}

const mytweet3 ={
  status:'The Phoenix Project is a must read for all #Devops and #SoftwareEngineer at #Samvit'  
}

const mytweet4 ={
  status:'The most elegant #UXdesign isthe simplest and most intuitive. Less is more at #Samvit'
}

const mytweet5 ={
  status:'Would the #web exist today without #cpluscplus.....we need real #SoftwareEngineers here at Samvit'
}

const mytweet6 ={
  status:'Watch out for the cool new #Android app from our stable'  
}

var dayOfWeek = require('day-of-week').get
dayOfWeek(new Date(2018, 2, 8), 'Australia/Melbourne');

console.log(dayOfWeek);

const mytweet ={
  status:'Checking in'  
}

T.post('statuses/update', mytweet, (err, response) => {
  
        if(err){
           return console.log('Post failed : '+err[0].message);
        }
      const username = response.user.screen_name;
      const followerscnt = response.friends_count;
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


      
  

