import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const subOne = () => updateQty(id, qty - 1);

  return (
		<tr className="CartItem">
			<td>{name}</td>
			<td>${price}</td>
			<td>
				<button onClick={subOne} disabled={qty <= 1}>
					-
				</button>
				<span className="qty">{qty}</span>
				<button onClick={addOne}>+</button>
			</td>
			<td>${qty * price}</td>
		</tr>
	)
}

export default CartItem;
