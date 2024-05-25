export default function Item({ name, quantity, category }) {
	return (
		<li className="flex items-center justify-between p-4 mb-2 bg-white border rounded shadow">
			<div>
				<h3 className="text-lg font-semibold text-black">{name}</h3>
				<p className="text-sm text-gray-500">{category}</p>
			</div>
			<span className="text-blue-500 font-bold">{quantity}</span>
		</li>
	);
}

// export default Item;
