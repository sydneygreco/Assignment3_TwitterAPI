window.onload = init;

function init() {

var xhr = new XMLHttpRequest();

xhr.open('GET', 'get_tweets.php', true);

xhr.send(null);

xhr.onload = function(){
	if (xhr.status == 200) {
		// console.log(xhr.responseText);
	var tweets = JSON.parse(xhr.responseText);
	console.log(tweets);

	tweets.statuses.forEach(function(index){
 		var tweet_text = index.text; 
		var $h4 = $("<h4>");
		$h4.text(tweet_text);


		// Credit to Tyler Heaton for the TweetID and out link //
		var tweetid = index.id_str;
		console.log(tweetid);

		var tweetlink = document.createElement("a");
		tweetlink.setAttribute("href", 'http://www.twitter.com/statuses/'+tweetid);
		tweetlink.setAttribute('target','_blank');
		var linktweet = document.createTextNode("Click to see Tweet");

		tweetlink.append(linktweet);

		var $hr = $("<hr>");

		$(".feed-main").append($h4);
		$(".feed-main").append(tweetlink);
		$(".feed-main").append($hr);


	});


		}
	}
}

