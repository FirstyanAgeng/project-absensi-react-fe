import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOMEPAGE" />} />
        <Route
          path="/dashboard"
          element={<Dashboard title="DASHBOARD PAGE" />}
        />
        <Route
          path="/login"
          element={<Login title="LOGIN PAGE" description="ABSEN KARYAWAN" />}
        />
        <Route
          path="/register"
          element={
            <Register title="REGISTER PAGE" description="ABSEN KARYAWAN" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
