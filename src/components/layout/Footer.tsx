
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-12 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">RunEvents</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The premier platform for running events, 
              helping runners find races and track their performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-event transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with the latest running events in your area.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-event"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-event hover:bg-event-hover text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} RunEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
