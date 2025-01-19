export default function Logo({
  className = "",
  size = 50,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 16 16"
      shapeRendering="crispEdges"
      width={size}
      height={size}
      className={className}
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path stroke="currentColor" d="M3 1h1" />
      <path stroke="currentColor" d="M4 1h1M10 2h1M13 3h1" />
      <path
        stroke="currentColor"
        d="M11 1h1M13 2h1M3 3h1M9 3h1M2 7h1M2 11h1M6 11h1"
      />
      <path stroke="currentColor" d="M12 1h1M4 3h1M5 10h1M9 11h1M9 13h1" />
      <path
        stroke="currentColor"
        d="M2 2h1M5 2h1M5 3h2M10 3h3M13 4h1M2 5h1M2 6h1M13 6h1M4 7h2M9 7h1M13 7h1M2 9h1M13 9h1M2 10h1M7 10h1M9 10h1M7 11h1M2 12h1M13 12h1M2 13h4M11 13h1M13 13h1"
      />
      <path
        stroke="currentColor"
        d="M2 3h1M2 4h1M13 8h1M13 10h1M13 11h1M10 13h1M12 13h1"
      />
      <path
        stroke="currentColor"
        d="M7 3h2M13 5h1M10 7h1M2 8h1M5 11h1M8 11h1"
      />
    </svg>
  );
}
