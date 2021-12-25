import Footer from "../components/baselayout/Footer";
import Nav from "../components/baselayout/Nav";

export default function BaseLayout({ children }) {
  return (
    <div className="w-full bg-gray-900 text-white body">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
