// src/components/Testimonials.jsx

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[#000080] mb-10">What Parents & Students Say</h2>

      <div className="grid md:grid-cols-2 gap-8 px-6">
        {/* Testimonial 1 */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg italic">"Tommie Fulp Academy has transformed my child's education. The teachers are amazing!"</p>
          <h4 className="mt-4 font-semibold">- Jane Doe, Parent</h4>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg italic">"The Christian values taught here have helped me grow spiritually and academically!"</p>
          <h4 className="mt-4 font-semibold">- John Smith, Student</h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
