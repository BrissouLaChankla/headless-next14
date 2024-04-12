import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 max-w-6xl m-auto sticky top-4 z-20 drop-shadow-md rounded-full mb-12">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-4 text-xl font-bold ps-3">
          <Image src="/logo.webp" width={40} height={40} />
          Qoffee
          </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="https://www.linkedin.com/in/brice-eliasse" target="_blank" className="gap-1">
            <Image src="/icons/linkedin.svg" width={20} height={20}/>
            <span>
            LinkedIn
            </span>
            </a></li>
          <li><a href="https://brice-eliasse.com" target="_blank">Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}
