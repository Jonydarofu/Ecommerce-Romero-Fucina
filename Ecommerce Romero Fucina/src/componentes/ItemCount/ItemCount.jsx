import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <h1>Pollo</h1>

      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={() => onAdd(contador)}>Se agrego al carrito</button>
    </div>
  );
};
export default ItemCount;