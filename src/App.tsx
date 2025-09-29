import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
