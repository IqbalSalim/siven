import DetailPublikasi from "@/Components/DetailPublikasi";
import FilterSearch from "@/Components/FilterSearch";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function Detail({ kategoris, publikasi, queryParams = null }) {
  return (
    <>
      <Head title="Detail Publikasi" />
      <Header />

      <FilterSearch queryParams={queryParams} kategoris={kategoris} />

      {/* Detail Section */}
      <DetailPublikasi publikasi={publikasi} />
      <Footer />
    </>
  );
}
