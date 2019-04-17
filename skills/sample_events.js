module.exports = function(controller) {

  var acronyms_map = new Map;
  acronyms_map.set("SWG","Whaaa");

  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am a bot, here to do your bidding.');

  });

  controller.hears(['.*'], 'direct_message,direct_mention', function(bot, message) {
    var response;
    if (acronyms_map.contains(message))
        response   = message.toString()
    console.log(response)
    bot.reply(message, response);
    bot.reply(message, acronyms_map.get(response));
  });


  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });


};
