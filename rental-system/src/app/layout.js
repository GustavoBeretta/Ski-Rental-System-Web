import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const poppins = Poppins({ 
    weight: "500", 
    subsets: ["latin"] 
});

export const metadata = {
  title: "Rental System",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
