import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Content from './pages/Content';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="scroll-smooth">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Content />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;