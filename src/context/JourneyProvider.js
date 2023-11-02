import { useMemo } from 'react';
import { node } from 'prop-types';
import JourneyContext from './JourneyContext';

function JourneyProvider({ children }) {

  const values = useMemo(() => ({
  }), []);

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