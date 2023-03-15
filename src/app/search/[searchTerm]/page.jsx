import Results from "@/components/Results";
import React from "react";

// bu sayfa SSR olacağı için async
export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  // problem çıkarsa
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  // fetch'den gelen datayı kullanalım

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
