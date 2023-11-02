import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import JourneyContext from '../context/JourneyContext';
import Combate from '../components/Combate';

function Heroi() {
  const { herois } = useFetch();
  const { 
    searchTerm, 
    setSearchTerm, 
    selectedHeroes, 
    setSelectedHeroes,
  } = useContext(JourneyContext);
  
  const filteredHeroes = herois.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectHero = (hero) => {
    if (selectedHeroes.includes(hero)) {
      return setSelectedHeroes(selectedHeroes.filter((selectedHero) => selectedHero !== hero));
    }
    if (selectedHeroes.length < 2) {
      setSelectedHeroes((prevSelectedHeroes) => {
        if (prevSelectedHeroes.includes(hero)) {
          return prevSelectedHeroes.filter((selectedHero) => selectedHero !== hero);
        } else {
          return [...prevSelectedHeroes, hero];
        }
      });
    }
  };

  const isHeroSelected = (hero) => selectedHeroes.includes(hero);

  return (
    <div>
      <Combate />
      <h1>Lista de Heróis</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className='heroi-ul'>
        {filteredHeroes.map((hero) => (
          <li
            key={hero.id}
            className={`${isHeroSelected(hero) ? 'heroi-li-selected' : 'heroi-li'}`}
            onClick={() => selectHero(hero)}
          >
            <img className='heroi-img' src={hero.images.sm} alt={hero.name} />
            <h4 className='heroi-h4'>{hero.name}</h4>
            <p className='heroi-p'>{hero.id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Heroi;