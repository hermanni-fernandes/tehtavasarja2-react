import { useEffect, useState } from "react";

// Oma räätälöity Hook, joka palauttaa nykyisen ajan ja päivittää sen sekunnin välein.
export default function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Siivous: pysäytetään intervalli kun komponentti poistetaan
    return () => clearInterval(interval);
  }, []);

  return time;
}
