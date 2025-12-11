import "./globals.css";

export const metadata = {
  title: "BBC News",
  description: "Novacept Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link href="./globals.css" rel="stylesheet" />
      </head>

      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
