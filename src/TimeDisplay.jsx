import useCurrentTime from "./useCurrentTime";

// Komponentti, joka hyödyntää custom Hookia (useCurrentTime)
export default function TimeDisplay() {
  const currentTime = useCurrentTime();

  return (
    <section>
      <h2>7. Räätälöity Hook – Custom Hook</h2>
      <p>Nykyinen aika: {currentTime.toLocaleTimeString()}</p>
    </section>
  );
}
