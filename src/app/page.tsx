import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  );
}
