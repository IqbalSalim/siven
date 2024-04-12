import TextInput from "@/Components/TextInput";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { router } from "@inertiajs/react";

export default function FilterSearch({ queryParams, kategoris }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("landing"), queryParams, {
      preserveScroll: true,
    });
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const animatedComponents = makeAnimated();
  const options = kategoris;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    searchFieldChanged("kategori", selectedOptions);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative flex items-center mt-4">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search for...{" "}
        </label>
        <Select
          id="kategori"
          name="kategori"
          className="w-1/2 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={options}
          value={queryParams.kategori}
          onChange={handleChange}
          placeholder="Kategori"
        />
        <TextInput
          type="text"
          id="Search"
          placeholder=" Search for..."
          defaultValue={queryParams.judul}
          onBlur={(e) => searchFieldChanged("judul", e.target.value)}
          onKeyPress={(e) => onKeyPress("judul", e)}
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
