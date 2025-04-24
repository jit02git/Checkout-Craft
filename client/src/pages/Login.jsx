import { useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/login', { email, password });
    login(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
    </form>
  );
};

export default Login;
