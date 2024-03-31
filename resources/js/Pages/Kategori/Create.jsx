import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    nama_kategori: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("kategori.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Tambah Kategori Baru
          </h2>
        </div>
      }
    >
      <Head title="Kategori" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg"
              >
                <div>
                  <InputLabel htmlFor="nama_kategori" value="Nama Kategori" />
                  <TextInput
                    id="nama_kategori"
                    type="text"
                    name="nama_kategori"
                    value={data.nama_kategori}
                    className="block w-full mt-1"
                    onChange={(e) => setData("nama_kategori", e.target.value)}
                  />
                  <InputError message={errors.nama_kategori} className="mt-2" />
                </div>
                <div className="mt-4 text-right">
                  <Link
                    href={route("kategori.index")}
                    className="px-3 py-1 mr-2 text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200"
                  >
                    Cancel
                  </Link>
                  <button className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
