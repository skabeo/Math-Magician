import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = '6Kt7Ap0M4voSDFXWsXfPFg==1VLMRvpruA8bmdms';
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const { data } = response;
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Error Fetching quote');
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quotes-container">
      {loading && <p>Loading...</p>}
      {!loading && !error && <p>{quotes.quote}</p>}
      {!loading && error && <p>{error}</p>}
    </div>
  );
};

export default Quotes;
