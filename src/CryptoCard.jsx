import React from 'react'

function CryptoCard({ image, name, price }) {
  return (
    <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 w-64 hover:shadow-xl hover:scale-105 duration-300 cursor-pointer">
      <img src={image} alt={name} className="w-12 h-12 rounded-full" />

      <div>
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <h3 className="text-gray-600 font-medium">${price}</h3>
      </div>
    </div>
  )
}

export default CryptoCard
