import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import Editor from "react-simple-wysiwyg";

export default function Edit({ auth, publikasi, kategoris }) {
  const { data, setData, post, errors, reset } = useForm({
    judul: publikasi.judul || "",
    isi: publikasi.isi || "",
    tempat: publikasi.tempat || "",
    tanggal_kegiatan: publikasi.tanggal_kegiatan || "",
    status: publikasi.status || "",
    kategori: publikasi.kategori || [],
    _method: "PUT",
  });

  const options = kategoris;
  const animatedComponents = makeAnimated();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    setData("kategori", selectedOptions);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("publikasi.update", publikasi.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Edit publikasi "{publikasi.judul}"
          </h2>
        </div>
      }
    >
      <Head title="Publikasi" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
              >
                <div className="mt-4">
                  <InputLabel htmlFor="judul" value="Judul" />

                  <TextInput
                    id="judul"
                    type="text"
                    name="name"
                    value={data.judul}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("judul", e.target.value)}
                  />

                  <InputError message={errors.judul} className="mt-2" />
                </div>

                <div className="grid gap-4 grid-cols-2">
                  <div className="mt-4">
                    <InputLabel htmlFor="tempat" value="Tempat" />

                    <TextInput
                      id="tempat"
                      name="tempat"
                      value={data.tempat}
                      className="block w-full mt-1"
                      autoComplete="tempat"
                      isFocused={true}
                      onChange={(e) => setData("tempat", e.target.value)}
                      required
                    />

                    <InputError message={errors.tempat} className="mt-2" />
                  </div>

                  <div className="mt-4">
                    <InputLabel
                      htmlFor="tanggal_kegiatan"
                      value="Tanggal Kegiatan"
                    />

                    <TextInput
                      id="tanggal_kegiatan"
                      type="date"
                      name="tanggal_kegiatan"
                      value={data.tanggal_kegiatan}
                      className="block w-full mt-1"
                      autoComplete="tanggal_kegiatan"
                      isFocused={true}
                      onChange={(e) =>
                        setData("tanggal_kegiatan", e.target.value)
                      }
                      required
                    />
                  </div>

                  <InputError
                    message={errors.tanggal_kegiatan}
                    className="mt-2"
                  />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="kategori" value="Kategori" />
                  <Select
                    className="focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    onChange={handleChange}
                    defaultValue={data.kategori}
                  />

                  <InputError message={errors.kategori} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="isi" value="Deskripsi" />

                  <Editor
                    id="isi"
                    name="isi"
                    value={data.isi}
                    onChange={(e) => setData("isi", e.target.value)}
                  />

                  <InputError className="mt-2" message={errors.isi} />
                </div>

                <div className="mt-4 text-right">
                  <Link
                    href={route("publikasi.index")}
                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={() => setData("status", "draft")}
                    className="bg-purple-500 py-1 px-3 mr-2 text-white rounded shadow transition-all hover:bg-emerald-600"
                  >
                    Save For Draft
                  </button>
                  <button
                    onClick={() => setData("status", "published")}
                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                  >
                    Submit For Publish
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
