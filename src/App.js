import { useState, useEffect } from "react";
import "./styles.css";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);
  return (
    <div className="App">
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
