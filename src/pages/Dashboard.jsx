import { useNavigate } from 'react-router-dom';
import { FaFileAlt, FaJournalWhills, FaClipboardCheck, FaBookOpen } from 'react-icons/fa';
import { DASHBOARD_DATA_REG, DASHBOARD_DATA_INTER } from '../constants/Database';
import FooterDash from "../components/FooterDash";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out');
    localStorage.removeItem('authToken'); // Clear auth token
    navigate('/', { replace: true }); 
  };

  const getIcon = (title) => {
    switch (title) {
      case "Soal TP":
      case "TP Assignment":
        return <FaFileAlt className="text-4xl mb-2 text-forest-orange" />;
      case "Soal TA":
      case "TA Assignment":
        return <FaClipboardCheck className="text-4xl mb-2 text-forest-purple" />;
      case "Soal TK":
      case "TK Assignment":
        return <FaBookOpen className="text-4xl mb-2 text-forest-red" />;
      case "JURNAL":
      case "Journal":
        return <FaJournalWhills className="text-4xl mb-2 text-forest-yellow" />;
      case "MANDIRI":
      case "Independent Assignment":
        return <FaFileAlt className="text-4xl mb-2 text-forest-indigo" />;
      case "TUBES":
      case "Project":
        return <FaClipboardCheck className="text-4xl mb-2 text-forest-pink" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-forest-background text-white p-6">
      <h1 className="text-4xl font-bold mb-2 text-center">Student <span className='text-gradient'>Dashboard</span></h1>
      <p className="text-center text-lg text-gray-400 mb-6">
        Discover the latest information about your assignments and practicum schedules here.
      </p>
      <div className="flex justify-end mb-4">
        <button 
          onClick={handleLogout} 
          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-2 px-4 rounded-full hover:from-red-600 hover:to-red-700"
        >
          Logout
        </button>
      </div>

      <section>
        <div className="">
          <h3 className="text-2xl font-bold mb-4 text-white">REGULER</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DASHBOARD_DATA_REG.map(({ id, title, openDate, closeDate, status, link1, link2 }) => (
            <div key={id} className="bg-forest-card border p-4 rounded-lg flex flex-col shadow-md shadow-forest-light-green card-zoom">
              {getIcon(title)}
              <h2 className="text-xl font-semibold mb-2 text-gradient">{title}</h2>
              <p className="text-forest-light-gray mb-2">Dibuka pada: {openDate}</p>
              <p className="text-forest-light-gray mb-2">Tutup pada: {closeDate}</p>
              <p className="text-forest-light-gray mb-4">Status: {status}</p>
              <div className="flex justify-center mt-6">
                <a href={link1} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-900">Modul 7</a>
                <a href={link2} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white py-2 px-4 rounded-md text-center hover:bg-orange-900 ml-2">Modul 8</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="">
          <h3 className="text-2xl font-bold mb-4 text-white">INTER</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DASHBOARD_DATA_INTER.map(({ id, title, openDate, closeDate, status, link1, link2 }) => (
            <div key={id} className="bg-forest-card border p-4 rounded-lg flex flex-col shadow-md shadow-forest-light-green card-zoom">
              {getIcon(title)}
              <h2 className="text-xl font-semibold mb-2 text-gradient">{title}</h2>
              <p className="text-forest-light-gray mb-2">Open on: {openDate}</p>
              <p className="text-forest-light-gray mb-2">Close on: {closeDate}</p>
              <p className="text-forest-light-gray mb-4">Status: {status}</p>
              <div className="flex justify-center mt-6">
                <a href={link1} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-900">Modul 7</a>
                <a href={link2} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white py-2 px-4 rounded-md text-center hover:bg-orange-900 ml-2">Modul 8</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterDash />
    </div>
  );
};

export default Dashboard;
