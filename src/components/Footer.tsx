import React from "react";
import {
  Globe,
  Mail,
  Calendar,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Code,
  Heart,
} from "lucide-react";

export default function Footer() {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    {
      section: "Event",
      links: [
        { name: "About", url: "#" },
        { name: "Schedule", url: "#" },
        { name: "Prizes", url: "#" },
        { name: "Judges", url: "#" },
        { name: "Sponsors", url: "#" },
      ],
    },
    {
      section: "Participate",
      links: [
        { name: "Register", url: "#" },
        { name: "Rules", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Resources", url: "#" },
        { name: "Past Winners", url: "#" },
      ],
    },
    {
      section: "Connect",
      links: [
        { name: "Contact Us", url: "#" },
        { name: "Become a Sponsor", url: "#" },
        { name: "Join as Mentor", url: "#" },
        { name: "Media Kit", url: "#" },
        { name: "Code of Conduct", url: "#" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "#", label: "GitHub" },
    { icon: <Youtube size={20} />, url: "#", label: "YouTube" },
  ];

  // Generate star field background
  const renderStars = () => {
    return Array(60)
      .fill()
      .map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.2;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              opacity: opacity,
            }}
          />
        );
      });
  };

  return (
    <footer className="relative w-full text-white pt-20 overflow-hidden">
      {/* Star background */}
      {renderStars()}

      <div className="relative container mx-auto px-4 z-10">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 pb-10 border-b border-gray-800">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text mb-2">
              World's Largest Hackathon
            </h2>
            <p className="text-gray-400 flex items-center">
              <Calendar size={16} className="mr-2" />
              March 25-27, {currentYear} • Global Virtual Event
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-3">Stay updated</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 rounded-l-full py-2 px-4 outline-none focus:border-blue-500 w-full md:w-64"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-r-full py-2 px-4 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {navLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 text-blue-300">
                {group.section}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar with social links and copyright */}
        <div className="pt-8 pb-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 mb-6 md:mb-0 text-center md:text-left">
              <div className="mb-2 flex items-center justify-center md:justify-start">
                <Globe size={16} className="mr-2" />
                <span>
                  © {currentYear} World's Largest Hackathon. All rights
                  reserved.
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Code size={14} className="mr-2" />
                <span>Made with</span>
                <Heart size={14} className="mx-1 text-red-500" />
                <span>by the <a href="https://x.com/roubalsehgal" target="_blank"><u>Roubal Sehgal</u></a></span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-gray-900 p-2 rounded-full hover:bg-blue-900/40 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div className="mt-6 text-center md:text-right text-gray-400">
            <a
              href="mailto:info@worldslargestjackathon.com"
              className="flex items-center justify-center md:justify-end hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={16} className="mr-2" />
              <span>info@worldslargestjackathon.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
