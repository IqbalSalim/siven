import FilterSearch from "@/Components/FilterSearch";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Link, Head } from "@inertiajs/react";
import { useLayoutEffect } from "react";

export default function Landing({ kategoris, publikasis, queryParams = null }) {
  if (queryParams !== null) {
    useLayoutEffect(() => {
      const element = document.getElementById("publikasi-event");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, []);
  }
  return (
    <>
      <Head title="Landing Page" />

      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl mx-auto lg:h-screen lg:items-center">
          {/* Header */}
          <Header />
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
        <FilterSearch queryParams={queryParams} kategoris={kategoris} />

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

                  <p
                    className="mt-2 text-gray-700 rsw-ce line-clamp-3 text-sm/relaxed dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: publikasi.isi }}
                  ></p>
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
                  <Link
                    href={route("landing.show", publikasi.id, queryParams)}
                    className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-yellow-400 hover:bg-yellow-500"
                  >
                    MORE INFO
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Pagination links={publikasis.meta.links} />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
