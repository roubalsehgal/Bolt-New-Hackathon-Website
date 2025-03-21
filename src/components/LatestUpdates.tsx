import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Twitter } from 'lucide-react';
import { Tweet } from 'react-tweet';

const tweets = [
  '1902019001448087555', // Replace with actual tweet IDs from bolt.new CEO
  '1902064573261476001',
  '1902102762151875053'
];

export default function LatestUpdates() {
  const shareHype = () => {
    const text = "🚀 Join me at the WORLD'S LARGEST HACKATHON powered by @BoltDotNew! \n\n🏆 $1M+ in prizes\n👩‍💻 10k+ developers\n🔥 Infinite possibilities! \n\nLet's build the future.⚡\n\n#BoltHackathon #BuildTheFuture";
    const url = 'https://bolt.new';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden py-24 bg-gradient-to-b from-black via-[#000033] to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Twitter className="text-blue-400 h-8 w-8" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
              Latest Updates
            </h2>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Stay in sync with the latest announcements from our team
          </p>
        </div>

        {/* Tweet Cards Container */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tweets.map((tweetId, index) => (
              <motion.div
                key={tweetId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-4 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
              >
                <Tweet id={tweetId} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Share Hype Button */}
        <div className="text-center">
          <motion.button
            onClick={shareHype}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Share2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Share the Hype!</span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient-x" />
          </motion.button>
          <p className="mt-4 text-blue-200/80">Help us spread the word!</p>
        </div>
      </div>
    </div>
  );
}