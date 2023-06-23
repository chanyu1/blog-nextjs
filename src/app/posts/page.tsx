import { Metadata } from 'next';
import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: "VICTORY's Posts!",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
