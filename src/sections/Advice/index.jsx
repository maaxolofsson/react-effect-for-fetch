import { adviceAPI } from "../../APIUrl";
import { useState, useEffect } from "react";

function AdviceSection() {
  const [advice, setAdviceData] = useState("");
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);

  useEffect(
    () =>
      async function () {
        const res = await fetch(adviceAPI);
        const data = await res.json();
        setAdviceData(data.slip);
      },
    []
  );

  const saveToFavorites = () => {
    setFavoriteAdvice([...favoriteAdvice, advice]);
    console.log(favoriteAdvice)
  };

  const fetchNewAdvice = async () => {
    const res = await fetch(adviceAPI);
    const data = await res.json();
    setAdviceData(data.slip);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {advice.advice} <br></br>
        <button onClick={fetchNewAdvice}>Get More Advice</button>
        <button onClick={saveToFavorites}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favoriteAdvice.length === 0 ? (
            <li>No favorites saved.</li>
          ) : (
            favoriteAdvice.map((fav) => <li key={fav.id}>{fav.advice}</li>)
          )}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
