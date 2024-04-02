import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import TableHeading from "@/Components/TableHEading";

export default function Index({
  auth,
  publikasis,
  queryParams = null,
  success,
}) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("publikasi.index"), queryParams);
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
    router.get(route("publikasi.index"), queryParams);
  };

  const deletePublikasi = (publikasi) => {
    if (!window.confirm("Anda yakin ingin menghapus publikasi ini?")) {
      return;
    }
    router.delete(route("publikasi.destroy", publikasi.id));
  };

  return (
    <AuthenticatedLayout
      publikasi={auth.publikasi}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Publikasi
          </h2>
          <Link
            href={route("publikasi.create")}
            className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600"
          >
            Tambah Baru
          </Link>
        </div>
      }
    >
      <Head title="Publikasi" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {success && (
            <div className="px-4 py-2 mb-4 text-white rounded bg-emerald-500">
              {success}
            </div>
          )}
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <pre>{JSON.stringify(publikasis, undefined, 2)}</pre>
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-nowrap">
                    <TableHeading
                      name="id"
                      sort_field={queryParams.sort_field}
                      sort_direction={queryParams.sort_direction}
                      sortChanged={sortChanged}
                    >
                      ID
                    </TableHeading>
                    <TableHeading
                      name="name"
                      sort_field={queryParams.sort_field}
                      sort_direction={queryParams.sort_direction}
                      sortChanged={sortChanged}
                    >
                      Name
                    </TableHeading>

                    <TableHeading
                      name="email"
                      sort_field={queryParams.sort_field}
                      sort_direction={queryParams.sort_direction}
                      sortChanged={sortChanged}
                    >
                      Email
                    </TableHeading>

                    <TableHeading
                      name="created_at"
                      sort_field={queryParams.sort_field}
                      sort_direction={queryParams.sort_direction}
                      sortChanged={sortChanged}
                    >
                      Create Date
                    </TableHeading>

                    <th className="px-3 py-3 text-right">Actions</th>
                  </tr>
                  <tr className="text-nowrap">
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3">
                      <TextInput
                        defaultValue={queryParams.name}
                        className="w-full"
                        placeholder="Publikasi Name"
                        onBlur={(e) =>
                          searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      ></TextInput>
                    </th>
                    <th className="px-3 py-3">
                      <TextInput
                        defaultValue={queryParams.email}
                        className="w-full"
                        placeholder="Publikasi Email"
                        onBlur={(e) =>
                          searchFieldChanged("email", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("email", e)}
                      ></TextInput>
                    </th>
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {publikasis.data.map((publikasi, i = 0) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={publikasi.id}
                    >
                      <td className="px-3 py-2">{(i += 1)}</td>
                      <th className="px-3 py-2 text-gray-500 text-nowrap">
                        {publikasi.name}
                      </th>
                      <td className="px-3 py-2">{publikasi.email}</td>
                      <td className="px-3 py-2 text-nowrap">
                        {publikasi.created_at}
                      </td>
                      <td className="px-3 py-2 text-nowrap text-right">
                        {/* <Link
                          href={route("publikasi.edit", publikasi.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link> */}
                        <button
                          onClick={(e) => deletePublikasi(publikasi)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={publikasis.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
