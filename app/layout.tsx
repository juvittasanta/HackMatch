import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "HackMatch",
  description: "Find your perfect fest. Match your passion. Build your future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 text-gray-800">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="px-6 py-10 max-w-6xl mx-auto">
          {children}
        </main>

      </body>
    </html>
  );
}