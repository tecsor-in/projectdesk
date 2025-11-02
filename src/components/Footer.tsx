import { Link } from "react-router-dom";
import { Code2, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8" />
              <span className="font-heading font-bold text-2xl">
                Project Desk
              </span>
            </Link>
            <p className="text-white/80">
              Turning your final year project ideas into reality with
              professional code, reports, and presentations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/domains"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  All Domains
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Domains</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/domains/web-development"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/domains/data-science"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  to="/domains/artificial-intelligence"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-white/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-white/80">info@projectdesk.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Project Desk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
