import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arise & Shine Acupuncture Clinic",
  description: "Professional acupuncture and wellness services in Auckland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
