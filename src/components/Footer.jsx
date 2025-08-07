import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">PatroDev</span>
          </div>

          {/* Quote */}
          <blockquote className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 italic">
            "{t.footer.quote}"
          </blockquote>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© 2025 Patrice COMPAORE</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>{t.footer.madeWith}</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>{t.footer.madeIn}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;