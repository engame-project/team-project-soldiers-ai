import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Call to Action */}
        <div>
          <h2 className="text-2xl font-bold">Start Your AI Learning Journey Today! 🚀</h2>
          <p className="mt-3 text-gray-200">Join thousands of learners and master AI with our expert-led courses.</p>
          <button className="mt-4 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-gray-200">
            <a className="hover:text-gray-50 transition-all">Courses</a>
            <a className="hover:text-gray-50 transition-all">Tutorials</a>
            <a className="hover:text-gray-50 transition-all">Blog</a>
            <a className="hover:text-gray-50 transition-all">Community</a>
          </nav>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          
          <nav className="flex justify-center md:justify-start space-x-4 mt-3">
            <a className="transition-transform transform hover:scale-110 text-blue-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a className="transition-transform transform hover:scale-110 text-red-500">
              <FaYoutube className="text-2xl" />
            </a>
            <a className="transition-transform transform hover:scale-110 text-blue-500">
              <FaFacebook className="text-2xl" />
            </a>
            <a className="transition-transform transform hover:scale-110 text-pink-400">
              <FaInstagram className="text-2xl" />
            </a>
          </nav>
          <h3 className="text-xl font-semibold mt-6">Subscribe for AI Updates</h3>
          <div className="flex mt-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-l-lg w-64 text-black focus:outline-none" 
            />
            <button className="px-4 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600">Subscribe</button>
          </div>
        </div>
        
      </div>
      
      {/* Copyright */}
      <div className="mt-10 text-center text-gray-300 text-sm max-w-6xl mx-auto">
        <hr />
        <p>© {new Date().getFullYear()} - AI Course Generator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;