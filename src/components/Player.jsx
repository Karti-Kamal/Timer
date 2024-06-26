import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [entredPlayerName, setEntredPlayerName] = useState(null);
//test
  function handleClick() {
    setEntredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {entredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
