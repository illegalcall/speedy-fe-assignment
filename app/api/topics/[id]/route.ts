import data from '@/public/data.json';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const topic = data.topics.find(
			(topic) => topic.id === id
		);
		if (topic) {
			return new Response(JSON.stringify(topic), {
				headers: { 'content-type': 'application/json' },
			});
		}
	} catch (err) {
		return new Response('Not Found', { status: 404 });
	}
}
