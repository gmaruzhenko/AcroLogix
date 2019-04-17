module.exports = function(controller) {

  var acronyms = [
    {key: "SWG", value: "Secure Web Gateway\n" +
          "A Secure Web gateway is a solution that filters unwanted software/malware from user-initiated Web/Internet traffic and enforces corporate and regulatory policy compliance.\n"},
    {key: 2, value: 20},
    {key: 3, value: 30}];


  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am a bot, here to do your bidding.');

  });

  controller.hears(acronyms.keys(), 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, acronyms.values());
  });

  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });


};
