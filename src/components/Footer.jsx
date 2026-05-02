import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="font-semibold text-lg">Muktsar Wale</span>
            </div>
            <p className="text-sm text-gray-600">
              Premium stitching for Men, Women & Kids. Custom designs with
              perfect fitting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Custom Stitching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Alterations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Wedding Wear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-red-800">
                <MapPin size={15} />
              </span>{" "}
              Your City, India
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-green-500">
                <Phone size={15} />
              </span>{" "}
              +91 9876543210
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-blue-500">
                <Mail size={15} />
              </span>{" "}
              info@karantailors.com
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Muktsar Wale. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
