import { useState } from 'react';
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
    <div className="min-h-screen flex items-center justify-center bg-forest-background p-10">
      <div className="p-6 rounded-lg w-full max-w-md shadow-lg shadow-forest-light-green">
        <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Login</h2>
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
              className="btn-gradient font-bold py-2 px-4 rounded-full"
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
