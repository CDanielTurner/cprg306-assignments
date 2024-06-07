"use client";

import NewItem from "./new-item";
import { useState } from "react";

export default function Page() {
	return (
		<div className="h-screen bg-slate-950 flex flex-col justify-start items-center">
			<div>
				<NewItem />
			</div>
		</div>
	);
}
