// src/pages/Blog.jsx

import { useState } from "react";

const Blog = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "New Academic Year Admissions Open!",
      image: "/images/admissions.jpg",
      summary: "Enroll now for the 2025 academic year. Apply online today!",
      date: "March 10, 2025",
    },
    {
      id: 2,
      title: "Inter-School Science Competition Winners!",
      image: "/images/science-fair.jpg",
      summary: "Our students emerged victorious in the annual science competition.",
      date: "March 5, 2025",
    },
    {
      id: 3,
      title: "Sports Day 2025 – A Day to Remember",
      image: "/images/sports-day.jpg",
      summary: "Relive the thrilling moments of our recent Sports Day event!",
      date: "February 28, 2025",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#000080]">School News & Updates</h1>
      <p className="text-center text-gray-600 mt-2">Stay informed with our latest updates.</p>

      {/* Blog Posts */}
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
