export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030308]">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`, backgroundSize: '100px 100px' }}></div>

      {/* Floating Blobs */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full blur-[120px] opacity-20 animate-drift w-[800px] h-[800px] bg-accent/30 -top-[300px] -left-[200px]" />
        <div className="absolute rounded-full blur-[120px] opacity-15 animate-drift w-[600px] h-[600px] bg-accent2/20 top-[40%] -right-[100px] [animation-delay:-6s]" />
        <div className="absolute rounded-full blur-[120px] opacity-10 animate-drift w-[500px] h-[500px] bg-accent3/10 -bottom-[100px] left-[30%] [animation-delay:-12s]" />
      </div>
    </div>
  );
}
