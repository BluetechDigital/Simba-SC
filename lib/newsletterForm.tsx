export const sendNewsletterForm = async (data: any) => {
	fetch("/api/email/newsletter", {
		method: "POST",
		body: JSON.stringify(data),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});
};
