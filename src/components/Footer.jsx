// src/components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-2">Kontak Person</h3>
          <span className="block">Indi Viska Rahmasari (VIS) - 081234567890</span>
          <span className="block">Dennytan Raharjo (TAN) - 087654321098</span>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Praktikum Antara Daskom. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  