// src/components/Footer.js

import { FaPhone, FaEnvelope, FaInstagram, FaGlobe, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-forest-background text-white border-t-2 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-forest-yellow">Kontak Person</h3>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhone className="mr-2 text-forest-yellow" /> Indi Viska Rahmasari (VIS) - 085802253573
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhone className="mr-2 text-forest-yellow" /> Dennytan Raharjo (TAN) - 081395882733
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaEnvelope className="mr-2 text-forest-yellow" /> daskom@labs.telkomuniversity.ac.id
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-yellow">Temukan Kami</h3>
            <div className="flex justify-center md:justify-end space-x-6 mb-6 md:mb-0">
              <a href="https://www.instagram.com/telu.daskom?igsh=MTdpYXoyYW1tYmU4MA==" target="_blank" rel="noopener noreferrer" className="text-forest-yellow hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.daskomlab.com/" target="_blank" rel="noopener noreferrer" className="text-forest-yellow hover:text-white">
                <FaGlobe size={24} />
              </a>
              <a href="https://www.tiktok.com/@daskom" target="_blank" rel="noopener noreferrer" className="text-forest-yellow hover:text-white">
                <FaTiktok size={24} />
              </a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Praktikum Antara Daskom. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
