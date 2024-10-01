import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Shows.css'; 

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShows = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5002/api/shows');
      setShows(response.data);
    } catch (err) {
      console.error('Error fetching shows:', err);
      setError('Error fetching shows data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  if (loading) {
    return <div className='loading'>Loading shows...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className='shows-container'>
      <div className='header'>
        <h3>Today&apos;s Deals</h3>
      </div>
      <div className='shows-grid'>
        {shows.map((show) => {
          const isSoldOut = !show.see_tickets_url_infos.length;

          return (
            <div key={show.id} className={`show-tile ${isSoldOut ? 'sold-out' : ''}`}>
              <img src={show.image} alt={show.title} className='show-image' />
              <h2>{show.title || 'Untitled Show'}</h2>
         
              {isSoldOut ? (
                <p className='sold-out-text'>SOLD OUT</p>
              ) : (
                <>
                <h3>About The Show</h3>
                <a href={show.see_tickets_url_infos[0].url} className='book-now-button'>
                  Book Now
                </a>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shows;
