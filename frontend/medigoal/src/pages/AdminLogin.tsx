import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const { loginAsAdmin, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white border rounded-lg shadow-sm p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-[#333] mb-4">Admin Login</h1>
        <p className="text-sm text-[#666] mb-6">
          This route is for admin access. (Dev shortcut enabled)
        </p>
        <button
          onClick={() => {
            loginAsAdmin();
            navigate('/admin');
          }}
          className="px-4 py-2 border-2 border-[#0077B6] text-[#0077B6] rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-200"
        >
          Continue to Admin Panel
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
