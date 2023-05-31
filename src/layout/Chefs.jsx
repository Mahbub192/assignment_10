import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Footer from "../shared/Footer/Footer";

const Chefs = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Chefs;
