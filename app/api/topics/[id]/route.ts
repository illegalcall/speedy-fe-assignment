import fs from 'fs';
import path from 'path';
import data from '@/public/data.json';

const dataWritePath = path.join(
	process.cwd(),
	'public/data.json'
);

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

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const topicIndex = data.topics.findIndex(
			(topic) => topic.id === id
		);
		if (topicIndex > -1) {
			data.topics.splice(topicIndex, 1);
			fs.writeFile(
				dataWritePath,
				JSON.stringify(data),
				(err) => {
					if (err) throw err;
					console.log('The file has been saved!');
				}
			);
			return new Response(JSON.stringify(data.topics), {
				headers: { 'content-type': 'application/json' },
			});
		}
	} catch (err) {
		return new Response('Not Found', { status: 404 });
	}
}
