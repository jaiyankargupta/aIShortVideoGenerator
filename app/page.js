import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <section className="w-full max-w-3xl bg-white px-10 py-12 rounded-3xl shadow-2xl flex flex-col items-center">
        <h1 className="mb-4 text-gray-900 font-extrabold text-4xl text-center">
          AI Short Video Platform
        </h1>
        <p className="mb-6 text-gray-600 text-lg text-center">
          Effortlessly create, edit, and manage AI-powered short videos. Unleash
          your creativity with advanced AI tools designed for content creators.
        </p>
        <div className="flex gap-4 mb-8">
          <Link href="/dashboard">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
              Get Started
            </button>
          </Link>
          <Link href="/dashboard/create-new">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
              Create New Video
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-12 w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex flex-col justify-center items-center">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 flex flex-col justify-center items-center">
            <li>AI-powered video editing and enhancement</li>
            <li>Easy-to-use interface for quick video creation</li>
            <li>Export and share videos instantly</li>
            <li>Secure and private content management</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
