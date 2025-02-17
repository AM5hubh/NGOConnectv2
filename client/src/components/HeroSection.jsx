import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen mb-4">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728146712/wwivsa72kopz2jgi0neq.png"
          alt="NGO volunteers in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8">
        {/* Main content container */}
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connect. Support. Empower.
            <span className="block mt-2">Be the Change!</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Join hands with NGOs, volunteer for events, or make donations to support a cause.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              variant="default" 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
            >
              Explore Events
            </button>
            <button 
              variant="default" 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
            >
              Donate Now
            </button>
            <button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;