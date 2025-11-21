# Tehtäväsarja 2.1 – Reactin perusteet

Tämä projekti sisältää kaikki Tehtäväsarja 2.1:ssä vaaditut React-perusteet. Projekti on toteutettu Vite + React -pohjalla ja sisältää esimerkit useStatesta, tapahtumankuuntelusta, controlled state -tilanhallinnasta, useEffect-hookista, komponenttirakenteesta sekä propsien välityksestä ja oman custom hookin toteutuksesta.

## 📦 Asennus ja kehitysympäristön käynnistys

```bash
npm install
npm run dev
```

Sovellus käynnistyy osoitteeseen:

```
http://localhost:5173/
```

## 📌 Sisältö

Projektissa on toteutettu seuraavat osat:

### 1. Uusi tila (useState)

* Oman tilan luonti komponenttiin
* Oletusarvo, päivitysfunktio ja renderöinti

### 2. Tapahtumien kuuntelu (onClick & onChange)

* Nappien tapahtumankäsittelijät
* Controlled input -kenttä

### 3. Controlled State

* Controlled input komponentissa
* Tilapäivitys ja syötetyn arvon näyttäminen

### 4. useEffect-esimerkki

* Ikkunan koon seuraaminen reaaliajassa
* Sivuvaikutusten siivous

### 5. Komponenttirakenne & Props (osa 1)

* Erillinen lapsikomponentti
* Tekstin välitys propsien avulla

### 6. Props – komponentin parametrit (osa 2)

* Parent → Child tilan välitys
* children-propin käyttö

### 7. Custom Hook

* Oma custom hook `useCurrentTime()`
* Kellon ajan päivitys sekunnin välein

## 🗂 Projektirakenne

```
src/
 ├── App.jsx
 ├── ControlledExample.jsx
 ├── EventsDemo.jsx
 ├── Counter.jsx
 ├── WindowSize.jsx
 ├── Message.jsx
 ├── ParentChildDemo.jsx
 ├── TimeDisplay.jsx
 ├── useCurrentTime.js
 └── index.css
```

## 📝 Lisenssi

Tämä projekti on kurssitehtävä ja tarkoitettu opiskelukäyttöön.
