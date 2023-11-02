import React, { useContext, useEffect } from 'react';
import JourneyContext from '../context/JourneyContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Combate.module.css';
import styleHeroi from '../pages/Heroi.module.css'

function Combate() {
  const { 
      modalOpen,
      setModalOpen,
      selectedHeroes,
      setSelectedHeroes,
      winner,
      setWinner,
      setSearchTerm,
  } = useContext(JourneyContext);

  const closeModal = () => {
  setModalOpen(false);
  setSelectedHeroes([]);
  setSearchTerm('')
  };

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const calculateTotalPowerStats = (hero) => {
      return Object.values(hero.powerstats).reduce((total, value) => total + parseInt(value, 10), 0);
    };
    
    useEffect(() => {
      const calculateWinner = () => {
        if (selectedHeroes.length === 2) {
          const totalPowerStatsHero1 = calculateTotalPowerStats(selectedHeroes[0]);
          const totalPowerStatsHero2 = calculateTotalPowerStats(selectedHeroes[1]);
  
          if (totalPowerStatsHero1 > totalPowerStatsHero2) {
            setWinner(selectedHeroes[0].name);
          } else if (totalPowerStatsHero2 > totalPowerStatsHero1) {
            setWinner(selectedHeroes[1].name);
          } else {
            setWinner('Empate!');
          }
        }
      };
  
      calculateWinner();
    }, [selectedHeroes, setWinner]);

  return (
  <div>
    <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Winner ${winner}`}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className={styles.combate}>
            {selectedHeroes.map((hero) => (
                <div key={hero.id}>
                    <div className={styles.combateImgPowerstats}>
                        <img className={styleHeroi.heroiImg} src={hero.images.sm} alt={hero.name} />
                        <div>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.intelligence}</p>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.strength}</p>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.speed}</p>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.durability}</p>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.power}</p>
                            <p className={styleHeroi.heroiP}>{hero.powerstats.combat}</p>
                        </div>
                    </div>
                    <h4 className={styleHeroi.heroiH4}>{hero.name}</h4>
                </div>
                ))}
            </Typography>
            <Button onClick={closeModal}>Fechar</Button>
        </Box>
    </Modal>
  </div>
  );
}
    
export default Combate;