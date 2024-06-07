import Link from "next/link";

export default function StudentInfo() {
	return (
		<main>
			<h1 className="text-2xl text-center mt-3">My name is Carson Turner</h1>
			<p className="hover:underline hover:font-bold text-2xl">
				<Link href="https://github.com/CDanielTurner/cprg306-assignments">
					Github
				</Link>
			</p>
		</main>
	);
}
