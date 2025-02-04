import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import KYCRequest from "./components/KYCRequest";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vendors from "./components/Vendors";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Sidebar />
              <KYCRequest />
            </>
          }
        />
        <Route
          path="/Users"
          element={
            <>
              <Header />
              <Sidebar />
              <Users />
            </>
          }
        />
        <Route
          path="/KYCRequest"
          element={
            <>
              {" "}
              <Header />
              <Sidebar />
              <KYCRequest />{" "}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Vendors"
          element={
            <>
              <Header />
              <Sidebar />
              <Vendors />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
