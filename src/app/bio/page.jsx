import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <nav>
          <ul className="flex gap-2 pl-1 items-center font-MB">
          <Image
            className="dark:invert animate-spin-slow"
            src="/photos/logo.png"
            alt="Creative Portfolio Logo"
            width={60}
            height={60}
          />
            <li><Link href="/bio" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] focus:text-red-800 ">|BIO|</Link></li>
            <li><Link href="/projects" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] ">PROJECTS|</Link></li>
            <li><Link href="/contact" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] ">CONTACT|</Link></li>
          </ul>
        </nav>
        <div className="flex justify-end align-top -mt-16">
        <Image
            className="dark:invert flex justify-end"
            src="/photos/ME.png"
            alt="Creative Portfolio Logo"
            width={350}
            height={350}
        />
        </div>
          <h1 className= " leading-[4.75rem] text-[5rem] font-MB ">&nbsp; &nbsp;  HEY. I'M AUDREY GEEHAN - A 17 YEAR  &nbsp;  &nbsp;OLD CREATIVE FULL-STACK DEVLOPER </h1>
      </div>
      <div className="place-content-center text-center pt-10">
        <h1 className="pb-6">ME</h1>
        <p className="font-MB text-5xl uppercase ">Creative full-stack web developer with a passion for blending art, photography, and code. My adaptability allows me to craft unique digital experiences tailored to any style or preference. Every project reflects my artistic vision, technical expertise, and the harmony between creativity and functionality.</p>
      </div>
      <div className="pt-6">
        <Image src="/photos/hobbies.png" alt="hobbies" width={2000} height={60}/>
      </div>
      <div className="place-content-center text-center pt-10">
        <h1 className="pb-6">LANGUAGES/ FRAMEWORKS</h1>
        <p className="font-MB text-5xl uppercase ">html / css / js / react / next.js / python / tailwind / EJS</p>
        <div className="flex justify-around pt-6">
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 100 }}role="progressbar">100%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 100 }}role="progressbar">100%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 90 }}role="progressbar">90%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 80 }}role="progressbar">80%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 40 }}role="progressbar">40%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 90 }}role="progressbar">90%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 60 }}role="progressbar">60%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 100 }}role="progressbar">100%</div>
        </div>
      </div>
      <div className="place-content-center text-center pt-10">
        <h1 className="pb-6">PROFESSIONAL SKILLS</h1>
        <p className="font-MB text-5xl uppercase ">LEADERSHIP / CREATIVITY / PROBLEM SOLVING / COMMUNICATION</p>
      </div>
      <div className="flex justify-around pt-6">
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 90, "--size": "12rem", "--thickness": "2rem" }}role="progressbar">90%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 92, "--size": "12rem", "--thickness": "2rem" }}role="progressbar">95%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 80, "--size": "12rem", "--thickness": "2rem" }}role="progressbar">80%</div>
          <div className="radial-progress bg-success-content text-base-100 border-success-content border-4 animate-spin-slow" style={{ "--value": 90, "--size": "12rem", "--thickness": "2rem" }}role="progressbar">90%</div>
        </div>
    </>
  )
}
