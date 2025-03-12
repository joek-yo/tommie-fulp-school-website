// src/pages/Home.jsx

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center bg-gradient-to-r from-[#87CEEB] to-[#000080] text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="z-10 p-8">
        <h1 className="text-5xl font-bold">Welcome to Tommie Fulp Academy</h1>
        <p className="mt-4 text-lg">Empowering young minds with quality education and strong values.</p>
        
        {/* CTA Button */}
        <a href="/admissions">
          <button className="mt-6 px-6 py-3 bg-[#FFD700] text-[#000080] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#FFC107] transition-all">
            Enroll Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
