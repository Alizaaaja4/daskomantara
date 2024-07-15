// src/components/Footer.js

import { FaSmile } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 text-green-300">Semangat Mengerjakan Tugas!</h3>
          <p className="text-lg mb-6 animate-bounce">Tetap semangat, terus belajar, dan jangan pernah menyerah! <FaSmile className="inline ml-2 text-green-300" /></p>
          <p className="mb-2">Praktikum Antara Daskom</p>
          <p>&copy; {new Date().getFullYear()} Praktikum Antara Daskom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
