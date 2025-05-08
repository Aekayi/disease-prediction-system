import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";

// Layout.tsx
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Nav />
    <main className="flex-grow ">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
