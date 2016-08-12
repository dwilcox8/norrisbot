/*# bin/bot.js*/

'use strict'

//var NorrisBot = require('../lib/norrisbot.js');
var NorrisBot = require('../lib/danbot.js');

var token = process.env.BOT_API_KEY;
//var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;


//create an instance of norrisbot and run it
var norrisbot = new NorrisBot({
	token: token,
	name: name
	//dbPath: dbPath

});

norrisbot.run();