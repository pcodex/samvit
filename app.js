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
  status:'Getting into the nuts and bolts of #Multithreading with C++11 #cplusplus'  
}

const mytweet3 ={
  status:'Quicker and smaller deployments should be the norm and not just with unicorns but behemoths too #DevOps'  
}

const mytweet4 ={
  status:'Less code means less defects but readability before brevity #softwaredevelopment'
}

const mytweet5 ={
  status:'Would the #web exist today without #cpluscplus.....we need real #SoftwareEngineers here at Samvit'
}

const mytweet6 ={
  status:'Always keep in touch with the customer and get the big picture #LeanStartUp'  
}

//var currentDayNumber = require('current-day-number');
var currentHour = require('hours');
console.log('Current Hour '+currentHour('today'));


if(currentHour('today') > 22){
  console.log('In 22');
  mytweet = mytweet0;
}
else if(currentHour('today') > 18){
  console.log('In 18');
  mytweet = mytweet1;
}
else if(currentHour('today') > 14){
  console.log('In 14');
  mytweet = mytweet2;
}
else if(currentHour('today') > 12){
  console.log('In 12');
  mytweet = mytweet3;
}
else if(currentHour('today') > 10){
  console.log('In 10');
  mytweet = mytweet4;
}
else if(currentHour('today') > 9){
  console.log('In 9');
  mytweet = mytweet5;
}
else if (currentHour('today') > 8){
  console.log('In 8');
  mytweet = mytweet6;
};


T.post('statuses/update', mytweet, (err, response) => {
  
        if(err){
           return console.log('Post failed : '+err[0].message);
        }
      const username = response.user.screen_name;      
      console.log(`Your name:`+username);      
    });
