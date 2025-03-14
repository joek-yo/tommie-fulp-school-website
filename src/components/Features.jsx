import { motion } from "framer-motion";

// Animation settings for each feature card
const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start lower and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Fade in and slide up
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }, // Pop effect on hover
};

const Features = () => {
  return (
    <section className="py-16 bg-white text-[#000080]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-10">
          We offer a holistic education experience that nurtures students academically, spiritually, and socially.
        </p>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Feature 1 */}
          <motion.div 
            variants={itemVariants} 
            whileHover="hover"
            className="p-6 shadow-lg rounded-lg bg-[#87CEEB] text-white"
          >
            <h3 className="text-2xl font-semibold mb-3">Quality Education</h3>
            <p>Our dedicated teachers ensure students receive top-notch education in all subjects.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            variants={itemVariants} 
            whileHover="hover"
            className="p-6 shadow-lg rounded-lg bg-[#000080] text-white"
          >
            <h3 className="text-2xl font-semibold mb-3">Christian Values</h3>
            <p>We instill strong Christian values to guide students in their daily lives.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            variants={itemVariants} 
            whileHover="hover"
            className="p-6 shadow-lg rounded-lg bg-[#FFD700] text-[#000080]"
          >
            <h3 className="text-2xl font-semibold mb-3">Modern Facilities</h3>
            <p>Our school is equipped with modern classrooms, labs, and a digital library.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
