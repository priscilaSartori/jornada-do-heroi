import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';

export default function useFetch() {
  const [herois, setHerois] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
      const data = await response.json();
      setHerois(data);
      act(() => { setLoading(false); });
    };
    fetchData();
  }, []);

  return { loading, herois };
}