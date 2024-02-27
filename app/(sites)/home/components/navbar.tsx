import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"

const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full">
      <nav
        className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <div>
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/public">
                  <span className="flex items-center space-x-2 text-2xl font-medium  ">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Nextly</span>
                  </span>
              </Link>

              <button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto  rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none  ">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">


                </svg>
              </button>

              <div className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href="/public"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100  focus:outline-none">
                      {item}
                    </Link>
                  ))}
                  <Link href="/public"
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                    Get Started
                  </Link>
                </>
              </div>
            </div>
          </>

        </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/public"
                      className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md   hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none  ">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/public" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Get Started
          </Link>

          <ThemeChanger/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
