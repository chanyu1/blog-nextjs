'use client';

import { useState } from 'react';
import { Post } from '@/service/posts';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex justify-between m-4">
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        setSelected={setSelected} // (selected) => setSelected(selected)
      />
    </section>
  );
}
