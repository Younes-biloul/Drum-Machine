import { useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import Drum from "./components/Drum";
import Switcher from "./components/Switcher";

function App() {
  const songArr = [
    {
      key: "A",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1",
    },
    {
      key: "B",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2",
    },
    {
      key: "C",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3",
    },
    {
      key: "D",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4",
    },
    {
      key: "E",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap",
    },
    {
      key: "F",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open-HH",
    },
    {
      key: "G",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick-n'-Hat",
    },
    {
      key: "H",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      key: "I",
      voice: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed-HH",
    },
  ];

  const leftFloat = {
    float: "left",
  };
  const rightFloat = {
    float: "right",
  };
  const [bank, setBank] = useState("leftFloat");
  const [power, setPower] = useState("leftFloat");
  const handleClick = (type) => {
    // Toggle the position based on the current position
    if (type === "power") {
      setPower((prevBank) =>
        prevBank === "leftFloat" ? "rightFloat" : "leftFloat"
      );
    } else if (type === "bank") {
      setBank((prevBank) =>
        prevBank === "leftFloat" ? "rightFloat" : "leftFloat"
      );
    }
  };
  const displayerValue = useSelector((state) => state.displayer);

  const [volume, setVolume] = useState(50); // Initial volume value

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);

    const audioElements = document.getElementsByTagName("audio");
    // Iterate through each audio element and set its volume
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].volume = newVolume / 100; // Convert to decimal for volume (0 to 1)
    }
  };
  return (
    <div className="container flex" id="drum-machine">
      <div className="key">
        {songArr.map((item) => {
          return (
            <Drum
              key={item.key}
              data={item}
              power={power == "leftFloat" ? true : false}
              id="drum-pad"
            />
          );
        })}
      </div>
      <div className="setting">
        <Switcher
          switcherName="Power"
          newstyle={power === "leftFloat" ? leftFloat : rightFloat}
          onClick={() => handleClick("power")}
        />

        <div id="display">{displayerValue}</div>

        <input
          type="range"
          min={"0"}
          max={"100"}
          name="volume"
          id="volume"
          value={volume}
          onChange={handleVolumeChange}
        />

        <Switcher
          switcherName="Bank"
          newstyle={bank === "leftFloat" ? leftFloat : rightFloat}
          onClick={() => handleClick("bank")}
        />
      </div>
    </div>
  );
}

export default App;
