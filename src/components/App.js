import React from "react";
import BotsPage from "./BotsPage";

function App() {
  //setting initial states for the bot collection
  const [botCollection, setBotCollection] = React.useState([]) //initialized to an empty array
  const [checkBotCollection, setCheckBotCollection] = React.useState(false) //initialized to false (no collection currently)

  //rendering the bots
  //fetching data from the local server
  React.useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(bots => {
        //updating state
        setBotCollection(bots)
      })
      //catching errors
      // .catch(error) => {
      //   console.log(error.message)
      // }
  }, [checkBotCollection]) //setting the effect to check bot collection fetched
  
  return (
    <div className="App">
      <BotsPage 
      
      botCollection = {botCollection}
      setBotCollection = {setBotCollection}
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;
