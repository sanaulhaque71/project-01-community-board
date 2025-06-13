import React from "react";

const Card = ({ name, address, phone, cost, link, maps }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>📍 {address}</p>
      <p>📞 {phone}</p>
      <p>💲 {cost}</p>
      <p>🌐 <a href={link}>{name}</a></p>
      <p>🗺️ <a href={maps}>View on Google Maps</a></p>
    </div>
  );
};

export default Card;