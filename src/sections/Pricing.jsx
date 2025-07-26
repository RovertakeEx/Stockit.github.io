// src/component/section/Pricing.jsx

import React from 'react';
import PricingCard from '../components/Section/PricingCard';

const pricingOptions = [
  {
    title: "Basic",
    price: "Rs.1000",
    per: "per user / month",
    description: "Perfect for small retailers to manage everyday inventory.",
    buttonText: "Get Started",
    isRecommended: true,
    features: [
      "1 User Access",
      "Manage up to 500 products",
      "Basic sales reports",
      "Stock alerts & low inventory warnings",
      "Barcode scanning (Manual entry)",
      "Email support"
    ]
  },
  // {
  //   title: "Business",
  //   price: "රු2000",
  //   description: "For growing businesses that need more control and collaboration.",
  //   buttonText: "Coming Soon",
  //   isDisabled: true,
  //   features: [
  //     "Unlimited Users",
  //     "Unlimited products",
  //     "Advanced sales & inventory analytics",
  //     "Team roles and permissions",
  //     "Integrated barcode scanning",
  //     "Priority support"
  //   ]
  // },
  {
    title: "Custom",
    price: "Contact us",
    per: "",
    description: "Tailored solutions for enterprise needs and integrations.",
    buttonText: "Contact Sales",
    isDisabled: true,
    features: [
      "Custom features on request",
      "API access & integrations",
      "On-site training and support",
      "Private cloud setup",
      "Dedicated account manager",
      "24/7 support"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto pt-30 bg-white text-center">
      <div className="mb-12">
        <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
          Pricing 
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Pricing plans
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Simple, transparent pricing that grows with you. Try any plan free for 14 days.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};


export default Pricing;
