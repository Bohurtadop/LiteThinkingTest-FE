import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './views/Login';
import Companies from './views/Companies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="/companies" element={<Companies />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
