import React, { useContext } from 'react';
import JourneyContext from '../context/JourneyContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Combate() {
  const { 
      modalOpen,
      setModalOpen,
      selectedHeroes,
      winner,
      setWinner,
  } = useContext(JourneyContext);

  const openModal = () => {
  setModalOpen(true);
  };

  const closeModal = () => {
  setModalOpen(false);
  };

  const combate = selectedHeroes.length === 2;

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
    
    const getWinner = () => {
      if (selectedHeroes.length === 2) {
        const totalPowerStatsHero1 = calculateTotalPowerStats(selectedHeroes[0]);
        const totalPowerStatsHero2 = calculateTotalPowerStats(selectedHeroes[1]);
    
        if (totalPowerStatsHero1 > totalPowerStatsHero2) {
          return setWinner(selectedHeroes[0].name);
        } else if (totalPowerStatsHero2 > totalPowerStatsHero1) {
          return setWinner(selectedHeroes[1].name);
        } else {
          return 'Empate!';
        }
      }
    
      return '';
    };
    
    getWinner();

  return (
  <div>
      { combate && 
      <Button onClick={openModal}>Open modal</Button>
      }
      <Modal
          open={modalOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              {`Winner ${winner}`}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} className='combate'>
              {selectedHeroes.map((hero) => (
                  <div key={hero.id}>
                      <div className='combate-img-powerstats'>
                          <img className='heroi-img' src={hero.images.sm} alt={hero.name} />
                          <div>
                              <p className='heroi-p'>{hero.powerstats.intelligence}</p>
                              <p className='heroi-p'>{hero.powerstats.strength}</p>
                              <p className='heroi-p'>{hero.powerstats.speed}</p>
                              <p className='heroi-p'>{hero.powerstats.durability}</p>
                              <p className='heroi-p'>{hero.powerstats.power}</p>
                              <p className='heroi-p'>{hero.powerstats.combat}</p>
                          </div>
                      </div>
                      <h4 className='heroi-h4'>{hero.name}</h4>
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