import Link from "next/link";

export default function Home() {
	return (
		<main className="h-screen bg-slate-500 flex flex-col justify-start items-center">
			<h1 className="text-4xl font-bold text-center mt-3">
				CPRG 306: Web Development 2 - Assignments
			</h1>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-2">Week 2 Assignments</Link>
			</p>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-3">Week 3 Assignments</Link>
			</p>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-4">Week 4 Assignments</Link>
			</p>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-5">Week 5 Assignments</Link>
			</p>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-6">Week 6 Assignments</Link>
			</p>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="../week-7">Week 7 Assignments</Link>
			</p>
		</main>
	);
}
