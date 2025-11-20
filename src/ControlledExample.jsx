import { useState } from "react";

// 3) Controlled State – kontrolloitu tila Reactissa
//
// Controlled State tarkoittaa sitä että lomake-elementin (kuten <input>)
// arvo tulee Reactin tilasta — ei selaimen omasta sisäisestä tilasta.
// Syöte on siis "kontrolloitu" Reactin toimesta.
//
// Controlled Statea käytetään kun:
//  - halutaan validoida syöte
//  - halutaan tallentaa syöte sovelluksen tilaan
//  - halutaan että React päättää mitä kentässä lukee

export default function ControlledExample() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h2>3. Controlled State</h2>

      <label>
        Sähköposti:
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="esim. testi@example.com"
        />
      </label>

      <p>Syötetty sähköposti: {email || "—"}</p>
    </section>
  );
}
