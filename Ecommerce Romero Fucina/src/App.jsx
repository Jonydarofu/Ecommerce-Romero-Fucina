import Footer from "./componentes/Footer/Footer";
import CartWidget from "./componentes/CartWidget/CartWidget";
import Navbar from "../componentes/Navbar/navbar";
import ProductCard from "./componentes/ProductCard/ProductCard";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import { getFirestore, getDocs, doc, collection } from "firebase/firestore";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsumeindoApis from "./componentes/ConsumiendoApis/ConsumiendoApis";
import { BsTypeH1 } from "react-icons/bs";

import { initializeApp } from "firebase/app";
import { useEffect } from "react";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCscJmXLGLZFEyrDxb4sM29p45YLUMB3D0",
  authDomain: "my-ecommerce-romero-fucina.firebaseapp.com",
  projectId: "my-ecommerce-romero-fucina",
  storageBucket: "my-ecommerce-romero-fucina.appspot.com",
  messagingSenderId: "58310856787",
  appId: "1:58310856787:web:3ddd7f2930e9cd1dc236a6",
};

const app = initializeApp(firebaseConfig);

useEffect(() => {
  const db = getFirestore(app);
  const refCollection = collection(db, "items");
  getDocs(refCollection).then((snapshot) => {
    console.log (snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data()};
    }));
  });
});

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
