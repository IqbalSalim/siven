import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function Landing({
  auth,
  kategoris,
  publikasis,
  queryParams = null,
}) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    console.log(name, value);

    router.get(route("landing"), queryParams, {
      preserveScroll: true,
    });
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("publikasi.index"), queryParams, {
      preserveScroll: true,
    });
  };

  const animatedComponents = makeAnimated();
  const options = kategoris;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    searchFieldChanged("kategori", selectedOptions);
  };
  return (
    <>
      <Head title="Landing Page" />

      {/* Header */}
      <section className="text-white bg-gray-900">
        {/* <pre>{JSON.stringify(publikasis, undefined, 2)}</pre> */}
        <div className="max-w-screen-xl mx-auto lg:h-screen lg:items-center">
          <header className="bg-blue-300 dark:bg-gray-900">
            <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
              <a className="block text-sky-600 dark:text-sky-300" href="#">
                <span className="sr-only">Home</span>
                <img className="h-10" src="assets/images/LogoUNG.png" />
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
          <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
                Bingung Mencari Informasi Terkait Kegiatan Organisasi Mahasiswa?
                <span className="sm:block"> Temukan Disini! </span>
              </h1>

              <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
                Website ini menampilkan update kegiatan organisasi mahasiswa
                yang ada di lingkungan Universitas Negeri Gorontalo.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#publikasi-event"
                >
                  Get Started
                </a>

                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publikasi Event */}
      <section className="pt-8" id="publikasi-event">
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 h-px -translate-y-1/2 bg-transparent opacity-75 top-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

          <span className="relative z-10 px-6 bg-white">
            Publikasi Event Organisasi Mahasiswa
          </span>
        </span>
        {/* Search dan Kategori */}
        <div className="max-w-xl mx-auto">
          <div className="relative flex items-center mt-4">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search for...{" "}
            </label>
            <Select
              id="kategori"
              name="kategori"
              className="w-1/2 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={options}
              value={queryParams.kategori}
              onChange={handleChange}
              placeholder="Kategori"
            />
            <TextInput
              type="text"
              id="Search"
              placeholder=" Search for..."
              defaultValue={queryParams.judul}
              onBlur={(e) => searchFieldChanged("judul", e.target.value)}
              onKeyPress={(e) => onKeyPress("judul", e)}
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        {/* Article */}
        <div className="grid grid-cols-2 mx-16 mt-8 gap-y-4 gap-x-8">
          {publikasis.data.map((publikasi, i = 0) => (
            <article
              key={i}
              className="flex transition bg-white shadow-xl dark:bg-gray-900 hover:bg-sky-100 dark:shadow-gray-800/25"
            >
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"
                >
                  <span>{publikasi.tahun}</span>
                  <span className="flex-1 w-px bg-gray-900/10 dark:bg-white/10"></span>
                  <span>{publikasi.bulan_tanggal}</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src={publikasi.gambar[0].url}
                  className="object-cover w-full h-full aspect-square"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                  <a href="#">
                    <h3 className="font-bold text-gray-900 uppercase dark:text-white">
                      {publikasi.judul}
                    </h3>
                  </a>

                  <p className="mt-2 text-gray-700 line-clamp-3 text-sm/relaxed dark:text-gray-200">
                    {publikasi.isi}
                  </p>
                </div>
                <div className="px-6 font-bold text-sm/relaxed dark:text-white">
                  <p>
                    Tanggal: <span>{publikasi.tanggal_kegiatan}</span>
                  </p>
                  <p>
                    Tempat: <span>{publikasi.tempat}</span>
                  </p>
                </div>

                <div className="flex-row sm:flex sm:items-end sm:justify-between">
                  <div className="flex flex-row items-center pl-6 space-x-1">
                    <EyeIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-blue-500 text-sm/relaxed dark:text-gray-200">
                      {publikasi.view}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-yellow-400 hover:bg-yellow-500"
                  >
                    MORE INFO
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Pagination links={publikasis.meta.links} />
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-100">
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block p-2 text-white transition rounded-full shadow bg-sky-600 hover:bg-sky-500 sm:p-3 lg:p-4"
              href="#MainContent"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img className="h-16" src="assets/images/LogoUNG.png" />
              </div>

              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 lg:text-left">
                Dapatkan informasi terupdate tentang kegiatan organisasi
                mahasiswa dilingkungan Universitas Negeri Gorontalo
              </p>
              <div className="flex justify-center gap-4 mt-6 lg:justify-start">
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="https://www.facebook.com/universitasnegerigorontalo2035"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="https://www.instagram.com/universitas.negeri.gorontalo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="https://twitter.com/humas_ung"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#publikasi-event"
                >
                  {" "}
                  Publikasi Event{" "}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-center text-gray-500 lg:text-right">
            Copyright &copy; 2024. SIVEN - UNG.
          </p>
        </div>
      </footer>
    </>
  );
}
