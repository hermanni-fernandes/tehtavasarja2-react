# Tehtäväsarja 2.1 – Raportti

Tämä raportti kuvaa Tehtäväsarja 2.1:n toteutuksen Reactilla. Raportissa selostetaan jokainen tehtäväosa, sen toteutustapa ja tekninen toiminta sovelluksen sisällä. Esimerkit perustuvat projektissa kirjoitettuun koodiin.

---

## 1. Uusi tila funktionaalisessa komponentissa (useState)

Toteutuksessa luotiin `Counter`-komponentti, joka demonstroi Reactin `useState`-hookia. Hook palauttaa kaksi arvoa: nykyinen tila (`count`) sekä sen päivitysfunktio (`setCount`). Tilalle asetettiin lähtöarvo 0.

Tila muuttuu käyttäjän klikatessa nappia, jolloin `setCount` kasvattaa arvoa edellisestä tilasta. Tämä osoittaa Reactin renderöintikäyttäytymisen: komponentti renderöidään uudelleen aina, kun tila päivittyy.

---

## 2. Tapahtumien kuuntelu (onClick ja onChange)

Toteutuksessa luotiin `EventsDemo`-komponentti, joka sisältää kaksi eri tapahtumankäsittelyä:

### • onClick

Nappia painamalla kasvatetaan klikkauslaskuria. Tämä osoittaa Reactin tapahtumankäsittelyn, joka hyödyntää JSX:ään sidottuja funktioita.

### • onChange

Lomakekentän arvo sidottiin komponentin tilaan (`name`). Muutokset kentässä päivittyvät reaaliaikaisesti. Tämä muodostaa controlled input -kentän.

---

## 3. Controlled State – milloin sitä käytetään?

Toteutuksessa luotiin erillinen `ControlledExample`-komponentti, joka esittelee controlled state -mallin lomakekentälle. Controlled state on hyödyllinen, kun:

* syötettä halutaan validoida,
* lomakkeen tila halutaan pitää Reactin hallinnassa,
* lomakedataa tarvitaan muissa osissa sovellusta.

Controlled statea kannattaa välttää, jos datan määrä on suuri tai jos nopea renderöinti on tärkeää (koska jokainen näppäinpainallus laukaisee päivityksen).

---

## 4. useEffect – sivuvaikutusten hallinta

`WindowSize`-komponentti demonstroi `useEffect`-hookia seuraamalla selaimen ikkunan leveyttä.

### Tehty toteutus:

* komponentti asettaa `resize`-tapahtumankuuntelijan,
* päivittää tilan aina, kun ikkunan koko muuttuu,
* palauttaa cleanup-funktion, joka poistaa kuuntelijan komponentin poistuessa.

Raportissa mainittiin esimerkkejä useEffectin käyttötarkoituksista:

* API-kutsut
* tapahtumakuuntelijat
* animaatioiden käynnistys
* datan synkronointi

React 19:n myötä osa `useEffect`-käytöistä voidaan korvata muilla hookeilla (esim. `useEvent`), mutta standardi useEffect on edelleen kurssitehtävän mukainen.

---

## 5. Komponenttirakenne ja ES-moduulit

Toteutuksessa luotiin erillinen `Message`-komponentti, joka vastaanottaa tekstin propsina ja renderöi sen. Tämä osoittaa:

* tiedostojen jakamisen pienempiin kokonaisuuksiin,
* `import` / `export` -syntaksin toiminnan,
* uudelleenkäytettävien komponenttien rakenteen.

Komponenttirakenne on toteutettu selkeästi, jokainen osa on omassa tiedostossaan.

---

## 6. Props – komponentin parametrit

Tehtävää varten rakennettiin `ParentChildDemo`, jossa:

### • Parent omistaa tilan (`parentCount`)

### • Child vastaanottaa tilan propsina (`value`)

### • children-prop käytössä

Tämä osoittaa Reactin olionkulun (data flows down). Kun parentin tila muuttuu, myös child-komponentti renderöityy uudelleen.

---

## 7. Oma Custom Hook

Custom hookiksi toteutettiin `useCurrentTime`, joka:

* palauttaa nykyisen ajan `Date()`-oliona,
* päivittää ajan sekunnin välein,
* siivoaa intervallin unmountin yhteydessä.

Hook demonstroitiin `TimeDisplay`-komponentissa. Tämä täyttää vaatimuksen:

> "Luo oma räätälöity React Hook ja demonstroi sen hyödyntäminen jossain komponentissa."

---

# Yhteenveto

Kaikki Tehtäväsarja 2.1:n kohdat (1–7) on toteutettu täysin Reactin parhaiden käytäntöjen mukaisesti:

* useState ✔
* tapahtumankäsittely ✔
* controlled state ✔
* useEffect ✔
* komponenttirakenne ✔
* props & children ✔
* custom hook ✔

Sovellus toimii odotetusti ja täyttää kurssivaatimukset.
