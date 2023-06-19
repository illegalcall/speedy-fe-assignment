// write a post route to create a new blog post, request body should contain
// title, and tone

//return the content which includes content with images and text

export async function POST(
	request: Request,
	response: Response
) {
	try {
		const body = await request.json();
		const { title, tone } = body;
		const newBlog = {
			id: Math.random().toString(36).substr(2, 9),
			title,
			tone,
			content: `This is blog related to ${title} and tone is ${tone}`,
		};
		//TODO: Save in db, if you want
		return new Response(JSON.stringify(newBlog), {
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {
		console.log('err=', err);
		return new Response('Not Found', { status: 404 });
	}
}
