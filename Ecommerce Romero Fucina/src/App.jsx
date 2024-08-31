
import Footer from "./componentes/Footer/Footer";
import CartWidget from "./componentes/CartWidget/CartWidget";
import Navbar from "../componentes/Navbar/navbar";
import ProductCard from "./componentes/ProductCard/ProductCard";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsumeindoApis from "./componentes/ConsumiendoApis/ConsumiendoApis";
import { BsTypeH1 } from "react-icons/bs";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrrego al carrito ${cantidad} elementos`);
  };
  let stock = 10;
  let initial = 1;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/cart" element={<cart />} />

          <Route path="/login" element={<login />} />

          <Route path="*" element={<h1> error 404: Not Found</h1>} />
        
        </Routes>

        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      </BrowserRouter>
    </div>
  );
}