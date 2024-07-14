import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika untuk memvalidasi username dan password
    const validUsername = 'antaraDaskom24'; // Ganti dengan username yang valid
    const validPassword = 'FTEDASKOM1337'; // Ganti dengan password yang valid

    if (username === validUsername && password === validPassword) {
      // Jika valid, arahkan ke halaman selanjutnya
      navigate('/praktikan'); // Ganti dengan rute halaman selanjutnya
    } else {
      // Jika tidak valid, tampilkan pesan error
      setError('Username atau Password salah');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-10">
      <div className="bg-gray-800 p-6 rounded-lg  w-full max-w-md shadow-md shadow-green-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-300">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
