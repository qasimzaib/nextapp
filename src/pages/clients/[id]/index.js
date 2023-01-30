import { useRouter } from "next/router";

export default function ClientProjects() {
	const router = useRouter();
	
	return (
		<div>
			<h1>Projects for client id {router.query.id}</h1>
		</div>
	);
}
