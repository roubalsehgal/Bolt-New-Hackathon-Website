import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, BarChart, Crown } from 'lucide-react';

export default function VerticalHackathonTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const timelineEvents = [
    {
      date: "April 5-6",
      title: "Registration Opens",
      description: "Sign up and start forming your teams. Early birds get special perks and workshop access.",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-600 to-blue-500"
    },
    {
      date: "April 20",
      title: "Team Formation Deadline",
      description: "Final day to register your team and project idea. Mentors will be assigned to teams.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      date: "May 5",
      title: "Demo Day",
      description: "Top teams present their projects to judges, investors, and the tech community.",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      date: "May 10",
      title: "Awards Ceremony",
      description: "$1M+ prize pool distributed to winners across various categories.",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-600 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const timelineItems = containerRef.current.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const isVisible = 
            rect.top <= window.innerHeight * 0.8 && 
            rect.bottom >= window.innerHeight * 0.2;
          
          if (isVisible) {
            setActiveIndex(index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-black"
    >
      {/* Stars background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
          Hackathon Timeline
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-300"></div>

          {/* Timeline items */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`timeline-item flex mb-32 transform transition-all duration-1000 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index * 200}` : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Content side - alternating left and right */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left ml-auto'}`}>
                  <div 
                    className={`glassmorphism-card rounded-3xl p-6 shadow-2xl transition-all duration-500 backdrop-blur-lg ${
                      activeIndex === index ? 'scale-105 translate-z-10' : 'scale-100'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      boxShadow: activeIndex === index ? 
                        '0 15px 35px rgba(0,0,0,0.2), 0 0 20px rgba(78, 99, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.05)' : 
                        '0 8px 32px rgba(0,0,0,0.1), inset 0 0 10px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm mb-4">
                      {event.date}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-blue-100">{event.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full z-20 transition-all duration-500 ${
                    activeIndex === index ? 'scale-125' : 'scale-100'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-80 blur-sm animate-pulse`}></div>
                  <div className={`absolute inset-0.5 rounded-full bg-gradient-to-r ${event.color}`}></div>
                  <div className="relative text-white">{event.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, -30px); }
          50% { transform: translate(20px, 50px); }
          75% { transform: translate(-50px, 20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-40px, 40px); }
          66% { transform: translate(30px, -30px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
        }
        
        .animate-float-medium {
          animation: float-medium 15s infinite ease-in-out;
        }
        
        .animate-float-fast {
          animation: float-fast 10s infinite ease-in-out;
        }
        
        .delay-200 {
          transition-delay: 200ms;
        }
        
        .delay-400 {
          transition-delay: 400ms;
        }
        
        .delay-600 {
          transition-delay: 600ms;
        }
        
        .delay-800 {
          transition-delay: 800ms;
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
      `}</style>
    </div>
  );
}