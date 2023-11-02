import { useState, useMemo } from 'react';
import { node } from 'prop-types';
import JourneyContext from './JourneyContext';

function JourneyProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [elementClass, setElementClass] = useState('');

  const values = useMemo(() => ({
    searchTerm,
    setSearchTerm,
    selectedHeroes,
    setSelectedHeroes,
    elementClass,
    setElementClass,
  }), [
    searchTerm,
    selectedHeroes,
    elementClass,
  ]);

  return (
    <JourneyContext.Provider value={ values }>
      {children}
    </JourneyContext.Provider>
  );
}
JourneyProvider.propTypes = {
  children: node.isRequired,
};

export default JourneyProvider;