import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === name
  );
  useEffect(() => {
    const producList = new Promise((resolve, reject) => {
      resolve(name ? productosFiltrados : products);
    });

    producList

      .then((res) => {
        setItems(res);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  console.log(itmes);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
