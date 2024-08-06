import React from "react";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "silver",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {items.map((element) => {
        return 
        <div>

        </div>;
      })}
    </div>
  );
};

export default ItemList;