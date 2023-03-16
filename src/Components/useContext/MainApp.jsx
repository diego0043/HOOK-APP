import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";
//import { NotFound } from "./NotFound";

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/*<Route path="/*" element={<NotFound />} /> */}
        {/* Tambien se puede usar el componente Switch de react-router-dom 
          pero a mi parecer es mejor redirigir a un componente 
        */ }
        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </UserProvider> 
  );
};
 