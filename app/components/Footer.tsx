import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 max-w-7xl mx-auto border-t border-gray-200 mt-20">
      <div className="text-center">
        <Link 
          href="/"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          Wootton Computer Science Scholar Society
        </Link>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">csssociety.whs@gmail.com</p>
          <a 
            href="https://www.instagram.com/csss.whs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
