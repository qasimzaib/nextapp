import { useRouter } from "next/router";

export default function ClientProject() {
	const router = useRouter();
	console.log(router.route);
	console.log(router.query);

	return (
		<div>
			<h1>Client Project {router.query.projectid}</h1>
		</div>
	);
}
