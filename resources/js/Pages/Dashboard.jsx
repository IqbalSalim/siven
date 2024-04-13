import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePermission } from "@/composables/permissions";

export default function Dashboard({ auth, view, publikasi, kategori, ormawa }) {
  const { hasRole } = usePermission();
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-flow-col gap-4">
            {hasRole("admin") && (
              <article className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded dark:bg-green-700 dark:text-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6Z"
                    />
                  </svg>

                  <span className="self-center text-sm font-bold">
                    Kategori
                  </span>
                </div>

                <div>
                  <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    {" "}
                    Jumlah{" "}
                  </strong>

                  <p>
                    <span className="text-2xl font-medium text-gray-900 dark:text-white">
                      {" "}
                      {kategori}{" "}
                    </span>

                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {" "}
                      Kategori{" "}
                    </span>
                  </p>
                </div>
                <button class="w-full text-purple-600 bg-purple-100 hover:bg-purple-200 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  View
                </button>
              </article>
            )}

            {hasRole("admin") && (
              <article className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded dark:bg-green-700 dark:text-green-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>

                  <span className="self-center text-sm font-bold">Ormawa</span>
                </div>

                <div>
                  <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    {" "}
                    Jumlah{" "}
                  </strong>

                  <p>
                    <span className="text-2xl font-medium text-gray-900 dark:text-white">
                      {" "}
                      {ormawa}{" "}
                    </span>

                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {" "}
                      Ormawa{" "}
                    </span>
                  </p>
                </div>
                <button class="w-full text-purple-600 bg-purple-100 hover:bg-purple-200 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  View
                </button>
              </article>
            )}

            <article className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded dark:bg-green-700 dark:text-green-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>

                <span className="self-center text-sm font-bold">Publikasi</span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                  {" "}
                  Jumlah{" "}
                </strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900 dark:text-white">
                    {" "}
                    {publikasi}{" "}
                  </span>

                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {" "}
                    Publikasi{" "}
                  </span>
                </p>
              </div>
              <button class="w-full text-purple-600 bg-purple-100 hover:bg-purple-200 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out">
                View
              </button>
            </article>
            <article className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded dark:bg-green-700 dark:text-green-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span className="self-center text-sm font-bold">View</span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                  {" "}
                  Jumlah{" "}
                </strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900 dark:text-white">
                    {" "}
                    {view}{" "}
                  </span>

                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {" "}
                    View{" "}
                  </span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
