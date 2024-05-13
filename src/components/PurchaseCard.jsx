import React from 'react';

const PurchaseCard = ({ food }) => {
  const {
    purchase_food_image,
    purchase_food_name,
    buyingDate,
    purchase_price,
    purchase_food_origin,
    made_name,purchaseQuantity

  } = food;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <img src={purchase_food_image} alt={purchase_food_name} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-rose-400">{purchase_food_name}</h2>
        <p className="text-gray-600 mb-2"><strong>Buying Date:</strong> {new Date(buyingDate).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2"><strong>Price:</strong> ${purchase_price}</p>
        <p className="text-gray-600 mb-2"><strong>Origin:</strong> {purchase_food_origin}</p>
        <p className="text-gray-600 mb-2"><strong>Made by:</strong> {made_name}</p>
        <p className="text-gray-600"><strong>Quantity:</strong> {purchaseQuantity}</p>
      </div>
    </div>
  );
};

export default PurchaseCard;
