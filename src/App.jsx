import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestDriveModal from './components/TestDriveModal';

import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import About from './pages/About';
import Financing from './pages/Financing';
import TradeIn from './pages/TradeIn';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f2f2f2] text-black">
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Navbar onOpenTestDrive={() => setTestDriveOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenTestDrive={() => setTestDriveOpen(true)} />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:slug" element={<CarDetail onOpenTestDrive={() => setTestDriveOpen(true)} />} />
          <Route path="/car/:slug" element={<CarDetail onOpenTestDrive={() => setTestDriveOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/financing" element={<Financing onOpenTestDrive={() => setTestDriveOpen(true)} />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/:type" element={<Legal />} />
          <Route path="*" element={<Home onOpenTestDrive={() => setTestDriveOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Test Drive Scheduling Modal */}
      <TestDriveModal isOpen={testDriveOpen} onClose={() => setTestDriveOpen(false)} />
    </div>
  );
}
