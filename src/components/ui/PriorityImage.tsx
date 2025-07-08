import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PriorityImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

const PriorityImage = ({
  src,
  webpSrc,
  alt,
  className,
  onLoad,
  onError,
  priority = false,
  sizes,
  srcSet,
}: PriorityImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [imageSource, setImageSource] = useState(webpSrc || src);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL("image/webp").indexOf("webp") > -1;
    };

    const supportsWebP = checkWebPSupport();
    const finalSrc = webpSrc && supportsWebP ? webpSrc : src;
    setImageSource(finalSrc);

    // Preload important images immediately
    if (priority) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = finalSrc;
      if (srcSet) link.setAttribute("imagesrcset", srcSet);
      if (sizes) link.setAttribute("imagesizes", sizes);
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, webpSrc, priority, srcSet, sizes]);

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    // Fallback to original format if WebP fails
    if (webpSrc && imageSource === webpSrc) {
      setImageSource(src);
      return;
    }
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200 text-gray-400 text-xs",
          className
        )}
      >
        Failed to load
      </div>
    );
  }

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={imageSource}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
};

export default PriorityImage;
