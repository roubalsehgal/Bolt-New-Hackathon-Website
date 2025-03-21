import { motion } from 'framer-motion';
import Hero from './components/Hero Section/Hero';
import Prizes from './components/PrizeSection';
import Footer from './components/Footer';
import JudgesSection from './components/Judges';
import SponsorsSection from './components/Sponsors';
import LatestUpdates from './components/LatestUpdates';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white"
    >
      <Hero />
      <Prizes />
      <JudgesSection />
      <SponsorsSection />
      <LatestUpdates />
      <Footer />
    </motion.div>
  );
}

export default App;