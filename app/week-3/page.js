import Item from "./item"; // Import the Item component
import ItemList, { Items } from "./item-list"; // Import the Items array

export default function Page() {
	return (
		<main className="container mx-auto p-4">
			<h1 className>Shopping List</h1>
			{ItemList((item) => (
				<Item key={item.id} item={item} />
			))}
		</main>
	);
}
