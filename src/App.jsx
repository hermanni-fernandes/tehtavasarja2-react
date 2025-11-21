import { useState } from "react";
import "./App.css";
import ControlledExample from "./ControlledExample.jsx";
import WindowSize from "./WindowSize.jsx";
import Message from "./Message.jsx";
import ParentChildDemo from "./ParentChildDemo.jsx";
import TimeDisplay from "./TimeDisplay.jsx";

// 1) Esimerkki uudesta tilasta (state) funktionaalisessa komponentissa
function Counter() {
  // Lähtöarvo 0 (default)
  // count = nykyinen tila, setCount = tilan päivitysfunktio
  // Tässä käytetään JavaScriptin array-destructuring -syntaksia useState-hookin kanssa
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // Päivitetään tila aiemman arvon pohjalta
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <section>
      <h2>1. Uusi tila (useState)</h2>
      <p>Nykyinen arvo: {count}</p>
      <button onClick={handleIncrement}>Lisää +1</button>
    </section>
  );
}

// 2) Tapahtumien kuuntelu (events): click + change
function EventsDemo() {
  // Napin klikkausten määrä
  const [clickCount, setClickCount] = useState(0);

  // Tekstikentän arvo (controlled input)
  const [name, setName] = useState("");

  // Klikkaustapahtuman käsittelijä
  function handleButtonClick() {
    setClickCount((prev) => prev + 1);
  }

  // Tekstikentän muutostapahtuman käsittelijä
  function handleInputChange(event) {
    // event.target.value sisältää uuden arvon
    setName(event.target.value);
  }

  return (
    <section>
      <h2>2. Tapahtumien kuuntelu (onClick & onChange)</h2>

      <div>
        <button onClick={handleButtonClick}>Klikkaa minua</button>
        <p>Nappia klikattu: {clickCount} kertaa</p>
      </div>

      <div>
        <label>
          Kirjoita nimesi:{" "}
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Esim. Diego"
          />
        </label>
        <p>Syötetty nimi (controlled state): {name || "—"}</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <h1>Tehtäväsarja 2.1 – Reactin perusteet</h1>

      {/* 1. useState */}
      <Counter />

      {/* 2. Events */}
      <EventsDemo />

      {/* 3. Controlled State */}
      <ControlledExample />

      {/* 4. useEffect */}
      <WindowSize />

      {/* 5. Komponenttirakenne & Props (osa 1) */}
      <Message text="Tämä viesti tulee erillisestä komponentista!" />

      {/* 6. Props – komponentin parametrit (osa 2) */}
      <ParentChildDemo />

      {/* 7. Räätälöity Hook – Custom Hook */}
      <TimeDisplay />

    </>
  );
}


export default App;
