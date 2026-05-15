import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Milestone Tracker — Visual Progress for Founders",
  description: "Track startup milestones with visual progress indicators, automate investor updates, and align your team — all in one dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ac2b1d6-bf3b-4886-80aa-02c529116b9b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
