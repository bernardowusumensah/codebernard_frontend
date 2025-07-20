import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-pink-600 text-2xl">💻</span>
          <h1 className="text-2xl font-semibold">CodeBernard</h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-pink-400">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-pink-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-pink-400">Contact</Link></li>
          
          {isAuthenticated ? (
            <li className="flex items-center gap-4">
              <span className="text-pink-400">
                Welcome, {user?.username}!
                {user?.role === 'admin' && (
                  <span className="ml-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs">
                    ADMIN
                  </span>
                )}
              </span>
              {user?.role === 'admin' && (
                <a 
                  href="http://localhost:3000/admin"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition"
                >
                  Admin Panel
                </a>
              )}
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link 
                to="/login"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}