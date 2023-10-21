import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-12 pb-6">
      <img class="h-auto max-w-lg rounded-lg" src="./static/img/logo.png" alt="image description"/>
      <p className="text-2xl dark:text-white text-center">
      </p>
    </header>
  );
}
