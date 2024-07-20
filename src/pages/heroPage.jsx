// src/pages/HeroPage.js

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HeroPage = () => {
  return (
    <div className="bg-forest-background min-h-screen flex flex-col justify-between">
      <div className="mt-16 max-w-5xl mx-auto p-10">
        <div className="p-3 rounded-lg">
          <h1 className="text-center text-9xl font-bold mb-6 text-gray-300">
            <span className="block fade-in">Welcome to</span>
            <span className="block text-gradient text-6xl fade-in" style={{ animationDelay: '0.5s' }}>
              Antara Daskom Practicum
            </span>
          </h1>
          <p className="text-center max-w-xl mx-auto text-lg mb-6 text-gray-400">
            This is the official site of Praktikum Antara Daskom, where you can find the latest information on assignments and important schedules related to practicum activities.
          </p>
          <div className="text-center">
            <Link to="/login">
              <button className="btn-gradient font-bold py-2 px-10 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <p className="marquee text-xl text-forest-yellow font-bold">
          Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever &nbsp;•&nbsp; Looping Forever
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default HeroPage;
