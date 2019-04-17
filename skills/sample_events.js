module.exports = function(controller) {

  var acronyms_map = new Map([
    ["SWG","Secure Web Gateway\n\nA Secure Web gateway is a solution that filters unwanted software/malware from user-initiated Web/Internet traffic and enforces corporate and regulatory policy compliance.\n"],
    ["FE","Fast Ethernet"],
    ["FEC","Fast EtherChannel"],
    ["FECPM","Fast Ethernet Combo Port Module"],
    ["FQDN","fully qualified domain name"],
    ["FQPCID","fully qualified procedure correlation identifier"],
    ["FREEDM"," Frame EnginE and Data link Manager"],
    ["FRMR","Frame Reject"],
    ["FRoM","FrameRelay over MPLS"],
    ["FRoMPLS","FrameRelay over MPLS"],

    ["ASA","Adaptive Security Appliance\n\nCisco ASA is a security device that combines firewall, antivirus, intrusion prevention, and virtual private network (VPN) capabilities."],
    ["FTD","Firepower Threat Defense\n\nCisco Firepower Threat Defense (FTD) is a unified software image, which includes the Cisco ASA features and FirePOWER Services. This unified software is capable of offering the function of ASA and FirePOWER in one platform, both in terms of hardware and software features\n"],
    ["TAC","Technical Assistance Center\n\nTechnical Assistance Center, or TAC, is the department that's primary purpose is technical assistance. TAC also works closely with a the Network Operations Center, or NOC. The purpose of a TAC is to support customers with technical issues regarding the equipment developed/delivered by the company which delivers the TAC support.\n"],
    ["SAFe","Scaled Agile Framework\n\nThe Scaled Agile Framework (abbreviated as SAFe), is a set of organization and workflow patterns intended to guide enterprises in scaling lean and agile development\n"],
    ["STATS","Umbrella Reporting\n\nCisco Umbrella's reports offer a better understanding of Umbrella usage. Gain insights into request activity and blocked activities\n"],
    ["CCP","Security Customer Connection program\n\nMonthly briefings covering Cisco Collaboration, Network Architecture, Security and Data Center solutions, product roadmaps, and technical topics requested by members. These Cisco Webex virtual meetings enable interactive discussions and Q&A.\n"],
    ["POC","Proof of Concept\n\nProof of concept is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential. A proof of concept is usually small and may or may not be complete.\n"],
    ["EPM","External Packet Memory"],



]);

  controller.on('bot_space_join', function(bot, message) {
    bot.reply(message, 'Message me an Cisco cloud acronym and I will tell you what it stands for!\n\n');
  });

  controller.hears(['.*'], 'direct_message,direct_mention', function(bot, message) {
    if (acronyms_map.has(message.text))
      bot.reply(message, acronyms_map.get(message.text));
    else
      bot.reply(message, "invalid input");
  });


  controller.on('user_space_join', function(bot, message) {
    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);
  });


};
