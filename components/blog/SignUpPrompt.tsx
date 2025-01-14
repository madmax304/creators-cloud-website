import Link from 'next/link'

export function SignUpPrompt() {
  return (
    <div className="relative isolate mt-16 overflow-hidden bg-gray-900 py-16 sm:py-24 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Never lose your content again
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join thousands of creators who trust Creator's Cloud to securely backup their social media content. Get started for free today.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="https://app.thecreatorscloud.com/sign-up"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#3730A3" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
} 