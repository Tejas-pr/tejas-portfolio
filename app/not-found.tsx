import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-red-900/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/5 blur-[120px]" />

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center">
        {/* Silhouette Image */}
        <div className="relative mb-6 h-64 w-64 animate-fade-in opacity-90 grayscale md:h-80 md:w-80">
          <Image
            src="/404-bg.png"
            alt="Wandering Figure"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="select-none text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/10 opacity-90 blur-[1px]">
            404
          </h1>
          <p className="mx-auto max-w-md text-lg font-light tracking-wide text-neutral-400 md:text-xl">
            Looks like you wandered off the path.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/50 px-8 py-3 transition-all duration-300 hover:bg-neutral-900 hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.4)] border border-white/5 hover:border-red-500/30"
          >
            {/* Hover Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative flex items-center gap-2 text-sm font-medium tracking-wider text-neutral-200 transition-colors group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Go back home
            </span>
          </Link>
        </div>
      </main>

      {/* Footer / Decorative Elements */}
      <footer className="absolute bottom-8 w-full text-center text-xs tracking-[0.2em] text-neutral-800 uppercase">
        System Malfunction / Sector 404
      </footer>
    </div>
  );
}
