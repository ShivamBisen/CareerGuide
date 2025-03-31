import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareerGuidance from "./pages/CareerGuidance";
import CVRepository from "./pages/CVRepository";
import Documents from "./pages/Documents";
import CVBuddy from "./pages/CV-Buddy";
import CVEditor from "./pages/CVEditor";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CVPage from './pages/CVPage';
import Resources from './pages/Resources';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/roadmaps" element={<CareerGuidance />} />
              <Route path="/cv-repository" element={<CVRepository />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/cv-buddy" element={<CVBuddy />} />
              <Route path="/cv-editor/:institute" element={<CVEditor />} />
              <Route path="/cv/:institute" element={<CVPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
