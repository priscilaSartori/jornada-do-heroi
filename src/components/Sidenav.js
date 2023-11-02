import React, { useContext } from 'react';
import JourneyContext from '../context/JourneyContext';
import Button from '@mui/material/Button';
import styles from './Sidenav.module.css';

function Sidenav() {
  const { setModalOpen, selectedHeroes, searchTerm, setSearchTerm } = useContext(JourneyContext);

  const openModal = () => {
  setModalOpen(true);
  };

  const combate = selectedHeroes.length === 2;

  return (
  <div className={styles.sidenav}>
    <input
      type="text"
      placeholder="Filtrar por nome"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Button onClick={openModal} disabled={combate? '' : 'disabled'}>COMBATE</Button>
  </div>
  );
}
    
export default Sidenav;