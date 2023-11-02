import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';

export default function useFetch() {
  const [jornadas, setJornadas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
      const data = await response.json();
      setJornadas(data.results);
      act(() => { setLoading(false); });
    };
    fetchData();
  }, []);

  return { loading, jornadas };
}