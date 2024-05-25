import Link from "next/link";

export default function Home() {
	return (
		<main className="h-screen">
			<h1>CPRG 306: Web Development 2 - Assignments</h1>
			<p>
				Below is a link to show a shopping list, a name, and a link to a Github
				repository.
			</p>
			<p>
				<Link href="../week-2">Click me!</Link>
				<Link href="../week-3">Click me!</Link>
			</p>
		</main>
	);
}
