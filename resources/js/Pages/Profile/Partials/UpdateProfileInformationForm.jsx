import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import TextArea from "@/Components/TextArea";

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  user,
  className = "",
}) {
  // const user = usePage().props.auth.user;

  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name || "",
      email: user.email || "",
      nama_ormawa: user.ormawa.nama_ormawa || "",
      jabatan: user.ormawa.jabatan || "",
      link_twitter: user.ormawa.link_twitter || "",
      link_facebook: user.ormawa.link_facebook || "",
      link_instagram: user.ormawa.link_instagram || "",
      gambar_profil: "",
      gambar_struktur: "",
      tentang_ormawa: user.ormawa.tentang_ormawa || "",
    });

  const submit = (e) => {
    e.preventDefault();

    post(route("profile.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Update your account's profile information and email address.
        </p>
      </header>

      <form
        onSubmit={submit}
        className="mt-6 space-y-6"
        encType="multipart/form-data"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <InputLabel htmlFor="name" value="Nama" />

            <TextInput
              id="name"
              className="block w-full mt-1"
              value={data.name}
              onChange={(e) => setData("nama", e.target.value)}
              required
              isFocused
              autoComplete="name"
            />

            <InputError className="mt-2" message={errors.name} />
          </div>

          <div>
            <InputLabel htmlFor="jabatan" value="Jabatan Organisasi" />

            <TextInput
              id="jabatan"
              className="block w-full mt-1"
              value={data.jabatan}
              onChange={(e) => setData("jabatan", e.target.value)}
              required
              isFocused
              autoComplete="jabatan"
            />

            <InputError className="mt-2" message={errors.jabatan} />
          </div>

          <div>
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
              id="email"
              type="email"
              className="block w-full mt-1"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              autoComplete="username"
            />

            <InputError className="mt-2" message={errors.email} />
          </div>

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                Your email address is unverified.
                <Link
                  href={route("verification.send")}
                  method="post"
                  as="button"
                  className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === "verification-link-sent" && (
                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}

          <div>
            <InputLabel
              htmlFor="nama_ormawa"
              value="Nama Organisasi Mahasiswa"
            />

            <TextInput
              id="nama_ormawa"
              className="block w-full mt-1"
              value={data.nama_ormawa}
              onChange={(e) => setData("nama_ormawa", e.target.value)}
              required
              isFocused
              autoComplete="nama_ormawa"
            />

            <InputError className="mt-2" message={errors.nama_ormawa} />
          </div>

          <div>
            <InputLabel htmlFor="link_twitter" value="Link Twitter" />

            <TextInput
              id="link_twitter"
              className="block w-full mt-1"
              value={data.link_twitter}
              onChange={(e) => setData("link_twitter", e.target.value)}
              required
              isFocused
              autoComplete="link_twitter"
            />

            <InputError className="mt-2" message={errors.link_twitter} />
          </div>

          <div>
            <InputLabel htmlFor="link_facebook" value="Link Facebook" />

            <TextInput
              id="link_facebook"
              className="block w-full mt-1"
              value={data.link_facebook}
              onChange={(e) => setData("link_facebook", e.target.value)}
              required
              isFocused
              autoComplete="link_facebook"
            />

            <InputError className="mt-2" message={errors.link_facebook} />
          </div>

          <div className="grid col-span-2 grid-cols-subgrid">
            <div>
              <InputLabel htmlFor="link_instagram" value="Link Instagram" />

              <TextInput
                id="link_instagram"
                className="block w-full mt-1"
                value={data.link_instagram}
                onChange={(e) => setData("link_instagram", e.target.value)}
                required
                isFocused
                autoComplete="link_instagram"
              />

              <InputError className="mt-2" message={errors.link_instagram} />
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            {user.ormawa.gambar_profil && (
              <div className="mb-4">
                <img
                  src={"storage/" + user.ormawa.gambar_profil}
                  className="w-16"
                />
              </div>
            )}
            <div>
              <InputLabel htmlFor="gambar_profil" value="Gambar Profil" />

              <TextInput
                id="gambar_profil"
                type="file"
                name="gambar_profil"
                className="block w-full mt-1"
                onChange={(e) => setData("gambar_profil", e.target.files[0])}
              />

              <InputError className="mt-2" message={errors.gambar_profil} />
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            {user.ormawa.gambar_struktur && (
              <div className="mb-4">
                <img
                  src={"storage/" + user.ormawa.gambar_struktur}
                  className="w-16"
                />
              </div>
            )}
            <div>
              <InputLabel htmlFor="gambar_struktur" value="Gambar Struktur" />

              <TextInput
                id="gambar_struktur"
                type="file"
                name="gambar_struktur"
                className="block w-full mt-1"
                onChange={(e) => setData("gambar_struktur", e.target.files[0])}
              />

              <InputError className="mt-2" message={errors.gambar_struktur} />
            </div>
          </div>
        </div>

        <div>
          <InputLabel htmlFor="tentang_ormawa" value="Tentang Ormawa" />

          <TextArea
            id="tentang_ormawa"
            name="tentang_ormawa"
            value={data.tentang_ormawa}
            className="block w-full mt-1"
            rows="8"
            onChange={(e) => setData("tentang_ormawa", e.target.value)}
          ></TextArea>

          <InputError className="mt-2" message={errors.tentang_ormawa} />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
