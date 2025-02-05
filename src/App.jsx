import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import KYCRequest from './components/KYCRequest';
import Header from './components/Header';
import Vendors from './components/Vendors';
import Users from './components/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <KYCRequest />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/Users"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <Users />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/KYCRequest"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <KYCRequest />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/Vendors"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <Vendors />
                </>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
