import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Spinner with sky blue accent */}
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 border-4 border-[#00AEFF] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#00AEFF] rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Portfolio</h2>
        <p className="text-gray-500">Preparing something awesome for you...</p>

        {/* Bouncing dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#00AEFF] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
