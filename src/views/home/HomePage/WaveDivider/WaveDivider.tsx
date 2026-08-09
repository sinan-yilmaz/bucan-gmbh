type WaveDividerProps = {
  d: string;
  line: string;
  fill: string;
  height?: number;
  bg?: string;
  absolute?: boolean;
  zIndex?: number;
};

function WaveDivider({
  d,
  line,
  fill,
  height = 64,
  bg = undefined,
  absolute = false,
  zIndex = 2,
}: WaveDividerProps) {
  const svg = (
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      aria-hidden={absolute ? "true" : undefined}
      style={
        absolute
          ? {
              position: "absolute",
              left: 0,
              bottom: -1,
              width: "100%",
              height,
              display: "block",
              zIndex,
              pointerEvents: "none",
            }
          : { display: "block", width: "100%", height }
      }
    >
      <path d={d} fill={fill} />
      <path
        d={line}
        fill="none"
        stroke="#C2A25E"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        opacity="0.9"
      />
    </svg>
  );

  if (absolute) return svg;

  return (
    <div aria-hidden="true" style={{ background: bg, lineHeight: 0 }}>
      {svg}
    </div>
  );
}

export default WaveDivider;
