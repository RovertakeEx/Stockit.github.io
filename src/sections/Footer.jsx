import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-gray-600 mt-30">
      <section className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">     
          {/* Branding + Description + Social */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span>Stockit</span>
            </h2>
            <p className="mt-3 text-sm pe-6">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 1 - Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Feature</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Business</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Support 24</a></li>
            </ul>
          </div>
        </div>
        <div className='py-6'>
          <div className='border-t border-gray-200'>
          </div>
        </div>
        {/* Footer Bottom */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 mx-auto">
              <p>© {new Date().getFullYear()} Powered by <a href='https://www.rovertake.com' className='hover:underline' target='_blank'>Rovertake</a></p>
            </div>  
        </div>
      </section>    
    </footer>
  );
};

export default Footer;
