// src/components/Testimonials.jsx

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[#000080] mb-10">What Parents & Students Say</h2>

      <div className="grid md:grid-cols-2 gap-8 px-6">
        {/* Testimonial 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">"Tommie Fulp Academy has transformed my child's education. The teachers are amazing!"</p>
          <h4 className="mt-4 font-semibold">- Jane Doe, Parent</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">"The Christian values taught here have helped me grow spiritually and academically!"</p>
          <h4 className="mt-4 font-semibold">- John Smith, Student</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
