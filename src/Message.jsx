// 5) Yksinkertainen komponentti erillisessä tiedostossa
// Tämä komponentti vastaanottaa tekstin "propsien" kautta.

export default function Message({ text }) {
  return (
    <section>
      <h2>5. Komponenttirakenne & Props (osa 1)</h2>
      <p>{text}</p>
    </section>
  );
}
