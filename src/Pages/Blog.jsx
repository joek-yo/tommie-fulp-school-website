import { useState } from "react";

const Blog = () => {
  // Extended list of blog posts
  const blogPosts = [
    {
      id: 1,
      title: "New Academic Year Admissions Open!",
      image: "/Images/Admission.jpg",
      summary: "Enroll now for the 2025 academic year. Apply online today!",
      date: "March 10, 2025",
    },
    {
      id: 2,
      title: "Inter-School Science Competition Winners!",
      image: "/Images/Cup.jpg",
      summary: "Our students emerged victorious in the annual science competition.",
      date: "March 5, 2025",
    },
    {
      id: 3,
      title: "Sports Day 2025 – A Day to Remember",
      image: "/Images/Sports.jpg",
      summary: "Relive the thrilling moments of our recent Sports Day event!",
      date: "February 28, 2025",
    },
    {
      id: 4,
      title: "Tech Innovations in Our Classrooms!",
      image: "/Images/Class room.jpg",
      summary: "Our school is integrating AI-powered learning tools and interactive smart boards to enhance student engagement and academic performance.",
      date: "March 1, 2025",
    },
    {
      id: 5,
      title: "Annual Cultural Day – A Celebration of Diversity",
      image: "/Images/culture.jpg",
      summary: "Students showcased their rich cultural heritage with performances, traditional attire, and delicious cuisine from different backgrounds.",
      date: "February 20, 2025",
    },
    {
      id: 6,
      title: "Meet the Student Council Leaders of 2025!",
      image: "/Images/Student council.jpg",
      summary: "Get to know our newly elected student council representatives and their plans for the school this year.",
      date: "February 15, 2025",
    },
    {
      id: 7,
      title: "Our Robotics Team Shines in the National Championship",
      image: "/Images/Robotic.jpg",
      summary: "The school robotics team secured second place in the National Robotics Championship! Congratulations to our young innovators.",
      date: "January 30, 2025",
    },
    {
      id: 8,
      title: "School Library Gets a Modern Upgrade!",
      image: "/Images/Library.jpg",
      summary: "Our library now features a digital book collection, VR learning spaces, and an online catalog for easier access to resources.",
      date: "January 25, 2025",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-[95px] container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#000080]">School News & Updates</h1>
      <p className="text-center text-gray-600 mt-2">Stay informed with our latest updates.</p>

      {/* Blog Posts */}
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#000080]">{post.title}</h2>
              <p className="text-gray-600">{post.summary}</p>
              <p className="text-sm text-gray-500 mt-2">📅 {post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 bg-[#000080] text-white rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0057b7]"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 bg-[#000080] text-white rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0057b7]"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
