import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
  timeout?: number; // Add timeout prop
}

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
  onLoad,
  onError,
  timeout = 3000, // Default 3 seconds
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // Set minimum skeleton display time
    const skeletonTimer = setTimeout(() => {
      setShowSkeleton(false);
    }, timeout);

    // Cleanup timer on unmount
    return () => clearTimeout(skeletonTimer);
  }, [timeout]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Show skeleton for minimum timeout duration OR while loading
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
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          shouldShowSkeleton
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithSkeleton;
