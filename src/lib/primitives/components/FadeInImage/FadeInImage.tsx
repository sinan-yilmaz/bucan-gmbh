"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

type FadeInImageProps = {
  src: StaticImageData;
  alt: string;
  eager?: boolean;
  className?: string;
  style?: CSSProperties;
};

function FadeInImage({
  src,
  alt,
  eager = false,
  className = undefined,
  style = undefined,
}: FadeInImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (!img || img.complete) return;
    setHidden(true);
    const show = () => setHidden(false);
    img.addEventListener("load", show);
    img.addEventListener("error", show);
    return () => {
      img.removeEventListener("load", show);
      img.removeEventListener("error", show);
    };
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src.src}
      width={src.width}
      height={src.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className ? `img-fade ${className}` : "img-fade"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: hidden ? 0 : 1,
        ...style,
      }}
    />
  );
}

export default FadeInImage;
