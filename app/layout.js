import Header from "@/components/global/Header";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/global/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "GymBff",
  description: "Online Fitness And Wellness Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
