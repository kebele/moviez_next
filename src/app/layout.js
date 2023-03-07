import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "moviez",
  description: "This is the movie web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* header */}
          <Header />
          {/* navbar */}

          {/* search */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
