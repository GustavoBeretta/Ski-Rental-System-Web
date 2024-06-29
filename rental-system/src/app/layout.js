import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './Providers'

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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
