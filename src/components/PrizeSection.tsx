import React, { useEffect, useRef } from "react";
import { Trophy, Award, Gift, Crown, Star, ArrowRight } from "lucide-react";

export default function PrizeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const prizeCards = document.querySelectorAll(".prize-card");
    prizeCards.forEach((card) => observer.observe(card));

    return () => {
      prizeCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 bg-gradient-to-b from-black via-[#000033] to-black"
    >
      {/* Enhanced floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-500/20 blur-sm"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Title with enhanced animation */}
        <div className="text-center mb-20">
          <h2 className="inline-block text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text text-transparent animate-gradient">
            Extraordinary Prizes
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Break boundaries, push limits, and be rewarded. Our prize pool
            celebrates innovation, creativity, and technical excellence.
          </p>
        </div>

        {/* Grand Prize Showcase with enhanced glassmorphism */}
        <div className="relative mb-20">
          <div className="prize-card backdrop-blur-xl bg-gradient-to-br bg-black p-8 rounded-2xl border border-blue-500/20 shadow-xl hover:shadow-blue-500/20 max-w-4xl mx-auto transition-all duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0 relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute -inset-0.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-full">
                  <Trophy size={60} className="text-white" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-600 w-12 h-1 rounded mr-3"></div>
                  <h4 className="text-blue-300 font-semibold uppercase tracking-wider text-sm">
                    Grand Prize
                  </h4>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  $500,000
                </h3>
                <p className="text-blue-100 mb-4">
                  For the team that creates the most groundbreaking solution
                  with potential for global impact.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs font-medium border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                    Global Recognition
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs font-medium border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                    Investor Access
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs font-medium border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                    Media Coverage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prize Categories with enhanced glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* First Prize */}
          <div className="prize-card backdrop-blur-xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-blue-500/20 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/20 group">
            <div className="relative mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
              <div className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
                <Award size={36} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              $250,000
            </h3>
            <p className="text-blue-100 mb-4">First Runner-Up</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Tech Accelerator
              </span>
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Mentorship
              </span>
            </div>
          </div>

          {/* Second Prize */}
          <div className="prize-card backdrop-blur-xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-blue-500/20 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/20 group">
            <div className="relative mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
              <div className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
                <Gift size={36} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              $100,000
            </h3>
            <p className="text-blue-100 mb-4">Second Runner-Up</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Cloud Credits
              </span>
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Development Tools
              </span>
            </div>
          </div>

          {/* Innovation Prize */}
          <div className="prize-card backdrop-blur-xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-blue-500/20 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/20 group">
            <div className="relative mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
              <div className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
                <Star size={36} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              $75,000
            </h3>
            <p className="text-blue-100 mb-4">Most Innovative Solution</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Patent Support
              </span>
              <span className="px-2 py-1 bg-blue-900/30 backdrop-blur-sm text-blue-100 rounded-full text-xs border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                Innovation Lab
              </span>
            </div>
          </div>
        </div>

        {/* Special Categories with enhanced glassmorphism */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 rounded-xl border border-blue-500/20 p-6 mb-16 hover:shadow-blue-500/20 transition-all duration-500">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Special Category Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Crown, color: "cyan", title: "Best AI Implementation" },
              { icon: Crown, color: "green", title: "Sustainability Champion" },
              { icon: Crown, color: "purple", title: "Best UI/UX Design" },
              { icon: Crown, color: "yellow", title: "Rookie Team Award" },
            ].map((award, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-blue-900/20 p-4 rounded-lg text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <award.icon
                  className={`h-8 w-8 mx-auto mb-2 text-${award.color}-300 group-hover:scale-110 transition-transform duration-300`}
                />
                <h4 className="font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                  $25,000
                </h4>
                <p className="text-blue-100 text-sm">{award.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with enhanced glassmorphism */}
        <div className="text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 py-3 px-8 rounded-full text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group">
            <span className="relative z-10">Register Now</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="mt-4 text-blue-200 opacity-80">
            Join 10,000+ developers from around the world
          </p>
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -10px);
          }
        }

        .prize-card {
          position: relative;
          overflow: hidden;
        }

        .prize-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          transition: 0.5s;
        }

        .prize-card:hover::before {
          left: 100%;
        }
      `}</style>
    </div>
  );
}
