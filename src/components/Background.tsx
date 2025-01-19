export default function Background() {
  return (
    <div className="fixed inset-0 mx-auto h-full w-full max-w-screen-2xl flex -z-[1]">
      {Array.from({ length: 4 })
        .fill(null)
        .map((_, i) => (
          <div key={i} className="w-1/3 border-r-2 border-black/30 last-of-type:border-none"></div>
        ))}
    </div>
  );
}
