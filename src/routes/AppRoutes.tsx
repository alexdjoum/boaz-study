import { Routes, Route } from "react-router-dom";
import Avi from "../pages/Avi";
import Subscription from "../pages/Subscription";
import Login from "../pages/Login";
import ProofOfFinancing from "../pages/ProofOfFInancing";
import PdfDocumentList from "../pages/PdfDocumentList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Avi />} />
      <Route path="/subscriptions" element={<Subscription />} />
      <Route path="/login" element={<Login />} />
      <Route path="/proof-of-financing" element={<ProofOfFinancing />} />
      <Route path="/documents" element={<PdfDocumentList />} />
    </Routes>
  );
}
