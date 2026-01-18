import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false, 
  fallback = '/img/placeholder.png',
  onError: onErrorProp,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleError = (e) => {
    setHasError(true);
    if (onErrorProp) {
      onErrorProp(e);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    // Move the check to a separate effect to avoid set state in render
    const checkImageLoad = () => {
      const img = imgRef.current;
      if (img && img.complete) {
        setIsLoaded(true);
      }
    };

    const timer = setTimeout(checkImageLoad, 0);
    return () => clearTimeout(timer);
  }, []);

  if (hasError && fallback) {
    return (
      <img
        src={fallback}
        alt={alt || 'Image not available'}
        className={`${className} opacity-50`}
        width={width}
        height={height}
        {...props}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-surface animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;