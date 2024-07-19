// src/components/Footer.js

import { FaSmile } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-forest-background text-white py-8 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 text-forest-yellow">Semangat Mengerjakan Tugas!</h3>
          <p className="text-lg mb-6 animate-bounce">Tetap semangat, terus belajar, dan jangan pernah menyerah! <FaSmile className="inline ml-2 text-forest-yellow" /></p>
          <p className="mb-2">Praktikum Antara Daskom</p>
          <p>&copy; {new Date().getFullYear()} Praktikum Antara Daskom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
