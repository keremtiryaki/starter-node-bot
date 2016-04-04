var Botkit = require('botkit')
var controller = Botkit.slackbot()

require('beepboop-botkit').start(controller)

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, 'Hello!')
});
