import React from "react";


export default function InfoPanel() {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>,
      title: 'Prevent Theft',
      description: 'Registered devices are harder to sell and easier to track, deterring potential thieves.',
      color: 'bg-green-500'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>,
      title: 'Aid Investigations',
      description: 'Law enforcement can quickly identify and recover stolen devices through registration data.',
      color: 'bg-blue-500'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>,
      title: 'Warranty Claims',
      description: 'Use registration as additional proof of purchase for warranty and insurance claims.',
      color: 'bg-yellow-500'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>,
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