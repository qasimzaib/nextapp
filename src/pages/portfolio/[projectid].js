import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
	const router = useRouter();
	console.log(router.route);
	console.log(router.query);
	return (
		<div>
			<h1>Project</h1>
		</div>
	);
}
