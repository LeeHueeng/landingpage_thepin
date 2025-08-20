import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/@components/navbar/navbar";
import Footer from "@/@components/footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "더핀 골프 아카데미 청라 골프장",
  description: "최신 골프 장비와 최고의 트레이너를 만나보세요",
  openGraph: {
    title: "더핀 골프 아카데미 청라 골프장",
    description: "최신 골프 장비와 최고의 트레이너를 만나보세요",
    url: "https://landingpage-thepin.vercel.app/", // 실제 도메인으로 변경하세요
    siteName: "더핀 골프 아카데미",
    images: [
      {
        url: "/golf-og-image.jpg", // 이미지 파일을 추가해야 합니다
        width: 1200,
        height: 630,
        alt: "더핀 골프 아카데미 청라 골프장",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "더핀 골프 아카데미 청라 골프장",
    description: "최신 골프 장비와 최고의 트레이너를 만나보세요",
    images: ["/golf-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
