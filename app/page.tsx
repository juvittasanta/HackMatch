export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 to-blue-200 text-center p-6">
      
      <h1 className="text-5xl font-bold mb-6 text-gray-800">
        HackMatch
      </h1>

      <p className="text-xl mb-8 text-gray-700">
        Where Innovation Meets Opportunity 🚀
      </p>

      <a 
        href="/hackathons"
        className="px-6 py-3 bg-white rounded-full shadow-md hover:scale-105 transition text-lg font-semibold"
      >
        Explore Events
      </a>

    </main>
  );
}