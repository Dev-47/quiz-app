import Footer from "../components/baselayout/Footer";
import Nav from "../components/baselayout/Nav";
import { CustomRoute } from "../router/route/customRoute";

export default function BaseLayout(props) {
  const { children, protector, redirect_to } = props;
  const router_props = {
    children,
    protector,
    redirect_to,
  };

  return (
    <CustomRoute {...router_props}>
      <div className="w-full text-white body">
        <Nav content="Sign Up" />
        {children}
        <Footer />
      </div>
    </CustomRoute>
  );
}
