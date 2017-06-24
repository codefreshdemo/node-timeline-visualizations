"use strict";

var consumer_key = process.env.TWIT_CONSUMER_KEY;
var consumer_secret = process.env.TWIT_CONSUMER_SECRET;
var access_token = process.env.TWIT_TOKEN;
var access_token_secret = process.env.TWIT_TOKEN_SECRET;
var screen_name = process.env.TWIT_SCREEN_NAME;


module.exports = {
    consumer_key:        consumer_key,
    consumer_secret:     consumer_secret,
    access_token:        access_token,
    access_token_secret: access_token_secret,
    screen_name:         screen_name
};