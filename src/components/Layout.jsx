import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/language', label: 'Language' },
    { path: '/media', label: 'Media' },
    { path: '/analysis', label: 'Analysis' },
    { path: '/interactive', label: 'Spot the Hasbara' },
    { path: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-orwell-dark">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-orwell-gray shadow-lg z-50 border-b-2 border-hasbara-red">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-white glitch-text">
                The Ministry of <span className="text-hasbara-red">Hasbara</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path
                      ? 'text-hasbara-red border-b-2 border-hasbara-red'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div id="mobile-menu" className="hidden md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 nav-link ${
                  location.pathname === item.path
                    ? 'text-hasbara-red'
                    : ''
                }`}
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('hidden');
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-orwell-gray border-t-2 border-hasbara-red py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-orwell-light text-sm mb-2">
              <span className="text-hasbara-red font-bold">"War is Peace. Freedom is Slavery. Ignorance is Strength."</span>
            </p>
            <p className="text-orwell-light text-sm">
              An educational project on propaganda and media literacy.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              All content presented for educational purposes under fair use.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

