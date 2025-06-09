import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

export default function Hero() {
  return (
    <div className="relative h-[100vh]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="fixed bottom-0 h-[100vh] w-full">
        <div className="h-screen w-auto overflow-hidden">
          {/* Desktop video */}
          <video
            src="/images/sydforsolenvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover md:block hidden"
            onLoadedData={(e) => {
              // Force play when loaded
              e.currentTarget.play();
            }}
          />
          {/* Mobile video */}
          <video
            src="/images/sydforsolenvideomobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover md:hidden"
            onLoadedData={(e) => {
              // Force play when loaded
              e.currentTarget.play();
            }}
          />
          {/* Loading placeholder */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center md:hidden">
            <LoadingSpinner />
          </div>
        </div>
      </div>
    </div>
  );
}
