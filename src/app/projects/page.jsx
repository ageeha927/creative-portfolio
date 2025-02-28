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
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
    </div>

    <div className="flex pt-6 justify-around">
    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
    </div>
    </>
)
}