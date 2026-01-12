import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "Sangfroid Technologies - Enterprise Solutions",
  description: "Innovative enterprise solutions specializing in ERP, Messaging Applications, and E-commerce platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-[#f9fafa] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ChatBot />
      </body>
    </html>
  );
}
