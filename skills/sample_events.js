module.exports = function(controller) {

  var acronyms = {"SWG":"WHAAAA"};


  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am a bot, here to do your bidding.');

  });

  controller.hears(acronyms.keys(), 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, acronyms.value(message));
  });

  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });


};
