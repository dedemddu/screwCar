import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Navigation from "./components/Navigation"
import HomeView from "./views/HomeView"
import SaleRepuestoView from "./views/SaleRepuestoView";
import NewRepuestoView from "./views/NewRepuestoView";
import EditRepuestoView from "./views/EditRepuestoView";

const App = () => {
  return (
    <Router>
      <CartContextProvider>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<HomeView />} /> */}
        <Route path="/" element={<SaleRepuestoView />} />        
        <Route path="/newrepuesto" element={<NewRepuestoView />} />
        <Route path="/editrepuesto/:id" element={<EditRepuestoView />} />
        <Route path="/configRepuesto" element={<HomeView />} />
      </Routes>      
      </CartContextProvider>
    </Router>
  )
}

export default App;