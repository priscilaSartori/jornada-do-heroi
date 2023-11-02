import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import JourneyContext from '../context/JourneyContext';

function Heroi() {
  const { herois } = useFetch();
  const { searchTerm, setSearchTerm } = useContext(JourneyContext);

  const filteredHeroes = herois.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Heróis</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className='heroi-ul'>
        {filteredHeroes.map((hero) => (
          <li key={hero.id} className='heroi-li'>
            <img src={hero.images.sm} alt={hero.name} />
            <h4>{hero.name}</h4>
            <p>{hero.id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Heroi;