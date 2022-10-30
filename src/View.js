import React from "react";

export const View = ({ items, deleteitem }) => {
  return items.map((item) => (
    <tr  key={item.title}>
      <td >{item.title}</td>
      <td>Quantity: {item.Quantity}</td>
      <td>₹{item.Price}</td>
      <td className="delete-btn" onClick={() => deleteitem(item.title)}>
        <button className="delbtn">Delete</button>
      </td>
    </tr>
  ));
};
