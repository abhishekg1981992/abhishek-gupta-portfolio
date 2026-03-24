import "./globals.css";

export const metadata = {
  title: "Canada Portfolio",
  description: "Premium Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}