import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string; // WebP version of the image
  alt: string;
  className?: string;
  skeletonClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
  timeout?: number;
  priority?: boolean; // For preloading important images
  sizes?: string; // For responsive images
  srcSet?: string; // For different resolutions
}

const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className,
  skeletonClassName,
  onLoad,
  onError,
  timeout = 3000,
  priority = false,
  sizes,
  srcSet,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [imageSource, setImageSource] = useState(webpSrc || src);

  useEffect(() => {
    // Check WebP support and preload if priority
    const checkWebPSupport = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL("image/webp").indexOf("webp") > -1;
    };

    const supportsWebP = checkWebPSupport();
    const finalSrc = webpSrc && supportsWebP ? webpSrc : src;
    setImageSource(finalSrc);

    // Preload important images
    if (priority) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = finalSrc;
      if (srcSet) link.setAttribute("imagesrcset", srcSet);
      if (sizes) link.setAttribute("imagesizes", sizes);
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, webpSrc, priority, srcSet, sizes]);

  useEffect(() => {
    // Set minimum skeleton display time
    const skeletonTimer = setTimeout(() => {
      setShowSkeleton(false);
    }, timeout);

    return () => clearTimeout(skeletonTimer);
  }, [timeout]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    // Fallback to original format if WebP fails
    if (webpSrc && imageSource === webpSrc) {
      setImageSource(src);
      return;
    }
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const shouldShowSkeleton = showSkeleton || isLoading;

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
    <div className="relative">
      {shouldShowSkeleton && (
        <Skeleton
          className={cn(
            "absolute inset-0 z-10 animate-pulse",
            skeletonClassName || className
          )}
        />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={imageSource}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={cn(
            className,
            shouldShowSkeleton
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-500"
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
