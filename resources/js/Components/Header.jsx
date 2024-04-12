export default function Header() {
  return (
    <>
      <header className="bg-blue-300 dark:bg-gray-900">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <a className="block text-sky-600 dark:text-sky-300" href="#">
            <span className="sr-only">Home</span>
            <img className="h-10" src="/assets/images/LogoUNG.png" />
          </a>

          <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav aria-label="Global" className="hidden md:block"></nav>

            <div className="flex items-center gap-4">
              <a
                className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                About
              </a>
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700 dark:hover:bg-sky-500"
                  href={route("login")}
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600 transition hover:text-sky-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  href={route("register")}
                >
                  Register
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
