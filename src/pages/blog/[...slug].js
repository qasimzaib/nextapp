import { useRouter } from "next/router";

export default function BlogPost() {
	const router = useRouter();
	console.log(router.route);
	console.log(router.query);
	
	return (
		<div>
			<h1>Blog Post</h1>
		</div>
	);
}
