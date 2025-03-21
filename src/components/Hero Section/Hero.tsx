import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Clock, Users, Zap, Globe, Award, Code } from "lucide-react";
import Hero3D from "./Hero3D";
import StarryBackground from "./StarryBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#000033] via-[#000066] to-black">
      {/* 3D Background with enhanced particle density */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />
          <ambientLight intensity={0.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={0.5}
          />
          <StarryBackground />
          <Hero3D />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          {/* Event Badge - Fixed jerking issue with smoother animation */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full px-6 py-2 border border-blue-400/30 relative overflow-hidden">
              {/* Metallic shimmer effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["200% 0%", "-200% 0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(192, 202, 245, 0) 35%, rgba(192, 210, 255, 0.15) 50%, rgba(192, 202, 245, 0) 65%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <span
                className="text-blue-200 font-semibold tracking-wide relative z-10"
                style={{
                  textShadow: "0 0 1px rgba(200, 210, 255, 0.2)",
                }}
              >
                Build. Break. Innovate
              </span>
            </div>
          </motion.div>

          {/* Main Title - Enhanced with new animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Code Elements - Enhanced */}
            <motion.div className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-20">
              <pre className="text-left text-sm text-blue-400">
                <code>{`function createFuture() {
  return {
    innovation: unstoppable,
    limits: shattered,
    possibilities: infinite
  };
}`}</code>
              </pre>
            </motion.div>

            <motion.div className="absolute -right-4 top-1/2 transform -translate-y-1/2 opacity-20">
              <pre className="text-left text-sm text-purple-400">
                <code>{`async function breakBarriers() {
  while (true) {
    await build(impossible);
    redefine(possible);
  }
}`}</code>
              </pre>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                The World's Largest
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-blue-300"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              >
                Hackathon
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl font-light text-blue-200/90 mb-12 tracking-wide"
          >
            <span className="text-xl text-blue-300/70 inline-block">
              <Code size={16} className="inline-block mr-2 mb-1" />
              Powered by <span className="font-semibold">bolt.new</span>
            </span>
          </motion.div>

          {/* Prize Pool Counter - Enhanced with value proposition badges */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-block bg-blue-900/20 backdrop-blur-xl rounded-2xl px-8 py-6 border border-blue-500/20">
              <div className="flex items-center justify-center">
                <div>
                  <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
                    $1M+
                  </span>
                  <span className="text-xl md:text-2xl text-blue-200/70 ml-3">
                    Prize Pool
                  </span>
                </div>
              </div>

              {/* Value proposition badges - New Element */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-xs text-blue-200/80 bg-blue-500/10 px-3 py-1 rounded-full">
                  Mentorship
                </div>
                <div className="text-xs text-blue-200/80 bg-blue-500/10 px-3 py-1 rounded-full">
                  Investor Access
                </div>
                <div className="text-xs text-blue-200/80 bg-blue-500/10 px-3 py-1 rounded-full">
                  Launch Support
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <motion.a
              href="https://bolt.fyi/m-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10 flex items-center">
                <Zap size={18} className="mr-2" />
                Register Now
              </span>
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  background: [
                    "radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)",
                    "radial-gradient(circle at center, rgba(59,130,246,0.4) 0%, transparent 90%)",
                    "radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#learn-more"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-xl font-semibold text-blue-300 border-2 border-blue-500/30 rounded-full hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300"
            >
              Discover More
            </motion.a>
          </div>

          {/* Event Timer - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12"
          >
            <div className="inline-block bg-blue-900/10 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-500/10">
              <span className="text-blue-300/80 text-sm">
                Registration closes in{" "}
              </span>
              <span className="font-mono ml-2 text-blue-200 bg-blue-800/30 px-2 py-1 rounded mr-1">
                14d
              </span>
              <span className="text-blue-300/80">:</span>
              <span className="font-mono ml-1 text-blue-200 bg-blue-800/30 px-2 py-1 rounded mr-1">
                22h
              </span>
              <span className="text-blue-300/80">:</span>
              <span className="font-mono ml-1 text-blue-200 bg-blue-800/30 px-2 py-1 rounded">
                36m
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* Animated Star Particles - New Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
