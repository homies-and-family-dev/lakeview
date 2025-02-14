export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        src="/video/videolakeview.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(0,0,0,0.2) 0%, 
              rgba(0,0,0,0.3) 50%,
              rgba(0,0,0,0.4) 100%
            )
          `,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
} 