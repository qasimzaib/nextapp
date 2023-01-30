import Link from "next/link";

export default function ClientsPage() {
	const clients = [
		{
			id: "1",
			name: "Client 1",
		},
		{
			id: "2",
			name: "Client 2",
		},
		{
			id: "3",
			name: "Client 3",
		},
	];

	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>{client.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
