import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";



function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="app" element={<AppLayout />} />
    <Route path="/" element={<HomePage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<PageNotFound />} />

  </Routes>
  </BrowserRouter>
}

export default App
