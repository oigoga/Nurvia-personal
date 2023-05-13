import Dashboard from "./pages/Dashboard";
import Swap from "./pages/Swap";
import Earn from "./pages/Earn";
import Deals from "./pages/Deals";
import Borrow from "./pages/Borrow";
import { Route, Routes } from "react-router-dom";
import Smallscreen from "./components/Smallscreen";
import { useEffect, useState } from "react";
const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800); 
    };

    
    handleResize();
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
     {isSmallScreen && <Smallscreen />}
     {
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
}
    </>
  );
};

export default App;
