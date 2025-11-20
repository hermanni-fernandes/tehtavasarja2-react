import { useState, useEffect } from "react";

// 4) useEffect-esimerkki: ikkunan leveyden seuraaminen
//
// Tässä komponentissa seurataan selaimen ikkunan leveyttä.
// Tämä on esimerkki sivuvaikutuksesta (side effect), koska
// komponentti kuuntelee selaimen "resize"-tapahtumaa.

export default function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Lisätään tapahtumankuuntelija kun komponentti "mountataan"
    window.addEventListener("resize", handleResize);
    console.log("useEffect → resize-listener lisätty");

    // Cleanup-funktio: poistetaan kuuntelija kun komponentti "unmountataan"
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Cleanup → resize-listener poistettu");
    };
  }, []); // Tyhjä dependency array → efekti ajetaan vain kerran

  return (
    <section>
      <h2>4. useEffect-esimerkki</h2>
      <p>Selaimen ikkunan leveys: {width} px</p>
    </section>
  );
}
