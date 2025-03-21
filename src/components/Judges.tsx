import { Star, Award, Globe } from "lucide-react";

export default function JudgesSection() {
  // Sample judges data - you would replace this with your actual judges
  const judges = [
    {
      id: 1,
      name: "Pieter Levels",
      title: "Builder & Innovator",
      specialty: "Future Builders",
      image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg",
    },
    {
      id: 2,
      name: "Logan Kilpatrick",
      title: "Lead product for @Google AI Studio",
      specialty: "Future Builders",
      image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg",
    },
    {
      id: 3,
      name: "Sarah Guo",
      title: "Founder @Conviction",
      specialty: "Future Builders",
      image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg",
    },
    {
      id: 4,
      name: "Theo - t3.gg",
      title: "Full time CEO @t3dotchat",
      specialty: "Future Builders",
      image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
    },
  ];

  // Animated star field background
  const renderStars = () => {
    return Array(50)
      .fill()
      .map((_, i) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animation: `pulse 3s infinite ${animationDelay}s`,
            }}
          />
        );
      });
  };

  return (
    <div className="relative w-full overflow-hidden text-white py-16">
      {/* Animated stars background */}
      {renderStars()}

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
            World-Class Judges
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Meet the industry leaders who will evaluate your revolutionary ideas
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge) => (
            <div
              key={judge.id}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Judge Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-purple-500/50 group-hover:border-blue-400 transition-colors duration-300">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Judge Info */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-300 transition-colors duration-300">
                  {judge.name}
                </h3>
                <p className="text-purple-300 mb-2">{judge.title}</p>

                {/* Specialty Badge */}
                <div className="bg-blue-900/50 rounded-full px-4 py-1 text-sm flex items-center gap-1">
                  <Star size={12} className="text-yellow-400" />
                  <span>{judge.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
            <Award size={20} />
            <span>Meet All Judges</span>
          </button>
          <p className="mt-4 text-blue-300 flex items-center justify-center gap-2">
            <Globe size={16} />
            <span>Leading experts from around the world</span>
          </p>
        </div>
      </div>

      {/* Add some CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
