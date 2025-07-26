// src/component/section/PricingCard.jsx

import React from 'react';

const PricingCard = ({ title, price, per, description, features, isRecommended, buttonText }) => {
  return (
    <div className={`border rounded-xl p-6 shadow-sm w-full max-w-sm mx-auto ${isRecommended ? 'border-blue-500' : 'border-gray-300'}`}>
      
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-xl font-bold">{title}</h3>
        {isRecommended && (
          <span className="text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full">
            Recommended
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2 text-left mb-4">
        <span className="text-3xl font-semibold">{price}</span>
        <span className="text-sm text-gray-500">{per}</span>
      </div>
      <p className="text-gray-700 mb-5">{description}</p>

      <button className={`w-full py-2 rounded ${isRecommended ? 'bg-blue-600 text-white' : 'border border-gray-300 text-black hover:bg-gray-100'}`}>
        {buttonText}
      </button>

      <ul className="text-sm text-gray-800 mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
