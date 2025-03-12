// src/components/Features.jsx

const Features = () => {
  return (
    <section className="py-16 bg-white text-[#000080]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-10">We offer a holistic education experience that nurtures students academically, spiritually, and socially.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 shadow-lg rounded-lg bg-[#87CEEB] text-white">
            <h3 className="text-2xl font-semibold mb-3">Quality Education</h3>
            <p>Our dedicated teachers ensure students receive top-notch education in all subjects.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 shadow-lg rounded-lg bg-[#000080] text-white">
            <h3 className="text-2xl font-semibold mb-3">Christian Values</h3>
            <p>We instill strong Christian values to guide students in their daily lives.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 shadow-lg rounded-lg bg-[#FFD700] text-[#000080]">
            <h3 className="text-2xl font-semibold mb-3">Modern Facilities</h3>
            <p>Our school is equipped with modern classrooms, labs, and a digital library.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
