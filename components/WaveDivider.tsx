type WaveDividerProps = {
  fill: string;
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({ fill, flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="w-full h-[50px] sm:h-[80px]"
      >
        <path
          d="M0,32 C240,90 480,0 720,24 C960,48 1200,96 1440,40 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
