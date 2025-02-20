import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav>
        <ul className="flex gap-4 items-center font-[Montreal-Bold]">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Creative Portfolio Logo"
          width={120}
          height={40}
        />
          <li>
            <a href="#" className="text-sm font-medium hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-gray-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
