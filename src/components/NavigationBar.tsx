import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const NavigationBar = () => {
  const { userRole, setUserRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setUserRole(null);
    navigate('/');
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Categories', to: '/categories' },
    { name: 'About Us', to: '/about' },
    { name: 'Vendor', to: '/vendor' },
  ];

  return (
    <nav className="bg-beige border-b border-brown px-4 py-3 flex items-center justify-end space-x-6">
      <div className="text-2xl font-bold text-brown mr-auto">B</div>
      {userRole === 'admin' ? (
        <>
          <span className="text-brown mr-4">Welcome back, Admin</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded bg-brown text-beige hover:bg-brown/90"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-brown hover:text-brown/80 px-3 py-1 rounded ${
                  isActive ? 'bg-brown/20 font-semibold' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/signin"
            className="px-3 py-1 rounded bg-brown/20 text-brown hover:bg-brown/30"
          >
            Sign in
          </NavLink>
          <NavLink
            to="/register"
            className="px-3 py-1 rounded bg-brown text-beige hover:bg-brown/90"
          >
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
