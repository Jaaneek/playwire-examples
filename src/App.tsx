import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Ramp, RampUnit } from "@playwire/pw-react-component/index";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Ramp publisherId="343" id="926" />
      <RampUnit
        selectorId="pwLeaderboardAtf"
        type="leaderboard_atf"
        cssClass="leaderboard"
      />

      <RampUnit
        selectorId="pwMedRectAtf"
        type="med_rect_atf"
        cssClass="med_rect"
      />

      <div></div>
      <RampUnit type="med_rect_btf" />
      <RampUnit type="med_rect_btf" />
      <RampUnit type="trendi_video" />
    </div>
  );
}

export default App;
