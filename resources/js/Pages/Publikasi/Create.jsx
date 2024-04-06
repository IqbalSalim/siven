import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Editor from "react-simple-wysiwyg";

export default function Create({ auth, kategoris }) {
  const { data, setData, post, errors, reset } = useForm({
    judul: "",
    isi: "",
    tempat: "",
    tanggal_kegiatan: "",
    status: "",
    gambar: [],
    kategori: [],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("publikasi.store"));
  };

  const options = kategoris;
  const animatedComponents = makeAnimated();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    setData("kategori", selectedOptions);
  };

  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    event.preventDefault();
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            file: files[i],
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  useEffect(() => {
    setData("gambar", images);
  }, [images]);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Tambah Publikasi Baru
          </h2>
        </div>
      }
    >
      <Head title="Publikasi" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg"
            >
              <div className="mt-4">
                <InputLabel htmlFor="judul" value="Judul" />

                <TextInput
                  id="judul"
                  type="text"
                  name="judul"
                  value={data.judul}
                  className="block w-full mt-1"
                  isFocused={true}
                  onChange={(e) => setData("judul", e.target.value)}
                />

                <InputError message={errors.judul} className="mt-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                  id="kategori"
                  name="kategori"
                  className="focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  value={selectedOptions}
                  onChange={handleChange}
                />

                <InputError message={errors.kategori} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="gambar" value="Upload Gambar" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    htmlFor="gambar"
                    className="relative flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer select-none hover:opacity-50 hover:border-gray-400 focus:outline-none"
                  >
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span
                        className="font-medium text-gray-600"
                        role="button"
                        onClick={selectFiles}
                      >
                        Drop files to Attach, or
                        <span className="text-blue-600 underline">browse</span>
                      </span>
                    </span>
                  </label>
                  <TextInput
                    id="gambar"
                    name="gambar"
                    className="absolute hidden w-full h-full"
                    type="file"
                    isFocused={true}
                    multiple
                    ref={fileInputRef}
                    onChange={onFileSelect}
                  />
                  <div className="grid grid-cols-4 gap-2 p-2 bg-white border-2 border-gray-300 rounded-md md:grid-cols-6 md:gap-4">
                    {images.map((images, index) => (
                      <div key={index} className="relative w-16 h-16 ">
                        <span
                          onClick={() => deleteImage(index)}
                          className="absolute p-1 text-blue-700 bg-white rounded-md cursor-pointer hover:opacity-50 delete -top-1 right-2"
                        >
                          &times;
                        </span>
                        <img
                          className="object-fill w-16 h-16 rounded-md"
                          src={images.url}
                          alt={images.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <InputError message={errors.gambar} className="mt-2" />
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
                  className="px-3 py-1 mr-2 text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button
                  onClick={() => setData("status", "draft")}
                  className="px-3 py-1 mr-2 text-white transition-all bg-purple-500 rounded shadow hover:bg-emerald-600"
                >
                  Save For Draft
                </button>
                <button
                  onClick={() => setData("status", "published")}
                  className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600"
                >
                  Submit For Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
