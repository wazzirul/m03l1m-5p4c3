import Image, { StaticImageData } from 'next/image';

interface ImageDisplayProps {
  image: string | StaticImageData;
  loadingDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageDisplay({
  image,
  loadingDelay = 500,
  className,
  style,
}: ImageDisplayProps) {
  return (
    <Image
      src={image}
      alt=""
      className={`w-full h-full object-cover absolute z-1 inset-0 ${className}`}
      loading="lazy"
      fill
      style={style}
    />
  );
}
