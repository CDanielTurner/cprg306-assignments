import ItemList from "./item-list";
export default function Item({ itemObj }) {

    let {name, quantity, category} = itemObj;
	return (
		<ul>
			<div className="bg-blue-950 m-3 w-60 h-30 rounded text-center">
				<li>
					<h1 className="font-bold text-blue-300">{name}</h1>
					<p className="text-blue-100">
						buy {quantity}, from {category}
					</p>
				</li>
			</div>
		</ul>
	);
}
