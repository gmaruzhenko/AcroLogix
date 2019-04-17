module.exports = function(controller) {

  var acronyms_map = {"SWG":"WHAAAA"};
  var acronyms = ["SWG"]



  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am a bot, here to do your bidding.');

  });

  controller.hears(acronyms.values(), 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, acronyms_map.value(message));
  });

  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });


};
