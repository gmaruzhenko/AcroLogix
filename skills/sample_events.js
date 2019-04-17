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

    ["PSBL"," Product Security Baseline\n\nThe Product Security Baseline (PSB) defines security-related functionality. PSB requirements are gathered from internal and external sources.\n"],
    ["PSIRT","Product Security and Incident Response Team\n"],
    ["LMA","Lifecycle Management Applications\n\n(used to release Cisco offerings)\n\nApplication lifecycle management (ALM) is the product lifecycle management (governance, development, and maintenance) of computer programs.\n"],
    ["PLM","Product Lifecycle Management\n\nProduct life-cycle management is the succession of strategies by business management as a product goes through its life-cycle. The conditions in which a product is sold changes over time and must be managed as it moves through its succession of stages.\n"],
    ["AOEA","Annuity Offer Enablement Automation\n"],
    ["CIE","cloud infrastructure engineering\n\nCloud infrastructure engineering combine design, engineering, and technology skills to enable clients to use cloud computing systems.\n"],
    ["FDM","Firepower Device Management\n\nFirepower Device Manager is a web-based local manager. Users only have to point their browser at the firewall in order to configure and manage the device. ... The Firepower Device Manager provides firewall management through a thin client. It does not include Java in its design.\n"],
    ["EDR","Endpoint Detection and Response\n\nEndpoint detection and response is a technology addressing the need for continuous monitoring and response to advanced threats.\n"],

    ["CSDL"," Cisco Secure Development Lifecycle\n\nCisco Secure Development Lifecycle (CSDL) is a repeatable and measurable proces designed to increse Cisco product resiliency and trustworthiness.\n"],
    ["FMC","Firepower Management Center\n"],
    ["TAM","Technical Account Manager\n"],
    ["ISE","Identify Services Engine (ISE)\n"],
    ["CSTA","[Cisco Security Technology Alliance (CSTA)](http://app.campaignmgr.cisco.com/e/er?s=1865283171&lid=18392&elqTrackId=FB9E3C2E2F7ECA65C579CBFF08D50AB4&elq=f79660adaf324bb681164e052a0dc220&elqaid=4582&elqat=1)  \n"],
    ["PII","Personally Identifiable Information\n"],
    ["DNS Tunneling","A method for encoding data making it look like a DNS query to exfiltrate sensitive data.\n"],
    ["ELT","Executive Leadership Team\n"],
    ["SRC","Security Readiness Criteria\n"],
    ["CPDM","Cisco Product Development Methodology\n"],
    ["SRP","Security Readiness Plan (formerly VCP)\n"],
    ["VCP","Vulnerability Closure Plan"],
    ["SI","Security Insights"],

    ["S&TO","Security and Trust Organization"],
    ["GSX","Cisco Global Sales Conference"],
    ["GSSO","Global Security Sales Organization"],
    ["DPL","Design Pattern Library"],
    ["VA","Virtual Appliances\n\nA virtual appliance is a pre-configured virtual machine image, ready to run on a hypervisor; virtual appliances are a subset of the broader class of software appliances. Installation of a software appliance on a virtual machine and packaging that into an image creates a virtual appliance.\n"],
    ["CDO","Cisco Defense Orchestrator\n\nCisco Defense Orchestrator helps a network operations team easily manage policies across Cisco security products.  Simplify and unify policy across Cisco firewalls, next-generation firewalls, Cisco Web Security Appliances, and Cisco Umbrella.\n"],
    ["dCloud","Cisco’s Cloud-Based Demos & Lab Platform"],
    ["STLDP","SE Transitions & Leadership Development Program (global, nomination-only, high potential leadership development program for Systems Engineers.)\n"],
    ["CATO","Cloud Approval to Operate (All Cisco Cloud Offerings)\n"],

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
