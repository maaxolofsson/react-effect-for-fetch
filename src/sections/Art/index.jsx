import { useState, useEffect } from "react";
import { baseApiUrl } from "../../APIUrl";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(
    () =>
      async function () {
        const res = await fetch(baseApiUrl + "art");
        const data = await res.json();
        setArtData(data);
      },
    []
  );

  return (
    <>
      <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
          <ul className="art-list">
            {artData.map((artist, artistIx) => (
              <li key={artistIx}>
                <div className="frame">
                  <img src={baseApiUrl + artist.imageURL} />
                </div>
                <h3>{artist.title}</h3>
                <p>Artist: {artist.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                  {artist.publicationHistory.map((pub, pubIx) => (
                    <li key={pubIx}>{pub}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ArtsSection;
