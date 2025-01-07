// components/MembershipPlans.js
import React from 'react';
const plans = [
  { title: 'Basic', price: '$20/month', features: ['Gym Access', '1 Class/Week'] },
  { title: 'Standard', price: '$50/month', features: ['Gym Access', '5 Classes/Week', '1 Personal Trainer Session'] },
  { title: 'Premium', price: '$80/month', features: ['Gym Access', 'Unlimited Classes', 'Personal Trainer'] },
];

const Membership = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Membership Plans</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform w-72">
            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
            <p className="text-2xl font-semibold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700">- {feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
