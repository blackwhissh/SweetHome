import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import RegClient from "./components/RegClient";
import Login from "./components/Login";
import About from "./components/About";
import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { Help } from "@mui/icons-material";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="RegClient" element={<RegClient />} />
        <Route path="Login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="RegistrationForm" element={<RegistrationForm />} />
        <Route path="help/*" element={<Help />}></Route>
        <Route path="Contact/*" element={<Contact />}></Route>
        <Route path="FAQ/*" element={<FAQ />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
