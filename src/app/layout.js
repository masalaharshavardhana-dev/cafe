import { Roboto } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";
import AmbientSoundToggle from "./components/AmbientSoundToggle";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Cà phê Bistro | Premium Cinematic Cà phê Experience",
  description: "Experience the art of coffee in Hyderabad with Cà phê Bistro. Premium brewing, luxury ambience, and cinematic interactions.",
  manifest: "/manifest.json", // Add manifest for PWA support
};

import BookingProvider from "./components/BookingProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-matte-black text-latte grain">
        <Loader />
        <CustomCursor />
        <AmbientSoundToggle />
        <SmoothScrollProvider>
          <BookingProvider>
            <Navbar />
            <PageTransition>
              <main className="relative z-10 w-full overflow-x-hidden">
                {children}
              </main>
            </PageTransition>
          </BookingProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

