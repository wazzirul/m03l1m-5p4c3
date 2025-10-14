interface VideoDisplayProps {
  video: string;
  loadingDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoDisplay({
  video,
  loadingDelay = 500,
  className,
  style,
}: VideoDisplayProps) {
  return (
    <video
      src={video}
      className={`w-full h-full object-cover absolute z-1 inset-0 ${className}`}
      style={style}
      autoPlay
      muted
      loop
    />
  );
}
