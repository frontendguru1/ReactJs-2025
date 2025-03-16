const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-lg">&copy; 2025 NY Store. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li>
          <a
            href="#"
            className="text-lg hover:text-gray-200 transition duration-200"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg hover:text-gray-200 transition duration-200"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg hover:text-gray-200 transition duration-200"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
