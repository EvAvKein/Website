import fetch from "node-fetch";

const sendgridKey = process.env.SENDGRID_API_KEY;

function requestIsValid(requestObject) {
	if (
		typeof requestObject === "object" &&
		requestObject !== null &&
		typeof requestObject.title === "string" &&
		typeof requestObject.body === "string" &&
		typeof requestObject.email === "string"
	) {
		return true;
	}

	return false;
}

export default async (request, response) => {
	if (request.method !== "POST") {
		response.json("invalid request");
		return;
	}

	if (!requestIsValid(request.body)) {
		response.json("invalid request");
		return;
	}

	const formContent = request.body;

	const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + sendgridKey,
		},
		method: "POST",
		body: JSON.stringify({
			from: {email: "contact@evavkein.com"},
			template_id: "d-57c1ec3c1fcb47d792b6598f1fac7455",
			subject: formContent.title,
			personalizations: [
				{
					to: [{email: "contact@evavkein.com"}],
					dynamic_template_data: {
						title: formContent.title,
						body: formContent.body,
						email: formContent.email,
						timestamp: new Date().toLocaleString("en-GB", {dateStyle: "short", timeStyle: "long", timeZone: "UTC"}),
					},
				},
			],
		}),
	});

	response.json({outcome: sendgridResponse.ok});
};
