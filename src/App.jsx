import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CryptoList from './CryptoList';

function App() {
  const [coinDetails, setCoinDetails] = useState([]);

  useEffect(() => {
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
    )
    .then((response) => setCoinDetails(response.data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Crypto Gallery</h1>
      <CryptoList coinDetails={coinDetails} />
    </div>
  );
}

export default App;
