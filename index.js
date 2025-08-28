import { motion } from "framer-motion";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-black text-white">
      <Navbar />
      <section className="text-center py-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Tahaffuz-e-Namoos-e-Risalat Action Trust India
        </motion.h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Protecting the Honour of the Prophet ﷺ through social, educational & legal efforts in India.
        </p>
        <Button className="mt-6 bg-green-600 hover:bg-green-700">Join Us</Button>
      </section>
      <Footer />
    </div>
  );
}