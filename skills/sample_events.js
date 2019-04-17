module.exports = function(controller) {

  var acronyms_map = new Map([
    ["SWG","Secure Web Gateway\n\nA Secure Web gateway is a solution that filters unwanted software/malware from user-initiated Web/Internet traffic and enforces corporate and regulatory policy compliance.\n"]

  ]);

  controller.on('bot_space_join', function(bot, message) {
    bot.reply(message, 'Message me an Cisco cloud acronym and I will tell you what it stands for!\n\nFor a list of registered acronyms enter \"list\"');
  });

  controller.hears(['.*'], 'direct_message,direct_mention', function(bot, message) {
    if (message.text.toLowerCase()==="list")
      bot.reply(message, acronyms_map.map());
    else if (acronyms_map.has(message.text))
      bot.reply(message, acronyms_map.get(message.text));
    else
      bot.reply(message, "invalid input");
  });


  controller.on('user_space_join', function(bot, message) {
    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);
  });


};
