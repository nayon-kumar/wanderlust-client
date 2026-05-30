"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = ({ defaultValue }) => {
  const router = useRouter();
  const [search, setSearch] = useState(defaultValue || "");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();
    if (query) {
      router.push(`/destinations?search=${query}`);
    } else {
      router.push(`/destinations`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap items-center justify-center mt-8 gap-2"
      >
        <input
          type="text"
          placeholder="Search by destination name or country..."
          className="border px-4 py-2 rounded-md w-2xl"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
