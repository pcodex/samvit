const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const mytweet0 ={
  status:'Books prescribed for engineers at #Samvit. Personal #Kanban : Mapping Work|Navigating Life by Jim Benson and Tonianne DeMaria Barry'  
}

const mytweet1 ={
  status:'Books prescribed for engineers at #Samvit. 1)The Goal : A Process of Ongoing Improvement by Eliyahu Goldratt a must read for efficient #SoftwareDevelopment'
}

const mytweet2 ={
  status:'Books prescribed for engineers at #Samvit. 2)The Five Dysfunctions of a Team : A Leadership Fable by Patrick Lencioni #LeanStartup #DevOps #SoftwareDevelopment'
}

const mytweet3 ={
  status:'Books prescribed for engineers at #Samvit. 3)Toyota Kata:Managing People for Improvement, Adaptiveness and Superior Results by Mike Rother #LeanStartup'  
}

const mytweet4 ={
  status:'Books prescribed for engineers at #Samvit. Cont Delivery:Reliable SW Releases through Build, Test and Deployment Automation by Jez Humble and Davide Farley #DevOps'
}

const mytweet5 ={
  status:'Books prescribed for engineers at #Samvit. Release It!Design and Deploy Production Ready Software by Michael Nygard #DevOps'
}

const mytweet6 ={
  status:'Books prescribed for engineers at #Samvit. Kanban:Successful Evolutionary Change for your Tech Business by David Anderson #Kanban'  
}

var currentDayNumber = require('current-day-number');
//var currentHour = require('hours');
console.log('Current Day Number '+currentDayNumber());
var cd = currentDayNumber()%7;

var mytweet=mytweet0;
if(cd == 0){
  console.log('In 0');
  mytweet = mytweet0;
}
else if(cd == 1){
  console.log('In 1');
  mytweet = mytweet1;
}
else if(cd == 2){
  console.log('In 2');
  mytweet = mytweet2;
}
else if(cd == 3){
  console.log('In 3');
  mytweet = mytweet3;
}
else if(cd == 4){
  console.log('In 4');
  mytweet = mytweet4;
}
else if(cd == 5){
  console.log('In 5');
  mytweet = mytweet5;
}
else {
  console.log('In 6');
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
