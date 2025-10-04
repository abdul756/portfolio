import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Manaf F | AI Engineer & Computer Vision Specialist",
  description: "Software Engineer II (AI Domain) with 3+ years experience in deep learning, computer vision, and GANs. Deployed 6+ production AI systems at Bobble AI serving millions of users. 6+ publications, 80+ citations, 1 patent.",
  keywords: ["Abdul Manaf", "AI Engineer", "Computer Vision", "Deep Learning", "GANs", "Machine Learning", "PyTorch", "TensorFlow", "Bobble AI"],
  authors: [{ name: "Abdul Manaf F" }],
  openGraph: {
    title: "Abdul Manaf F | AI Engineer",
    description: "Software Engineer II specializing in Computer Vision & Deep Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
