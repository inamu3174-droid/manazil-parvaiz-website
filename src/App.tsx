import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
