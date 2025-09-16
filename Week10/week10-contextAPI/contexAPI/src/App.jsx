import React, { useState } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState();
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <br />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}
function BulbState({ bulbOn }) {
  return <>{bulbOn ? "Bulb On" : "Bulb Off"}</>;
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  return <button onClick={() => setBulbOn(!bulbOn)}>Toggle the bulb</button>;
}

export default App;
