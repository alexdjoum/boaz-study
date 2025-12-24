import { Routes, Route } from "react-router-dom";
import Avi from "../pages/Avi";
import Subscription from "../pages/Subscription";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Avi />} />
      <Route path="/subscriptions" element={<Subscription />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
