const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const mytweet0 ={
  status:'The sun never sets at Samvit'  
}

const mytweet1 ={
  status:'#Android. Why are Tab Layouts so confusing to implement? A TabSelected listener, TabPageChange listener, Page Adapters, Fragments and what not'
}

const mytweet2 ={
  status:'Move away from process oriented reviews to automated testing and greater accountability #LeanStartup #DevOps'  
}

const mytweet3 ={
  status:'Reduce WIP is the mantra at #Samvit. Efficiency and throughput increase when you do not multitask #LeanStartup'  
}

const mytweet4 ={
  status:'Sustain the flow of work, get frequent and pointed feedback and innovate. The 3-fold path recommended in The Phoenix Project #LeanStartup'
}

const mytweet5 ={
  status:'Repetition and practice lead to mastery and efficiency #LeanStartup'
}

const mytweet6 ={
  status:'Make a small improvement every day #Toyota #LeanStartup'  
}

//var currentDayNumber = require('current-day-number');
var currentHour = require('hours');
console.log('Current Hour '+currentHour('today'));

var mytweet=mytweet4;
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
else {
  console.log('In 8');
  mytweet = mytweet6;
}

console.log('Tweet is '+mytweet.status);
T.post('statuses/update', mytweet, (err, response) => {
  
        if(err){
           return console.log('Post failed : '+err[0].message);
        }
      const username = response.user.screen_name;      
      console.log(`Your name:`+username);      
    });
