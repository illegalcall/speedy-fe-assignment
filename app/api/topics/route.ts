import data from '@/public/data.json';
import fs from 'fs';
import path from 'path';

const dataWritePath = path.join(
	process.cwd(),
	'public/data.json'
);

export async function GET(request: Request) {
	try {
		return new Response(JSON.stringify(data), {
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {
		console.log('err=', err);
		return new Response('Not Found', { status: 404 });
	}
}

export async function POST(
	request: Request,
	response: Response
) {
	try {
		const body = await request.json();
		const { title, keywords } = body;
		const tags = keywords.split(',');
		const newTopic = {
			id: Math.random().toString(36).substr(2, 9),
			title,
			tags,
		};
		data.topics.push(newTopic);
		fs.writeFile(
			dataWritePath,
			JSON.stringify(data),
			(err) => {
				if (err) throw err;
				console.log('The file has been saved!');
			}
		);
		return new Response(JSON.stringify(data), {
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {
		console.log('err=', err);
		return new Response('Not Found', { status: 404 });
	}
}
