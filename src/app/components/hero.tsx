export default function Hero() {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[100vh] w-full">
    <div className="h-screen w-auto overflow-hidden">
        <video src="/images/sydforsolenvideo.mp4" autoPlay muted loop className="w-full h-full object-cover md:block hidden" />
        <video src="/images/sydforsolenvideomobile.mp4" autoPlay muted loop className="w-full h-full object-cover md:hidden" />
        </div>
      </div>
    </div>
  );
}