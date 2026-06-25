import { error } from '@sveltejs/kit';
import { getPost } from '$lib/blog';
import { blogEnabled } from '$lib/features';

export function load({ params }) {
	if (!blogEnabled) throw error(404, 'Not found');

	const post = getPost(params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
}
