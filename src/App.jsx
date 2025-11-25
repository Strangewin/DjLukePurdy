import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Weddings", description: "Professional DJ services for your special day." },
    { title: "Parties", description: "High energy DJ sets for birthdays, celebrations, and more." },
    { title: "Local Events", description: "Bringing the best beats to your community events." },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-black text-white fixed w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">DJ Luke Purdy</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-red-500">Home</a>
            <a href="#services" className="hover:text-red-500">Services</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
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
        className="h-screen bg-[url('https://source.unsplash.com/1600x900/?dj,party')] bg-cover bg-center flex flex-col justify-center items-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
          DJ Luke Purdy
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-center drop-shadow-md">
          Bringing the party wherever you are
        </p>
        <a
          href="#contact"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition"
        >
          Book Me
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact
          </h2>
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

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        &copy; {new Date().getFullYear()} DJ Luke Purdy. All rights reserved.
      </footer>
    </div>
  );
}
