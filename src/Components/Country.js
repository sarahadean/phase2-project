import React from 'react';
import { useParams } from 'react-router-dom';

function Country() {
  const { countryName } = useParams();

  // Simulated data for capital cities
  const capitalCities = {
    usa: 'Washington, D.C.',
    canada: 'Ottawa',
    uk: 'London',
  };

  const capitalCity = capitalCities[countryName];

  return (
    <div>
      <h1>{countryName.toUpperCase()}</h1>
      {capitalCity ? (
        <p>Capital City: {capitalCity}</p>
      ) : (
        <p>Capital City not found</p>
      )}
    </div>
  );
}

export default Country;