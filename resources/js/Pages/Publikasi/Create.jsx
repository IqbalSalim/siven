import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("publikasi.store"));
  };

  return (
    <AuthenticatedLayout
      publikasi={auth.publikasi}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Tambah Publikasi Baru
          </h2>
        </div>
      }
    >
      <Head title="Publikasis" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div className="mt-4">
                <InputLabel htmlFor="publikasi_name" value="Publikasi Name" />

                <TextInput
                  id="publikasi_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="nama_ormawa" value="Nama Ormawa" />

                <TextInput
                  id="nama_ormawa"
                  name="nama_ormawa"
                  value={data.nama_ormawa}
                  className="block w-full mt-1"
                  autoComplete="nama_ormawa"
                  isFocused={true}
                  onChange={(e) => setData("nama_ormawa", e.target.value)}
                  required
                />

                <InputError message={errors.nama_pengelola} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="jabatan" value="Jabatan Organisasi" />

                <TextInput
                  id="jabatan"
                  name="jabatan"
                  value={data.jabatan}
                  className="block w-full mt-1"
                  autoComplete="jabatan"
                  isFocused={true}
                  onChange={(e) => setData("jabatan", e.target.value)}
                  required
                />

                <InputError message={errors.nama_pengelola} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="publikasi_email" value="Publikasi Email" />

                <TextInput
                  id="publikasi_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="publikasi_password" value="Password" />

                <TextInput
                  id="publikasi_password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="publikasi_password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="publikasi_password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                />

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route("publikasi.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}