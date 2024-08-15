import Link from 'next/link'

export default function Header() {
  return (
    <nav className="hidden sm:flex h-14 bg-abbey-800 text-white text-[.9rem] sm:text-[.95rem] justify-between align-middle items-center font-medium tracking-wide text-base">
      <div className="flex w-full justify-between px-4 sm:px-20">
        <div>
          TWR Detailing
        </div>
        <div>
          <ul className="flex">
            <li className="px-2 sm:px-8">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="px-2 sm:px-8">
              <Link href="#about">About</Link>
            </li>
            <li className="px-2 sm:px-8">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
