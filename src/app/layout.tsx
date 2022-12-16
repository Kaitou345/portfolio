/* eslint-disable @next/next/no-head-element */
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Muhammad Seyan</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Muhammad Seyan" />
        <meta
          name="description"
          content="Have a look around my life. Let's get some work done in the process"
        />
        <meta
          name="keywords"
          content="Muhammad Seyan, Seyan, programming, coding, web development, react, redux, javascript, html, css, typescript, python, data science, machine learning, ai, C, C++, C#"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-Black overflow-hidden">{children}</body>
    </html>
  );
}
