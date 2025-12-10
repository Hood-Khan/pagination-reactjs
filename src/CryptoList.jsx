import React from 'react'
import CryptoCard from './CryptoCard'

function CryptoList({ coinDetails }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 border-2 border-gray-300 rounded-lg bg-white">
      {coinDetails.map((coin, index) => (
        <CryptoCard
          key={index}
          image={coin.image}
          name={coin.name}
          price={coin.current_price.toLocaleString()}
        />
      ))}
    </div>
  )
}

export default CryptoList
