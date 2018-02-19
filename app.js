const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const mytweet0 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 8) Code Complete: A Practical Handbook of Software Construction Steve McConnell #books #software'  
}

const mytweet1 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 9) The Pragmatic Programmer: From Journeyman to Master Andrew Hunt #books #software'
}

const mytweet2 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 10) Structure and Interpretation of Computer Programs Harold Abelson #books #software'
}

const mytweet3 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 11) Refactoring: Improving the Design of Existing Code Martin Fowler #books #software'
}

const mytweet4 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 12) Clean Code: A Handbook of Agile Software Craftsmanship Robert C Martin #books #software'
}

const mytweet5 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 13) Programming Pearls (2nd Edition) Jon Bentley #books #software'
}

const mytweet6 ={
  status:'Books prescribed for #Softwareengineers at #Samvit. 14) Code: The Hidden Language of Computer Hardware and Software Charles Petzold #books #software'  
}

var currentDayNumber = require('current-day-number');
//var currentHour = require('hours');
console.log('Current Day Number '+currentDayNumber());
var cd = currentDayNumber()%7;

var mytweet=mytweet0;
if(cd == 0){
  console.log('In d0');
  mytweet = mytweet0;
}
else if(cd == 1){
  console.log('In d1');
  mytweet = mytweet1;
}
else if(cd == 2){
  console.log('In d2');
  mytweet = mytweet2;
}
else if(cd == 3){
  console.log('In d3');
  mytweet = mytweet3;
}
else if(cd == 4){
  console.log('In d4');
  mytweet = mytweet4;
}
else if(cd == 5){
  console.log('In d5');
  mytweet = mytweet5;
}
else {
  console.log('In d6');
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
