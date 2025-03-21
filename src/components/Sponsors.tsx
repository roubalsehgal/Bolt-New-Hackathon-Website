import React, { useState } from "react";
import {
  Zap,
  Award,
  Shield,
  Rocket,
  Star,
  Globe,
  Code,
  Cpu,
  Database,
  Cloud,
  ExternalLink,
} from "lucide-react";

export default function SponsorsSection() {
  const [activeTab, setActiveTab] = useState("current");

  // Expanded sponsors data organized by tier
  const sponsorTiers = [
    {
      tier: "Cosmic",
      icon: <Rocket className="text-yellow-400" size={24} />,
      color: "from-yellow-500 to-yellow-300",
      borderColor: "border-yellow-500/40",
      sponsors: [
        {
          id: 1,
          name: "Supabase",
          logo: "https://pbs.twimg.com/profile_images/1822981431586439168/7xkKXRGQ_400x400.jpg",
          website: "https://supabase.com/",
        },
        {
          id: 2,
          name: "Netlify",
          logo: "https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png",
          website: "https://www.netlify.com/",
        },
      ],
    },
    {
      tier: "Galactic",
      icon: <Shield className="text-purple-400" size={24} />,
      color: "from-purple-500 to-purple-300",
      borderColor: "border-purple-500/40",
      description: "Pioneering partners driving technological advancement",
      perks: [
        "Dedicated Booth",
        "Workshop Session",
        "Recruitment Access",
        "Networking Events",
      ],
      sponsors: [
        {
          id: 3,
          name: "Cloudflare",
          logo: "https://pbs.twimg.com/profile_images/991779658147377152/ESp67BNN_400x400.jpg",
          website: "https://cloudflare.com/",
        },
        {
          id: 4,
          name: "Sentry",
          logo: "https://pbs.twimg.com/profile_images/1778495572238086150/qDkInWXX_400x400.png",
          website: "https://sentry.io/welcome/",
        },
        {
          id: 5,
          name: "Loops.so",
          logo: "https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg",
          website: "https://loops.so/",
        },
        {
          id: 6,
          name: "Algorand Foundation",
          logo: "https://pbs.twimg.com/profile_images/1805829136381861889/0fI5Zrbv_400x400.jpg",
          website: "https://algorand.co/",
        },
      ],
    },
    {
      tier: "Stellar",
      icon: <Star className="text-blue-400" size={24} />,
      color: "from-blue-500 to-blue-300",
      borderColor: "border-blue-500/40",
      description: "Emerging leaders supporting innovation",
      perks: [
        "Booth Space",
        "Tech Talk",
        "Brand Visibility",
        "Community Access",
      ],
      sponsors: [
        {
          id: 7,
          name: "Exa",
          logo: "https://pbs.twimg.com/profile_images/1813012869296103428/CTCb6uHz_400x400.jpg",
          website: "https://exa.ai/",
        },
        {
          id: 8,
          name: "hsr hacker house",
          logo: "https://pbs.twimg.com/profile_images/1877398632447750144/lIrSfPaj_400x400.jpg",
          website: "https://lu.ma/hsrhackerhouse",
        },
      ],
    },
  ];

  // Technology categories for filtering
  const categories = [
    { icon: <Code size={20} />, name: "Developer Tools" },
    { icon: <Cpu size={20} />, name: "AI/ML" },
    { icon: <Database size={20} />, name: "Data" },
    { icon: <Cloud size={20} />, name: "Cloud" },
  ];

  // Generate animated particles for background
  const renderParticles = () => {
    return Array(40)
      .fill()
      .map((_, i) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-40"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${duration}s infinite linear ${delay}s`,
            }}
          />
        );
      });
  };

  return (
    <div className="relative w-full overflow-hidden text-white py-20">
      {/* Animated particles background */}
      {renderParticles()}

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap size={28} className="text-blue-400 mr-2" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
              Our Sponsors
            </h2>
          </div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Partnering with leading tech companies to fuel innovation and bring
            your ideas to life
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="sponsor-tier">
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700 mr-4"></div>
                <div
                  className={`py-2 px-6 rounded-full flex items-center bg-gray-900/60 backdrop-blur-sm border ${tier.borderColor} hover:scale-105 transition-transform duration-300`}
                >
                  {tier.icon}
                  <h3
                    className={`ml-2 text-lg font-bold bg-gradient-to-r ${tier.color} text-transparent bg-clip-text`}
                  >
                    {tier.tier} Sponsors
                  </h3>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700 ml-4"></div>
              </div>

              {/* Sponsors Grid */}
              <div
                className={`grid grid-cols-2 md:grid-cols-${Math.min(
                  tier.sponsors.length,
                  4
                )} gap-6 justify-items-center`}
              >
                {tier.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border ${tier.borderColor} 
                        hover:shadow-xl hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center
                        w-full max-w-xs hover:scale-105 group relative overflow-hidden`}
                  >
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Visit indicator that appears on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-blue-400">
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-xs font-medium">Visit</span>
                    </div>

                    {/* Logo with consistent sizing */}
                    <div className="bg-gray-800/50 p-4 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-16 transition-opacity group-hover:opacity-100 opacity-90"
                      />
                    </div>

                    {/* Company name */}
                    <h4 className="text-center text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {sponsor.name}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(10px) translateX(10px);
          }
          50% {
            transform: translateY(0px) translateX(20px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  );
}
