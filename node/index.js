console.log("de bot start")

var Twit = require('twit')


var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
})



var stream = T.stream('user');
var stream2 = T.stream('user');

stream.on('follow', volgen);
stream2.on('tweet', tweet)

function volgen(event)
{
    console.log("U bent gevolgt");
    var name = event.source.name;
    var screenName = event.source.screen_name;
    tweeten("Hallo " + screenName + " bedankt voor het volgen : )");
    
   
}


function tweet(evenMsg)
{
  
  var fs = require("fs");
  var json = JSON.stringify(evenMsg,null,2);
  fs.writeFile('tweet.json', json)
  

  
  var replyto = evenMsg.in_reply_to_screen_name;
  var text = evenMsg.text;
  var from = evenMsg.user.screen_name;
  var naam = evenMsg.user.name;
  
  if (replyto === "BuddyGames020" ) {
    var tewweeewr = "@" + from + " Hallo " + "@" + naam + " Bedankt voor het tweeten naar mij";
    tweeten(tewweeewr);
    console.log("U bent ge tweet");
  }
  
}




function tweeten(txt) 
{
  


var tweet = { 
    status: txt

}


T.post('statuses/update',tweet,tweeted);


function tweeted(err, data, response) {
  if (err) {
    console.log("er is iets fout gegaan error code: " + data)
  } else {
  console.log("succes");
  
}

}
}
