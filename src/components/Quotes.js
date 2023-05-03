import React, { useEffect, useState } from 'react';
import './styles.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = '6Kt7Ap0M4voSDFXWsXfPFg==1VLMRvpruA8bmdms';
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const data = await response.json();
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
      {loading && <p className="loading" />}
      {!loading && !error && (
        <div>
          <p className="italic">
            &quot;
            {quotes.quote}
            &quot;
          </p>
          <p>
            -
            {quotes.author}
          </p>
        </div>
      )}
      {!loading && error && <p>{error}</p>}
    </div>
  );
};

export default Quotes;
