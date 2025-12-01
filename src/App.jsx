import {useState } from 'react';
import Logo from "./assets/Dj_Luke_Purdy_Logo.png";
import Mixing from "./assets/luke mixing.jpeg";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {title: "Weddings", description: "Professional DJ services for weddings."},
    {title: "Parties", description: "High energy DJ sets for birthdays, celebrations, and more."},
    {title: "Local Events", description: "Bringing the best beats to your community events."},

  ];

  return (
    <div className="font-sans text-gray-800">
      {/*Navbar*/}
      <nav className="bg-black text-white w-full z-10">
        <div className="max-w-full mx-auto flex justify-between items-center p-4">
          <img src={Logo} alt="DJ Luke Purdy Logo" className="h-48" />
          <div className="hidden md:flex space-x-6 text-2xl text-black">
            <a href="#home" className="text-yellow-100 hover:text-red-500">Home</a>
            <a href="#services" className="text-yellow-100 hover:text-red-500">Services</a>
            <a href="contact" className="text-yellow-100 hover:text-red-500">Contact</a>
          </div>
          {/*Mobile menu button*/}
          <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                strokeLineCap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"

                />
              ) : (
                <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/*Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white flex flex-col space-y-2 p-4">
            <a href="#home" className="hover:text-red-500">Home</a>
            <a href="#services" className="hover:text-red-500">Services</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section
  id="home"
  className="relative w-full h-screen bg-cover  bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
  style={{ backgroundImage: `url(${Mixing})` }}
>
  {/* Overlay (helps text stand out) */}
  <div className="absolute inset-0 bg-black/40"></div>

  <h1 className="relative text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg z-10 text-center">
    DJ Luke Purdy
  </h1>

  <p className="relative text-xl md:text-2xl mb-6 drop-shadow-md z-10 text-center">
    Bringing the party wherever you are
  </p>

  <a
    href="#contact"
    className="relative z-10 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition"
  >
    Book Me
  </a>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      {/*Contact Section*/}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h2>
          <form className="flex flex-col space-y-4">
            <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded"
            />
            <textarea
            placeholder="Event Details"
            className="border border-gray-300 p-3 rounded"
            rows="5"
            />
            <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/*Footer*/}
      <footer className="bg-black text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Dj Luke Purdy. All rights reserved.
      </footer>
    </div>
  );
}
 