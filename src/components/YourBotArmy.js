import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botBox, remBot, dischargeBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            botBox.map(bot => {
              return (
                <BotCard 
                  key={`${bot.name}${bot.id}`}
                  handleBots={remBot}
                  dischargeBot={dischargeBot}
                  bot={bot}
                />
              )
            })
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
