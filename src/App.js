import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/container/Home';
import ProjectDetail from './components/ServiceDetail';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Project Detail Page */}
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* Blogs Page */}
        <Route path="/blogs" element={<Blogs />} />

        {/* Blog Detail Page */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

