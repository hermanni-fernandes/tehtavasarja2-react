import { useState } from "react";

// 6) Props – "komponentin parametrit"
// Tässä esimerkissä Parent-komponentti omistaa tilan (parentCount)
// ja välittää sen Child-komponentille propsien kautta.
// Lisäksi hyödynnetään children-propsia.

function ChildBox({ value, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <p>Child-komponentti, arvo propseista: {value}</p>
      <div>{children}</div>
    </div>
  );
}

export default function ParentChildDemo() {
  const [parentCount, setParentCount] = useState(0);

  function handleIncrease() {
    setParentCount((prev) => prev + 1);
  }

  return (
    <section>
      <h2>6. Props – komponentin parametrit (osa 2)</h2>

      <p>Parent-komponentin tila: {parentCount}</p>
      <button onClick={handleIncrease}>Kasvata parent-tilaa</button>

      <ChildBox value={parentCount}>
        <p>
          Tämä teksti tulee children-propsin kautta. ParentCount-arvo on{" "}
          <strong>{parentCount}</strong>.
        </p>
      </ChildBox>
    </section>
  );
}
