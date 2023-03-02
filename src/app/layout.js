import "./globals.css";

export const metadata = {
  title: "moviez",
  description: "This is the movie web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
