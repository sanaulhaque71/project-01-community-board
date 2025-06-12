import React from "react";

const Card = ({ name, address, phone, cost }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>📍 {address}</p>
      <p>📞 {phone}</p>
      <p>💲 {cost}</p>
    </div>
  );
};

export default Card;