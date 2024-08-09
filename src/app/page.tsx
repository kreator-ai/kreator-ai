import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Ultimate AI Content Generator
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl lg:text-base xl:text-xl mx-auto">
                  Our platform offers a suite of powerful tools to help you generate social media contents with the power of AI.
                </p>
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                  Get Started
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-24 items-center justify-center text-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
                Key Features
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-2 text-white">
                    💼
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Increased Efficiency</h3>
                    <p className="text-gray-400">
                      Automate your workflows and streamline your processes for maximum productivity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-2 text-white">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Accelerated Growth</h3>
                    <p className="text-gray-400">
                      Leverage our cutting-edge tools to drive innovation and scale your contents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">AI Powered</h3>
                    <p className="text-gray-400">
                      Use our AI to generate contents on the go by simple suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonios */}
            <div className="mt-24 text-center">
              <h3 className="text-2xl font-bold">What Our Users Say</h3>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-400">
                    "This platform revolutionized our content strategy. The AI tools are incredible!"
                  </p>
                  <p className="mt-4 font-bold">- User A</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-400">
                    "We've seen a 30% increase in engagement thanks to the AI suggestions."
                  </p>
                  <p className="mt-4 font-bold">- User B</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-400">
                    "Highly recommend for anyone looking to scale their content production!"
                  </p>
                  <p className="mt-4 font-bold">- User C</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer className="mt-10 py-6 text-center text-gray-500">
        <p>&copy; 2024 Ultimate AI Content Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}
