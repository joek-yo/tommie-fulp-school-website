// src/pages/About.jsx

const About = () => {
  return (
    <div className="pt-[95px] py-16 px-6 bg-gray-100 text-[#000080]">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">About Tommie Fulp Academy</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Tommie Fulp Academy & Junior School is dedicated to providing a holistic, faith-based education. 
          Our mission is to nurture young minds academically and spiritually, preparing them for a bright future.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p>
              To provide a quality, Christ-centered education that fosters academic excellence, character development, and spiritual growth.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p>
              To be a leading Adventist institution producing responsible, knowledgeable, and God-fearing individuals.
            </p>
          </div>
        </div>

        {/* School History */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-lg">
            Founded in [YEAR], Tommie Fulp Academy has grown to become a respected institution, known for 
            its commitment to academic excellence and Christian values.
          </p>
        </div>

        {/* Meet Our Team */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/Images/Principal.jpg" alt="Principal" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">School Principal</p>
            </div>

            {/* Teacher 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/Images/Jane Smith.jpg" alt="Teacher" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">Mathematics Teacher</p>
            </div>

            {/* Teacher 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/Images/Mark Johnson.jpg" alt="Teacher" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-semibold">Mark Johnson</h3>
              <p className="text-sm text-gray-600">Science Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
