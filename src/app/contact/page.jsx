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
            <li><Link href="/" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] focus:text-red-800 ">|BIO|</Link></li>
            <li><Link href="/projects" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] ">PROJECTS|</Link></li>
            <li><Link href="/contact" className="text-5xl font-medium hover:text-gray-500 text-[3.75rem] ">CONTACT|</Link></li>
        </ul>
        </nav>
    </div>
    <div className="flex w-full pt-6 font-MB ">
        <div className="card rounded-box grid h-20 flex-grow place-items-center">
            <Image
            className="dark:invert"
            src="/photos/ask.png"
            alt="Contact Me"
            width={360}
            height={200}
            />
        </div>
        <div className="card rounded-box grid h-20 flex-grow place-items-center">
            <section className="bg-white dark:bg-gray-900 uppercase">
                <div className="px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">CONTACT</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a website idea? Want to send feedback about my portfolio? Need details about my style/desgin?</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-950 sm:w-fit ">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    </div>

    </>
)
}