import Results from "@/components/Results";

export const dynamic = "force-dynamic"; // this is the fix

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // fetch için home comp hangi genre'ye göre render olacak, searchParams'dan gelecek genre'ye göre eğer yoksa... ayrıca next'deki fetch'de cachin özelliği de var, getch yapan func bir diğer parametre ekledik, bu revalidate'i 10000 yaptık, sonuçta filmler iki de bir değişmiyor,
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  //data yı anlamlandırak
  const data = await res.json();
  console.log(data);
  const results = data.results;
  // consol'dan bir bakalım ne geliyor fetch sonucu buna terminalden bakarız çünkü ssr'da açlışıyor, browser'dan sayfayı yenileyip terminale baalım,
  // console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
