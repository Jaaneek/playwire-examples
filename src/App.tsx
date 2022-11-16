import { useState } from "react";
import "./App.css";
import { PlaywireContainer } from "./PlaywireContainer";
import AdvertisementDisplay from "./PlaywireContainer/AdDisplay";
import { AdvertisementSticky } from "./PlaywireContainer/AdSticky";
import { AdUnit } from "./PlaywireContainer/AdUnit";
function App() {
  return (
    <div className="App">
      {" "}
      <PlaywireContainer></PlaywireContainer>
      <div>
        <AdvertisementDisplay>
          <AdUnit type="leaderboard-bottom" />
        </AdvertisementDisplay>
        <AdvertisementSticky />
      </div>
    </div>
  );
}

export default App;
