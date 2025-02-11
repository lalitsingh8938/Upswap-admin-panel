// import "./App.css";
// import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
// import KYCRequest from "./components/KYCRequest";
// import Header from "./components/Header";
// import Vendors from "./components/Vendors";
// import Users from "./components/Users";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";
// import Logout from "./components/Logout";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <>
//                 <Login />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/Users"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Header />
//                   <Sidebar />
//                   <Users />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/KYCRequest"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Header />
//                   <Sidebar />
//                   <KYCRequest />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/Vendors"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Header />
//                   <Sidebar />
//                   <Vendors />
//                 </>
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import KYCRequest from "./components/KYCRequest";
import Header from "./components/Header";
import Vendors from "./components/Vendors";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PdfViewer from "./components/PdfViewer";
import BusinessDetails from "./components/BusinessDetails";
import NewVendor from "./components/NewVendor";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Login />
                  {/* <Header />
                  <Sidebar />
                  <KYCRequest /> */}
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
            path="/NewVendor"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <NewVendor />
                </>
              </PrivateRoute>
            }
          />
            <Route
            path="/BusinessDetails"
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <Sidebar />
                  <BusinessDetails />
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
            path="/PdfViewer"
            element={
              <PrivateRoute>
                <PdfViewer />
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
