import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFileAlt, FaJournalWhills, FaClipboardCheck, FaBookOpen } from 'react-icons/fa';
import { DASHBOARD_DATA_REG, DASHBOARD_DATA_INTER } from '../constants/Database';
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out');
    localStorage.removeItem('authToken'); // Clear auth token
    navigate('/', { replace: true }); // Redirect to main page
  };

  const getIcon = (title) => {
    switch (title) {
      case "Soal TP":
      case "TP Assignment":
        return <FaFileAlt className="text-4xl mb-2 text-orange-500" />;
      case "Soal TA":
      case "TA Assignment":
        return <FaClipboardCheck className="text-4xl mb-2 text-purple-500" />;
      case "Soal TK":
      case "TK Assignment":
        return <FaBookOpen className="text-4xl mb-2 text-red-500" />;
      case "JURNAL":
      case "Journal":
        return <FaJournalWhills className="text-4xl mb-2 text-yellow-500" />;
      case "MANDIRI":
      case "Independent Assignment":
        return <FaFileAlt className="text-4xl mb-2 text-indigo-500" />;
      case "TUBES":
      case "Project":
        return <FaClipboardCheck className="text-4xl mb-2 text-pink-500" />;
      default:
        return null;
    }
  };
  

  return (
    <div className="min-h-screen mt-10 bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-2 text-center">Student Dashboard</h1>
      <p className="text-center text-lg text-gray-400 mb-6">
        Discover the latest information about your assignments and practicum schedules here.
      </p>
      <div className="flex justify-end mb-4">
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>


      <section>
        <h3 className="text-2xl mb-4 text-green-500">REGULER</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DASHBOARD_DATA_REG.map(({ id, title, openDate, closeDate, time, module, link }) => (
            <div key={id} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
              {getIcon(title)}
              <h2 className="text-xl font-semibold mb-2 text-green-500">{title}</h2>
              <p className="text-gray-300 mb-2">Membuka pada: {openDate}</p>
              <p className="text-gray-300 mb-2">Tutup pada: {closeDate}</p>
              <p className="text-gray-300 mb-4">Waktu: {time}</p>
              <p className="text-gray-300 mb-2">Modul: {module}</p>
              <Link to={link} className="mt-auto bg-green-500 text-white py-2 rounded-md text-center hover:bg-green-700">Akses</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl mb-4 text-blue-500">INTER</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DASHBOARD_DATA_INTER.map(({ id, title, openDate, closeDate, time, module, link }) => (
            <div key={id} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
              {getIcon(title)}
              <p className="text-gray-300 mb-2">Opens on: {openDate}</p>
              <p className="text-gray-300 mb-2">Closes on: {closeDate}</p>
              <p className="text-gray-300 mb-4">Time: {time}</p>
              <p className="text-gray-300 mb-2">Module: {module}</p>
              <Link to={link} className="mt-auto bg-blue-500 text-white py-2 rounded-md text-center hover:bg-blue-700">Access</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
