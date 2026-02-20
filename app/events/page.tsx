import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 text-center p-6">
      
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        HackMatch 💫
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Discover hackathons & events tailored just for you.
      </p>

      <div className="flex gap-6">
        <Link href="/preferences">
          <button className="px-6 py-3 bg-pink-400 text-white rounded-xl shadow-lg hover:scale-105 transition">
            🎯 Find Events
          </button>
        </Link>

        <Link href="/upload">
          <button className="px-6 py-3 bg-blue-400 text-white rounded-xl shadow-lg hover:scale-105 transition">
            🚀 Upload Event
          </button>
        </Link>
      </div>
    </div>
  );
}