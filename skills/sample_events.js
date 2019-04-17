module.exports = function(controller) {

  var acronyms_map = new Map([
      ["SWG","Secure Web Gateway\nA Secure Web gateway is a solution that filters unwanted software/malware from user-initiated Web/Internet traffic and enforces corporate and regulatory policy compliance.\n"]

  ]);


  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am a bot, here to do your bidding.');

  });

  controller.hears(['.*'], 'direct_message,direct_mention', function(bot, message) {
    var response;
    response = message.text
    if (acronyms_map.has(response))
      bot.reply(message, acronyms_map.get(response));
    else
      bot.reply(message, "invalid input");
  });


  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });


};
