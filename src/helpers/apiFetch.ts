export async function apiFetch(method: "GET" | "POST", address: string, body?: object) {
	const responseStream = await fetch("/api" + address, {
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		method: method,
		body: body ? JSON.stringify(body) : null,
	});

	const response = await responseStream.json();
	return response;
}
