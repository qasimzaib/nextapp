import { useRouter } from "next/router";

export default function ClientProjects() {
	const router = useRouter();

	function loadClientProject() {
		router.push({
			pathname: "/clients/[id]/[projectid]",
			query: {
				id: "1",
				projectid: "Project A",
			},
		});
	}

	return (
		<div>
			<h1>Projects for client id {router.query.id}</h1>
			<button onClick={loadClientProject}>Project A</button>
			<button>Project B</button>
		</div>
	);
}
