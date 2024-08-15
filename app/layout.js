import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '400', '500', '700'] });


export const metadata = {
  metabaseBase: new URL('https://localhost/3000/'),
  keywords: ["TWR Detailing", "TWR", "Car Detailing San Diego", "Best Car Detailing San Diego", "Car Detailers San Diego", "Car Cleaning San Diego"] /* ADD KEYWORDS PEOPLE SEARCH FOR */,
  title: {
    default: "TWR Detailing",
    template: `%s | TWR Detailing`
  },
  openGraph: {
    description: "The best detailing in San Diego, offering premium cleaning services at an affordable price for daily commuters to car enthusiasts.",
    images:['']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
