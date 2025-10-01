import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import TransportOrgDashboard from './pages/TransportOrgDashboard';
import Validity from './pages/Validity';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Collabs from './pages/Collabs';
import Chatbot from './pages/Chatbot';
import { AuthProvider } from './context/AuthContext';
import { PaymentProvider } from './context/PaymentContext';

function App() {
  return (
    <AuthProvider>
      <PaymentProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transport-org" element={<TransportOrgDashboard />} />
                <Route path="/validity" element={<Validity />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/about" element={<About />} />
                <Route path="/collabs" element={<Collabs />} />
                <Route path="/chatbot" element={<Chatbot />} />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </div>
        </Router>
      </PaymentProvider>
    </AuthProvider>
  );
}

export default App;