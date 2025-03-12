
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Trophy, Map, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Results', path: '/results', icon: Trophy },
    { name: 'Locations', path: '/locations', icon: Map },
    { name: 'Admin', path: '/admin', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="text-2xl font-bold text-event hover:text-event-hover transition-colors"
          >
            RunEvents
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium transition-colors hover:text-event ${
                isActive(link.path) 
                  ? 'text-event after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-event after:rounded-full' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button size="sm" variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden animate-fade-in">
          <div className="container py-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 text-xl font-medium ${
                    isActive(link.path)
                      ? 'text-event'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {link.icon && <link.icon size={20} />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col space-y-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="lg" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
