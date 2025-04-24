import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/" />;

  return <div className="p-4 text-xl">Welcome, Admin 👑</div>;
};

export default AdminDashboard;
