var SlackBot = require('slackbots');

const token = process.env.PROBLEM_BOT_TOKEN
var bot = new SlackBot({
    token,
    name: 'My Bot'
});


bot.on("message", msg => {
    var counter = 0;
    switch (msg.type) {
    case "message":
      console.log(counter)
      if (msg.channel[0] === "D" && msg.bot_id === undefined) {
          switch (counter) {
              case 0 : { 
                  bot.postMessage(msg.user, "I'm here to help! What are you stuck with?", { as_user: true });
                  counter = counter + 1;
                }
              case 1 : { 
                  bot.postMessage(msg.user, "What have you tried so far to solve this issue? Have you debugged as far as you can, searched the internet far and wide?", { as_user: true })
                  counter = 0;
                }
          }
      }
      break
    }
  })