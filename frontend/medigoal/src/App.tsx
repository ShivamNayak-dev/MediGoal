import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseFundraisers from './pages/BrowseFundraisers';
import CampaignDetails from './pages/CampaignDetails';
import StartFundraiser from './pages/StartFundraiser';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PaymentPage from './pages/PaymentPage';
import PaymentSuccess from './pages/PaymentSuccess';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import { AuthProvider } from "./hooks/useAuth";   // ✅ imported
import './App.css';

function App() {
  return (
    <AuthProvider>   {/* ✅ Wrap your whole app here */}
      <Router>
        <div className="App">
          <Navbar />
          <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<BrowseFundraisers />} />
              <Route path="/campaign/:id" element={<CampaignDetails />} />
              <Route path="/start-fundraiser" element={<StartFundraiser />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate/:id" element={<PaymentPage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
