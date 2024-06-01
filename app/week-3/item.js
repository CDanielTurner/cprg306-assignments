import ItemList from "./item-list";
export default function Item({ name, quantity, category }) {
	return (
		<ul>
			<div className="bg-blue-900 m-3 w-60 h-30 rounded text-center">
				<li>
					<h1 className="font-bold text-blue-300">{name}</h1>
					<p>
						buy {quantity}, from {category}
					</p>
				</li>
			</div>
		</ul>
	);
}
