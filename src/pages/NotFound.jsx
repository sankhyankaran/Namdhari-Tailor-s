import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! Page not found
      </p>

      <Link 
        to="/" 
        className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;