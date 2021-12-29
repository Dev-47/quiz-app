import Footer from "../components/baselayout/Footer";
import Nav from "../components/baselayout/Nav";

export default function BaseLayout({ children }) {
  return (
    <div className="w-full text-white body">
      <Nav content="Sign Up" />
      {children}
      <Footer />
    </div>
  );
}
