import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

export default function Index({ auth, kategori, queryParams = null, success }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("kategori.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const deleteKategori = (kategori) => {
    if (!window.confirm("Anda yakin ingin menghapus kategori ini?")) {
      return;
    }
    router.delete(route("kategori.destroy", kategori.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Kategori
          </h2>
          <Link
            href={route("kategori.create")}
            className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600"
          >
            Tambah Baru
          </Link>
        </div>
      }
    >
      <Head title="Kategori" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {success && (
            <div className="px-4 py-2 mb-4 text-white rounded bg-emerald-500">
              {success}
            </div>
          )}
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">#</th>
                    <th className="px-3 py-3">Nama Kategori</th>
                    <th className="px-3 py-3 text-right">Action</th>
                  </tr>
                  <tr className="text-nowrap">
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3">
                      <TextInput
                        defaultValue={queryParams.name}
                        className="w-full"
                        placeholder="Cari Kategori"
                        onBlur={(e) =>
                          searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      ></TextInput>
                    </th>
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {kategori.data.map((kategori, i = 0) => (
                    <tr
                      key={kategori.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-2">{(i += 1)}</td>
                      <td className="px-3 py-2">{kategori.nama_kategori}</td>
                      <td className="px-3 py-2 text-right text-nowrap">
                        <Link
                          href={route("kategori.edit", kategori.id)}
                          className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={(e) => deleteKategori(kategori)}
                          className="mx-1 font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={kategori.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
