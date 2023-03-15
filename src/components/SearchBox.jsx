"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return; // search boşsa submit etmeyecek
    // console.log(search);
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search keywords"
        className="w-full h-14 rounded-sm placeholder-slate-500 outline-none bg-transparent flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400 px-5"
      >
        search
      </button>
    </form>
  );
}
