import { cache } from 'react';
import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// 현재 5번 호출 되고, 위의 cache를 이용한 코드로 3번 호출로 줄어듦
// export async function getAllPosts(): Promise<Post[]> {
//   const filePath = path.join(process.cwd(), 'data', 'posts.json');

//   return readFile(filePath, 'utf-8')
//     .then<Post[]>(JSON.parse) // (data) => JSON.parse(data)
//     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  // const metadata = await getAllPosts() //
  // .then((posts) => posts.find((post) => post.path === fileName));

  if (!post) throw new Error(`Not found ${fileName}`);

  const index = posts.indexOf(post);
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const next = index > 0 ? posts[index - 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...post, content, prev, next };
}
