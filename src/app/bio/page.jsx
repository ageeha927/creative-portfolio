import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <nav>
          <ul className="flex gap-2 pl-1 items-center font-MB text-6xl">
          <Image
            className="dark:invert animate-spin-slow"
            src="/photos/logo.png"
            alt="Creative Portfolio Logo"
            width={60}
            height={60}
          />
            <li><Link href="/bio" className="text-sm font-medium hover:text-gray-500 text-[3.75rem] focus:text-red-800 ">BIO|</Link></li>
            <li><Link href="/projects" className="text-sm font-medium hover:text-gray-500 text-[3.75rem] ">PROJECTS|</Link></li>
            <li><Link href="/contact" className="text-sm font-medium hover:text-gray-500 text-[3.75rem] ">CONTACT</Link></li>
          </ul>
        </nav>
        <div className="flex justify-end align-top -mt-16">
        <Image
            className="dark:invert flex justify-end"
            src="/photos/ME.png"
            alt="Creative Portfolio Logo"
            width={400}
            height={80}
        />
        </div>
          <h1 className= " leading-[4.75rem] text-[5rem] font-MB ">&nbsp; &nbsp;  HEY. I'M AUDREY GEEHAN - A 17 YEAR  &nbsp;  &nbsp;OLD CREATIVE FULL-STACK DEVLOPER </h1>
      </div>
    </>
  )
}
