import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 p-24">
      <div className="z-10 w-full max-w-500px items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-green-800">Root Realm 🌿</h1>
        <p className="mt-4 text-stone-600 text-lg">Your AI-powered garden is under construction.</p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-xl border-green-200 bg-white shadow-sm">
          <h2 className="font-bold text-green-700">Seed Phase</h2>
          <p className="text-sm text-stone-500">Project structure and README initialized.</p>
        </div>
        <div className="p-6 border rounded-xl border-stone-200 bg-stone-100 opacity-50">
          <h2 className="font-bold text-stone-400">Vegetative Phase</h2>
          <p className="text-sm text-stone-400">Connecting to the Gemini AI Engine.</p>
        </div>
      </div>
    </main>
  );
}
