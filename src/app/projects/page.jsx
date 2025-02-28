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
    </div>
    <div className="flex justify-around pt-6">
    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/v1740726087/Screenshot_66_pf4ict.png"
            alt="Hangman" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Hangman
            </h2>
            <p>A Javascript Slime Rancher Insipired Hangman.</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Game</div>
            <div className="badge badge-outline">JS</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/v1740726441/Screenshot_67_ekomya.png"
            alt="Greek Shop" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Pantheon Energy
            </h2>
            <p>2023-2024 Capstone Business Website - Insipired by Energy Drinks</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">HTML</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/v1740762122/Screenshot_68_l4rnqr.png"
            alt="Responsive Gallery" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Responsive Gallery
            </h2>
            <p>Fully CSS & JS Responsive Gallery</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">CSS</div>
            <div className="badge badge-outline">Component</div>
            </div>
        </div>
    </div>
    </div>

    <div className="flex pt-6 justify-around">
    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/c_pad,ar_4:3/v1740762701/Screenshot_70_dap84w.png"
            alt="Pet Adoption" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Pet Adoption Web App
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">MongoDB</div>
            <div className="badge badge-outline">EJS</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/v1740762124/Screenshot_69_e5bdwy.png"
            alt="Troop 747" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Troop 747
            </h2>
            <p>Intership Website Revamp for Troop 747</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Experience</div>
            <div className="badge badge-outline">React</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://res.cloudinary.com/dwxlvrwu4/image/upload/v1740763474/Screenshot_71_kzlfc6.png"
            alt="Portfolio" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Old Portfolio
            </h2>
            <p>A Showcase of my Ability in 2023-2024</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Experience</div>
            <div className="badge badge-outline">JS</div>
            </div>
        </div>
    </div>
    </div>
    </>
)
}