import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WeddingsPage from './pages/WeddingsPage';
import ServicesPage from './pages/ServicesPage';
import CategoriesPage from './pages/CategoriesPage';
import VendorPage from './pages/VendorPage';
import VendorProfilePage from './pages/VendorProfilePage';
import NavigationBar from './components/NavigationBar';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="bg-beige text-brown min-h-screen">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/vendor/:id" element={<VendorProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
