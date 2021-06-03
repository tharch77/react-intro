import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import './Cart.css'

function Cart({ initialItems }) {
	const initialState = JSON.parse(window.localStorage.getItem('items'))
	const [items, setItems] = useState(initialState || initialItems)

	useEffect(() => {
		window.localStorage.setItem('items', JSON.stringify(items))
	}, [items])

	const updateQty = (id, newQty) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, qty: newQty }
			}
			return item
		})
		setItems(newItems)
	}

	const grandTotal = items
		.reduce((total, item) => total + item.qty * item.price, 0)
		.toFixed(2)

	return (
		<div className="Cart">
			<h1 className="Cart-title">商品カート</h1>
			<table className="table is-hoverable">
				<thead>
					<tr>
						<th scope="col">商品</th>
						<th scope="col">単価</th>
						<th scope="col">　　数量</th>
						<th scope="col">金額</th>
					</tr>
				</thead>

				<tbody>
						{items.map((item) => {
							return <CartItem key={item.id} updateQty={updateQty} {...item} />
						})}
				</tbody>

				<tfoot>
					<tr>
						<th scope="col"></th>
						<th scope="col"></th>
						<th scope="col" style={{textAlign: 'right'}}>金額：</th>
						<th scope="col">
							<h2 className="Cart-total">${grandTotal}</h2>
						</th>
					</tr>
				</tfoot>
			</table>

		</div>
	)
}

export default Cart
