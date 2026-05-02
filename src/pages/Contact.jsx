import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Get in touch for custom stitching, alterations, or appointments
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Our Shop</h2>
          <p className="text-gray-600">
            We provide premium tailoring services for Men, Women & Kids.
          </p>

          <div className="text-gray-700 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-red-800">
                <MapPin size={15} />
              </span>
              Address: Your City, India
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-green-500">
                <Phone size={15} />
              </span>
              Phone: +91 9876543210
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-blue-500">
                <Mail size={15} />
              </span>
              Email: info@karantailors.com
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2 text-gray-500">
                <Clock size={15} />
              </span>
              Timings: 9:00 AM – 8:00 PM
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full mt-5 cursor-pointer hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
