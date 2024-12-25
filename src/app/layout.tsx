import "./global.css";

import { ThemeProvider } from "@/app/providers/Providers";
import { bebasNeue } from "@/utils/fonts";

export const metadata = {
  title: `Opal's Jewels and Gems`,
  description: "Opals Jewels and gems ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={`${bebasNeue.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
