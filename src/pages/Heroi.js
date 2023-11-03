import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import JourneyContext from '../context/JourneyContext';
import Combate from '../components/Combate';
import styles from './Heroi.module.css';

function Heroi() {
  const { herois } = useFetch();
  const { 
    searchTerm,
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
      <div className={styles.heroi}>
        <ul className={styles.heroiUl}>
          {filteredHeroes.map((hero) => (
            <li
              key={hero.id}
              className={`${isHeroSelected(hero) ? styles.heroiLiSelected : styles.heroiLi}`}
              onClick={() => selectHero(hero)}
            >
              <img className={styles.heroiImg} src={hero.images.sm} alt={hero.name} />
              <div className={styles.heroiInfo}>
                <h4 className={styles.heroiH4}>{hero.name}</h4>
                <p className={styles.heroiP}>{hero.id}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}

export default Heroi;