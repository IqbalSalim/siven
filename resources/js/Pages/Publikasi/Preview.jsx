import DetailPublikasi from "@/Components/DetailPublikasi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Preview({ auth, publikasi }) {
  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
              Publikasi
            </h2>
          </div>
        }
      >
        <Head title="Preview Publikasi" />
        <DetailPublikasi publikasi={publikasi} />
      </AuthenticatedLayout>
    </>
  );
}
