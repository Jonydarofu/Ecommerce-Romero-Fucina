import { IoCartSharp } from "react-icons/io5";
import "./CartWidget.css";

import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <IoCartSharp
          style={{
            color: "black",
            font: "2rem",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};
export default CartWidget;
