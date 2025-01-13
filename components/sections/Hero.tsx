import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Social Media Content,</span>
              <span className="block text-indigo-600">Securely Backed Up</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Automatically backup content from your favorite social media platforms. Never lose a post again.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="flex flex-col items-center">
                <Button size="lg" asChild>
                  <Link href="https://app.thecreatorscloud.com/sign-up">
                    Sign Up Free
                  </Link>
                </Button>
                <p className="mt-2 text-sm text-gray-500">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 