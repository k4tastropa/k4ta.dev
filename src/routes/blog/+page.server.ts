import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/blog';
import { blogEnabled } from '$lib/features';

export function load() {
	if (!blogEnabled) throw error(404, 'Not found');

	return { posts: getAllPosts() };
}
