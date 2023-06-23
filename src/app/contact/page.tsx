import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Contact VICTORY!',
};

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center mx-4">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>info@dream-coding.com</p>
      <ul className="flex hap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            className="text-5xl hover:text-yellow-300"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
