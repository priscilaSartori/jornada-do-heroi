import React, { useContext } from 'react';
import styles from './Sidenav.module.css';
import JourneyContext from '../context/JourneyContext';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Sidenav() {
  const { setModalOpen, selectedHeroes, searchTerm, setSearchTerm } = useContext(JourneyContext);

  const openModal = () => {
  setModalOpen(true);
  };

  const combate = selectedHeroes.length === 2;

  return (
  <div className={styles.sidenav}>
    <div className={styles.searchInputContainer}>
      <SearchIcon className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
    <div className={styles.buttonContainer}>
      <p>Selecione dois personagens e clique em Combate</p>
      <Button
        className={`${combate ? styles.buttonActive : styles.buttonDisabled}`}
        disabled={!combate}
        onClick={openModal}
      >
        Combate
      </Button>
    </div>
  </div>
  );
}
    
export default Sidenav;