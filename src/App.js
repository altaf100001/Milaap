import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
function App() {
  
  return (
    <Box className="App">
      <Navbar/>
      <MainRoutes />
      <Footer/>
    </Box>
  );
}

export default App;
