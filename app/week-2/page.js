import Link from "next/link";
import StudentInfo from "./student-info";

export default function Page() {
	return (
		<main className="h-screen bg-slate-500 flex flex-col justify-start items-center">
			<h1 className="text-4xl font-bold text-center mt-3">Shopping List</h1>
			<p>
				<StudentInfo />
			</p>
		</main>
	);
}
