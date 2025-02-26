import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav>
        <ul className="flex gap-4 items-center font-[Montreal-Bold]">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Creative Portfolio Logo"
          width={120}
          height={40}
        />
          <li><a href="#" className="text-sm font-medium hover:text-gray-500">BIO,</a></li>
        </ul>
      </nav>
    </div>
  )
}
