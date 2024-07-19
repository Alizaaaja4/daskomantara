// src/pages/HeroPage.js

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const heroPage = () => {
  return (
    <div className="bg-forest-background min-h-screen">
      <div className="mt-16 max-w-3xl mx-auto p-10 rounded-lg  shadow-md shadow-forest-light-green">
        <div className="p-8 rounded-lg">
          <h1 className="text-center text-4xl font-bold mb-6 text-gradient">
            Selamat Datang di Praktikum 
            <span className="block ">Antara Daskom</span>
          </h1>
          <p className="text-center text-lg mb-6 text-gray-600">
            Ini adalah situs resmi Praktikum Antara Daskom, tempat Anda dapat menemukan informasi terbaru mengenai soal dan jadwal penting terkait kegiatan praktikum.
          </p>
          <div className="text-center">
            <Link to="/login">
              <button className="btn-gradient font-bold py-2 px-4 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default heroPage;
