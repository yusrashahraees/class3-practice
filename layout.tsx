
import footer from "./components/footer"
//import Navbar from "./components/Navbar"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    
        {children}
        <footer/>
      </body>
    </html>
  );
}

