import React from "react";
import BotCard from "./BotCard";

function BotCollection({addBot, botCollection, dischargeBot}) {
  // Your code here //transferred to App.js
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*mapping through the bot data to return a single bot-card for each bot*/
        botCollection.map(bot => {
          return (
            <BotCard 
              handleBots={addBot}
              dischargeBot={dischargeBot}
              key={bot.id}
              bot={bot} 
            />
          )
        })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
