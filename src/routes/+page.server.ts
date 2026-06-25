import { blogEnabled } from '$lib/features';

export async function load() {
	if (!blogEnabled) return { latestPosts: [] };

	const { getAllPosts } = await import('$lib/blog');
	return { latestPosts: getAllPosts().slice(0, 3) };
}
