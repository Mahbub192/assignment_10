import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavigationBar from "../shared/NavigationBar/NavigationBar";


const LoginLayout = () => {
  
    return (
      <div>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  
};

export default LoginLayout;
