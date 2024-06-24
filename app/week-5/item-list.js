"use client";
import { useState } from "react";
import Item from "./item";
import shoppingItem from "./items.json";


export default function ItemList() {
	let [sortBy, setSortBy] = useState("name");

	let shoppingArray = shoppingItem.map((item) => ({...item}));
	if (sortBy === "name") {
		shoppingArray = shoppingArray.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		});
	}
	return (
		<section>
			<main className="bg-slate-600">
				<div>
					<h1 className="flex text-3xl text-white font-bold py-2 px-4 rounded justify-center">Shopping List</h1>
					<div className="flex justify-center">
						<button
							onClick={() => setSortBy("name")}
							className={`py-2 px-4 rounded text-white ${sortBy === "name" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}
						>
							Sort by Name
						</button>

						<button
							onClick={() => setSortBy("category")}
							className={`py-2 px-4 rounded text-white ${sortBy === "category" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}
						>
							Sort by Category
						</button>
					</div>
					<div className="flex flex-wrap justify-center">
						{shoppingArray.map((item, index) => (
							<Item key={index} itemObj={item} />
						))}
					</div>
				</div>

			</main>
		</section>
	);
}
