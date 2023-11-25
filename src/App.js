import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/registration.page";
import Home from "./pages/home.page";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
