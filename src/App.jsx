import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import AuthPage from "./Pages/AuthPage";
import ProfilePage from "./Pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}