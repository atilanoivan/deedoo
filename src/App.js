import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./Home";
{/*import Contacto from "./contacto/Contacto";*/}
{/*import Confirmacion from "./confirmacion/Confirmacion";*/}

function App() {
  return (
    
      <Router>
        <Home path="/" default />
        {/*<Contacto path="contacto" /> */}
        {/*<Confirmacion path="confirmacion/:orderId/:tokenUrl/:nombreCliente/:authorization/:model/:firstName/:lastName/:vendorName/:fechaPago/:amount" /> */}     
        </Router>
  );
}

export default App;

