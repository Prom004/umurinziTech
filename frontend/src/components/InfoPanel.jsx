import React from "react";

export default function InfoPanel() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Prevent Theft',
      description: 'Registered devices are harder to sell and easier to track, deterring potential thieves.',
      color: 'bg-green-500'
    },
    {
      icon: '🔍',
      title: 'Aid Investigations',
      description: 'Law enforcement can quickly identify and recover stolen devices through registration data.',
      color: 'bg-blue-500'
    },
    {
      icon: '📋',
      title: 'Warranty Claims',
      description: 'Use registration as additional proof of purchase for warranty and insurance claims.',
      color: 'bg-yellow-500'
    },
    {
      icon: '🔒',
      title: 'Secure Resale',
      description: 'Registered ownership history increases buyer confidence when selling your device.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl h-fit">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Why Register?</h3>
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`${benefit.color} rounded-full p-2 text-white text-sm flex-shrink-0`}>
              {benefit.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};