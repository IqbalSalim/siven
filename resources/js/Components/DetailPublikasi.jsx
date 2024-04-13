import Carousel from "./Carousel";
import { EyeIcon } from "@heroicons/react/16/solid";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function DetailPublikasi({ publikasi }) {
  const slides = publikasi.gambar;
  return (
    <>
      <section className="overflow-hidden text-gray-700 bg-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <Carousel>
              {slides.map((slide) => (
                <img
                  key={slide.id}
                  alt="ecommerce"
                  className=""
                  src={slide.url}
                />
              ))}
            </Carousel>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <div className="flex flex-row items-center space-x-4">
                <div className="bg-black rounded-full">
                  <img
                    src={publikasi.ormawa.gambar_profil}
                    alt="Gambar Profil Ormawa"
                    className="object-cover w-8 h-8 rounded-full"
                  />
                </div>
                <h2 className="text-sm tracking-widest text-gray-500 title-font">
                  {publikasi.ormawa.nama_ormawa}
                </h2>
              </div>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {publikasi.judul}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <EyeIcon className="w-6 h-6 text-blue-500" />
                  <span className="ml-3 text-gray-600">
                    <span className="font-bold">{publikasi.view}</span> Dilihat
                  </span>
                </span>
                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                  <a
                    className="text-gray-500"
                    href={publikasi.ormawa.link_facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-2 text-gray-500"
                    href={publikasi.ormawa.link_twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-2 text-gray-500"
                    href={publikasi.ormawa.link_instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5"
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
                </span>
              </div>
              <p
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: publikasi.isi }}
              ></p>
              <div className="pb-5 mt-6 mb-5 border-b-2 border-gray-200">
                <div className="grid items-start grid-cols-4">
                  <div className="flex flex-row items-center space-x-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span className="mr-3 text-sm">Tanggal :</span>
                  </div>
                  <div className="col-span-3">
                    <span className="px-2 text-sm font-semibold text-white bg-red-500 border-2 border-gray-300 rounded focus:outline-none">
                      {publikasi.tanggal_kegiatan}
                    </span>
                  </div>
                </div>
                <div className="grid items-start grid-cols-4 mt-2">
                  <div className="flex flex-row items-center space-x-1">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="mr-3 text-sm">Tempat :</span>
                  </div>
                  <div className="col-span-3">
                    <span className="px-2 text-sm font-semibold text-white bg-red-500 border-2 border-gray-300 rounded focus:outline-none">
                      {publikasi.tempat}
                    </span>
                  </div>
                </div>
              </div>
              {/* Comment */}
              {/* <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  $58.00
                </span>
                <button className="flex px-6 py-2 ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                  Button
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
