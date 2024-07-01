import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './Providers'

// configuração da fonte
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"]
});


// metadados
export const metadata = {
  title: "Rental System",
  description: "",
};

// layout padrão
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
