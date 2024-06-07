"use client";
import { useState } from "react";

export default function NewItem() {
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [category, setCategory] = useState("Produce");

	const handleSubmit = (event) => {
		if (name === "") {
			return;
		}
		event.preventDefault();

		const formData = {
			name: name,
			quantity: quantity,
			category: category,
		};
		console.log(formData);

		alert(
			`Added Item name: ${formData.name},\nQuantity: ${formData.quantity},\nCategory: ${formData.category}`
		);

		setName("");
		setQuantity(1);
		setCategory("Produce");
	};
	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleQuantityChange = (event) => {
		setQuantity(parseInt(event.target.value));
	};
	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	return (
		<main className="block bg-slate-500 rounded-2xl">
			<form className="block" onSubmit={handleSubmit}>
				<div>
					<label className="block font-semibold text-center">Item Name</label>
					<input
						required
						className="rounded-md border-2 border-slate-600 px-2 py-1 w-full"
						type="text"
						onChange={handleNameChange}
						value={name}
					/>
				</div>
				<div>
					<label className="block font-semibold text-center">Quantity</label>
					<input
						required
						className="rounded-md border-2 border-slate-600 px-2 py-1 w-full"
						type="number"
						onChange={handleQuantityChange}
						value={quantity}
						min={1}
						max={99}
					/>
				</div>
				<div>
					<label className="block font-semibold text-center">Category</label>
					<select
						onChange={handleCategoryChange}
						value={category}
						className="rounded-md border-2 border-slate-600 px-2 py-1 w-full"
					>
						<option value="Produce">Produce</option>
						<option value="Dairy">Dairy</option>
						<option value="Bakery">Bakery</option>
						<option value="Meat">Meat</option>
						<option value="Frozen Foods">Frozen Foods</option>
						<option value="Canned Goods">Canned Goods</option>
						<option value="Dry Goods">Dry Goods</option>
						<option value="Beverages">Beverages</option>
						<option value="Snacks">Snacks</option>
						<option value="Household">Household</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div className="text-center">
					<button
						type="submit"
						onClick={handleSubmit}
						className="mt-3 bg-slate-600 hover:bg-slate-800 rounded-md px-3 py-1 text-black font-semibold"
					>
						Add Item
					</button>
				</div>
			</form>
		</main>
	);
}
