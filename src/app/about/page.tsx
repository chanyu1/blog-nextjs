import { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About VICTORY!',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>VICTORY!</h2>
        <p>
          오늘 행복하셨나요?
          <br />
          좋아요!
        </p>
      </section>
    </>
  );
}
