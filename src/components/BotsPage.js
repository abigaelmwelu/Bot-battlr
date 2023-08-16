import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({botCollection, setBotCollection, setCheckBotCollection}) {
  //start here with your code for step one 
  //adding destructured props
  //setting bot state
  const [botBox, setBotBox] = React.useState([]) //initializing to empty array
  //adding bot to the collection
  const addBot = (bot) => {
    const botInBox = botBox.find((item) => {return (item.id === bot.id)});
    if (!botInBox) {
      setBotBox([...botBox, bot])
    }
  }
  //removing bot from the collection
  const remBot = (bot) =>{
    const botInBox = botBox.find((item) => {return (item.id === bot.id)});
    if (botInBox) {
      setBotBox(botBox.filter((removedBot) => removedBot.id !== bot.id))
    }
  }
  
  //discharging a bot
  const dischargeBot = (bot) => {
    setBotCollection(botCollection.filter((item) => item.id !== bot.id));
    remBot(bot)
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE", 
      headers: {"Content-Type" : "application/json",},
  }, 

    );
    setCheckBotCollection(true)
  }
  return (
    <div>
      <YourBotArmy 
        botBox = {botBox}
        remBot = {remBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection 
        botCollection={botCollection}
        addBot={addBot}
        dischargeBot={dischargeBot}
      />
    </div>
  )
}

export default BotsPage;
