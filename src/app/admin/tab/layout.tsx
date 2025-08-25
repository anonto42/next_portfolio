import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdminMainBar from "@/components/ui/Bars/AdminMainBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin DashBoard For Portfolio",
  description: "Sohidul Islam Ananto Portfolio Admin DashBoard web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-full relative">

            <AdminMainBar />
            <div className="pt-[80px] pl-[140px] absolute top-0 left-0">
                {children}
            </div>
        </div>
        
      </body>
    </html>
  );
}
