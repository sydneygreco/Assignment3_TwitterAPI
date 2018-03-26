<?php

require_once('TwitterAPIExchange.php');


$settings = array(
    'oauth_access_token' => "975794997948657664-Nbsbp7rlICH4ymkAvWSaMxfQKhG8kCf",
    'oauth_access_token_secret' => "VA0QpzmbzTbdEWhXKV6YQ0ytDEeYn3iq6w1879ca13Pdz",
    'consumer_key' => "z4h41DNo1oM3W6L1rwt8yUJ6D",
    'consumer_secret' => "as474BaWjfMbFiUu2PxK7vBAa2WgD1Ik1RVVK5At62Uf9v4MDp"
    );

// Credit to J7mbo under Basic Examples: Search global tweets for a hashtag via GitHub // 
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#fruit&count=125';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

?>


