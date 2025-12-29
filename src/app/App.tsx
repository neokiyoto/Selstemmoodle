import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { CircuiTechWizard } from "./components/modules/CircuiTechWizard";
import { WebDevelopment } from "./components/modules/WebDevelopment";
import { DataScience } from "./components/modules/DataScience";
import { DigitalDesign } from "./components/modules/DigitalDesign";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/circuitech-wizard/*" element={<CircuiTechWizard />} />
          <Route path="/module/web-development/*" element={<WebDevelopment />} />
          <Route path="/module/data-science/*" element={<DataScience />} />
          <Route path="/module/digital-design/*" element={<DigitalDesign />} />
          <Route path="/modules" element={<HomePage />} />
          <Route 
            path="/about" 
            element={
              <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h1 className="text-3xl mb-6 text-gray-900">About Learning Hub</h1>
                  <div className="prose max-w-none">
                    <p>
                      Learning Hub is a comprehensive platform designed to provide high-quality 
                      educational content across multiple disciplines. Our mission is to make 
                      learning accessible, engaging, and effective for everyone.
                    </p>
                    <h2>Our Modules</h2>
                    <p>
                      We offer carefully curated modules covering topics from electronics and 
                      circuit design to web development, data science, and digital design. Each 
                      module is structured with clear learning objectives and practical examples.
                    </p>
                    <h2>Interactive Learning</h2>
                    <p>
                      Our platform features an intuitive navigation system with sidebar topic 
                      shortcuts, making it easy to jump between chapters and review specific 
                      concepts whenever needed.
                    </p>
                  </div>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}
