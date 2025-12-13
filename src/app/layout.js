import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "BBC News",
  description: "Novacept Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/novacept.css" />
      </head>
      <body>
        <Navbar />
        <div className="layout-content-wrapper">{children}</div>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
