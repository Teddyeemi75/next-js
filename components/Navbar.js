import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-anton">
        <Link href="/">
          <a className="text-base md:text-2xl">Net<span className="text-red-600">Flex</span></a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar