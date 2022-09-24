import React from 'react';
import Image from 'next/image';
import imgLogo from '../../public/images/movie-finder-logo.svg';
import Link from 'next/link';
import mobileMenu from '../../public/images/Menu-burger.svg';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-violet-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a data-active={isActive('/')}>
                <Image src={imgLogo} alt="movie-app-logo" />
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src={mobileMenu} alt="mobile menu icon" />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                {session ? (
                  <button onClick={() => signOut()}>
                    <a>Log out</a>
                  </button>
                ) : (
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/api/auth/signin"
                  >
                    <a data-active={isActive('/signup')}>
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">Log-in</span>
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
